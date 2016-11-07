import React, { PropTypes } from 'react'

class Projects extends React.Component {
  render () {
    return(
      <div className="work-container">
        <div className="work-card">
          <a href="#"><img src="https://coding.net/u/xiaoxiaozhang-/p/imgs/git/raw/master/img/275-220.jpg"/></a>
          <div className="work-text">
            <h3>作品一</h3>
            <p>2016.09.22</p>
          </div>
        </div>
        <div className="work-card">
          <a href="#"><img src="https://coding.net/u/xiaoxiaozhang-/p/imgs/git/raw/master/img/500-375.jpg"/></a>
          <div className="work-text">
            <h3>作品二</h3>
            <p>2016.09.22</p>
          </div>
        </div>


      </div>
    )
  }
}

export default Projects;
