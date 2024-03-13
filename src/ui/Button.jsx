import { Link } from "react-router-dom"
function Button({children, disabled, to, type}) {
   const className = 'bg-yellow-400 py-3 px-4 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring  focus:ring-yellow-300 focus:ring-offset-2 sm:px-6 sm:py-4 disabled:cursor-not-allowed'
    const base = 'bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring  focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';
    const styles = {
        primary: base + ' py-3 px-4 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        secondary:  'text-sm py-2 px-4 md:px-6 md:py-3.5 border-2 border-stone-300 uppercase font-semibold text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring  focus:ring-stone-300 hover:text-stone-800 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed'
    }
    if (to) {
          return <Link className={styles[type]} to={to}>{children}</Link>
          
        }
    return (
        <button disabled={disabled} to={to}  className={styles[type]}>
                {children}
        </button>
    )
}

export default Button
