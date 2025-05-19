import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode } from "react";

const Protected = ({ children}: { children: ReactNode}) => {
  const { isAuthenticated, isLoading} = useAuth0()

  if (isLoading) return <div>Loading...</div>
  if (!isAuthenticated) return <div>You must be logged in to view this content.</div>

  return <>{children}</>
}

export default Protected