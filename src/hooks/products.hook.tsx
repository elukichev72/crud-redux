import { useEffect, useState } from 'react';
import { ProductModel } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';
import { useSelector } from 'react-redux';
import { selectProducts } from '../store/product/product.selector';

export const useProducts = (): { products: ProductModel[], loading: boolean, error: string } => {
    const products = useSelector(selectProducts);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            await fetchProductsApi();
        } catch (e) {
            setError(`Something went wrong! Error: ${e}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, loading, error };
};