import logo from './logo.svg';
import './App.css';
import Main from './componenet/main';
import Navbar from './componenet/Navbar';
// import View from './componenet/View';
import Data from './componenet/data';
import Offer from './componenet/Offer';
import New from './componenet/New';
import Card from './componenet/card';
import Get from './componenet/Get';
import Footer from './componenet/Footer';
import Login from './componenet/Login';
import Women from './componenet/Women';
import WomenData from './componenet/womendata';
import WomensData from './componenet/WomensData';
import Signup from './componenet/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componenet/Home';
import Men from './componenet/Men';
import Kids from './componenet/Kids';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
 
       {/* <Navbar/> */}
    <Main/>
 
    {/* <div className='grid ml-3 mr-3 mt-10 gap-9'>{
Data.map((Card) =>
      <View 
      imageUrl = {Card.imageUrl}
      description = {Card.description}
      price = {Card.price}
     
      />
       )
}

</div> */}
<Offer/>
<h3 className='text-center text-2xl underline font-bold mt-7'>NEW COLLECTION POSTS</h3>
<div className='grid ml-3 mr-3 mt-10 gap-9'>{
Card.map((Card1) =>
      <New
      imageUrl = {Card1.imageUrl}
      description = {Card1.description}
      price = {Card1.price}
     
      />
       )
}

</div>
 <Get/>
 {/* <Footer/> */}



<div>
{/* <Women/> */}
{/* <div className='grid ml-3 mr-3 mt-10 gap-9'>{
WomenData.map((WomenCard) =>
      <WomensData
      imageUrl = {WomenCard.imageUrl}
      description = {WomenCard.description}
      price = {WomenCard.price}
     
      />
       )
}

</div> */}
<div style={{ display: 'flex', justifyContent: 'center', marginTop: '45px'  }}>
    {/* <button className='bg-slate-200 text-black w-28 p-2 rounded-full font-bold mb-10'>Explore</button> */}
  </div>
<Footer/>
</div>
{/* <Signup/> */}
</BrowserRouter>

    </div>
  
  );
}

export default App;

