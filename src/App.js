import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app_itemsContainer'>
      <Item 
				title="Model S" 
				desc="Order Online for Touchless Delivery"
				backgroundImg={ModelS}
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
        twoButtons='true'
			/>
			<Item
				title="Model 3" 
				desc="Order Online for Touchless Delivery"
				backgroundImg={Model3}
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
        twoButtons='true'
        first 
			/>
			<Item
				title="Model X" 
				desc="Order Online for Touchless Delivery"
				backgroundImg={ModelX}
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
        twoButtons='true'
			/>
			<Item 
				title="Model Y" 
				desc="Order Online fro Touchless Delivery"
				backgroundImg={ModelY}
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
        twoButtons='true'
			/>
			<Item
				title="Lowest Cost Solar Panels in America"
				desc="Money-back guarantee"
				backgroundImg={SolarPanels}
				leftBtnText="Order now"
				rightBtnText="Learn more"
        twoButtons='true'
			/>
			<Item
				title="Solar for New Roofs"
				desc="Produce Clean Energy From Your Roof"
				backgroundImg={SolarRoof}
				leftBtnText="Order now"
				rightBtnText="Learn more"
        twoButtons="true"
			/>
      <Item
				title="Accessories"
				desc=""
				backgroundImg={Accessories}
				leftBtnText="Shop now"
				rightBtnText="Learn more"
			/>
      </div>
      {/* items => snapping */}
      {/* <h1>hello world</h1> */}
    </div>
  );
}

export default App;
