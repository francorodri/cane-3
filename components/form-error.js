export default function FormError({ error }) {
  if (!error) {
    return null;
  }

  let errorMessage = '';
  if (Array.isArray(error)) {
    errorMessage = error[0]; // Display the first error message from the array
  } else if (typeof error === 'object' && error.message) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  }

  return errorMessage && <p className="mt-1 text-red-500">{errorMessage}</p>;
}
