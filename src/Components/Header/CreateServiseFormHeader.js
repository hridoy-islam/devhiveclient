import React from 'react';

const CreateServiseFormHeader = () => {
    return (
        <div>
            <ul className="steps">
                <li className="step step-primary">
                    <span>Overview</span>
                </li>
                <li className="step step-primary">
                    <span>Pricing</span>
                </li>
                <li className="step">Requirements</li>
                <li className="step">Gallery</li>
                <li className="step">Publish</li>
            </ul>
        </div>
    );
};

export default CreateServiseFormHeader;