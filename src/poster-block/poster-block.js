import React, {Component } from 'react'
import './poster-block.css'
import { Link } from 'react-router-dom'

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

            <div className='container'
                onMouseLeave={this.nonVisibleFilmposter} 
                onMouseMove={this.visibleFilmposter}
                className='poster_block my-3 mx-3'>
                <div className='row'>
                    <div className = 'col'>
                        <a>
                         <img src={this.props.image} />
                    <div> <h6>{this.props.name}({this.props.year})</h6></div>
                </a>
                    </div>
                    {this.state.visible && <div className='popupPosterBlock col-4'>
                        <div style={{ width: '40%' }}>
                            <a>
                                <Link to='movieDescription'> <img style={{ width: '100%', height: '100%' }} src={this.props.imagePopup} />
                                </Link>
                            </a>
                        </div> 
                        <div style={{ width: '60%', maxWidth: '60%', textAlign: 'left' }}>
                            <p>Назва: <a href ='#'>{this.props.name}</a></p>
                            <p>Рік:  <a href='#'>{this.props.year}</a></p>
                            <p>Країна: <a href='#'>{this.props.country}</a></p>
                            <p>Жанр:  <a href='#'>{this.props.genre}</a></p>
                            <p>Режисер: <a href='#'> {this.props.director}</a></p>
                            <p>Актори:  <a href='#'>{this.props.actors}</a></p>
                        </div>
                </div>}
            </div>
                </div>
            
        )
    }}
export default PosterBlock