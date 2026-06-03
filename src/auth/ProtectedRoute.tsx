import type { ReactNode } from "react";

import { useAuth } from "./AuthContext";
import type { UserRole } from "./authTypes";

interface ProtectedRouteProps {
  allowedRoles: UserRole[];
  children: ReactNode;
}

export function ProtectedRoute({
  allowedRoles,
  children,
}: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!allowedRoles.includes(user.role)) {
    return (
      <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Access restricted
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-slate-950">
          This module is not available for your role.
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Your current role is <strong>{user.role}</strong>. This simulates
          role-based access control for a healthcare procurement SaaS platform.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
