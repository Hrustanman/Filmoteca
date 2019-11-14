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
                    {this.state.visible && <div className='popupPosterBlock col-4'>
                        <div style={{ width: '40%' }}>
                            <a>
                                <img style={{ width: '100%', height: '100%'}} src={this.props.imagePopup} />
                            </a>
                        </div>
                        <div style={{ width: '60%', maxWidth: '60%', textAlign: 'left' }}>
                            <p>Назва: <a>{this.props.name}</a></p>
                            <p>Рік: {this.props.year}</p>
                            <p>Жанр: {this.props.genre}</p>
                            <p>Режисер: {this.props.director}</p>
                            <p>Актори: {this.props.actors}</p>
                        </div>
                </div>}
            </div>
                </div>
            
        )
    }}
export default PosterBlock