-- Habilitar la extensión uuid-ossp para generar UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de perfiles (PERSONA)
CREATE TABLE public.profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  display_name text,
  names text,
  lastnames text,
  birthday date,
  country text,
  gender text,
  address text,
  city text,
  phone_number text,
  email text,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now()
);

-- Habilitar RLS (Row Level Security) para la tabla profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad para la tabla profiles
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile." ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile." ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Tabla de preferencias
CREATE TABLE public.preferences (
  id uuid REFERENCES public.profiles ON DELETE CASCADE NOT NULL PRIMARY KEY,
  theme text,
  language text,
  enable_notifications boolean DEFAULT true,
  measure_units text,
  updated_at timestamp with time zone DEFAULT now()
);

-- Habilitar RLS (Row Level Security) para la tabla preferences
ALTER TABLE public.preferences ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad para la tabla preferences
CREATE POLICY "Users can view their own preferences." ON public.preferences FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert their own preferences." ON public.preferences FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own preferences." ON public.preferences FOR UPDATE USING (auth.uid() = id);

-- Tabla de contactos de emergencia
CREATE TABLE public.emergency_contacts (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid REFERENCES public.profiles ON DELETE CASCADE NOT NULL,
  full_name text NOT NULL,
  email text,
  phone_number text NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  modified_at timestamp with time zone DEFAULT now()
);

-- Habilitar RLS (Row Level Security) para la tabla emergency_contacts
ALTER TABLE public.emergency_contacts ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad para la tabla emergency_contacts
CREATE POLICY "Users can view their own emergency contacts." ON public.emergency_contacts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own emergency contacts." ON public.emergency_contacts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own emergency contacts." ON public.emergency_contacts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own emergency contacts." ON public.emergency_contacts FOR DELETE USING (auth.uid() = user_id);

-- Función para crear un perfil de usuario automáticamente al registrarse
CREATE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, email)
  VALUES (NEW.id, NEW.email, NEW.email); -- Usar el email como valores iniciales
  
  INSERT INTO public.preferences (id, theme, language, enable_notifications, measure_units)
  VALUES (NEW.id, 'light', 'es', true, 'metric'); -- Valores por defecto para preferencias

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para ejecutar la función handle_new_user después de la inserción en auth.users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
