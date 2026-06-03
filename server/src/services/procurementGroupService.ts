import { procurementGroupRepository } from "../repositories/procurementGroupRepository";

export const procurementGroupService = {
  getAll() {
    return procurementGroupRepository.findAll();
  },
};
