import React from 'react'
import { Button } from 'react-bootstrap'
import './Information.scss'
import Informationimg from '../../Assets/Images/Information.png'

function Information() {
    return (
        <div className='Main-Information'>
            <div className='About-Information'>
                <div className='All-Information'>
                    <h1>Enter the Information About On Demand</h1>
                    <p>Designed with our members’ lifestyle in mind, we have made it our business to keep
                        fitness both convenient and accessible in the<br/>
                            heart of the Central Business District,</p>
                    <Button >Read More</Button>     
                </div>
            </div>
            <div className='Information-image'>
                    <img src={Informationimg} alt='Informationimg'/> 
            </div>
        </div>
    )
}

export default Information
