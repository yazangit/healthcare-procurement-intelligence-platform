
import { Router } from "express";

import { getDashboardMetrics } from "../controllers/dashboardController";

import { getProcurementGroups } from "../controllers/procurementGroupController";

import { getRequests } from "../controllers/procurementController";

import {

  getDirectManufacturerOpportunities,

  getSuppliers,

  getSuppliersByRequestId,

} from "../controllers/supplierController";

export const procurementRouter = Router();

procurementRouter.get("/requests", getRequests);

procurementRouter.get("/dashboard-metrics", getDashboardMetrics);

procurementRouter.get("/suppliers", getSuppliers);

procurementRouter.get(

  "/requests/:requestId/suppliers",

  getSuppliersByRequestId

);

procurementRouter.get(

  "/supplier-intelligence/direct-manufacturer-opportunities",

  getDirectManufacturerOpportunities

);

procurementRouter.get(

  "/procurement-groups",

  getProcurementGroups

);

