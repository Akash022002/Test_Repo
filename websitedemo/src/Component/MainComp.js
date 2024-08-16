import { Fragment } from "react"
import './MainComp.css'

const MainComp =()=>{
    return(
        <Fragment>
                <div className="main">
                    <div className="div1">
                            <p className="p1">We Offer Modern Solution for growing your Business</p>
                            <p className="p2">We are team of talented designer making websites for your Business</p>
                            <button className="btn">We Offer</button>
                    </div>
                    <div>
                        <img className="img2" src="./hero.png"></img>
                    </div>
                </div>
        </Fragment>
    )
}
export default MainComp;