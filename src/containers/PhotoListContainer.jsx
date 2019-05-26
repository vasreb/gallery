import { connect } from 'react-redux';
import PhotoList from './../components/PhotoList/PhotoList';

function mapStateToProps (state, ownProps) {
    const {photos, isLoading, isError} = state;
    let {currentAlbumId} = state;
    if (ownProps.albumId) {
        currentAlbumId = ownProps.albumId
    }
    return {
        photos,
        isLoading,
        isError,
        currentAlbumId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoList);