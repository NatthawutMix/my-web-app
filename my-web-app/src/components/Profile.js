import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createUser } from "../redux/cart";

import { auth } from "../firebase";
import TextField from '@material-ui/core/TextField';

function Profile( {user, createUser} ) {
    console.log(user.uid)
    const [newUser, setNewUser] = useState({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        tel: '',
        location: ''
    });  
    console.log(newUser);
    return (
        <div>
            <TextField id="filled-basic" label="NAME" 
                    variant="filled" type="text" name="name" value={newUser.name} onChange={
                    e => setNewUser({...newUser, [e.target.name]: e.target.value
            })}/>
            <TextField id="filled-basic" label="Email" 
                    variant="filled" type="text" name="email" value={newUser.email} onChange={
                    e => setNewUser({...newUser, [e.target.name]: e.target.value
            })}/>
            <TextField id="filled-basic" label="Tel" 
                    variant="filled" type="text" name="tel" value={newUser.tel} onChange={
                    e => setNewUser({...newUser, [e.target.name]: e.target.value
            })}/>
            <p>Location</p>
            <textarea type="text" name="location" value={newUser.location} onChange={
                e => setNewUser({...newUser, [e.target.location]: e.target.value
            })}/>
            <button onClick={() => createUser(newUser)}>Submit</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.cart.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user)),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
