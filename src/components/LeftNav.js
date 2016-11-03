import React, { PropTypes } from 'react'

import Top from './Top'
import Btns from './Btns'

class LeftNav extends React.Component {
  render () {
    return(
      <div className="LeftNav">
        <Top />
        <Btns/>


      </div>
    )
  }
}

export default LeftNav;
