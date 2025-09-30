import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppSkincareBasics from "./components/SkincareBasics"
import AppNavbar from "./components/Navbars"
import AppAIAnalysis from "./components/AppAIAnalysis"
import AppProductFinder from "./components/ProductFinder"
import AppShop from "./components/Shop"
import AppWhyUs from "./components/WhyUs"
import AppFooter from "./components/Footer"
import GoToTop from './components/GoToTop';


function App() {
	
	return (
    
	<>
	<main>
	{/* ----------------------------- Navbar Section --------------------------------- */}

		<AppNavbar />


	{/* ----------------------------- AI Section -------------------------------------- */}
	
		<AppAIAnalysis />


	{/* ----------------------------- Shop Section -------------------------------------- */}
		
		<AppShop />


	{/* ---------------------------- Product Finder Section ----------------------------- */}
		
		<AppProductFinder />


	{/* ----------------------------- Blog Section -------------------------------------- */}
		
		<AppSkincareBasics />


	{/* ----------------------------- Why Us Section --------------------------------------*/}
		
		<AppWhyUs />

	{/* ---------------------------------- Footer -----------------------------------------*/}
		
		<AppFooter />	


		<GoToTop />	

	</main>
	</>
  );
}
 
export default App;
