
import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
   const [catFact, setCatFact] = useState ("");
   const [name , setName] = useState("");
   const [predictedAge, setPredictedAge] = useState(null);
   const [familyExcuse, setFamilyExcuse] = useState("");


   const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    })
   }



   const excuseFamily = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/family").then((res) => {
      setFamilyExcuse(res.data[0].excuse);
    })
   }

   const excuseParty = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/party").then((res) => {
      setFamilyExcuse(res.data[0].excuse);
    })
   }
  
   const excuseOffice = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/office").then((res) => {
      setFamilyExcuse(res.data[0].excuse);
    })
   }

    useEffect(() => {
    excuseFamily();
    }, []);
    


      const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
          setCatFact(res.data.fact);
            });
      }
    useEffect(() => {
      fetchCatFact()
  }, [])
    
 /* fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
       console.log(data);
 }); */
  return (
    <div className="App">
      <h1>API REQUEST PRACTICE IN REACT</h1>
        <h2> Api practice is the focus not CSS</h2>
      <header className="App-header">
        
        <div className='cat'>
         
        <button 
        onClick={fetchCatFact}> GENERATE CAT FACTS</button>
        <p>{catFact}</p>
        </div>
        <div className='predict'>
        <p>Enter Your Name , lets predict your Age</p>
        <input placeholder="Ex.  Danny...." 
        onChange={(event) => {setName(event.target.value);
        
        }}
        />
        <button onClick={fetchAge}> PREDICT AGE</button>
        <h6>Predicted Name : {predictedAge?.name}</h6>
        <h6> Predicted Age : {predictedAge?.age}</h6>
        <h6>Predicted Count : {predictedAge?.count}</h6>
      </div>
      <div className='excuse'>
        <h6>do you want to make an excuse and you are short of words? </h6>
      <p>Don't worry, Dr wick is here to help you</p>
      <button onClick={ excuseParty }>PARTY</button>
      <button onClick={ excuseOffice }>OFFICE</button>
      <button onClick={ excuseFamily }>FAMILY</button>
      <h6>{familyExcuse}</h6>
      </div>
      </header>
    
    </div>
  );
}

export default App;
