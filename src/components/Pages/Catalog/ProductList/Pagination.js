import React,{ Component } from 'react';

class Pagination extends Component{
    
    constructor(props){
        super(props); 
    }

    render() {
        return (
            <ul class="wn__pagination">
                {this.props.pagination.pages.map(page=>
                    <li><a href="#" className={page==this.props.pagination.current_page ? "active" : ""} onClick={() => this.props.onPageChange(page)}>{page}</a></li>    
                )} 
                <li><a href="#" onClick={() => this.props.onPageChange(this.props.pages.slice(-1))}><i class="zmdi zmdi-chevron-right"></i></a></li>
            </ul>
        );
    }
}

export default Pagination;