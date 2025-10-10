import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import AppNavbar from "../components/Navbars"
import AppFooter from "../components/Footer"

export default function CheckoutPage(){
    return(
        <>
        <main>
            {/* ------- Navbar Section ------- */}
			<AppNavbar />

            {/* ----------- Checkout Section -----------*/}  
            <p> Products with prices and quantity displayed
                Total at bottom </p>
            

            {/* ----------- Footer ------------*/}  
            <AppFooter />
        </main>
        </>
    )

}