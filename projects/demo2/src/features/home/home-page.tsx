import React from 'react'
import { Counter } from './components/counter/counter'

export const HomePage: React.FC = () => {
  return (
    <section>
        <h2>Home Page</h2>
        <Counter />
    </section>
  )
}

