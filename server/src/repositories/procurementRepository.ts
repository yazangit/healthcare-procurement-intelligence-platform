import { procurementRequests } from "../data/procurementRequests";

export const procurementRepository = {
  findAll() {
    return procurementRequests;
  }
};
