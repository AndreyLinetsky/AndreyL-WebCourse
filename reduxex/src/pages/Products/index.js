import React from 'react';
import { connect } from 'react-redux';
import { Layout, Section, Card, Heading, Translate } from '../../components/'
import { ProductsHeroArea } from './components';
import './products.css';
import { getProductsSelector } from '../../productsReducer'

import {
    Route,
    Link
} from 'react-router-dom'

const Products = ({ links, match, location, products }) => (
    <Layout heroContent={ProductsHeroArea}>
        <Section>
            <Heading size={2}>
                {new URLSearchParams(location.search).get('referral') ?
                    [<Translate text="WelcomeFromReferal" />, `: ${new URLSearchParams(location.search).get('referral')}`] :
                    <Translate text="BuyOurProducts" />
                }
            </Heading>
            <div className="products-horizontal-gallery">
                {products.map(({ id, name, imageUrl, shortDesc, price }, index) => (
                    <Card key={`product-${id}-${index}`} className="product-card" style={{ backgroundImage: `url(${imageUrl})` }}>
                        <Link to={`${match.url}/${id}`} className="product-wrapping-link">
                            <div className="product-top-title">
                                <p className="product-title">{name}</p>
                                <p className="product-price">{price}</p>
                            </div>
                            <p className="product-bottom-desc">{shortDesc}</p>
                        </Link>
                    </Card>
                ))
                }
            </div>
        </Section>
    </Layout>
)

const mapStateToProps = (state) => ({
    products: getProductsSelector(state)
})

export default connect(mapStateToProps)(Products);