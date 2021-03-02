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
  }, [])
  return (
    <div className="main-div">
      <div className="w-80">
        {
          profiles.map(profile => <Profile info={profile} handelSelectBtn={handelSelectBtn} key={profile.id} ></Profile>)
        }
      </div>

      <div class="card bg-primary mt-5 w-20">
        <div class="card-header">Total Profile: {profiles.length}</div>
        <div class="card-body">
          <Cart allProfiles={cart}></Cart>
        </div>
      </div>

    </div>
  );
}

export default App;
