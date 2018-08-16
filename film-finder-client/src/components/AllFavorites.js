import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import {getFavorites} from '../actions/favorites'
import { Redirect } from 'react-router'

class AllFavorites extends Component {
  constructor() {
    super()
    this.state = {
      
      fireRedirectFavorites: false,
    }
  } 
  

  handleClick = () => {  
    this.props.getFavorites()
    this.setState({ fireRedirectFavorites: true })
  }


  render() {
    const { fireRedirectFavorites } = this.state
     
    return (
      <div>
       <button onClick={this.handleClick}>Your WatchList</button>
       {fireRedirectFavorites && <Redirect to={`/watchlist`} />}
      </div>
    )
    }
  }

  

  const mapStateToProps = (state) => {
    return ({
     
      getFavorites: state.getFavorites,

    })
  }
  
  export default connect(mapStateToProps, {
    getFavorites,
  })(AllFavorites)