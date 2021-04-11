import React from 'react';
import { //All available after running npm i react-router-dom
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Button, ButtonGroup } from 'react-fluid-buttons';
import Home from './components/home';
import Employees from './components/employees';
import Instructions from './components/instructions';

function App() {
  return (
    <Router>
      <Instructions />
      <Container /* style={{backgroundColor: "gray"}} */>
        <Container fluid>        
          <ButtonGroup>
              <Button color='primary' style={{width: "150px"}}>
                <Link to='/welcome'>Welcome</Link>
              </Button>
              <Button color='primary' style={{width: "150px"}}>
                <Link to='/'>Home</Link>
              </Button>
              <Button color='primary' style={{width: "150px"}}>
                <Link to='/MovieReviews'>Movie Reviews</Link>
              </Button>
              <Button color='primary' style={{width: "150px"}}>
                <Link to='/employees'>Employees</Link>
              </Button>
              <Button color='primary' style={{width: "150px"}}>
                <Link to='/about'>About</Link>
              </Button>
              <Button color='primary' style={{width: "150px"}}>
                <Link to='/login'>Login</Link>
              </Button>
          </ButtonGroup>
        </Container>
      </Container>
      <Switch>
                {/*
                  This switch acts on the links from above
                  They are ordered this way and generally the 
                  root path "/" should be listed last and should
                  always have paths listed in order from most
                  specific to least specific.
                  Use 'exact' to stop the 'fall-thru'
                */}
          <Route exact path='/welcome'>
            <Welcome /* employees={employees} */ />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/movieReviews'>
            <MovieReviews />
          </Route>
          <Route exact path='/employees'>
            <Employees /* employees={employees} */ />
          </Route>
          <Route exact path='/about'>
            <About /* employees={employees} */ />
          </Route>
          <Route exact path='/login'>
            <Login /* employees={employees} */ />
          </Route>
        </Switch>
    </Router>

  );
}

function Welcome() {
  return <h2>Welcome</h2>
}

// function Home() {
//   return <h2>Home</h2>
// }

function MovieReviews() {
  return <h2>Movie Reviews</h2>
}

// function Employees(/* { employees } */) {
// //   const match = useRouteMatch();
//   return (
//     <div>
//       <h2>Employees</h2>
//     </div>
//   )
// }

function About(/* { employees } */) {
//   const match = useRouteMatch();
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Login(/* { employees } */) {
//   const match = useRouteMatch();
  return (
    <div>
      <h2>Login</h2>
    </div>
  )
}
export default App;
