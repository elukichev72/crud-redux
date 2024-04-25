import React, { memo, FC } from 'react';
import { ProductModel } from '../../../models/product.model';
import {
    ProductCardContainer,
    ProductImage,
    ProductTitle,
    ProductDescription,
    ProductPrice,
} from './product-card.styles';
import Description from '../../description';
import { DEFAULT_MAX_LENGTH } from '../../../constants/api.constants';

type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = (props: ProductCardProps) => {
    return (
        <ProductCardContainer>
            <ProductImage src={props.image} alt='' />
            <ProductTitle>{props.title}</ProductTitle>
            <ProductDescription>
                <Description text={props.description} maxLength={DEFAULT_MAX_LENGTH} />
            </ProductDescription>
            <ProductPrice>${props.price}</ProductPrice>
        </ProductCardContainer>
    );
};

export default memo(ProductCard);
