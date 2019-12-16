import React,{ useReducer} from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import axios from 'axios';


import {
    SET_ALERT,REMOVE_ALERT,FETCH_MINICART,FETCH_WISHLIST
} from '../../types';

const UserState = props => {
    const initialState = {
        wishlist:0,
        cart:{items:[],total:1}
      };

    const [state,dispatch] = useReducer(UserReducer,initialState);

    const fetchWishlist = async () => {
        const res = await axios.get('http://localhost/opencart/api/main.php');
        
        dispatch({
            type:FETCH_MINICART,
            payload:res.data
        }) 
    }

    const fetchMinicart = async () => {
        const res = await axios.get('http://localhost/opencart/api/main.php');
        
        dispatch({
            type:FETCH_MINICART,
            payload:res.data
        }) 
        
    }

    return (
        <UserContext.Provider
            value = {{
                user: state,
                fetchWishlist,
                fetchMinicart
            }}
        >
          {props.children}  
        </UserContext.Provider>
    )

};

export default UserState;
