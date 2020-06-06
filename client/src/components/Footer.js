import React from "react";
import './css/footer.css';
import rocket from './img/rocket.png';

const Footer =() => {
  return (
    <div>

      <div className="footer-bottom">
    <p>
    <a className="toTop" href="#masthead">
       <img src={rocket} alt="Rocket" />
           </a>
    </p>
     
          <p className="text-center"> {new Date().getFullYear()} Copyright © Gifix </p>
       
      </div>
    </div>
  );
}


export default Footer;