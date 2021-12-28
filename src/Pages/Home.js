import React from 'react'
import Footer from '../Components/Footer/Footer.js'
import Header from '../Components/Header/Header.js'
import Mainsection from '../Components/Mainsection/Mainsection.js'
import Ourservices from '../Components/Ourservices/Ourservices.js'

function Home() {
    return (
        <div>
            <Header />
            <Mainsection />
            <Ourservices />
            <Footer />
        </div>
    )
}

export default Home
