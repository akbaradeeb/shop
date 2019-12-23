import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component{
    

    render() {
        
        let product = this.props.product; 
        
        return (
            <div class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div class="product__thumb">
                <Link to={"/product-detail/"+product.product_id} ><img src={product.image} alt="product images"/></Link>
                <Link to={"/product-detail/"+product.product_id} className="second__img animation1" href="single-product.html"><img src={product.image} alt="product images"/></Link>
                <div class="hot__box">
                    <span class="hot-label">BEST SALLER</span>
                </div>
            </div>
            <div class="product__content content--center">
        <h4><Link to={"/product-detail/"+product.product_id} >{product.name}</Link></h4>
                <ul class="prize d-flex">
                    <li>${product.price}</li>
                    <li class="old_prize">${product.price}</li>
                </ul>
                <div class="action">
                    <div class="actions_inner">
                        <ul class="add_to_links">
                            {product.canAddToCart ? (
                            <li><a class="cart" href="#" onClick={() => this.props.onAddToCart(product)} ><i class="bi bi-shopping-bag4"></i></a></li>
                            ) : (
                            <li><a class="cart" href="#" ><i class="bi bi-shopping-bag4"></i></a></li>        
                            )}
                            <li><a class="wishlist" href="#"  onClick={() => this.props.onAddToWishlist(product)} ><i class="bi bi-shopping-cart-full"></i></a></li>                            
                        </ul>
                    </div>
                </div>
                 
            </div>
        </div>
        
        );
    }
}

export default Product;