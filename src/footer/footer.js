import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
    render() {
        return (

            <footer >


                <div  style={{ paddingTop: '5rem' }} className=' padding_foter d-flex justify-content-around'>

                    <div> <a>Контакти</a> </div>
                     

                    <div> <a>Підтримка</a> </div>
                     
                   
                    <div> Ми у соцмережах: </div>

                    <div> © 2019 FilMotecA.me </div>
                </div>
 
              
</footer>
           
            )
    }
}
export default Footer