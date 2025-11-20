import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from 'react-router-dom';


import AppNavbar from "./components/Navbars"
import AppFooter from "./components/Footer"


import HomePage from "./pages/HomePage";
import AnalysisPage from "./pages/AnalysisPage";
import ProductFinderPage from "./pages/ProductFinderPage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import CheckoutPage from "./pages/CheckoutPage";
import UserProfilePage from "./pages/UserProfilePage";


function App() {
	
	return (
		<>
			{/* -------Navbar Section ------- */}
			<AppNavbar />
			
			<main className="main-content">
				{/* ------------ Define Routes -------------- */}
				<Routes>
					{/* ------------ Home Page -------------- */}
					<Route path="/" element={<HomePage />}/>

					{/* -------- Product Finder Page --------- */}
					<Route path="/product-finder" element= {<ProductFinderPage />} />

					{/* -------------- Shop Page -------------*/}
					<Route path="/shop" element= {<ShopPage />} />

					{/* ----------- Analysis Page ------------*/}
					<Route path="/ai-analysis" element= {<AnalysisPage />} />

					{/*--- Shop Page on clicking Shop now button ---*/} 
					<Route path="/shop/:homeCategoryClicked" element={<ShopPage />} />
					
					{/* -------------- Blog Page -------------*/}
					<Route path="/blog" element= {<BlogPage />} />

					{/* -------------- Checkout Page -------------*/}
					<Route path="/checkout" element= {<CheckoutPage />} />
					
					{/* -------------- User Profile Page -------------*/}
					<Route path="/user-profile" element= {<UserProfilePage />} />	
				</Routes>
			</main>	

			{/* ----------- Footer ------------*/}	
			<AppFooter />
		</>	
  );
}
 
export default App;
