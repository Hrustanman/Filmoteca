import React, { Component } from 'react'
import './movieCards.css'
import { withRouter } from 'react-router-dom'

class MovieCards extends Component {
    render() {
        return (
            <div className='movieCard'>
                <div className='filmImage'>
                    <img  src={this.props.image} />
                </div>
                <div className='filmDiskription'>
                    <div>
                        <h1> {this.props.name}</h1>
                    </div>
                    <div>
                        {this.props.discription}
                    </div>
                    <div>
                        <span className = 'label'>Режисер:</span>
                        <span> {this.props.director}</span>
                    </div>
                    <div>
                        <span className='label'>В ролях:</span>
                        <span>{this.props.actors},{this.props.secondaryActors}</span>
                    </div>
                    <div>
                        <span className='label'>Продюсер:</span>
                        <span>{this.props.producer}</span>
                    </div>
                    <div>
                        <span className='label'>Сценарист :</span>
                        <span>{this.props.screenwriter}</span>
                    </div>
                    <div>
                        <span className = 'label'>Оператор:</span>
                        <span>{this.props.operator}</span>
                    </div>
                    <div>
                        <span className='label'>Жанр:</span>
                        <span>{this.props.genre}</span>
                    </div>
                    <div>
                        <span className='label'>Рік:</span>
                        <span>{this.props.year}</span>
                    </div>
                    <div>
                        <span className='label'>Країна:</span>
                        <span>{this.props.country}</span>
                    </div>
                    <div>
                        <span className='label'>Тривалість:</span>
                        <span>{this.props.duration}</span>
                    </div>
                    <div>
                        <span className='label'>Переклад:</span>
                        <span>{this.props.translation}</span>
                    </div>
                    <div>
                        <span className='label'>Кінокомпанія:</span>
                        <span>{this.props.company}</span>
                    </div>
                    
                </div>

            </div>
            )
    }
}
export default withRouter(MovieCards)

  