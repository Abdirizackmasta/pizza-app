import { Link } from "react-router-dom"
import Order from "../features/order/Order"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username";


function Header() {
    return (
        <header className="flex items-center justify-between bg-yellow-400 uppercase font-semibold px-4 py-3 border-b-2 border-stone-400 sm:px-6" >
           <Link to='/' className="tracking-widest">Fast pizza Company</Link> 
           <SearchOrder />
           <Username />
        </header>
    )
}

export default Header;
