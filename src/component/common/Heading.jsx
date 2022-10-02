import React from 'react'

const Heading = ({as,title}) => {
  return (
    <>
    {as==="h1" &&  <h1>{title}</h1>}
    {as==="h2" && <h2>{title}</h2>}
    {as==="h3" && <h3>{title}</h3>}
    {as==="h4" && <h4>{title}</h4>}
    {as==="h5" && <h5>{title}</h5>}
    {as==="p" && <p>{title}</p>}
    {as==="span" && <span>{title}</span>}
    
    </>
  )
}

export default Heading