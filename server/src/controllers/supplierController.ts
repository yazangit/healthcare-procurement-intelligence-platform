import type { Request, Response } from "express";

import { supplierService } from "../services/supplierService";

export function getSuppliers(
  _request: Request,
  response: Response
) {
  response.json({
    data: supplierService.getAll(),
  });
}

export function getSuppliersByRequestId(
  request: Request,
  response: Response
) {
  response.json({
    data: supplierService.getByRequestId(
      request.params.requestId
    ),
  });
}

export function getDirectManufacturerOpportunities(
  _request: Request,
  response: Response
) {
  response.json({
    data: supplierService.getDirectManufacturerOpportunities(),
  });
}
