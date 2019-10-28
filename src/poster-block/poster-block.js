import React, {Component } from 'react'
import './poster-block.css'
import CatalogFilter from '../catalog-filter/catalog-filter'
class PosterBlock extends Component {
    state = {
        visible: true
    }
    visibleFilmposter = () => {

            this.setState({ visible: !this.state.visible })

        }
   
    render() {
        
        return(

            <div onClick={this.props.onDel} onClick={this.visibleFilmposter} className='poster_block my-3 mx-3'>
                <a>
                    <img src={this.props.image}  />
                    <div> <h6>{this.props.name}({this.props.year})</h6></div>
                </a>
                {this.state.visible && <div>
                    Other informations
                    {this.props.actor}
                </div>}
                </div>
            
        )
    }}
export default PosterBlock