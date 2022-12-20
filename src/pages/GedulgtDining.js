// Contains information about the Gedulgt dining service

import React, { useEffect, useState } from 'react'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import "./GedulgtDining.css";

export default function GedulgtDining() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className='dining'>
      
    <h1 className='dining-text-main-title'>GEDULGT DINING</h1>

    <p>Minimum 30 persons & maximum 65 persons</p>
    
    <p>(If you are more than 65 persons please reach out to us to explore your options)</p>

    <Divider/>
    
    <div className='dining-table'>
    <div className='dining-left-side'>
    <p className='dining-text-title'>DINNER & COCKTAILS</p>
    
    <p>18.00-23.00</p>
    
    <p>3 COURSE DINNER </p>
    
    <p>& </p>
    
    <p>3 COCKTAIL PAIRINGS</p>
    
    <p>IN COLLABORATION WITH  CHEF CHRISTIAN BØJLUND</p>
    
    <p className='dining-text-bold'>EVENING PROGRAM</p>
    
    <p>WELCOME COCKTAIL</p>
    
    <p>3 COURSE DINNER & 3 COCKTAIL PAIRINGS</p>
    
    <p>+ DRAFT BEER & WINE DURING DINNER</p>
    
    <p>COCKTAILS, DRAFT BEER & WINE AFTER DINNER</p>
    
    <p className="dining-price">995,- pr. person</p>
    </div>
        
    {screenWidth < 580 && <Divider />}

    <div className='dining-right-side'>
    <p className='dining-text-title'>DINNER & COCKTAILS ALL NIGHT</p>
    
    <p>19.00-02.00</p>
    
    <p>3 COURSE DINNER </p>
    
    <p>& </p>
    
    <p>3 COCKTAIL PAIRINGS </p>
    
    <p>IN COLLABORATION WITH  CHEF CHRISTIAN BØJLUND</p>
    
    <p className='dining-text-bold'>EVENING PROGRAM</p>
    
    <p>WELCOME COCKTAIL</p>
    
    <p>3 COURSE DINNER & 3 COCKTAIL PAIRING</p>
    
    <p>+ DRAFT BEER & WINE DURING DINNER</p>
    
    <p>COCKTAILS, DRAFT BEER & WINE AFTER DINNER</p>
    
    <p className="dining-price">1195.- pr. person</p>
    </div>
    </div>
    
    <Divider/>

    <p className='dining-text-title'>BOOKING</p>
    
    <p>EMAIL: </p>
    
    <a href='mailto:aarhus@gedulgt.dk'>AARHUS@GEDULGT.DK</a>
    
    <Divider/>

    <div className='dining-fine-print'>
    <p className='dining-text-white'>THE FINE PRINT:</p>
    
    <p>Cancellation of Gedulgt Dining, must be done at the latest of 14 days before the scheduled event. </p>
    
    <p>Without any timely cancellation, we reserve the right to send an invoice with 25% of the total amount of the arrangement. </p>
    
    <p>The prices is per person in Danish currency including vat. </p>
    </div>

    <Footer/>
    </div>
  )
}
