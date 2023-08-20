import React, { useContext, useState } from 'react';
import { DataContext } from '../../DataProvider/DataProvider';
import Papa from "papaparse";
import { useNavigate } from 'react-router-dom';

const Step2Form = () => {
    const { formData, setFormData } = useContext(DataContext);
    const navigate=useNavigate();

    // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

    const [maxX, setMaxX] = useState('');
    const [minX, setMinX] = useState('');
    const [maxY, setMaxY] = useState('');
    const [minY, setMinY] = useState('');
    const [maxZ, setMaxZ] = useState('');
    const [minZ, setMinZ] = useState('');

    const handleStep2 = (event) => {
        event.preventDefault();
        const form=event.target;
        const maxX=form.maxX.value;
        const minX=form.minX.value;
        const maxY=form.maxY.value;
        const minY=form.minY.value;
        const maxZ=form.maxZ.value;
        const minZ=form.minZ.value;
        const newFormData={...formData,maxX,minX,maxY,minY,maxZ,minZ};
        setFormData(newFormData);
        navigate('/result');
    }

    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const data = results.data;
                setParsedData(data);

                if (data?.length > 0) {
                    const maxOfX = Math.max(...data.map(o => parseFloat(o.X)));
                    const maxOfY = Math.max(...data.map(o => parseFloat(o.Y)));
                    const maxOfZ = Math.max(...data.map(o => parseFloat(o.Z)));
                    const minOfX = Math.min(...data.map(o => parseFloat(o.X)));
                    const minOfY = Math.min(...data.map(o => parseFloat(o.Y)));
                    const minOfZ = Math.min(...data.map(o => parseFloat(o.Z)));
                    const kP=parsedData.map(k=>k.kp)
                    console.log(kP);

                    setMaxX(maxOfX);
                    setMinX(minOfX);
                    setMaxY(maxOfY);
                    setMinY(minOfY);
                    setMaxZ(maxOfZ);
                    setMinZ(minOfZ);
                }
            },
        });
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 border-2 border-red-900 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center text-red-800">Step 2</h1>
                        <form onSubmit={handleStep2}>
                            <div className='md:flex gap-4'>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Project Name</span>
                                    </label>
                                    <input type="text" defaultValue={formData?.pName} name='pName' placeholder="Project Name" className="input input-bordered text-black" readOnly/>
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Project Description</span>
                                    </label>
                                    <textarea name="pDescription" defaultValue={formData?.pDescription} id="" cols="30" rows="10" className="input input-bordered text-black" placeholder="Project Description" readOnly></textarea>
                                </div>
                            </div>
                            <div className='md:flex gap-4'>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Client</span>
                                    </label>
                                    <input type="text" defaultValue={formData?.client} name='client' placeholder="Client" className="input input-bordered text-black" readOnly />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Contractor</span>
                                    </label>
                                    <input type="text" defaultValue={formData?.contractor} name='contractor' placeholder="Contractor" className="input input-bordered text-black" readOnly />
                                </div>
                            </div>
                            <div className='md:flex gap-4'>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Max_X</span>
                                    </label>
                                    <input type="number" name='maxX' placeholder="Maximum of X" className="input input-bordered text-black" value={maxX} onChange={(e) => setMaxX(e.target.value)} required/>
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Min_X</span>
                                    </label>
                                    <input type="number" name='minX' placeholder="Minimum of X" className="input input-bordered text-black" value={minX} onChange={(e) => setMinX(e.target.value)} required/>
                                </div>
                            </div>
                            <div className='md:flex gap-4'>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Max_Y</span>
                                    </label>
                                    <input type="number" name='maxY' placeholder="Maximum of Y" className="input input-bordered text-black" value={maxY} onChange={(e) => setMaxY(e.target.value)} required/>

                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Min_Y</span>
                                    </label>
                                    <input type="number" name='minY' placeholder="Minimum of Y" className="input input-bordered text-black" value={minY} onChange={(e) => setMinY(e.target.value)} required/>
                                </div>
                            </div>
                            <div className='md:flex gap-4'>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Max_Z</span>
                                    </label>
                                    <input type="number" name='maxZ' placeholder="Maximum of Z" className="input input-bordered text-black" value={maxZ} onChange={(e) => setMaxZ(e.target.value)} required/>
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Min_Z</span>
                                    </label>
                                    <input type="number" name='minZ' placeholder="Minimum of Z" className="input input-bordered text-black" value={minZ} onChange={(e) => setMinZ(e.target.value)} required/>
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Select your file</span>
                                    </label>
                                    <input type="file" name='dataFile' accept=".csv" onChange={changeHandler}/>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="bg-red-700 hover:bg-red-900 text-white p-2 rounded-lg" type="submit" value="Result" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2Form;