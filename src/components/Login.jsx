import React from 'react';
import { useState } from 'react';
// import { Redirect, Link } from 'react-router-dom';



export const Login = ({ setUser, users }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [greska, setGreska] = useState('')

  return (
    <form className="loginforma"onSubmit={(e) => {
      e.preventDefault()
      if (users.some(el => el.username === username && el.password === password)) {
        return (
          <>
            {setUser(username)}
            {console.log("proba")}
          </>
        )
      } else {
        return(
          <div>
        {setGreska("Morate se ulogovati sa ispravnim podacima!")}
        {console.log("Pogresan unos")}
        </div>
        )
      }

    }}>
      <h1 className="pocetninaslov">Counter Strike: Global Offensive</h1>
      <input className="user" placeholder="  Username" type="text" onChange={(e) => setUsername(e.target.value)} />
      <input className="pass" placeholder="  Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <input className="submitbtn" type="submit" value="Login" />
      <p className="greska">{greska}</p>
    </form>
  )
}
