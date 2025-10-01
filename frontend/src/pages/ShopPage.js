import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import AppNavbar from "../components/Navbars"
import AppFooter from "../components/Footer"

export default function ShopPage(){

    return(
        <>
        <main>
            {/* ------- Navbar Section -------- */}
				<AppNavbar />

            {/* -------- Shop Section --------- */}

                <div>
                    <p>Shopping items</p>
                </div>

            {/* ----------- Footer -----------*/}  
                <AppFooter />
        </main>
        </>
    )
}