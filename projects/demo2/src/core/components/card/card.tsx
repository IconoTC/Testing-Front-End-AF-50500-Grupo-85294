import React from 'react'
import './card.css'

type Props = {
    children: React.ReactNode  
    title?: string
}

export const Card: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="card" 
    role="region" aria-label={title ? `${title} card` : "card"}>
        {title && <h3>{title}</h3>}
        {children}
    </div>
  )
}

