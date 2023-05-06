import React from 'react';
import { Link } from 'react-router-dom';

const Nonefoundpage = () => {
    return (
        <div className='container'>
             This page doesn't exist. Go <Link to="/">home</Link>
        </div>
    );
};

export default Nonefoundpage;