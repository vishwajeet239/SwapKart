import React from 'react';
import ProductCard from '../productcard/ProductCard';
import product from '../../images/product.jpg';
import firstProduct from '../../images/firstProduct.jpg';
import secondProduct from '../../images/secondProduct.jpg';
import thirdProduct from '../../images/thirdProduct.jpg';
import './HomeProducts.css';
import {fetchProductList} from '../../redux/HomeProducts/Action'
import {connect} from 'react-redux'
import { useEffect } from 'react';

const HomeProducts = (props) => {
    useEffect(() => {
        props.fetchProducts();
    }, [])

    console.log(props.prodList.data);

    return (
        <div className='container-fluid p-0'>
            <div className='row mx-3 my-5 p-4 home-card-row d-flex flex-row'>
                <h2 className='mb-4' style={{ color: 'black' }}>New Arrival</h2>
                <div className='d-flex justify-content-between w-100'>
                    <a href='/products/1/1' className='text-decoration-none'>
                        <ProductCard img={product} prodName={"Apple iPhone 13"} prodDesc={'iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. '} /></a>
                    <a href='/products/1/2' className='text-decoration-none '>
                        <ProductCard img={firstProduct} prodName={"Apple iPhone 13"} prodDesc={'iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. '} /></a>
                    <a href='/products/1/3' className='text-decoration-none '>
                        <ProductCard img={secondProduct} prodName={"Apple iPhone 13"} prodDesc={'iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. '} /></a>
                    <a href='/products/1/4' className='text-decoration-none '>
                        <ProductCard img={thirdProduct} prodName={"Apple iPhone 13"} prodDesc={'iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. '} /></a>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        prodList: state.prodList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProducts:() => dispatch(fetchProductList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HomeProducts)
