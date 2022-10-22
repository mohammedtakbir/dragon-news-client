import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>Here is our Terms and Conditions</h2>
            <p>Go back to <Link to ='/signup'>SignUp</Link></p>
        </div>
    );
};

export default TermsAndCondition;