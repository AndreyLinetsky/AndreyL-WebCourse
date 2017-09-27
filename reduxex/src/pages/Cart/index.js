import React from 'react';
import { connect } from 'react-redux';
import { Layout, Section, Card, Heading, Translate } from '../../components/'
import { CartHeroArea } from './components';
import './cart.css';
import { getCartProductsSelector } from '../../productsReducer'
import * as actions from '../../actions'

const CartProducts = ({ cartProducts, match, location, products, removeProductFromCart }) => (
    <Layout heroContent={CartHeroArea}>
        <Section>
            <Heading size={2}> <Translate text="Cart" /></Heading>
            <div className="products-horizontal-gallery">
                {cartProducts.map(({ id, name, imageUrl, shortDesc, price }, index) => (
                    <Card key={`product-${id}-${index}`} className="product-card" style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div className="product-top-title">
                            <p className="product-title">{name}</p>
                            <p className="product-price">{price}</p>
                        </div>
                        <p className="product-bottom-desc">{shortDesc}</p>
                        <button className="remove-product-button"
                            onClick={() => removeProductFromCart(id)}>X</button>
                    </Card>
                ))
                }
            </div>
        </Section>
    </Layout>
)

const mapStateToProps = (state) => ({
    cartProducts: getCartProductsSelector(state)
})

export default connect(mapStateToProps, actions)(CartProducts);