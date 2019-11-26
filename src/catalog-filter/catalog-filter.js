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

            return <div onClick={() => this.props.quickLinkChange()(some)}>{some}<hr/></div> 
        })
        let catalogClass = 'listItems'
        if (this.state.display) {
            catalogClass += ' done'
        } 
        return (

            <div onClick={this.ShowCatalog}
                //onMouseLeave={this.ShowCatalog}
               
            >
             
                <div className='titleFiltr' 
                    
                >
                    <span >{this.props.name1}</span>
                </div >
                <div onMouseLeave={this.ShowCatalog} className={catalogClass}>
                    
                        {listItems} s
                    
                </div>
            </div>
			)
    }
}
export default CatalogFilter