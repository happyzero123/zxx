import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import About from '../About/About'
import Examples from '../Examples/Examples'
import Work from '../Work/Work'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
class NavFooter extends React.Component {

  render () {
    return(
    <div className="nav-footer">
        <About />
        <Examples/>
        <Work/>
        <Projects/>
        <Contact/>

    </div>
    )
  }
}
export default NavFooter;
