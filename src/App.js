import React, { useEffect, useState } from 'react';
import './App.css';
import { getAll } from './sources';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Ispis } from './components/Ispis'
import { Filter } from './components/Filter'



const App = () => {
  const [user, setUser] = useState(null)
  const [ct, setCt] = useState([])
  const [tt, setTt] = useState([])
  const [filter, setFilter] = useState('')
  const [ispis, setIspis] = useState([])
  const [zapetragu, setZapretragu] = useState(false)


  useEffect(() => {
    getAll().then(res => {
      setCt(res.data.filter(el => el.used_by_ct === "yes"))
      setTt(res.data.filter(el => el.used_by_t === "yes"))
      console.log(res.data)

    })
  }, [])


  return (
    <div className="glavnidiv">
      <Router basename="/counter-strike-go">
        {user ? 
        <nav className="navigacija">
          <Link to="/"><p className="homegore">Home</p></Link>
          <Link to="/login"><p className="logingore">Login</p></Link>
        </nav> 
        : <Redirect to='/login'/>}
        <Switch>

          <Route exact path="/">
            <div className="home">
              <Home setFilter={setFilter} setIspis={setIspis} setZapretragu={setZapretragu} />
              <div className="filter">
                {zapetragu ? <Filter ispis={ispis} filter={filter} /> : ""}
              </div>
            </div>
          </Route>

          <Route path="/login">
            <div className="login">
              {user ? <Redirect to="/" /> : <Login setUser={setUser} users={users} />}
            </div>
          </Route>
          <Route path="/tt">
            <div className="divt">
              <p className="terrorist">Terrorist</p>
            <div className="tt">
              <Ispis tim={tt} />
            </div>
            </div>
          </Route>
          <Route path="/ct">
            <div className="divct">
            <p className="counterterrorist">Counter Terrorist</p>
            <div className="ct" >
              <Ispis tim={ct} />
            </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

const users = [
  {
    username: "Milica",
    password: "1337"
  }
]


export default App;
