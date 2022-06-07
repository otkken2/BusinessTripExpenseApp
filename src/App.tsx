// import React, { useEffect,useState } from 'react';
// import axios ,{AxiosResponse} from "axios";
// import { Resources } from "./components/Resources";
import { Home } from './pages/Home';
import {Login} from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Trip } from './pages/Trip';
import { Header } from './components/header';
import { SignUp } from './pages/SignUp';
import {styled} from '@mui/material/styles';
import { BusinessTripExpense } from './pages/BusinessTripExpense/BusinessTripExpense';
import { RegistPlaceOfBusiness } from './pages/RegistPlaceOfBusiness/RegistPlaceOfBusiness';
import { RegistPurpose } from './pages/RegistPurpose/RegistPurpose';
import ResponsiveDrawer from './components/ResponsiveDrawer';

const StyledWrapper = styled('div')({
  margin:"15px",
})

// const baseURL = "http://0.0.0.0:8000/api/meansOfTransport"
// const baseURL = "https://jsonplaceholder.typicode.com/posts"

function App() {
  // const [meansOfTransports, setMeansOfTransports] = useState<any>([]);
  
  // const handleOnClickButton = async () => {
  //   const response = await axios.get(baseURL);
  //   setMeansOfTransports(response.data.meansOfTransports);
  //   console.log(meansOfTransports)
  // }

  return (     
    <BrowserRouter>
      <Header />
      <StyledWrapper>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          {/* <Route path='/trip' element={<Trip/>} /> */}
          <Route path='/registPlaceOfBusiness' element={<RegistPlaceOfBusiness/>} />
          <Route path='/registPurpose' element={<RegistPurpose/>} />
          <Route path='/businessTripExpense' element={<BusinessTripExpense/>} />
          <Route path='/responsiveDrawer' element={<ResponsiveDrawer/>} />

        </Routes>
      </StyledWrapper>
    </BrowserRouter> 
  )
}



export default App;
