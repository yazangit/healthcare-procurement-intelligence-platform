import { procurementGroups } from "../data/procurementGroups";

export const procurementGroupRepository = {
  findAll() {
    return procurementGroups;
  },
};
