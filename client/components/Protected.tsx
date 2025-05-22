import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode } from "react";
import LoginPage from "./Login";

const Protected = ({ children}: { children: ReactNode}) => {
  const { isAuthenticated, isLoading} = useAuth0()

  if (isLoading) return <div>Loading...</div>

  return isAuthenticated ? <>{children}</> : <LoginPage />
}

export default Protected