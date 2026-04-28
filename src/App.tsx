import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@devfellowship/components";
import { supabase } from "./lib/supabase";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { session, isLoading } = useAuth();
  if (isLoading) return null;
  return session ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider supabase={supabase}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
