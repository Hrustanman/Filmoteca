import React, {Component } from 'react'
import './poster-block.css'
class PosterBlock extends Component {
    state = {
        visible: false
    }
    visibleFilmposter = () => {

        this.setState({ visible: true /* !this.state.visible*/ })

    }
    //nonVisibleFilmposter = () => {

    //    this.setState({ visible: false /* !this.state.visible*/ })

    //}
   
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
                    {this.state.visible && <div className='popupPosterBlock col-4'>
                      
                            <a >
                                {/*<img style={{ width: '200px', height: '300px' }} src={this.props.imagePopup} />*/}
                                <img style={{ width: '60%', height: '90%', boxSizing: 'border-box' }} src={this.props.imagePopup} />
                            </a> 
                      
                        <div>
                            <h6>{this.props.name}</h6>
                            <h6></h6>
                        </div>
                </div>}
            </div>
                </div>
            
        )
    }}
export default PosterBlock