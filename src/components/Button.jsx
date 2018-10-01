import React from 'react'
import cn from 'classnames'

const FormButton = ({
  f = 5,
  color = 'white',
  bg = 'blue',
  className,
  children,
  disabled
}) => {
  const cx = cn(
    'bn b dim outline-transparent dib pv2 ph3',
    `f${f}`,
    color,
    `bg-${bg}`,
    className
  )

  return (
    <button className={cx} type='submit' disabled={disabled}>{children}</button>
  )
}

export default FormButton
