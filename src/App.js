import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  return (
   <div>
     <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/friend/:friendId">
           <FriendDetail></FriendDetail>
         </Route>
         <Route path="*">
           <NoMatch></NoMatch>
         </Route>
       </Switch>
     </Router>
   </div>
  );
}

export default App;
