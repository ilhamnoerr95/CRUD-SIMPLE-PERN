// import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// COMPONENTS
import Inputtodo from './Components/Inputtodo';
import ListTodo from './Components/ListTodo'

function App() {
  return (
    <div className="container">
    {/* <Router>
    <Switch>
          <Route/>
          
      </Switch>
    </Router> */}
    <Inputtodo/>
          <ListTodo/>
      
    </div>
  );
}

export default App;
