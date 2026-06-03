import type { SupplierOffer } from "../../types/procurement";
import { SupplierType } from "../../types/procurement";
import { SupplierCard } from "./SupplierCard";

interface SupplierComparisonProps {
  suppliers: SupplierOffer[];
}

export function SupplierComparison({
  suppliers,
}: SupplierComparisonProps) {
  const manufacturerOffer = suppliers.find(
    (supplier) => supplier.supplierType === SupplierType.Manufacturer
  );

  const nonManufacturerOffers = suppliers.filter(
    (supplier) => supplier.supplierType !== SupplierType.Manufacturer
  );

  const isCheapestManufacturer =
    Boolean(manufacturerOffer) &&
    nonManufacturerOffers.every(
      (supplier) =>
        manufacturerOffer!.unitPrice < supplier.unitPrice
    );

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-950">
          Supplier matching
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          Compare manufacturer, distributor, and wholesaler offers.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {suppliers.map((supplier) => (
          <SupplierCard
            key={supplier.id}
            supplier={supplier}
            isCheapestManufacturer={isCheapestManufacturer}
          />
        ))}
      </div>
    </section>
  );
}
