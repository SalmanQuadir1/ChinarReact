import React, { useEffect, useState } from 'react'
import { ADD_PRODUCT, BASE_URL, GET_ALL_CATEGORIES, toastOptions } from '../../../utils/constants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

const AddProducts = () => {
    const [inputs, setInputs] = useState({});
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState('');
    const navigate = useNavigate();




    useEffect(() => {
        getCategoryList();

    }, []);

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

    const saveProduct = async () => {
        console.log({ product: inputs, imageName: image })
        axios.post(
            BASE_URL + ADD_PRODUCT, { product: JSON.stringify(inputs), imageName: image }, {

            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }


        )
            .then(function (response) {
                console.log(response.data);
                setInputs({});
                setImage('');
                toast.success('Product saved successfully !!', toastOptions);
                if (response.data) {
                    navigate("/admin/viewproducts");
                }

            })
            .catch(function (error) {
                toast.error("Something went wrong !!", error.response)
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

        saveProduct();

    };
    return (
        <>

            <div className='form p-4 m-3 card border-0 shadow-lg'>
                <div className='page-title p-3 border-0 card shadow-sm text-center mb-3 '><h6>Add Products</h6></div>
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
                                <select className="form-control" name='typeId' value={inputs.typeId || ""} onChange={handleChange} type="text" id="typeId" required>
                                    <option value="">Choose One...</option>

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

                    </div>
                    <div className='containter text-center'>
                        <button className=' border-0 btn_orange my-4 px-2 py-2 '>Submit</button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default AddProducts