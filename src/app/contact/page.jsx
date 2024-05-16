'use client'

import React from 'react'
import "./Contact.scss"
import { Vidaloka } from 'next/font/google'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const vidaloka = Vidaloka({
  weight: '400',
  subsets: ['latin'],
})


function Contact() {

  
  return (
    <section className={vidaloka.className} id='Contact' >
      <div className='contact-text'> 
      <h2> <FaPhoneAlt /> +971 504 036 780</h2>
      <h2> <FaPhoneAlt /> +971 505 640 674</h2>
      <h2> <FaPhoneAlt /> +971 501 021 091</h2>
      <h2> <MdEmail /> info@eliteae.net</h2>
       </div>
    </section>
  )
}

export default Contact
