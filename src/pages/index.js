import React, {useState}  from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/Slider';
import { SliderData } from '../components/Slider/SliderData';

const Home = () => {
	const[isOpen, setIsOpen] = useState(false)

	const toggle = () => {
 	setIsOpen(!isOpen)
	}
return(
<>
	<Sidebar isOpen={isOpen} toggle={toggle} />
	<Navbar toggle={toggle}/>
	<ImageSlider slides={SliderData} />
	<Footer/>
</>
)
}

export default Home;
