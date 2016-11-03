import React, { PropTypes } from 'react'
import { Link } from 'react-router';
class Btns extends React.Component {
  render () {
    return(
      <div  className="Buts">
        <Link activeStyle={{color:'#FF5722'}} to="/about" ><span>About Me</span></Link>
        <Link activeStyle={{color:'#FF5722'}} to="/examples"><span>Examples</span></Link>
        <Link activeStyle={{color:'#FF5722'}} to="/work"><span>Work Experience</span></Link>
        <Link activeStyle={{color:'#FF5722'}} to="/projects"><span>Projects</span></Link>
        <Link activeStyle={{color:'#FF5722'}} to="/contact"><span>Contact Me</span></Link>
      </div>
    )
  }
}

export default Btns;
