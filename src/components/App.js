import React from 'react'

import{ Component, useEffect, useState } from "react";
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


function Townprint(props){

    return (
        <>
          <li id={"town"+(props.index+1)}>{props.towns.name}</li>
        </>
    )
}

function Town(props){
   
    return (
       
        <>
           <ul>
               {
                   props.towns.map((town,index)=>{
                       return (
                           <Townprint index={index} towns={town}></Townprint>
                       )
                   })
               }
           </ul>
        </>

    )
    

}


function Cityprint(props){
   
    const [getFlag,setFlag] = useState(false);

    const hideANDshow=(e)=>{
        e.stopPropagation();
          if(getFlag)
             setFlag(false)
          else
            setFlag(true)  
    }

    return (
        <>
           <li id={"city"+(props.index+1)} onClick={hideANDshow}>{props.cities.name}
             { getFlag && <Town towns={props.cities.towns}></Town>}
           </li>
        </>
    )

}

function City(props){

    return (
        <>
           <ul>
                {
                    props.cities.map((city,index)=>{
                        return (
                            <Cityprint index={index} cities={city}></Cityprint>
                        )
                    })
                }
           </ul>
        </>
    )

}


function State(props){
    const [getFlag,setFlag] = useState(false);

    const hideANDshow2=(e)=>{
        e.stopPropagation();
        if(getFlag)
           setFlag(false)
        else
          setFlag(true)  
      }
   
    return (
        
            <>
              <li id={"state"+(props.index+1)} onClick={hideANDshow2}>{props.states.name}
                 { getFlag && <City cities={props.states.cities}></City>}
              </li>
            </>
        

    )


}



function App() {
   

    return (
        <div id="main"> 
            <ul>
                {
                    states.map((state,index)=>{
                       
                        return    <State index={index} states={state}></State>
                        
                    })
                }
            </ul>
        </div>
    )
}

export default App;
