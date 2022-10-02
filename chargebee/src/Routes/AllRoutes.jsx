import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"
import Pricing from "./Pricing"
import SignUp from "./SignUp"


 
 function AllRoutes(){
    
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        
        </div>
    )
 }

 export default AllRoutes