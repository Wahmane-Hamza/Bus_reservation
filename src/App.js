import { BrowserRouter,Routes,Route  } from "react-router-dom";
import Navb from "./pages/navb";
import Contact from "./pages/contact"
import Aboutus from "./pages/aboutus"
import Home from "./pages/home"
import Sign from "./pages/sign"
import Time from "./pages/time"
import Profile from "./pages/profile"
import { useState } from "react";

function App() {
  const[location,setlocation]=useState()
  const[destenation,setdestenation]=useState()
  const[fname,setfname]=useState()
  const[lname,setlname]=useState()
  const[phone,setphone]=useState()
  const[email,setemail]=useState()

  const derection2 = (e)=>
  {
    e.preventDefault()
    const form =e.target
    if(form.name === 'location'){setlocation(form.value)}
    else if(form.name == 'destenation'){setdestenation(form.value)}
    else if(form.name == 'fname'){setfname(form.value)}
    else if(form.name == 'lname'){setlname(form.value)}
    else if(form.name == 'phone'){setphone(form.value)}
    else{setemail(form.value)}
  }
  const data={fname:fname,lname:lname,phone:phone,email:email,location:location,destenation:destenation}
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navb/>}>
            <Route index element={<Home derection={derection2}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>      
          </Route>
          <Route path="/sign" element={<Sign perinfo={derection2}/>}/>
          <Route path="/time" element={<Time/>}/>
          <Route path="/profile/:time" element={<Profile data={data}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
