import axios from 'axios';

export default {

    getProductList: async(limit) => { 
        await axios.get('http://localhost/opencart/api/products.php')
        				.then(function (response) {
		                     return response.data; // the response.data is string of src
		               }); 
    }
    
}