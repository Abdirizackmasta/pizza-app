import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import {Outlet, useNavigation} from 'react-router-dom'
import Loader from "./Loader";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    console.log(navigation)
    return (
        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader />}
            <Header />
            <div className="overflow-scroll">
                <main className="max-w-3xl">
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    )
}

export default AppLayout
