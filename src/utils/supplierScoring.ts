import type { SupplierOffer } from "../types/procurement";

export function calculateSupplierScore(
  supplier: SupplierOffer
): number {
  const priceWeight = 0.35;
  const reliabilityWeight = 0.3;
  const deliveryWeight = 0.2;
  const availabilityWeight = 0.15;

  const priceScore =
    100 - Math.min(supplier.unitPrice * 10, 100);

  const deliveryScore =
    100 - Math.min(supplier.deliveryDays * 5, 100);

  return Math.round(
    priceScore * priceWeight +
      supplier.reliabilityScore *
        reliabilityWeight +
      deliveryScore * deliveryWeight +
      supplier.availability *
        availabilityWeight
  );
}

export function getRecommendedSupplier(
  suppliers: SupplierOffer[]
): SupplierOffer | null {
  if (!suppliers.length) {
    return null;
  }

  return suppliers.reduce((best, current) =>
    calculateSupplierScore(current) >
    calculateSupplierScore(best)
      ? current
      : best
  );
}
