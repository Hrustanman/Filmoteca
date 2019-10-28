import React, { Component } from 'react'

class QuickLink extends Component {
    render() {
 
        return (
            <>
                <a className="btn btn-secondary my-1 mx-1" href='#' >{this.props.quickLinkName}</a >
            </>
			)
    }
}
export default QuickLink