import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import PropTypes from 'prop-types';
import openModalPhoto from './../../actions/openModalPhoto';


function Photo(props) {
    const {
        title,
        url,
        thumbnailUrl
    } = props;
    const renderModalPhoto = () => {
        props.dispatch(openModalPhoto({
            url,
            alt: title
        }))
    }
    return (
        <div className="photo-card" onClick={renderModalPhoto}>
            <img className="photo-card__img" src={thumbnailUrl} alt={title}/>
            <p className="photo-card__title">{title}</p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(
    mapDispatchToProps
)(Photo);


Photo.propTypes = {
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
}