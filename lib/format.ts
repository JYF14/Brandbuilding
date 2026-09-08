export function formatPrice(value: number): string {
  return `€${value.toLocaleString("en-IE", { minimumFractionDigits: 0 })}`;
}
