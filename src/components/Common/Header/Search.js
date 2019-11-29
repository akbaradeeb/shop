import React,{ Component } from 'react';

class Search extends Component{
    render() {
        return (
                <React.Fragment>

                <li class="shop_search"><a class="search__active" href="#"></a></li>        
                <div class="brown--color box-search-content search_active block-bg close__top">
                        <form id="search_mini_form" class="minisearch" action="#">
                        <div class="field__search">
                            <input type="text" placeholder="Search entire store here..."/>
                            <div class="action">
                            <a href="#"><i class="zmdi zmdi-search"></i></a>
                            </div>
                        </div>
                        </form>
                        <div class="close__wrap">
                        <span>close</span>
                        </div>
                    </div>
                </React.Fragment>
 
        );
    }
}

export default Search;