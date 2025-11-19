import { z } from 'zod';

export function validate(formData, schema) {
  const data = Object.fromEntries(formData.entries());
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
    data: validatedFields.data,
  };
}
