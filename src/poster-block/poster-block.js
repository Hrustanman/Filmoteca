import React, {Component } from 'react'
import './poster-block.css'
import { Link } from 'react-router-dom'

class PosterBlock extends Component {
    state = {
        visible: false
    }
    visibleFilmposter = () => {

        this.setState({ visible: true})

    }
    nonVisibleFilmposter = () => {

        this.setState({ visible: false})

    }
 
    render() {
        
        return(

            <div className='posterBlock my-3 mx-3' onMouseMove={this.visibleFilmposter}
             onMouseLeave={this.nonVisibleFilmposter}
            >
                <div>   <Link to={'/movieDescription/' + this.props.id }> <img src={this.props.image} /> </Link>
                    <b>{this.props.name}</b>
                </div>
                <div>
                    {this.state.visible && <div className='filmData'>
                        <div> <p>Рік:     </p><span><a href='#'>{this.props.year}</a>     </span></div>
                        <div> <p>Країна:  </p><span><a href='#'>{this.props.country}</a>  </span></div>
                        <div> <p>Жанр:    </p><span><a href='#'>{this.props.genre}</a>    </span></div>
                        <div> <p>Режисер: </p><span><a href='#'>{this.props.director}</a> </span></div>
                        <div> <p>Актори:  </p><span><a href='#'>{this.props.actors}</a>   </span></div>
                    </div>}

                </div>
            </div > 
            
        )
    }}
export default PosterBlock
//    < div
//onMouseLeave = { this.nonVisibleFilmposter }
//onMouseMove = { this.visibleFilmposter }
//className = ' poster_block my-3 mx-3' >
//    <div className='row' >
//        <div className='col'>
//            <a>
//                <Link to='movieDescription'><img style={{ width: '100%' }} src={this.props.image} /></Link>
//                <div style={{ textAlign: 'left' }} > {this.props.name} ({this.props.year})</div>
//            </a>
//        </div>
//        {this.state.visible && <div style={{ position: 'absolute' }} className='popupPosterBlock col-4'>
//            <div className='popupPosterBlockImg'>
//                <a>
//                    <Link to='movieDescription'> <img src={this.props.imagePopup} />
//                    </Link>
//                </a>
//            </div>
//            <div className='filmData'>
//                <div className='filmTitle'>{this.props.name}</div>
//                <div> <span>Рік:     </span><span><a href='#'>{this.props.year}</a>     </span></div>
//                <div> <span>Країна:  </span><span><a href='#'>{this.props.country}</a>  </span></div>
//                <div> <span>Жанр:    </span><span><a href='#'>{this.props.genre}</a>    </span></div>
//                <div> <span>Режисер: </span><span><a href='#'> {this.props.director}</a></span></div>
//                <div> <span>Актори:  </span><span><a href='#'>{this.props.actors}</a>   </span></div>
//            </div>
//        </div>}
//    </div>

//                </div >