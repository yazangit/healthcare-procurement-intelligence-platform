import { SupplierType } from "../../../src/types/procurement";
import { supplierRepository } from "../repositories/supplierRepository";

export const supplierService = {
  getAll() {
    return supplierRepository.findAll();
  },

  getByRequestId(requestId: string) {
    return supplierRepository.findByRequestId(requestId);
  },

  getDirectManufacturerOpportunities() {
    const suppliers = supplierRepository.findAll();

    const requestIds = [
      ...new Set(suppliers.map((supplier) => supplier.requestId)),
    ];

    return requestIds
      .map((requestId) => {
        const offers = suppliers.filter(
          (supplier) => supplier.requestId === requestId
        );

        const manufacturer = offers.find(
          (supplier) =>
            supplier.supplierType === SupplierType.Manufacturer
        );

        if (!manufacturer) {
          return null;
        }

        const nonManufacturers = offers.filter(
          (supplier) =>
            supplier.supplierType !== SupplierType.Manufacturer
        );

        const cheapestAlternative = nonManufacturers.reduce(
          (best, current) =>
            current.totalPrice < best.totalPrice ? current : best
        );

        const savings =
          cheapestAlternative.totalPrice - manufacturer.totalPrice;

        return {
          requestId,
          manufacturerName: manufacturer.supplierName,
          manufacturerTotalPrice: manufacturer.totalPrice,
          cheapestAlternativeName: cheapestAlternative.supplierName,
          cheapestAlternativeTotalPrice:
            cheapestAlternative.totalPrice,
          estimatedSavings: savings,
          savingsPercentage: Math.round(
            (savings / cheapestAlternative.totalPrice) * 100
          ),
        };
      })
      .filter(Boolean);
  },
};
