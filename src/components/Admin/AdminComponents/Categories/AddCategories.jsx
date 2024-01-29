import React, { useEffect, useState } from 'react'
import { BASE_URL, DELETE_CATEGORY, GET_ALL_CATEGORIES, POST_CATEGORY, PUT_CATEGORY, toastOptions } from '../../../../utils/constants';
import { toast } from 'react-toastify';

const AddCategories = () => {
    const [inputs, setInputs] = useState({});
    const [categories, setCategories] = useState([]);
    const [editForm, setEditForm] = useState(false);
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getAllCategories();
    }, [editCategoryId, currentPage]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const getAllCategories = async () => {
        try {
            const response = await fetch(`${BASE_URL + GET_ALL_CATEGORIES}?page=${currentPage}`);
            if (response.status === 204) {
                setCategories([]);
                setTotalPages(1);
                return;
            }

            const result = await response.json();
            console.log(result?.content);
            setCategories(result?.content);
            setTotalPages(result?.totalPages);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const postCategory = async (data) => {
        try {
            const url = editForm ? BASE_URL + PUT_CATEGORY + `${editCategoryId}` : BASE_URL + POST_CATEGORY;
            const method = editForm ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.status === 201 && method === 'POST') {
                toast.success("Category created successfully !!", toastOptions);
                console.log("resp.....", response);
            } else if (response.status === 200 && method === 'PUT') {
                toast.success("Category updated  successfully !!", toastOptions);
            }
            else if (response.status === 400 && method === 'POST') {
                toast.error("Category already exists !!", toastOptions);

            }

            getAllCategories();
            setEditForm(false);
            setEditCategoryId(null);
            setInputs({});

            return response.content;

        } catch (error) {
            toast.error("Error:", error);
            console.log(error + "surcharge")
            return categories;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postCategory(inputs);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(BASE_URL + DELETE_CATEGORY + id, {
                method: "DELETE",
            });
            if (response.status === 204) {
                toast.success("Success: Category deleted successfully", toastOptions);
                getAllCategories();
            } else {
                toast.error("Error:", response.status, response.statusText);
            }

        } catch (error) {
            console.error("Error:", error);
        }
    };


    const handleUpdate = (id) => {
        setEditForm(true);
        setEditCategoryId(id);
        const item = categories.find(item => item.id === id);
        setInputs(item);

        window.scrollTo(0, 0);
    };


    return (
        <>
            <div className='form p-4 m-3 card border-0 shadow-lg'>
                <div className='page-title p-3 border-0 card shadow-sm text-center mb-3 '><h6>{editForm ? "Update Category" : "Add Category"}</h6></div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Category Name</label>
                                <input className="form-control" type="text" name='name' value={inputs.name || ""}
                                    onChange={handleChange} id="name" required />
                            </div>
                        </div>


                    </div>
                    <div className='containter text-center'>
                        <button className=' border-0 btn_orange my-4 px-2 py-2 '>{editForm ? "Update" : "Submit"}</button>
                    </div>

                </form>
            </div>
            <div className='card m-3 card border-0 shadow-lg p-3'>
                <table class="table table-striped">
                    <thead class="thead-light ">
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories && categories.map((category, index) => (

                            <tr key={category?.id}>
                                <td >{index + 1}</td>
                                <td>{category?.name}</td>
                                <td>
                                    <i title='Delete Category' className='fa fa-trash text-danger' onClick={() => handleDelete(category?.id)}></i>&nbsp;&nbsp; |&nbsp;&nbsp;
                                    <i className='fa fa-edit text-success' title='Update Category' onClick={() => handleUpdate(category?.id)}></i>
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
        </>
    )
}

export default AddCategories
