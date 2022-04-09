import { Navigate } from 'react-router-dom'

// checks for the existence of the user prop
const ProtectedRoute = ({ user, children }) => {
  // if user doesn't exist, redirect user to home page
  if (!user) { return <Navigate to="/" /> }
  // otherwise, return children - which represents any component that ProtectedRoute is wrapped around
  return children
}

export default ProtectedRoute