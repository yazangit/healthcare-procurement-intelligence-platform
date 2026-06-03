import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { AuthUser } from "./authTypes";
import { UserRole } from "./authTypes";
import { mockUsers } from "./mockUsers";

interface AuthContextValue {
  user: AuthUser;
  users: AuthUser[];
  switchUser: (userId: string) => void;
  hasRole: (roles: UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextValue | null>(
  null
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [currentUserId, setCurrentUserId] = useState(
    mockUsers[0].id
  );

  const user =
    mockUsers.find((item) => item.id === currentUserId) ??
    mockUsers[0];

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      users: mockUsers,
      switchUser: setCurrentUserId,
      hasRole: (roles) => roles.includes(user.role),
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}
