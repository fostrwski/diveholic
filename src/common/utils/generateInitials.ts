export default function generateInitials(
  firstName: string,
  lastName: string
): string {
  return firstName[0].toUpperCase() + lastName[0].toUpperCase();
}
