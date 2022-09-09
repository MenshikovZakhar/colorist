import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';


function App() {
  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
    </div>
  )
}

export default App;