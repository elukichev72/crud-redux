import { FC, memo, useState } from 'react';
import CreateButton from '../../button/create-button';
import Modal from '../../modal';
import ProductCreationForm from './product-creation-form';
import { ProductModel } from '../../../models/product.model';
import { createProductApi } from '../../../services/product-api.service'; 

// type ProductCreationContainerProps = {
//     products: ProductModel[];
// }

const ProductCreationContainer: FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const handleModalOpen = () => {
        setModalVisible(true);
    };

    const handleSubmit = async (product: Partial<ProductModel>) => {
        await createProductApi(product);
        setModalVisible(false);
    };

    return (
        <div>
            {!modalVisible ? (
                <CreateButton handleModalOpen={handleModalOpen} />
            ) : (
                <Modal title='Create Product' onClose={handleModalClose}>
                    <ProductCreationForm onSubmit={handleSubmit} />
                </Modal>
            )}
        </div>
    );
};

export default memo(ProductCreationContainer);
