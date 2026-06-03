import type { Request, Response } from "express";

import { procurementService } from "../services/procurementService";

export function getRequests(
  _request: Request,
  response: Response
) {
  response.json({
    data: procurementService.getRequests()
  });
}
