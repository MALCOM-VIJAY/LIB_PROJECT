import React,{useState} from "react";
import Preloader from "../Preloader";
import "./Landpage.scss";
import { Link } from "react-router-dom";
import img from '../Assets/img.svg';
const Landpage = () =>{
    const [loaded, setLoaded] = useState(false);
    setTimeout(()=>{
      setLoaded(true);
    },3000);
    return(
        (loaded)?
        <div className="Landpage">

            <div className="img">
                <img src={img} alt="img" />
            </div>
            <div className="content">
                <h1 data-aos="fade-left">Library <span>Managment</span></h1>
                <p data-aos="fade-left">An Automated And Digital Way Of Mantaining Books</p>
                <Link to='/library'>
                    <button>Browse Books</button>
                </Link>
            </div>
        </div>:<Preloader/>
    )
}
export default Landpage