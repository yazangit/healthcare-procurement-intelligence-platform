import type { Request, Response } from "express";

import { dashboardService } from "../services/dashboardService";

export function getDashboardMetrics(
  _request: Request,
  response: Response
) {
  response.json({
    data: dashboardService.getMetrics(),
  });
}
