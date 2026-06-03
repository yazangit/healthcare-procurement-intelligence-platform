import { suppliers } from "../data/suppliers";

export const supplierRepository = {
  findAll() {
    return suppliers;
  },

  findByRequestId(requestId: string) {
    return suppliers.filter(
      (supplier) => supplier.requestId === requestId
    );
  },
};
