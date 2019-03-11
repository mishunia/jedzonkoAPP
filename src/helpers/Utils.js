export default function normalizeText(text) {
  return text.trim().toLowerCase()
}

export function formatPrice(cents) {
  return (cents / 100).toLocaleString('pl-PL', {
    style: 'currency',
    currency: 'PLN'
  })
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}
