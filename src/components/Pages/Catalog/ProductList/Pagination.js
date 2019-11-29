import React,{ Component } from 'react';

class Pagination extends Component{
    render() {
        return (
            <ul class="wn__pagination">
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#"><i class="zmdi zmdi-chevron-right"></i></a></li>
            </ul>
        );
    }
}

export default Pagination;