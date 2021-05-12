import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function State(props){
    const [getStates,setStates] = useState(false);
    
    const setData = ()=>{
       if(getStates==false){
         setStates(true);
       }else{
         setStates(false);
       }
    }

   return (
      <>
         <li id={"state"+props.indexes} onClick={setData}>{props.stateName.name}
          { getStates && <City city={props.stateName}></City>}
         </li>
      </>
   )
}




function City(props){
    const [getState2,setState2] = useState(false);
    
    const setData = (e)=>{
       e.stopPropagation();
       if(getState2==false){
        document.getElementById(e.target.id).childNodes[1].style.display="none";
        setState2(true);
       }else{
        setState2(false);
        document.getElementById(e.target.id).childNodes[1].style.display="block";
       }
    }
      return (
       <> 
        <ul>
           {
            //  console.log(props.city.cities)
              props.city.cities.map((city,index)=>{
                  return (
                    <li key={index} id={"city"+(index+1)} onClick={setData}>{city.name}
                       <Town town={city.towns} ></Town>
                    </li>
                  )
              })
           }
        </ul>
       </>
      )
}

function Town(props){
   
  return (

    <>
       <ul>
           {
             props.town.map((town,index)=>{
               return (
                  <li id={"town"+(index+1)}>{town.name}</li>
               )
             })
           }
       </ul>
       
    </>
     
  )


}

function App() {

 
  return <div id="main">
      <ul>
      {
        states.map((state,index)=>{
          return(<State indexes={index+1}   stateName={state}></State>)
        })
      }

      </ul>
      

  </div>;
}

export default App;
