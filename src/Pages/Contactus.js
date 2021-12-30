import React from 'react'
import Contactmap from '../Components/Contactmap/Contactmap'
import Contactmedia from '../Components/Contactmedia/Contactmedia'
import Contactusmainsec from '../Components/Contactusmainsec/Contactusmainsec'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function Contactus() {
    return (
        <div>
            <Header />
            <Contactusmainsec />
            <Contactmedia />
            <Contactmap />
            <Footer/>
        </div>
    )
}

export default Contactus
