import React, { useEffect } from "react";
import './App.css';
import{
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
const [{ user }, dispatch] = useStateValue();

//Piece of code which runs on a given condn "USEEFFECT"

useEffect(() =>{
 
  const unsubscribe = auth.onAuthStateChanged((authUser) =>{
    if(authUser){
      //User logged in
    dispatch({
      type: "SET_USER",
      user: authUser

    })
    }
    else{
      //user is logged out
      dispatch({
        type: "SET_USER",
        user: null
  
      })
    }
  })
return()=> {
  //Any cleanup operations go in here
  unsubscribe();
}
}, [])
console.log("USER IS >>> ",user);
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
         <Login />
        </Route>
        <Route path="/">
          <Header />            {/*Its a component */}
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
