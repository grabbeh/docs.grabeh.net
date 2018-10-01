import styled from 'styled-components'
import { space, width, color, borderRadius } from 'styled-system'
import * as React from 'react'
import PropTypes from 'prop-types'
import theme from '../theme'

const StyledBox = styled.div`
  ${space} ${width} ${color} ${borderRadius};
`
const Box = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
)

Box.displayName = 'Box'

Box.defaultProps = {
  theme: theme,
  bg: 'light-gray',
  p: 3
}

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Box.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  width: numberStringOrArray,
  w: numberStringOrArray,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray,
  /** Border radius */
  borderRadius: PropTypes.number
}

export default Box
