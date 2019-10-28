import React, {Component } from 'react'
import './poster-block.css'
import CatalogFilter from '../catalog-filter/catalog-filter'
class PosterBlock extends Component {

   
    render() {
       
        
        return (
            

            <div onClick={this.props.onDel} onClick={this.props.visibleFilmposter} className='poster_block my-3 mx-3'>
                <a>
                    <img src={this.props.image}  />
                    <div> <h6>{this.props.name}({this.props.year})</h6></div>
                </a>
                {this.props.visible && <div visible={this.props.visible}>
                    Other informations
                    {this.props.actor}
                </div>}
                </div>
            
        )
    }}
export default PosterBlock