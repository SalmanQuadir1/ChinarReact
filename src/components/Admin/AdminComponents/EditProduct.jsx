import React, { useEffect, useState } from 'react'
import { ADD_PRODUCT, BASE_URL, GET_ALL_CATEGORIES, GET_PRODUCT, UPDATE_PRODUCT, VIEW_PRODUCT_IMAGE } from '../../../utils/constants';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    console.log("product...", id);
    const [inputs, setInputs] = useState("");
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState('');
    useEffect(() => {
        getProductById();
    }, [])


    useEffect(() => {
        getCategoryList();

    }, []);

    const getProductById = () => {
        axios.get(
            BASE_URL + GET_PRODUCT + id,
        )
            .then(function (response) {
                console.log(response?.data);
                setInputs(response?.data);


            })
            .catch(function (error) {
                console.log(error.response);
                alert(error.response);
            });

    }

    const getCategoryList = async () => {
        try {
            const response = await fetch(BASE_URL + GET_ALL_CATEGORIES);

            if (response) {
                const result = await response.json();
                setCategories(result?.content);
                console.log('Got Categories:', categories);
            } else {
                console.error('Failed to add product.');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }

    const saveProduct = async (id) => {
        console.log(inputs)
        axios.put(
            BASE_URL + UPDATE_PRODUCT, { product: JSON.stringify(inputs), image: image }, {

            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        )
            .then(function (response) {
                console.log(response.data);
                setInputs({});
                setImage('');
                alert("Product Updated successfully !!")

            })
            .catch(function (error) {
                console.log(error.response);
                alert(error.response);
            });


    }



    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("product to be updated....", inputs, image)

        saveProduct(inputs?.id);

    };
    return (
        <>

            <div className='form p-4 m-3 card border-0 shadow-lg'>
                <div className='page-title p-3 border-0 card shadow-sm text-center mb-3 '><h6>Update Product</h6></div>
                <form onSubmit={handleSubmit} >
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="pname" className="form-label">Product Name</label>
                                <input className="form-control" type="text" name='productName' value={inputs.productName || ""}
                                    onChange={handleChange} id="pname" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="typeId" className="form-label">Type</label>
                                <select className="form-control" name='typeId' onChange={handleChange} type="text" id="typeId" required>
                                    <option value={inputs?.typeId?.id}>{inputs?.type?.name}</option>

                                    {categories && categories.map(category => (
                                        <option key={category?.id} value={category?.id}>{category?.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="voltage" className="form-label">Voltage Range</label>
                                <input className="form-control" name='voltage' value={inputs.voltage || ""}
                                    onChange={handleChange} type="text" id="voltage" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="output" className="form-label">Output</label>
                                <input className="form-control" name='output' value={inputs.output || ""}
                                    onChange={handleChange} type="text" id="output" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="cooling" className="form-label">Cooling</label>
                                <input className="form-control" name='cooling' value={inputs.cooling || ""}
                                    onChange={handleChange} type="text" id="cooling" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input className="form-control" name='description' value={inputs.description || ""}
                                    onChange={handleChange} type="text" id="description" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="operation" className="form-label">Operation</label>
                                <input className="form-control" name='operation' value={inputs.operation || ""}
                                    onChange={handleChange} type="text" id="operation" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="Controller" className="form-label">Controller</label>
                                <input className="form-control" name='controller' value={inputs.controller || ""}
                                    onChange={handleChange} type="text" id="Controller" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="Display" className="form-label">Display</label>
                                <input className="form-control" name='display' value={inputs.display || ""}
                                    onChange={handleChange} type="text" id="Display" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="Protection" className="form-label">Protection</label>
                                <input className="form-control" name='protection' value={inputs.protection || ""}
                                    onChange={handleChange} type="text" id="Protection" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="Winding_Material" className="form-label">Winding Material</label>
                                <input className="form-control" name='windingMaterial' value={inputs.windingMaterial || ""}
                                    onChange={handleChange} type="text" id="Winding_Material" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="Capacity" className="form-label">Capacity</label>
                                <input className="form-control" name='capacity' value={inputs.capacity || ""}
                                    onChange={handleChange} type="text" id="Capacity" required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Upload Product Image</label>
                                <input
                                    className="form-control"
                                    name='imageName'
                                    onChange={(e) => setImage(() => (e.target.files[0]))}
                                    type="file"
                                    id="image"

                                />
                            </div>
                        </div>
                        <div className='col-md-6 '>

                            <img className='rounded-lg w-50 mt-3' height={100} width="100px" alt='pro_img' src={`${BASE_URL + VIEW_PRODUCT_IMAGE}${inputs?.imageName}`} />

                        </div>

                    </div>
                    <div className='containter text-center'>
                        <button className=' border-0 btn_orange my-4 px-2 py-2 '>Update</button>
                    </div>

                </form>
            </div>

        </>
    )
}


export default EditProduct