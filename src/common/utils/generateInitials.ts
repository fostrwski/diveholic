export default function generateInitials(
  firstName: string,
): string {
  return firstName.slice(0, 2).toUpperCase()
}
