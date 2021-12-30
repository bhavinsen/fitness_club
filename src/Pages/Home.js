import React from 'react'
import Chooseus from '../Components/Chooseus/Chooseus.js'
import Footer from '../Components/Footer/Footer.js'
import Header from '../Components/Header/Header.js'
import Mainsection from '../Components/Mainsection/Mainsection.js'
import Ourevent from '../Components/Ourevent/Ourevent.js'
import Ourmission from '../Components/Ourmission/Ourmission.js'
import Ourservices from '../Components/Ourservices/Ourservices.js'
import Testimonial from '../Components/Testimonial/Testimonial.js'
import Information from '../Components/Information/Information.js'
import Yogapicture from '../Components/Yogapicture/Yogapicture.js'
import Ourteam from '../Components/Ourteam/Ourteam.js'
import ContactUs from '../Components/ContactUs/ContactUs.js'

function Home() {
    return (
        <div>
            <Header />
            <Mainsection />
            <Ourservices />
            <Chooseus />
            <Testimonial />
            <Information />
            <Ourevent />
            <Ourmission />
            <Yogapicture />
            <Ourteam />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home
