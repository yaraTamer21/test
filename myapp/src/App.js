import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Abouts from "./Pages/About";
import {BrowserRouter,Switch ,Route,} from "react-router-dom";

import Home from "./Pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Switch>
   <Route exact path='/'><Home/></Route>
   <Route exact path='/about'><Abouts/></Route>

    </Switch>
    {/* <Abouts/> */}
    </BrowserRouter>

    <Footer/>
    </>
  );
}




export default App