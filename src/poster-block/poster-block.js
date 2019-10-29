import React, {Component } from 'react'
import './poster-block.css'
class PosterBlock extends Component {
    state = {
        visible: false
    }
    visibleFilmposter = () => {

        this.setState({ visible: true /* !this.state.visible*/ })

    }
    nonVisibleFilmposter = () => {

        this.setState({ visible: false /* !this.state.visible*/ })

    }
   
    render() {
        
        return(

            <div className = 'container'
                onMouseLeave={this.nonVisibleFilmposter} 
                onMouseMove={this.visibleFilmposter}
                className='poster_block my-3 mx-3'>
                <div className='row'>
                    <div className = 'col'>
                    <a>
                    <img src={this.props.image}  />
                    <div> <h6>{this.props.name}({this.props.year})</h6></div>
                </a>
                    </div>
                    {this.state.visible && <div className = 'col-4'
                        style={{ zIndex: '10', position: 'absolute', border: '1px solid blue', backgroundColor: 'white', }}>
                        <a>
                            <img  src={this.props.image} />
                        <div> <h6>{this.props.name}</h6></div>
                    </a>
                </div>}
            </div>
                </div>
            
        )
    }}
export default PosterBlock