import { Link, BrowserRouter as Router } from "react-router-dom";
import {ArrowRightIcon } from '@primer/octicons-react'
import "../assets/styles/Midbody.css";

const Midbody = () => {
    return(
        <div className="py-32">
            <h1 className="text-white font-serif font-medium mx-24 text-4xl sm:align-text-top "> Modern interior </h1>
            <p className=" text-white font-sans font-normal mx-24 py-8 text-2xl  sm:align-middle">
            A full-Service residential & <br/>
            commercial interior design and <br/>
            staging company offering <br/>
            professional organizing & <br/>
            eco-services.
            </p>
            <Router><Link to='/' className="text-white font-serif font-bold mx-24 py-8 text-base sm:align-middle "> Read More <ArrowRightIcon className="sm:align-middle"/></Link></Router>
        </div>
        
    
    )
}
export default Midbody;