import React,{ Component } from 'react';


class Toolbar extends Component{

    constructor(props){
        super(props); 
    }

    render() {
        return (
            <div class="row">
            <div class="col-lg-12">
                <div class="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between">
                    <div class="shop__list nav justify-content-center" role="tablist">
                         
                    </div>
                    <p>Showing {this.props.records.start} – {this.props.records.end} of {this.props.records.total} results</p>
                    <div class="orderby__wrapper">
                        <span>Sort By</span>
                        <select class="shot__byselect">
                            <option>Default sorting</option>
                            <option>HeadPhone</option>
                            <option>Furniture</option>
                            <option>Jewellery</option>
                            <option>Handmade</option>
                            <option>Kids</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Toolbar;