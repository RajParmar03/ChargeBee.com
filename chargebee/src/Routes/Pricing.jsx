import { FooterMenu } from "../Components/Footer"
import Navbar from "../Components/Navbar"
import PricingProduct from "../Components/PricingProduct"

function Pricing(){
    return (
        <div>
        <div style={{'backgroundColor': "#4300A3", 'color':'white'}}>
            <Navbar invert={100} />
            <PricingProduct />
            <FooterMenu />
        </div>
        </div>
    )
}

export default Pricing