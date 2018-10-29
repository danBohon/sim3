import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
 
function Nav(props) {
  console.log('props',props);
  const {username, pic} = props
  if (props.pathname === '/') {
    return (
            <div>

            </div>
            );
  } else {
    return (
      <div className='header'>
        <div>{username}</div>
        <img src={pic} alt="Profile Pic"/>
        <Link to='/dashboard' ><button>Home</button></Link>
        <Link to='/new' ><button>New Post</button></Link>
        <Link to='/' ><button>Logout</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {username, pic} = state;

  return {
    username,
    pic
  }
}

export default connect(mapStateToProps, {} )(Nav)

