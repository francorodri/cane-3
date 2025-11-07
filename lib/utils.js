/* Utility functions for Cane application */

export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`
}

export function parseDate(dateString) {
  return new Date(dateString)
}

export function validateEmail(email) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
} 
