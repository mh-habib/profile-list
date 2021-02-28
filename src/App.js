import './App.css';
import personalData from './data/data.json'
import { useEffect, useState } from 'react';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';


function App() {
  const [profiles, setProfiles] = useState([]);
  const [cart, setCart] = useState([]);

  const handelSelectBtn = (profiles) => {
    const newCart = [...cart, profiles];
    setCart(newCart);
  }

  useEffect(() => {
    setProfiles(personalData);
    // console.log(personalData);
  },[])
  return (
    <div className="main-div">

      <h3 style={{textAlign: 'center'}}>Total Profile: {profiles.length}</h3>
      <Cart allProfiles={cart}></Cart>
      {
        profiles.map(profile => <Profile info={profile} handelSelectBtn={handelSelectBtn} key={profile.id} ></Profile>)
      }
    </div>
  );
}

export default App;
