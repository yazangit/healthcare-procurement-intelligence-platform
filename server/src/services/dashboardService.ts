import { dashboardRepository } from "../repositories/dashboardRepository";

export const dashboardService = {
  getMetrics() {
    return dashboardRepository.getMetrics();
  },
};
