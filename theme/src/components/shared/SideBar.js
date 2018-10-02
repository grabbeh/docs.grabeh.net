import React from 'react'
import { Docs, Link } from 'docz'

const Menu = ({ config }) => {
  return (
    <Docs>
      {({ docs }) => {
        const menuDocs = docs.filter(doc => doc.menu)
        return (
          <div className='br bw1 b--black-20 vh-100 w-15 fl'>
            <ul className='pa3 list'>
              <li className='mb2'>
                <Link to='/' className='b black link underline-hover dim'>
                  Home
                </Link>
              </li>
              <li className='mb2 b'>Components</li>
              {menuDocs.map(doc => (
                <li className='mb1 f5' key={doc.id}>
                  <Link
                    className='black link underline-hover dim'
                    to={doc.route}
                  >
                    {doc.name}
                  </Link>
                </li>
              ))}
              <li className='mt2'>
                <Link className='b black link underline-hover dim' to='/colors'>
                  Colors
                </Link>
              </li>
              <li className='mt2'>
                <Link className='b black link underline-hover dim' to='/theme'>
                  Theme
                </Link>
              </li>

            </ul>
          </div>
        )
      }}
    </Docs>
  )
}

export default Menu
