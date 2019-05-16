import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductDetail extends Component {
    render(){
        let {id,imageUrl, name, description} = this.props.activeProduct;
        if (!id){
            return(<h4>Select a product</h4>);
        }
        return(
            <div>
                <img src={imageUrl ? imageUrl : ""} 
                    height={imageUrl ? 200 : 0}
                    width ={imageUrl ? 200 : 0}
                />
                <p>Name: {name}</p>
                <p>Description: {description}</p>
            </div>
        );
    }
}

//Convert state to Props
function mapStateToProps(state){
    return {
        activeProduct: state.activeProduct
    }
}

//Convert action to Props

let ProductDetailContainer = connect(mapStateToProps)(ProductDetail);

export default ProductDetailContainer;