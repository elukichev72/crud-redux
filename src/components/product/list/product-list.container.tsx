import React, { memo, FC } from 'react';
import ProductList from './product-list.component';
import { useProducts } from '../../../hooks/products.hook';
import ProductCreationContainer from '../creation/product-creation.container';
import '../../../assets/styles/product-list.container.css';

const ProductListContainer: FC = () => {
    const { products, loading, error } = useProducts();

    return (
        <div>
            {loading && <div className='loading'>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && (
                <>
                    <ProductList products={products} />
                    <ProductCreationContainer />
                </>
            )}
        </div>
    );
};

export default memo(ProductListContainer);
