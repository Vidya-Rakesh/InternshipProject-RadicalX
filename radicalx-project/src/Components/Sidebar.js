import React from 'react'
import '../App.css'
import './Sidebar.css'
import radicalxlogo from '../Images/RadicallX-Black-Logo 1@2x.png'
import { SidebarData } from './SidebarData'

function Sidebar() {
  return (
    <div className="Sidebar" >
       <div className="Sidebar--items">
        < img src={radicalxlogo} className='SidebarLogo' alt=""/> 
        <ul className='SidebarList'>
          {SidebarData.map((val,key) => {
            return(
              <li className='row'
              id ={window.location.pathname === val.link ? "active" : ""}
               key = {key} 
               onClick = {() =>(window.location.pathname = val.link)}>
                {""}
                <div id="icon">{val.icon} </div>{""}
                <div id="title">{val.title}</div>
              </li>
          
            );
          }
          )}
        </ul>
        
      </div>

      <div>
        
      </div>

    </div>
  )
  
}

export default Sidebar