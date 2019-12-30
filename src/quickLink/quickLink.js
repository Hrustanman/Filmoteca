import React, { Component } from 'react'

class QuickLink extends Component {


    render() {
 
        return (
            <>

                <a onClick={() => this.props.quickLinkChange()(this.props.quickLinkName)}
                    className="btn btn-secondary my-1 mx-1"
                    href='#' >{this.props.quickLinkName}</a >
            </>
			)
    }
}
export default QuickLink