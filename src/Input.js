import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
    render() {
        const contents = this.props.success ? null : (
            <form className="inline-form">
                <input className="mb-2 mx-sm-3"
                type="text"
                placeholder="guess word"
                data-test="input-box" />
                <button type="submit" data-test="submit-button" className="btn btn-primary mb-2">
                Submit
                </button>
            </form>
        )
        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        success: state.success
    }
}
export default connect(mapStateToProps)(Input);