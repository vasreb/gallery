import { connect } from 'react-redux';
import PhotoList from './../components/PhotoList/PhotoList';

function mapStateToProps (state) {
    const {photos, isLoading, isError, currentAlbumId} = state;
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