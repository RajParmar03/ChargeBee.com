import { Alertbar } from "../Components/Alert";
import { FooterMenu } from "../Components/Footer";

import Navbar from "../Components/Navbar";
import TopSlider from "../Components/TopSlider";
import { Trusted } from "../Components/TrustedBudge";

function HomePage(){

    return (
        <div>
            <Alertbar />
            <Navbar invert={0} />
            <TopSlider />
            <Trusted />
            <FooterMenu />
        </div>
    )
}

export default HomePage