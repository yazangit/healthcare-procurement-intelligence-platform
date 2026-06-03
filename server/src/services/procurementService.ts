import { procurementRepository } from "../repositories/procurementRepository";

export const procurementService = {
  getRequests() {
    return procurementRepository.findAll();
  }
};
