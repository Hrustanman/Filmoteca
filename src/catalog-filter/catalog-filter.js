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
   
        let listItems = this.props.catalogItem.map((some) => {

            return <div className= 'items col-6' onClick={() => this.props.quickLinkChange()(some)}>{some}</div> 
        })
        let catalogClass = 'listItems'
        if (this.state.display) {
            catalogClass += ' done'
        } 
        return (
             
            <div  onClick={this.ShowCatalog}
                //onMouseLeave={this.ShowCatalog}
            >
                <div className='titleFiltr'>
                    <span >{this.props.name1}</span>
                </div >
                <div className={catalogClass} onMouseLeave={this.ShowCatalog} >
                    <ul className='row' style={{ display: 'flex', padding: '15px',width: '300px' }} >
                        {listItems}
                    </ul>
                </div>
            </div>
			)
    }
}
export default CatalogFilter