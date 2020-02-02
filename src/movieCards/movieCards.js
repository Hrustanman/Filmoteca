import React, { Component } from 'react'

class MovieCards extends Component {
    render() {
        return (
            <div>
            <div> movieCards</div>
                <div><img src={this.props.image} /></div>
            </div>
            )
    }
}
export default MovieCards