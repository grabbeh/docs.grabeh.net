import React, { Fragment } from 'react'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const Playground = styled.div.attrs({
  className: 'mb3'
})``

const CodeContainer = styled.pre.attrs({
  className: 'pa3 bg-dark-gray white'
})``

const Code = styled.code.attrs({
  className: 'f5'
})`
pre {
  border-radius: 0 0 5px 5px;
}`

class Render extends React.Component {
  transformCode = code => {
    return `
      const App = ({ children }) => (
        <React.Fragment>
          {children && typeof children === 'function' ? children() : children}
        </React.Fragment>
      )
      render(<App>${code}</App>)
    `
  }

  render () {
    let { code, scope } = this.props

    return (
      <LiveProvider
        transformCode={this.transformCode}
        noInline
        scope={scope}
        code={code}
      >
        <div className='mb3'> <LivePreview /></div>

        <LiveEditor />
        <LiveError />

      </LiveProvider>
    )
  }
}

export default Render
