import React from 'react'
import DropDownSelection from '../DropDownSelection/DropDownSelection'
import Header from '../../../components/Header/Header'
import NewHeaderSlider from '../NewHeaderSlider/NewHeaderSlider';
import About from '../About/About';
import SolutionsAndInovations from '../SolutionsAndInovations/SolutionsAndInovations';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import NewFooter from '../../../components/Footer/NewFooter';

function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <DropDownSelection />
      <NewHeaderSlider />
      <About/>
      <SolutionsAndInovations/>
      <Services/>
      <ContactUs/>
      {/* <NewFooter/> */}
    </>
  );
}

export default HomePage