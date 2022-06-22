import React from "react";

class Error extends React.Component {

    render () {
        return (
            <div className="alert alert-danger" role="alert">
                <p className='p-0 m-0'>{this.props.errorMessage}</p>
            </div>
        )
    }
}

export default Error;

