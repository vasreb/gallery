import { connect } from 'react-redux';
import Album from '../components/Album/Album';

function mapStateToProps (state) {
    const {currentAlbumId} = state;
    return {
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
)(Album);