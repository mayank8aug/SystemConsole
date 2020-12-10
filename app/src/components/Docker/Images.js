import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getImages } from '../../actions/docker';

function Images() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getImages());
    });
    return (
        <div>
            This is the Docker Images component
        </div>
    );
}

export default Images;
