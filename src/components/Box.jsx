import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

const Box = ({
  bg = 'light-gray',
  pl = 3,
  pr = 3,
  pt = 3,
  pb = 3,
  align,
  children,
  className
}) => {
  const cx = cn(
    align === 'center' && 'center',
    `pl${pl}`,
    `pr${pr}`,
    `pt${pt}`,
    `pb${pb}`,
    `bg-${bg}`,
    className
  )
  return <div className={cx}>{children}</div>
}

Box.displayName = 'Box'

Box.defaultProps = {
  align: '',
  bg: 'light-gray',
  pl: 3,
  pr: 3,
  pt: 3,
  pb: 3
}

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Box.propTypes = {
  /** Background colour */
  bg: PropTypes.string,
  /** Padding */
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  align: PropTypes.string
}

export default Box
