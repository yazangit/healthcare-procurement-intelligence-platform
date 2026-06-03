import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./auth/ProtectedRoute";
import { UserRole } from "./auth/authTypes";
import { AppShell } from "./components/layout/AppShell";
import { DashboardPage } from "./pages/DashboardPage";
import { DataHarmonizationPage } from "./pages/DataHarmonizationPage";
import { ProcurementAssistantPage } from "./pages/ProcurementAssistantPage";
import { RequestDetailPage } from "./pages/RequestDetailPage";
import { RequestsPage } from "./pages/RequestsPage";
import { SupplierIntelligencePage } from "./pages/SupplierIntelligencePage";
import { VirtualGroupsPage } from "./pages/VirtualGroupsPage";
import { WorkflowPage } from "./pages/WorkflowPage";

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<DashboardPage />} />

          <Route path="/requests" element={<RequestsPage />} />

          <Route
            path="/requests/:requestId"
            element={<RequestDetailPage />}
          />

          <Route
            path="/supplier-intelligence"
            element={
              <ProtectedRoute
                allowedRoles={[
                  UserRole.Admin,
                  UserRole.ProcurementManager,
                  UserRole.SupplierManager,
                ]}
              >
                <SupplierIntelligencePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/virtual-groups"
            element={
              <ProtectedRoute
                allowedRoles={[
                  UserRole.Admin,
                  UserRole.ProcurementManager,
                ]}
              >
                <VirtualGroupsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/data-quality"
            element={
              <ProtectedRoute
                allowedRoles={[
                  UserRole.Admin,
                  UserRole.ProcurementManager,
                  UserRole.HospitalUser,
                ]}
              >
                <DataHarmonizationPage />
              </ProtectedRoute>
            }
          />

          <Route path="/assistant" element={<ProcurementAssistantPage />} />

          <Route path="/workflow" element={<WorkflowPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
