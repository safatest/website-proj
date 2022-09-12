import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import Accessories from './assets/Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpg'
import Model3 from './assets/Desktop-Model3.jpg'
import ModelY from './assets/Desktop-ModelY.jpg'
import ModelX from './assets/Desktop-ModelX.jpg'
import SolarPanels from './assets/SolarPanels.jpg'
import SolarRoof from './assets/Desktop-SolarRoof.webp'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app_itemsContainer'>
	  	<Item
			title="Model 3" 
			desc="Order Online for"
			underlined="Touchless Delivery"
			backgroundImg={Model3}
			leftBtnText="Custom Order"
			rightBtnText="Existing Inventory"
			rightBtnLink='/'
			leftBtnLink='/'
        	twoButtons='true'
    		first 
		/>
		<Item 
				title="Model Y" 
				desc="Order Online for"
				underlined="Touchless Delivery"
				backgroundImg={ModelY}
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
				rightBtnLink='/'
			leftBtnLink='/'
            twoButtons='true'
			/>
      <Item 
				title="Model S" 
				desc="Order Online for"
			underlined="Touchless Delivery"
				backgroundImg={ModelS}
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
				rightBtnLink='/'
			leftBtnLink='/'
        		twoButtons='true'
			/>
			<Item
				title="Model X" 
				desc="Order Online for"
			underlined="Touchless Delivery"
				backgroundImg={ModelX}
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
				rightBtnLink='/'
			leftBtnLink='/'
        twoButtons='true'
			/>
			<Item
				title="Solar Panels"
				desc="Lowest Cost Solar Panels in America"
				backgroundImg={SolarPanels}
				leftBtnText="Order now"
				rightBtnText="Learn more"
				rightBtnLink='/'
			leftBtnLink='/'
        twoButtons='true'
			/>
			<Item
				title="Solar Roof"
				desc="Produce Clean Energy From Your Roof"
				backgroundImg={SolarRoof}
				leftBtnText="Order now"
				rightBtnText="Learn more"
				rightBtnLink='/'
			leftBtnLink='/'
        twoButtons="true"
			/>
      <Item
				title="Accessories"
				desc=""
				backgroundImg={Accessories}
				leftBtnText="Shop now"
			/>
      </div>
      {/* items => snapping */}
      {/* <h1>hello world</h1> */}
    </div>
  );
}

export default App;
