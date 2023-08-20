import React, { useContext } from 'react';
import { DataContext } from '../../DataProvider/DataProvider';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Result = () => {
    const { formData } = useContext(DataContext);
    console.log(formData);

    const formKeys = Object.keys(formData);
    const formValues = Object.values(formData);

    const handlePDF = async () => {
        const doc = new jsPDF({ orientation: 'landscape' });

        const tableData = [formKeys, formValues];

        doc.autoTable({
            head: [tableData[0]],
            body: [tableData[1]],
        });
        doc.save('data.pdf');
    }

    return (
        <>
            <div className='text-center py-5'>
                <button onClick={handlePDF} className='btn btn-error btn-sm'>Download PDF</button>
            </div>
            <div className="overflow-x-auto" id="my-table">
                <table className="table">
                    <thead className='text-white'>
                        <tr>
                            {formKeys.map((key, index) => (
                                <th className='border-2 border-white' key={index}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {formValues.map((value, index) => (
                                <td className='border-2 border-white' key={index}>{value}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Result;