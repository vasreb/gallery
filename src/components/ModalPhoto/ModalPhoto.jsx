import React from 'react';
import './style.css';
import closeModalPhoto from './../../actions/closeModalPhoto';
import PropTypes from 'prop-types';

export default function ModalPhoto(props) {
    const closeWindow = () => {
        props.dispatch(closeModalPhoto());
    }
    if (props.isOpen) {
        const {url, alt} = props;
        return (
            <div className="modal-photo" onClick={closeWindow}> 
                <img className="modal-photo__img" src={url} alt={alt}/>
            </div>
        )
    } else return '';
}

ModalPhoto.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}