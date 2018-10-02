import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize, fontWeight, color } from 'styled-system'
import theme from '../theme'

export const italic = props => (props.italic ? { fontStyle: 'italic' } : null)

const StyledText = styled.div`
  ${italic} ${fontSize} ${fontWeight} ${color} ${caps} ${regular} ${bold};
`

const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
)

Text.displayName = 'Text'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Text.propTypes = {
  /** Font size */
  fontSize: numberStringOrArray,
  /** Alignment */
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  /** Font weight */
  fontWeight: PropTypes.string,
  /** Color */
  color: PropTypes.string
}

Text.defaultProps = {
  theme: theme
}

export default Text
