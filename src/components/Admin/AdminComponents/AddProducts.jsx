import React, { useState } from 'react'

const AddProducts = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('The form was submitted: ', inputs);

    }
    return (
        <>

            <div className='form p-4 m-3 card border-0 shadow-lg'>
                <div className='page-title p-3 border-0 card shadow-sm text-center mb-3 '><h6>Add Products</h6></div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="pname" className="form-label">Product Name</label>
                                <input className="form-control" type="text" name='productName' value={inputs.productName || ""}
                                    onChange={handleChange} id="pname" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Type</label>
                                <input className="form-control" name='type' value={inputs.type || ""}
                                    onChange={handleChange} type="text" id="type" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="voltage" className="form-label">Voltage Range</label>
                                <input className="form-control" name='voltage' value={inputs.voltage || ""}
                                    onChange={handleChange} type="text" id="voltage" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="output" className="form-label">Output</label>
                                <input className="form-control" name='output' value={inputs.output || ""}
                                    onChange={handleChange} type="text" id="output" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="Controller" className="form-label">Controller</label>
                                <input className="form-control" name='controller' value={inputs.controller || ""}
                                    onChange={handleChange} type="text" id="Controller" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="Display" className="form-label">Display</label>
                                <input className="form-control" name='display' value={inputs.display || ""}
                                    onChange={handleChange} type="text" id="Display" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="Protection" className="form-label">Protection</label>
                                <input className="form-control" name='protection' value={inputs.protection || ""}
                                    onChange={handleChange} type="text" id="Protection" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="Winding_Material" className="form-label">Winding Material</label>
                                <input className="form-control" name='windingMaterial' value={inputs.windingMaterial || ""}
                                    onChange={handleChange} type="text" id="Winding_Material" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="Capacity" className="form-label">Capacity</label>
                                <input className="form-control" name='capacity' value={inputs.capacity || ""}
                                    onChange={handleChange} type="text" id="Capacity" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Upload Product Image</label>
                                <input className="form-control" name='productimage' value={inputs.productimage || ""}
                                    onChange={handleChange} type="file" id="image" />
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