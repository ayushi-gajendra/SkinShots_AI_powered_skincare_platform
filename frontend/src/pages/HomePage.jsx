import AppAIAnalysis from "../components/AppAIAnalysis"
import AppProductFinder from "../components/AppProductFinder"
import AppShop from "../components/AppShop"
import AppWhyUs from "../components/WhyUs"
import AppSkincareBasics from "../components/SkincareBasics"
import GoToTop from '../components/GoToTop';


export default function HomePage(){
    return(
        <>
            {/* ------- AI Section ---------- */}
                <AppAIAnalysis />

            {/* ------- Shop Section -------- */}	
                <AppShop />

            {/* --- Product Finder Section --- */}						
                <AppProductFinder />

            {/* ------- Blog Section -------- */}						
                <AppSkincareBasics />

            {/* -------- Why Us Section -------*/}						
                <AppWhyUs />


                <GoToTop />	
        </>
    )
}

