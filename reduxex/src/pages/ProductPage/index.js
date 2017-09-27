import React from 'react';
import { connect } from 'react-redux';
import {
    Layout,
    Section,
    Translate
} from '../../components/';
import { ProductHeroArea } from './components';
import './productPage.css';
import { getProductsSelector } from '../../productsReducer';
import * as actions from '../../actions';

const ProductPage = ({
     product: {
      imageUrl,
    longDesc,
    price,
    id },
    addProductToCart }) => (
        <Layout heroContent={ProductHeroArea}>
            <Section>
                <div className="product-page-container">
                    <img src={imageUrl} />
                    <p className="product-page-desc">{longDesc}</p>
                    <p className="product-page-price"> <Translate text="Price" />: {price}</p>
                    <button className="product-page-buy-button"
                        onClick={() => addProductToCart(id)}><Translate text="Buy" /></button>
                </div>
            </Section>
        </Layout>
    )

const mapStateToProps = (state, ownProps) => ({
    product: getProductsSelector(state).find(item => item.id === ownProps.match.params.id)
})

export default connect(mapStateToProps, actions)(ProductPage);