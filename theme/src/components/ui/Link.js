import React from 'react'

const Link = props => {
  return (
    <a href={props.href} className='underline link'>
      {props.children}
    </a>
  )
}

export default Link
