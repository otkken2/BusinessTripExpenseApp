import React, { useEffect,useState } from 'react';
import axios ,{AxiosResponse} from "axios";
import './App.css';

function App() {

  useEffect(()=>{
    // axios.get(baseURL).then((response: AxiosResponse<Post>)=>{
    // axios.get(baseURL).then((response: AxiosResponse<Hoge>)=>{
    //   setHoge(response.data);
    // }).catch((error)=>console.log(error));
  },[]);

  return (
    <>
     hoge
    </>
  );
}

export default App;
