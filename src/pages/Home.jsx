import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Header />
        <h1>homepage</h1>
        <img src="/assets/stickman.png" alt="" />
        <h1>name: nikolozi pantsulaia</h1>
        <br />
        <h1>age: 14</h1>
        <br />
        <br />
        <h1>contact info below</h1>
        <br />
        <h1>github: <Link to={'https://github.com/kicina'}>github</Link></h1>
        <h1>vercel: <Link to={'https://vercel.com/kicinas-projects'}>vercel</Link></h1>
        <h1>email: nikolozipantsulaia@gmail.com</h1>
        
    </div>
  )
}
