import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import AppNavbar from "../components/Navbars"
import AppFooter from "../components/Footer"

export default function ProductFinderPage(){
    return(
        <>
        <main>
            {/* ------- Navbar Section ------- */}
			<AppNavbar />

            {/* ----------- Product Finder Section -----------*/}  
            <p> Questionaare will start </p>

            {/* ----------- Footer ------------*/}  
            <AppFooter />
        </main>
        </>
    )

}