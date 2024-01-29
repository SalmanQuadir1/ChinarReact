import React, { useEffect, useState } from 'react'
import { BASE_URL, DELETE_PRODUCT, GET_ALL_PRODUCTS, VIEW_PRODUCT_IMAGE, toastOptions } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import Shimmer from '../../Shimmer';
import EmptyList from '../../EmptyList';
import { toast } from 'react-toastify';

const ProductList = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        getProductList();
    }, [currentPage]);

    const getProductList = async () => {
        try {
            const response = await fetch(`${BASE_URL + GET_ALL_PRODUCTS}?page=${currentPage}`);

            if (response.status === 204) {
                setProductList([]);
                setTotalPages(1);
                setLoading(false);
                return;
            }

            const result = await response.json();
            console.log(result?.content);
            setProductList(result?.content);
            setTotalPages(result?.totalPages);
            setLoading(false);

        } catch (error) {
            console.error("Error:", error);
        }
    };



    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleUpdate = (id) => {
        if (id) {
            navigate(`/admin/editproduct/${id}`)
        }

    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(BASE_URL + DELETE_PRODUCT + id, {
                method: "DELETE",
            });

            if (response.status === 204) {
                toast.success("Success: Product deleted successfully", toastOptions);
                getProductList();
            } else {
                toast.error("Error: Something went wrong!", toastOptions, response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (loading ? <Shimmer /> : productList.length === 0 ?
        <EmptyList message={"List is empty !!"} /> :
        <div className='card m-3 card border-0 shadow-lg p-3'>
            <h4 className='text-center mb-3 '>Product List</h4>
            <hr />
            <table class="table table-striped table-responsive">
                <thead class="thead-light ">
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productList && productList.map((product, index) => (

                        <tr key={product?.id}>
                            <td >{index + 1}</td>
                            <td><img className='rounded-circle w-25' height={70} alt='pro_img' src={`${BASE_URL + VIEW_PRODUCT_IMAGE}${product?.imageName}`} /></td>
                            <td>{product?.productName}</td>
                            <td>{product?.type?.name}</td>
                            <td>
                                <i title='Delete Product' className='fa fa-trash text-danger' onClick={() => handleDelete(product?.id)}></i>&nbsp;&nbsp; |&nbsp;&nbsp;
                                <i className='fa fa-edit text-success' title='Update Product' onClick={() => handleUpdate(product?.id)}></i>
                            </td>
                        </tr>

                    ))}


                </tbody>
            </table>
            <nav>
                <ul className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <li key={page} className={`page-item ${page === currentPage + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(page - 1)}>
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>


        </div>


    )
}

export default ProductList