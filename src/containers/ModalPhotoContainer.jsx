import { connect } from 'react-redux';
import ModalPhoto from './../components/ModalPhoto/ModalPhoto';

function mapStateToProps (state) {
    const { url, alt, isOpen } = state.currentPhoto;
    return {
        url,
        alt,
        isOpen
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
)(ModalPhoto);