import { NavLink } from "react-router-dom";

import { Icon, type IconName } from "../common/Icon";
import { UserSwitcher } from "../auth/UserSwitcher";

const navigationItems: {
  label: string;
  icon: IconName;
  path: string;
}[] = [
  { label: "Dashboard", icon: "dashboard", path: "/" },
  { label: "Requests", icon: "requests", path: "/requests" },
  { label: "Supplier Intelligence", icon: "supplier", path: "/supplier-intelligence" },
  { label: "Virtual Groups", icon: "groups", path: "/virtual-groups" },
  { label: "Data Quality", icon: "data", path: "/data-quality" },
  { label: "AI Assistant", icon: "assistant", path: "/assistant" },
  { label: "Workflow", icon: "workflow", path: "/workflow" },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-72 flex-col border-r border-slate-200/80 bg-white/90 px-5 py-6 shadow-sm backdrop-blur">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-sm font-bold text-white shadow-lg shadow-teal-700/20">
            S
          </div>

          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-950">
              SANOVIO Demo
            </h1>
            <p className="text-xs font-medium text-teal-700">
              Procurement Intelligence
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-sky-50 p-4">
          <p className="text-sm font-semibold text-slate-950">
            From data to delivery
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            AI-supported sourcing, demand bundling, and direct manufacturer access.
          </p>
        </div>
      </div>

      <div className="mt-6">

        <UserSwitcher />

      </div>

      <nav className="mt-7 space-y-1.5">
        {navigationItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              [
                "group flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-left text-sm font-semibold transition",
                isActive
                  ? "bg-teal-700 text-white shadow-md shadow-teal-700/15"
                  : "text-slate-600 hover:bg-teal-50 hover:text-teal-800",
              ].join(" ")
            }
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15">
              <Icon name={item.icon} className="h-4.5 w-4.5" />
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-3xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-950">
          Portfolio Angle
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-600">
          Built for a healthcare AI startup interview: React, TypeScript,
          procurement logic, and product thinking.
        </p>
      </div>
    </aside>
  );
}
