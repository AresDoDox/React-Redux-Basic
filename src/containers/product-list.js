import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductList extends Component{
    createProductListItems(){
        let listItems = this.props.products.map(
            (product) =>{
                return (
                    <li key={product.id}>Product name: {product.name}</li>
                );
            }
        );
        return listItems;
    };
    
    render(){
        return(
            <ul>
                {this.createProductListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        products: state.products
    };
}

let ProductContainer = connect(mapStateToProps)(ProductList);

export default ProductContainer;