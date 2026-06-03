import type { ProcurementRequest } from "../types/procurement";

export function hasDataQualityIssues(
  request: ProcurementRequest
): boolean {
  return request.dataQualityIssues.length > 0;
}

export function getHighSeverityIssueCount(
  requests: ProcurementRequest[]
): number {
  return requests.reduce((count, request) => {
    return (
      count +
      request.dataQualityIssues.filter(
        (issue) => issue.severity === "High"
      ).length
    );
  }, 0);
}
