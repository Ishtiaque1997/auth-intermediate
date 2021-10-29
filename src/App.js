import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
          </Route>
        <Route path='/home'>
          <Home></Home>
        </Route> 
        <Route path='/login'>
         <Login></Login>
        </Route> 
        <Route path='/register'>
         <Register></Register>
        </Route>    
      </Switch>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
