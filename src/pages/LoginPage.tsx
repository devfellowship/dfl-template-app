import { useNavigate } from "react-router-dom";
import { LoginPage as DflLoginPage } from "@devfellowship/components";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <DflLoginPage
      redirectUrl="/"
      onSuccess={(url) => navigate(url)}
      onError={(err) => console.error("Login error:", err.message)}
    />
  );
}
