import React from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';

const Home = () => {
  return <div>
    <Header/>
    <Section
      show
      title = 'Model S'
      description = "Order Online for Touchless Delivery"
      image = "model-s.jpg"
      buttonLeft = 'custom order'
      buttonRight= 'existing inventory'
    />
    <Section
      title = 'Model 3'
      description = "Order Online for Touchless Delivery"
      image = "model-3.jpg"
      buttonLeft = 'custom order'
      buttonRight= 'existing inventory'
    />
    <Section
      title = 'Model X'
      description = "Order Online for Touchless Delivery"
      image = "model-x.jpg"
      buttonLeft = 'custom order'
      buttonRight= 'existing inventory'
    />
    <Section
      title = 'Model Y'
      description = "Order Online for Touchless Delivery"
      image = "model-y.jpg"
      buttonLeft = 'custom order'
      buttonRight= 'existing inventory'
    />
    <Section
      title = 'Solar Roof'
      description = "Lowest Cost Solar Panels in America"
      image = "solar-roof.jpg"
      buttonLeft = 'order now'
      buttonRight= 'learn more'
    />
     <Section
      title = 'Solar Panels'
      description = "Produce Clean Energy From Your Roof"
      image = "solar-panel.jpg"
      buttonLeft = 'order now'
      buttonRight= 'learn more'
    />
     <Section
      title = 'Accessories'
      description = ""
      image = "accessories.jpg"
      buttonLeft = 'shop more'
      buttonRight= ''
      reveal
    />
    
  </div>;
};

export default Home;
