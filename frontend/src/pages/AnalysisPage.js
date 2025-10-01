import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import AppNavbar from "../components/Navbars"
import AppFooter from "../components/Footer"

export default function AnalysisPage(){

    return(
        <>
        <main>
            {/* ----------------------------- Navbar Section --------------------------------- */}

                <AppNavbar />
            {/* ----------------------------- Analysis Section --------------------------------- */}

                <div>
                    <p>Upload image</p>
                </div>

            {/* ---------------------------------- Footer -----------------------------------------*/}
                    
                <AppFooter />
        </main>
        </>
    )
}