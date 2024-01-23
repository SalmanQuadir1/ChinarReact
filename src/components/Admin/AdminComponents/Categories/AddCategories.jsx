import React, { useEffect, useState } from 'react'
import { BASE_URL, DELETE_CATEGORY, GET_ALL_CATEGORIES, POST_CATEGORY, PUT_CATEGORY } from '../../../../utils/constants';

const AddCategories = () => {
    const [inputs, setInputs] = useState({});
    const [categories, setCategories] = useState([]);
    const [editForm, setEditForm] = useState(false);
    const [editCategoryId, setEditCategoryId] = useState(null);

    useEffect(() => {
        getAllCategories();
    }, [editCategoryId]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const getAllCategories = async () => {
        try {
            const response = await fetch(BASE_URL + GET_ALL_CATEGORIES);
            const result = await response.json();
            setCategories(result?.content);
            //console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
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

            const result = await response.json();
            if (editForm) {
                // Update the existing category in the state
                setCategories(categories.map(category => (category.id === editCategoryId ? result.content : category)));
            } else {
                // Add the new category to the state
                setCategories([...categories, result.content]);
            }

            // Reset the form and edit state
            setEditForm(false);
            setEditCategoryId(null);
            setInputs({});

            return result.content;

        } catch (error) {
            console.error("Error:", error);
            return categories;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postCategory(inputs);
        console.log('The form was submitted:', inputs);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(BASE_URL + DELETE_CATEGORY + id, {
                method: "DELETE",
            });
            const result = await response.json();
            console.log("Success:", result);

            setCategories(prevCategories => prevCategories.filter(category => category.id !== id));

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


            </div>
        </>
    )
}

export default AddCategories
