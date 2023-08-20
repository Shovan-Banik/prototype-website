import Lottie from "lottie-react";
import animation1 from '../../assets/animation/animation_llhlgmne.json'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Swal from "sweetalert2";
import Marquee from "react-fast-marquee";

const Step1Form = () => {
    const { formData, setFormData } = useContext(DataContext);
    const navigate = useNavigate();

    const handleStep1 = (event) => {
        event.preventDefault();
        const form = event.target;
        const pName = form.pName.value;
        const pDescription = form.pDescription.value;
        const client = form.client.value;
        const contractor = form.contractor.value;
        const newFormData = { ...formData, pName, pDescription, client, contractor };
        setFormData(newFormData);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Step1 Done',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/step2Form');
    }
    return (
        <>
            <Marquee>
               <p className="py-5">welcome to this Website. It's a simple prototype website. Please share your data and get your result.</p>
            </Marquee>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 md:w-1/2">
                        <Lottie animationData={animation1} loop={true} />
                    </div>
                    <div className="card flex-shrink-0 border-2 border-red-900 shadow-2xl md:w-1/2">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center text-red-800">Step 1</h1>
                            <form onSubmit={handleStep1}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Project Name</span>
                                    </label>
                                    <input type="text" name='pName' placeholder="Project Name" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Project Description</span>
                                    </label>
                                    <textarea name="pDescription" id="" cols="30" rows="10" className="input input-bordered text-black" placeholder="Project Description" required></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Client</span>
                                    </label>
                                    <input type="text" name='client' placeholder="Client" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Contractor</span>
                                    </label>
                                    <input type="text" name='contractor' placeholder="Contractor" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="bg-red-700 hover:bg-red-900 text-white p-2 rounded-lg" type="submit" value="Next Step" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step1Form;