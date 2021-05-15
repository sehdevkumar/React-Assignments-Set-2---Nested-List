
  
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
    // const [getStateIndex,setStateIndex] = useState(0);
    
    const setData = (e)=>{
       if(getStates==false){
         setStates(true);
       }else{
         setStates(false);
       }
    }

   return (
      <>
         <li id={"state"+props.indexes} onClick={setData}>{props.stateName.name}
          { getStates && <City stateIndex={props.indexes}  city={props.stateName}></City>}
         </li>
      </>
   )
}




function City(props){
    
    const stateIn =  parseInt(props.stateIndex)-1;
    const setData = (e)=>{
       e.stopPropagation();
       const checker = e.target.getAttribute("checker");
      if(checker==="false"){
          const stateIndex = parseInt(props.stateIndex)-1;
          const data = states[stateIndex].cities[e.target.getAttribute("cityIndex")].towns;

          const list =  document.createElement("ul");
          var i=1;
          data.forEach(element => {
          const newLi = document.createElement("li");
          newLi.innerHTML=element.name;
          newLi.id="town"+(i++);
          newLi.onclick=function(e){
              e.stopPropagation();
          }

          list.appendChild(newLi);
          });
           
          document.querySelector("."+e.target.className).appendChild(list);
          e.target.setAttribute("checker","true");
      }else{
        
        document.querySelector("."+e.target.className).childNodes[1].remove();
        e.target.setAttribute("checker","false");

      }

    }

      return (
       <> 
        <ul>
           {
            
              props.city.cities.map((city,index)=>{
                  return (
                    <li key={index} cityIndex={index} checker="false" id={"city"+(index+1)} className={"city"+stateIn+(index+1)} onClick={setData}>{city.name}
                     
                    </li>
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
