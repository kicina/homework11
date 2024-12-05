import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div>
        <Header />
        <h1>github projects</h1>
        <br />
        <br />
        <h1>homework10</h1>
        <img src="/assets/react.png" alt="" />
        <h1><Link to={'https://github.com/kicina/homework10'}>github</Link></h1>
        <h1><Link to={'https://vercel.com/kicinas-projects/homework10'}>vercel</Link></h1>
        <br />
        <br />
        <h1>homework8</h1>
        <img src="/assets/react.png" alt="" />
        <h1><Link to={'https://github.com/kicina/homework8'}>github</Link></h1>
        <h1><Link to={'https://vercel.com/kicinas-projects/homework8'}>vercel</Link></h1>
        <br />
        <br />
        <h1>homework7</h1>
        <img src="/assets/react.png" alt="" />
        <h1><Link to={'https://github.com/kicina/homework7'}>github</Link></h1>
        <h1><Link to={'https://vercel.com/kicinas-projects/homework7'}>vercel</Link></h1>
        <br />
        <br />
        <h1>shualeduri</h1>
        <img src="/assets/react.png" alt="" />
        <h1><Link to={'https://github.com/kicina/shualeduri'}>github</Link></h1>
        <h1><Link to={'https://vercel.com/kicinas-projects/shualeduri'}>vercel</Link></h1>
        <br />
        <br />
    </div>
  )
}
