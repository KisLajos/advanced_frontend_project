// Contains information about the Gedulgt catering service

import React from 'react'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import "./GedulgtPrivate.css";

export default function GedulgtPrivate() {
  return (
    <div className='gedulgtpriv'>
    <p className='gedulgtpriv-text-white'>GEDULGT PRIVATE</p>
    
    <p>COCKTAIL CATERING AT YOUR PRIVATE EVENT</p>
    
    <Divider/>

    <p className='gedulgtpriv-text-bold'>PRIVATE MENU</p>
    
    <p>American Beauty</p>
    
    <p>Pop Pop Popcorn </p>
    
    <p>Can-Can </p>
    
    <p>Gin & Tonic</p>
    
    <p>White Russian</p>
    
    <p>Whiskey Sour</p>
    
    <p>Paloma</p>
    
    <p>Rum Old Fashioned</p>
    
    <p>White Lady</p>
    
    <p>+ three different alcohol free cocktails </p>
    
    <Divider/>

    <p className='gedulgtpriv-text-bold'>WHAT WE DO</p>
    
    <p>Four hours of open bar - at your private event.</p>
    
    <p>We will bring everything prepared from back home at Gedulgt. </p>
    
    <p>Homemade syrups, extractions, freshly squeezed juices, fermentations, fruits & vegetables, and the liquor. </p>
    
    <p>The bartenders will be at the venue 1 to 2 hours before the open bar begins, to set up our bars, with cocktail glasses, ice cubes, cocktail napkins, bar-equipment, straws and the products. </p>
    
    <p>We look forward to serve Gedulgt cocktails at your event! </p>
    
    <Divider/>

    <p>SEND REQUESTS AND QUESTIONS REGARDING </p>
    
    <p>GEDULGT PRIVATE TO:</p>
    
    <div className='gedulgtpriv-button-container'><a className='gedulgtpriv-button' href='mailto:aarhus@gedulgt.dk'>AARHUS@GEDULGT.DK</a></div>
    
<Divider/>

    <div className='gedulgtpriv-fine-print'>
      <p className='gedulgtpriv-text-white'>THE FINE PRINT:</p>
    
    <p>Cancellation of The Gedulgt cocktail catering, must be done at the latest of 14 days before the scheduled event. </p>
    
    <p>Without any timely cancellation, we reserve the right to send an invoice with 25% of the total amount of the arrangement. </p>
    
    <p>The prices is per person in Danish currency including VAT. </p>
    </div>
    <Footer/>
    </div>
  )
}
