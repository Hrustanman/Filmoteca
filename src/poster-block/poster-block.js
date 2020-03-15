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

            <div
                //onMouseLeave={this.nonVisibleFilmposter} 
                onMouseMove={this.visibleFilmposter}
                className=' poster_block my-3 mx-3'>
                <div className='row' >
                    <div className = 'col'>
                        <a>
                            <Link to='movieDescription'><img style={{ width: '100%'}} src={this.props.image} /></Link>
                            <div style={{ textAlign:'left' }} > {this.props.name} ({this.props.year})</div>
                </a>
                    </div>
                    {this.state.visible && <div style={{ position: 'absolute' }} className='popupPosterBlock col-4'>
                        <div style={{ width: '40%' }}>
                            <a>
                                <Link to='movieDescription'> <img src={this.props.imagePopup} />
                                </Link>
                            </a>
                        </div> 
                        <div className= 'filmData'>
                            <div> <span>Назва:   </span><span><a href ='#'>{this.props.name}</a>    </span></div>
                            <div> <span>Рік:     </span><span><a href='#'>{this.props.year}</a>     </span></div>
                            <div> <span>Країна:  </span><span><a href='#'>{this.props.country}</a>  </span></div>
                            <div> <span>Жанр:    </span><span><a href='#'>{this.props.genre}</a>    </span></div>
                            <div> <span>Режисер: </span><span><a href='#'> {this.props.director}</a></span></div>
                            <div> <span>Актори:  </span><span><a href='#'>{this.props.actors}</a>   </span></div>
                        </div>
                </div>}
            </div>
                </div>
            
        )
    }}
export default PosterBlock