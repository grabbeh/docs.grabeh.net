import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize, color } from 'styled-system'
import theme from '../theme'

export const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase'
      }
    : null

export const regular = props =>
  props.regular ? { fontWeight: props.theme.regular } : null

export const bold = props =>
  props.bold ? { fontWeight: props.theme.bold } : null

export const italic = props => (props.italic ? { fontStyle: 'italic' } : null)

const StyledText = styled.div`
  ${italic} ${fontSize} ${space} ${color} ${caps} ${regular} ${bold};
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
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** Alignment */
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  /** Capitals */
  caps: PropTypes.bool,
  /** Regular */
  regular: PropTypes.bool,
  /** Bold */
  bold: PropTypes.bool,
  /** Italics */
  italic: PropTypes.bool,
  /** Color */
  color: PropTypes.string
}

Text.defaultProps = {
  theme: theme
}

export default Text
