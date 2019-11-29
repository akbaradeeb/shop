import React,{ Component } from 'react';

class Account extends Component{
    render() {
        return (
            <li class="setting__bar__icon"><a class="setting__active" href="#"></a>
            <div class="searchbar__content setting__block">
            <div class="content-inner">
                <div class="switcher-currency">
                <strong class="label switcher-label">
                    <span>Currency</span>
                </strong>
                <div class="switcher-options">
                    <div class="switcher-currency-trigger">
                    <span class="currency-trigger">USD - US Dollar</span>
                    <ul class="switcher-dropdown">
                        <li>GBP - British Pound Sterling</li>
                        <li>EUR - Euro</li>
                    </ul>
                    </div>
                </div>
                </div>
                <div class="switcher-currency">
                <strong class="label switcher-label">
                    <span>Language</span>
                </strong>
                <div class="switcher-options">
                    <div class="switcher-currency-trigger">
                    <span class="currency-trigger">English01</span>
                    <ul class="switcher-dropdown">
                        <li>English02</li>
                        <li>English03</li>
                        <li>English04</li>
                        <li>English05</li>
                    </ul>
                    </div>
                </div>
                </div>
                <div class="switcher-currency">
                <strong class="label switcher-label">
                    <span>Select Store</span>
                </strong>
                <div class="switcher-options">
                    <div class="switcher-currency-trigger">
                    <span class="currency-trigger">Fashion Store</span>
                    <ul class="switcher-dropdown">
                        <li>Furniture</li>
                        <li>Shoes</li>
                        <li>Speaker Store</li>
                        <li>Furniture</li>
                    </ul>
                    </div>
                </div>
                </div>
                <div class="switcher-currency">
                <strong class="label switcher-label">
                    <span>My Account</span>
                </strong>
                <div class="switcher-options">
                    <div class="switcher-currency-trigger">
                    <div class="setting__menu">
                        <span><a href="#">Compare Product</a></span>
                        <span><a href="#">My Account</a></span>
                        <span><a href="#">My Wishlist</a></span>
                        <span><a href="#">Sign In</a></span>
                        <span><a href="#">Create An Account</a></span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </li>
        );
    }
}

export default Account;