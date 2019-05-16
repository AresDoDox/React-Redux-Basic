import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import action
import {selectProduct} from '../actions/index'

class ProductList extends Component{
    createProductListItems(){
        let listItems = this.props.products.map(
            (product) =>{
                return (
                    <li key={product.id} onClick={() => {this.props.selectProduct(product)}}>
                        Product name: {product.name}
                    </li>
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

//convert state to props
function mapStateToProps(state){
    return {
        products: state.products
    };
}

//convert action to props
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectProduct: selectProduct}, dispatch);
}

//connect Container
let ProductContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductContainer;