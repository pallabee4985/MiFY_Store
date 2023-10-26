import React from 'react'
import Feture from './Feture/Feture'
import Hero from './Hero/Hero'
import Trusted from './Trusted/Trusted'
import Service from './Service/Service'
import Wrapper from '../CommonComponent/Wrapper'
import { ContextData } from '../Context/ContextData'

function Home() {
  return (
    <>
    <ContextData>
        <Wrapper>
            <Hero/>  
            <Feture/>
            <Service/>
            <Trusted/>
      </Wrapper>
    </ContextData>
      
    </>
  )
}

export default Home
