// Contains info about the cocktail workshops

import React from 'react'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import "./CocktailWorkshops.css";

export default function CocktailWorkshops() {
  return (
    <div className='workshop'>
    <p className='workshop-text-title'>COCKTAIL WORKSHOP</p>
    
     <p className='workshop-text-bold'>INCLUDING:</p> 
    
    <p>1 WELCOME COCKTAIL</p>
    
    <p>2 TAUGHT COCKTAILS BEHIND THE BAR</p>
    
    <p>IN TOTAL OF 3 COCKTAILS</p>
    
    <p>PRICE 345,- PR PERSON</p>
    
    <p className='workshop-cocktails-note'>WE HAVE A SELECTION OF 6 DIFFERENT COCKTAILS YOU CAN LEARN, WHICH IS A MIX OF GEDULGT SIGNATURE COCKTAILS AND CLASSIC COCKTAILS</p>
    
    <Divider/>

    
    <p className='workshop-text-bold'>CAN BE ARRANGED:</p>
    
    <p>THURSDAY: START BETWEEN 18:00 - 18:30</p>
    
    <p>FRIDAY & SATURDAY:  START BETWEEN 16.00 - 18.00</p>
    
    <p className='workshop-cocktails-arrangement-note'>(If you are interested in having a workshop on another week day, please reach out to us to explore your options) </p>
    
    <Divider/>
    
     <p className='workshop-text-bold'>BOOKING:</p>
    
    <p>MINIMUM 6 PERSONS THURSDAY</p>
    
    <p>MINIMUM 8 PERSONS FRIDAY & SATURDAY</p>
    
    <p>RESERVATIONS CAN BE MADE THROUGH OUR <div className='workshop-button-container'><a className="workshop-button"href="https://gedulgt.superbexperience.com">BOOKING SYSTEM</a></div></p>
    
    <p>IF YOU ARE LESS THAN 6 PERSONS YOU CAN BOOK A SPOT FOR OUR PUBLIC COCKTAIL WORKSHOPS THROUGH <div className='workshop-button-container'><a className='workshop-button' href='https://duglemmerdetaldrig.dk/oplev/cocktailkursus-gedulgt'>TRUESTORY</a></div></p>
    
    <Divider/>

    <p className='workshop-text-title'>COCKTAIL WORKSHOP & SNACKS</p>
    
    <p className='workshop-text-bold'>INCLUDING: </p>
    
    <p>1 WELCOME COCKTAIL</p>
    
    <p>2 TAUGHT COCKTAILS BEHIND THE BAR</p>
    
    <p>IN TOTAL OF 3 COCKTAILS</p>
    
    <p>GASTRO CHIPS & GASTRO CRACKLINGS W. HERBAL MAYO</p>
    
    <p>PRICE 395,- PR PERSON</p>
    
    <p>WE HAVE A SELECTION OF 6 DIFFERENT COCKTAILS YOU CAN LEARN, WHICH IS A MIX OF GEDULGT SIGNATUR COCKTAILS AND CLASSIC COCKTAILS</p>
    
    <Divider/>
    
    <p className='workshop-text-bold'>CAN ONLY BE ARRANGED:</p>
    
    <p>THURSDAY: START BETWEEN 18:00 - 18:30</p>
    
    <p>FRIDAY & SATURDAY:  START BETWEEN 16.00 - 18.00</p>
    
    <p className='workshop-cocktails-and-snacks-note'>(If you are interested in having a workshop on another week day, please reach out to us to explore your options) </p>
    
    <Divider/>
    
    <p className='workshop-text-bold'>BOOKING</p>
    
    <p>MINIMUM 6 PERSONS THURSDAY</p>
    
    <p>MINIMUM 8 PERSONS FRIDAY & SATURDAY</p>
    
    <p>RESERVATIONS CAN BE MADE THROUGH OUR <div className='workshop-button-container'><a className="workshop-button" href="https://gedulgt.superbexperince.com">BOOKING SYSTEM</a></div></p>
    
    <p>IF YOU HAVE ANY FURTHER QUESTIONS PLEASE SEND AN E-MAIL TO <div className='workshop-button-container'><a className="workshop-button" href='mailto:aarhus@gedulgt.dk'>AARHUS@GEDULGT.DK</a></div></p>
    
    <Divider/>

    <div className='workshops-fine-print'>
    <p className='workshop-text-white'>THE FINE PRINT:</p>
    
    <p>Cancellation of The Gedulgt Cocktail Workshops, must be done at the latest of <span className='workshop-text-bold'>48 hours</span> before the scheduled event. </p>
    
    <p>Without any timely cancellation, we reserve the right to send an invoice with 25% of the total amount of the arrangement. </p>
    
    <p>The prices is per person in Danish currency including VAT. </p>
    </div>
    <Footer/>
    </div>
  )
}
