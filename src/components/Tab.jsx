import React, { Component } from 'react'
import cn from 'classnames'

class Tab extends Component {
  render () {
    const { isActive, isDisabled, onSelect } = this.props
    return (
      <div
        className={cn(
          isActive && 'bb b--black-70 bw1 b',
          'f5 pointer fl pt2 pb1 mb3 mr3'
        )}
        onClick={isDisabled ? null : onSelect}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Tab
