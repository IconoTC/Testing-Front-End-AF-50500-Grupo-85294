import React, { useContext } from 'react'
import { Counter } from './components/counter/counter'
import { AppContext } from '../../core/context/context'

export const HomePage: React.FC = () => {

  const { theme} = useContext(AppContext)
  
  return (
    <section className={`page-${theme}`} role="region" aria-label="Home Page Section">
        <h2>Home Page</h2>
        <Counter />
    </section>
  )
}

