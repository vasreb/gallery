import { connect } from 'react-redux';
import PhotoList from './../components/PhotoList/PhotoList';

function mapStateToProps (state) {
    const {photos, isLoading} = state;
    return {
        photos,
        isLoading
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