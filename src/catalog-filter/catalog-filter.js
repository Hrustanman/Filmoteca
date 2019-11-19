import React, { Component } from 'react'
import './catalog-filter.css'
class CatalogFilter extends Component {
    state = {
        display: true
    }
    ShowCatalog = () => {
      
            this.setState({ display: !this.state.display })
        
    }
   
    render() {
   
        let liItems = this.props.catalogItem.map((some) => {

            return <li onClick={() => this.props.quickLinkChange()(some)}>{some}</li> 
        })
        let catalogClass = 'liItems'
        if (this.state.display) {
            catalogClass += ' done'
        }
        return (

            <div >
               
                <div  className='titleFiltr' onClick={this.ShowCatalog}>
                    <span >{this.props.name1}</span>
                </div >
                <div className={catalogClass}>
                    <ul  >
                        {liItems}
                    </ul>
                </div>
            </div>
			)
    }
}
export default CatalogFilter