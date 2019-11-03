import React from 'react';
import { Component } from 'react'
import Header from './header/header';
import './App.css'
import Footer from './footer/footer'
import PosterBlock from './poster-block/poster-block'
import CatalogFilter from './catalog-filter/catalog-filter'
import zodiac from './Images/zodiac.jpg'
import atlantis from './Images/atlantis.jpg'
import garry from './Images/garry poter.jpg'
import citizen from './Images/law-abiding citizen.jpg'
import rempage from './Images/rempage.jpg'
import slown from './Images/slown.jpg'
import unknow from './Images/unknow.jpg'
import Apocalypto from './Images/Apocalypto.jpg'
import Interstellar from './Images/Interstellar.jpg'
import jungle from './Images/jungle.jpg'
import sniper from './Images/sniper.jpg'
import mind from './Images/mind.jpg'
import garryBig from './Images/garry poter big.jpg'
import wild from './Images/into the wild.jpg'
import QuickLink from './quickLink/quickLink';
import Popup from 'reactjs-popup'


class App extends Component {
    state = {
        filmPresent: [
            {
                id: 1,
                image: rempage,
                name: 'Ремпейдж',
                year: 2018,
                actor: '',
             
            },
            {
                id: 2,
                image: slown,
                name: 'Cлоун',
                year: 2018,
                actor: '',
               
            },
            {
                id: 3,
                image: unknow,
                name: 'Невідомий',
                year: 2011,
                actor: '',
              
            },
            {
                id: 4,
                image: zodiac,
                name: 'Зодіак',
                year: 2007,
                actor: '',
               
            },
            {
                id: 5,
                image: citizen,
                name: 'Законослухляний громадянин',
                year: 2009,
                actor: '',
                
            },
            {
                id: 6,
                image: atlantis,
                name: 'Атлантида',
                year: 2017,
                actor: '',
                
            },
            {
                id: 7,
                image: garry,
                imagePopup: garryBig,
                name: 'Гарі Потер і філософський камінь',
                year: 2001,
                actor: '',
          
            },
            {
                id: 8,
                image: Apocalypto,
                name: 'Апокаліпсис',
                year: 2006,
                actor: '',
              
            },
            {
                id: 9,
                image: Interstellar,
                name: 'Інтерстеллар',
                year: 2014,
                actor: ''
               
            },
            {
                id: 10,
                image: jungle,
                name: 'Джунглі',
                year: 2017,
                actor: '',
               
            },
            {
                id: 11,
                image: sniper,
                name: 'Снайпер',
                year: 2014,
                actor: '',
                
            },
            {
                id: 12,
                image: mind,
                name: 'Ігри розуму',
                year: 2001,
                actor: '',
                
            },
            {
                id: 13,                                                      
                image: wild,
                name: 'В диких умовах',
                year: 2007,
                actor: '',
               
            }


        ],
        catalogFilter: [
            {
                catalogName: 'Всі жанри',
                catalogItem: ['Артхаус ', 'Біографія', 'Бойовик', 'Вестерн',
                    'Військові', 'Детективи', 'Документальні', 'Драми',
                    'Історичні', 'Комедії', 'Кримінал', 'Мелодрами', 'Містичні',
                    'Пригодницькі', 'Музикальні', 'Жахи', 'Спорт', 'Фантистика',
                    'Фентезі', 'Трилери', 'Постапокаліптичні'],
                id: 1

            },
            {
                catalogName: 'Всі роки',
                catalogItem: [2019, 2018, 2017, 2016, '2010-2019', '2000-2010', '1990-2000', '1980-1990'],
                id: 2
            },
            {
                catalogName: 'Всі країни',
                catalogItem: ['США', 'Франція', 'Канада', 'Німеччина', 'Росія', 'Польща', 'Великобританія', 'Данія', 'Швеція'],
                id: 3
            },
            {
                catalogName: 'По популярності',
                catalogItem: ['По рейтингу IMDB', 'По касовим зборам', 'По новизні', 'По бюджет', 'По популярності'],
                id: 4
            },

        ],
        quickLink: [
            {
                quickLinkName: '2017',
                id: 1
             },
            {
                quickLinkName: '2018',
                id: 2
             },
            {
                quickLinkName: '2019',
                id: 3
             },
            {
                quickLinkName: 'Радянські фільми',
                id: 4
             },
            {
                quickLinkName: 'Американські фільми',
                id: 5
             },
            {
                quickLinkName: 'Зарубіжні фільми',
                id: 6
             },
            {
                quickLinkName: 'Трилери',
                id: 7
             },
            {
                quickLinkName: 'Пригодницькі',
                id: 8
             },
            {
                quickLinkName: 'Кримінальні',
                id: 9
             },
            {
                quickLinkName: 'Жахи',
                id: 10
             },
            {
                quickLinkName: 'Фантастика',
                id: 11
             },
            {
                quickLinkName: 'Історичні',
                id: 12
            },
            {
                quickLinkName: 'Фентезі',
                id: 12
            },
            {
                quickLinkName: 'Містичні',
                id: 12
            },
            {
                quickLinkName: 'Драми',
                id: 12
            },
            {
                quickLinkName: 'Комедії',
                id: 12
            },
        ]



    }

    //onDel = (id) => {
    //    const filmPresent = [...this.state.filmPresent]
    //    const ind = filmPresent.findIndex((el)=> el.id === id)
    //    filmPresent.push(filmPresent[ind])
    //    this.setState({ filmPresent })
    //    console.log({ filmPresent })
    //}


    //onDel = (id) => {
    //    const filmPresent = [...this.state.filmPresent]
    //    const ind = filmPresent.findIndex((el) => el.id === id)
    //    const newItem = {
    //        actor: 'Bon Jovi' 
    //    }
    //    filmPresent.push(newItem)
    //    this.setState({ filmPresent })
    //    console.log({ filmPresent })
    //}
    
    render() {
        let filmPoster = this.state.filmPresent.map((filmPresent) => {
            return (
                <PosterBlock

                    //name={filmPresent.name}
                    //image={filmPresent.image}
                    //year={filmPresent.year}
                    {...filmPresent}
                    //key={filmPresent.id}
                    key={filmPresent.id}
                    //onDel={() => this.onDel(filmPresent.id)}
                  
                />
            )


        })
        let quickLink = this.state.quickLink.map((quickLink) => {
            return ( 
                <QuickLink

                    {...quickLink}
                    key={quickLink.id}
                />
                )
        })
        return (
               
            <div>
                <Header />
                
                <div className='container'>
                    <div style={{ marginTop: '100px' }}>
                        <h2 onClick={this.onPosterClick}>Швидкі посилання:</h2>
                        <div className='d-inline-flex flex-wrap justify-content-center'>
                            {quickLink}
                    </div>
                    </div>
                </div>
               
                <div className=' container' style={{ marginTop:  '30px'}}>
                    <div className='jumbotron border rounded'>
                        <div className = 'content_body'>
                            <div>
                                <div className='catalog-content-inner'>
                                    <div className='container'>
                                        <ul style={{ padding: '60px' }} className="d-flex justify-content-between">
                                          

                                            <CatalogFilter
                                                name1={this.state.catalogFilter[0].catalogName}
                                                catalogItem={this.state.catalogFilter[0].catalogItem}
                                                key={this.state.catalogFilter[0].id}


                                            />
                                            <CatalogFilter
                                                name1={this.state.catalogFilter[1].catalogName}
                                                catalogItem={this.state.catalogFilter[1].catalogItem}
                                                key={this.state.catalogFilter[1].id}
                                            />
                                            <CatalogFilter
                                                name1={this.state.catalogFilter[2].catalogName}
                                                catalogItem={this.state.catalogFilter[2].catalogItem}
                                                key={this.state.catalogFilter[2].id}
                                            />
                                            <CatalogFilter
                                                name1={this.state.catalogFilter[3].catalogName}
                                                catalogItem={this.state.catalogFilter[3].catalogItem}
                                                key={this.state.catalogFilter[3].id}
                                               

                                            />


                                        </ul>
                                    </div>
                                    <div className='d-inline-flex flex-wrap justify-content-center'>
                                        {filmPoster}

                                    </div>
                                    <div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                <Footer />
            </div>
            )

    }


   
}

export default App;
