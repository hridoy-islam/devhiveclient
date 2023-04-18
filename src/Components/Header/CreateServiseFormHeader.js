import React from 'react';

const CreateServiseFormHeader = () => {
        return (
        <div>
            <ul className="steps flex justify-center">
                <li className="step step-primary">
                    <span>Overview</span>
                </li>
                <li className="step step-primary">
                    <span>Pricing</span>
                </li>
                <li className="step step-primary ">
                    <span>Requirements</span>
                </li>
                <li className="step">
                    <span>Gallery</span>
                </li>
                <li className="step">
                    <span>Publish</span>
                </li>
            </ul>
            <div className='divide'></div>
        </div>
    );
};

export default CreateServiseFormHeader;