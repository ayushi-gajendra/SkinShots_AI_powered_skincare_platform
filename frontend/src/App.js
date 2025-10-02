import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppSkincareBasics from "./components/SkincareBasics"
import AppNavbar from "./components/Navbars"
import AppAIAnalysis from "./components/AppAIAnalysis"
import AppProductFinder from "./components/AppProductFinder"
import AppShop from "./components/Shop"
import AppWhyUs from "./components/WhyUs"
import AppFooter from "./components/Footer"
import GoToTop from './components/GoToTop';

import AnalysisPage from "./pages/AnalysisPage"
import ProductFinderPage from "./pages/ProductFinderPage"
import ShopPage from "./pages/ShopPage"
import BlogPage from "./pages/BlogPage"
import CheckoutPage from "./pages/CheckoutPage"
import UserProfilePage from "./pages/UserProfilePage"


function App() {
	
	return (
		<Router>
			<main>
				{/* Define Routes */}
				<Routes>

					{/* ------------ Home Page -------------- */}
					<Route path="/" element={
						<>
				
							{/* -------Navbar Section ------- */}
								<AppNavbar />

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

							{/* ----------- Footer ------------*/}	
								<AppFooter />	

								<GoToTop />	
						</>
					}/>

					{/* ----------- Analysis Page ------------*/}
					<Route path="/ai-analysis" element= {<AnalysisPage/>} />

					{/* -------- Product Finder Page --------- */}
					<Route path="/product-finder" element= {<ProductFinderPage/>} />

					{/* -------------- Shop Page -------------*/}
					<Route path="/shop" element= {<ShopPage/>} />
					
					{/* -------------- Blog Page -------------*/}
					<Route path="/blog" element= {<BlogPage/>} />

					{/* -------------- Checkout Page -------------*/}
					<Route path="/checkout" element= {<CheckoutPage/>} />
					
					{/* -------------- User Profile Page -------------*/}
					<Route path="/user-profile" element= {<UserProfilePage/>} />	
				</Routes>
			</main>			
		</Router>
  );
}
 
export default App;
