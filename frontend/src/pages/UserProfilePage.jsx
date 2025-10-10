import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import AppNavbar from "../components/Navbars"
import AppFooter from "../components/Footer"

export default function UserProfilePage(){
    return(
        <>
        <main>
            {/* ------- Navbar Section ------- */}
			<AppNavbar />

            {/* ----------- User Section -----------*/}  
            <p> login/Register
                Name
                Contact
                Email
                Purchase History
                 </p>

            {/* ----------- Footer ------------*/}  
            <AppFooter />
        </main>
        </>
    )

}