import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Abouts from "./Pages/About";
import {BrowserRouter,Switch ,Route,} from "react-router-dom";

import Home from "./Pages/Home";
import Servicesdetails from "./Pages/Servicesdetails";
import Servicess from "./Pages/Servicess";
import Contacts from "./Pages/Contacts";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Switch>
   <Route exact path='/'><Home/></Route>
   <Route exact path='/about'><Abouts/></Route>
   <Route exact path='/servicesdetails/:id'>
     <Servicesdetails/>
   </Route>
   <Route exact path='/services'><Servicess/></Route>
<Route exact path='/contact'> <Contacts/></Route>

    </Switch>
    <Footer/>

    </BrowserRouter>

    </>
  );
}




export default App