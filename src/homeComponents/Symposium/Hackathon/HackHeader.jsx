import React from 'react'
import Hero from "./Hero"
import About from './About'
import Schedule from './Schedule'
import Theme from './Theme'
import Phase from './Phase'
import Foot from './Foot'

const HackHeader = () => {
    return (
        <div>
            <Hero />
            <About />
            <Schedule />
            <Theme />
            <Phase />
            <Foot />
        </div>
    )
}

export default HackHeader