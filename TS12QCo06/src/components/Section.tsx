import React from 'react'

export const Section: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
  )
}

export default Section