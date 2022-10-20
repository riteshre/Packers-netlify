import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const about = () => {
  return (
    <div>
      <Navbar/>
      <div className="mt-5 p-4">
      <Container className="about">
        <h2>About Us</h2>
        <p class="Justifier">Packersandmover.com is a trusted portal for booking packers and movers, and relevant services in India. This is the right through which you can find the right service providers for home, office, commercial, local, domestic, and international relocation needs. More importantly, you can get the best deal on booking the right service provider through this portal.
        Whether you need relocation services in Delhi or Chennai, we aim to offer you the best solution at your doorstep That’s why we have made an association with India’s top-notch logistic companies. Our associates include packers & movers, pet relocation experts, truck rental companies, commercial movers, and international moving companies. With the aid of these logistic companies, we are catering to the relocation needs of people from all across the country.</p>
        
        <p class="Justifier">Finding a reliable moving company is much needed for a safe and hassle-free relocation experience. But you may face challenges when it comes to finding the right service. You need plenty of time and research work ahead to ensure your chosen mover is a legitimate service provider. You cannot just anyone and let them handle your possessions.
        Undoubtedly, choosing the right packers and movers takes time, especially you need to get quotes from multiple companies. But now you do not need to worry. We at Packersandmover.com are here to help you. If you are facing challenges or any sort of difficulties, then count on us.</p>

        <p class="Justifier">We won’t disappoint you. We will make your search easier and allow you to choose from our pre-verified packers and movers available in our area. All you need to do is to fill the enquiry form and submit it online. Once we will receive your request, we will present connect you to the best-match nearby movers and packers. This will cut down on research time and save you money as you will compare the costs to hire the best service.</p>

        <img src="http://www.udaanpackersandmovers.com/front/images/movers-and-packers.png" alt="hello" height="40%" width="40%"></img>
      
      </Container>
      </div>
      <Footer/>
    </div>
  )
}

export default about
