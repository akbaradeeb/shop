import React,{ Component } from 'react';

class Wishlist extends Component{
    render() {
        return (
             
        <li class="wishlist"><a href="#">{this.props.wishlist}</a></li>
             
            
        );
    }
}

export default Wishlist;