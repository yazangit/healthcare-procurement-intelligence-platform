import { useAuth } from "../../auth/AuthContext";

export function UserSwitcher() {
  const { user, users, switchUser } = useAuth();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        Active role
      </p>

      <select
        value={user.id}
        onChange={(event) => switchUser(event.target.value)}
        className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
      >
        {users.map((item) => (
          <option key={item.id} value={item.id}>
            {item.role}
          </option>
        ))}
      </select>

      <div className="mt-3 rounded-2xl bg-teal-50 p-3">
        <p className="text-sm font-semibold text-slate-950">
          {user.name}
        </p>
        <p className="mt-1 text-xs text-slate-600">
          {user.organization}
        </p>
      </div>
    </div>
  );
}
