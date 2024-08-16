import { Fragment } from "react"
import { Link } from "react-router-dom";
import './Nav.css'

const Navnew =()=>{
    return(
        <Fragment>
                <nav>
                    <img src="./icon.png"></img>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <button>Get In Touch</button>
                </nav>
        </Fragment>
    )
}
export default Navnew;