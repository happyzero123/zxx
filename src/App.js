import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import LeftNav from './components/LeftNav';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showNav:false,
      title:'home'
    }
  }
  setNavBarState(){
    this.setState({showNav:window.innerWidth > 760 ? true : false});
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive('/about') ? 'About' :
            this.context.router.isActive('/examples') ? 'Examples' :
            this.context.router.isActive('/work') ? 'Work' :
            this.context.router.isActive('/projects') ? 'Projects' :'Item'
    })
  }
  componentDidMount(){
    this.setNavBarState();
    window.onresize = this.setNavBarState.bind(this);
  }
  render () {
    return(
      <div className="content-wrap">

        {this.state.showNav ? <LeftNav title={this.state.title} /> :<NavHeader title={this.state.title} />}
        <div className="content-main">
          {this.props.children}
          <div className="xiala">
            <img src="http://odr4qggss.bkt.clouddn.com/xiala.png"/>
          </div>
        </div>
        <NavFooter />
      </div>
    )
  }
}

App.contextTypes = {
   router: React.PropTypes.object.isRequired
}
export default App;
