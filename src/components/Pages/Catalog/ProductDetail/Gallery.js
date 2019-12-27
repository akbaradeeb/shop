import React,{ Component } from 'react';
import axios from 'axios';
import Product from '../ProductList/Product';

class Gallery extends Component{
 

    render() {
         
        return (
            <div class="wn__fotorama__wrapper">
                <div class="fotorama wn__fotorama__action" data-nav="thumbs">
                    <a href=""><img src={this.props.product.image}  alt=""/></a>
                    
                    { this.props.product.images.map(image=>
                    <a href={image}><img src={image}  alt=""/></a>
                    )}
                     
                </div>
            </div>
        );
    }
}

export default Gallery