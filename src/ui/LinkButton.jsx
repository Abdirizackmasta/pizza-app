import { Link, useNavigate } from "react-router-dom"

function LinkButton({children, to}) {
  const navigate = useNavigate();
  const className ='text-sm text-blue-500 hover:text-blue-700';
    if (to==='-1') {
        return <button onClick={() => navigate(-1)}>{children}</button>
    }
    return (
         <Link to={to}
          className={className}>
            {children}
            {/* &larr; Back to menu */}
        </Link>
    )
}

export default LinkButton
