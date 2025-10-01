import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import AppNavbar from "../components/Navbars"
import AppFooter from "../components/Footer"

export default function BlogPage(){

    return(
        <>
        <main>
            {/* ------- Navbar Section -------- */}
				<AppNavbar />

            {/* -------- Blog Section --------- */}

                <div>
                    <p>Blogs</p>
                </div>

            {/* ------------ Footer ------------*/}  
                <AppFooter />
        </main>
        </>
    )
}