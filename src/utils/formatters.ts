export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatUnitPrice(value: number): string {
  return new Intl.NumberFormat("en-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: value < 10 ? 2 : 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-DE").format(value);
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-DE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}
