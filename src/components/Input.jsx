import React from 'react'
import {
  space,
  width,
  borders,
  borderColor,
  borderBottom,
  borderLeft,
  borderTop,
  borderRight,
  fontSize
} from 'styled-system'
import styled from 'styled-components'
import theme from '../theme'

const StyledInput = styled.input`
  outline: 0;
  ${space}
  ${width}
  ${borders}
  ${borderColor}
  ${borderBottom}
  ${borderTop}
  ${borderLeft}
  ${borderRight}
  ${fontSize}
`
class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render () {
    const {
      label,
      type,
      placeholder,
      name,
      handleChange,
      value,
      error,
      onFocus,
      onBlur,
      readOnly,
      autoComplete
    } = this.props

    return (
      <div className='f5 b'>
        {label &&
          <div>
            <label className='mr3' htmlFor={value}>
              {label}
            </label>
          </div>}
        <StyledInput
          autoComplete={autoComplete}
          id={value}
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
          type={type}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          readOnly={readOnly}
          {...this.props}
        />
        <div className='red b f6'>{error}</div>
      </div>
    )
  }
}

Input.defaultProps = {
  theme: theme,
  bg: 'white',
  p: 1,
  borderColor: 'black-40',
  borderLeft: '0',
  borderRight: '0',
  borderTop: '0',
  borderBottom: '3px solid black-40',
  w: 100,
  mt: 2,
  fontSize: 2
}

export default Input
