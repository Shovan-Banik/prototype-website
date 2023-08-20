import { createContext, useState } from "react";

export const DataContext=createContext();
const DataProvider = ({children}) => {
    const[formData,setFormData]=useState({});

    const dataInfo={
        formData,
        setFormData
    }
    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;