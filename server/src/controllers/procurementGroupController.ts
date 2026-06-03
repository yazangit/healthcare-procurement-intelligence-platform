import type { Request, Response } from "express";

import { procurementGroupService } from "../services/procurementGroupService";

export function getProcurementGroups(
  _request: Request,
  response: Response
) {
  response.json({
    data: procurementGroupService.getAll(),
  });
}
