import { FC, memo } from 'react';
import { ProductModel } from '../../../models/product.model';
import ProductCard from '../card/product-card.component';
import styled from 'styled-components';

const ProductListStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

type ProductListProps = {
    products: ProductModel[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
    return (
        <ProductListStyled>
            {products.map(product => {
                return (
                    <ProductCard
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                );
            })}
        </ProductListStyled>
    );
};
export default memo(ProductList);
