import React,{ Component } from 'react';
import axios from 'axios';

class Gallery extends Component{

    render() {
        return (
            <div class="wn__fotorama__wrapper">
                <div class="fotorama wn__fotorama__action" data-nav="thumbs">
                    <a href="1.jpg"><img src="/images/product/1.jpg" alt=""/></a>
                    <a href="2.jpg"><img src="/images/product/2.jpg" alt=""/></a>
                    <a href="3.jpg"><img src="/images/product/3.jpg" alt=""/></a>
                    <a href="4.jpg"><img src="/images/product/4.jpg" alt=""/></a>
                    <a href="5.jpg"><img src="/images/product/5.jpg" alt=""/></a>
                    <a href="6.jpg"><img src="/images/product/6.jpg" alt=""/></a>
                    <a href="7.jpg"><img src="/images/product/7.jpg" alt=""/></a>
                    <a href="8.jpg"><img src="/images/product/8.jpg" alt=""/></a>
                </div>
            </div>
        );
    }
}

export default Gallery