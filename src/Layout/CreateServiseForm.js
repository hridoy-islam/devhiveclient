import React from 'react';
import CreateServiseFormHeader from '../Components/Header/CreateServiseFormHeader';
import { Outlet } from 'react-router-dom';

const CreateServiseForm = () => {
    return (
        <div>
           <CreateServiseFormHeader/>
           <Outlet></Outlet> 
        </div>
    );
};

export default CreateServiseForm;