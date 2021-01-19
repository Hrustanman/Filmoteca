import React from 'react';
import { Component } from 'react'
import Header from './header/header';
import './App.css'
import SignUp from './signUp/signUp'
import LoginForm from './loginForm/loginForm'
import PosterBlock from './poster-block/poster-block'
import CatalogFilter from './catalog-filter/catalog-filter'
import MovieCards from './movieCards/movieCards'
import harry from './Images/harry.jpg'
import QuickLink from './quickLink/quickLink';
import rampage from './Images/rampage.jpg'
import sloane from './Images/sloane.jpg'
import unknown from './Images/unknown.jpg'
import zodiac from './Images/zodiac.jpg'
import lowAbiding from './Images/law-abiding.jpg'
import atlantis from './Images/atlantis.jpg'
import apocalypto from './Images/apocalypto.jpg'
import interstellar from './Images/interstellar.jpg'
import jungle from './Images/jungle.jpg'
import sniper from './Images/sniper.jpg'
import beautifulMind from './Images/beautifulMind.jpg'
import intoTheWild from './Images/intoTheWild.jpg'
import envelope from './Images/Icon/envelope.png'
import iconePhone from './Images/Icon/iconPhone.png'
import mapflag from './Images/Icon/mapflag.png'
import facebook from './Images/Icon/facebook.png'
import twitter from './Images/Icon/twitter.png'
import linkedin from './Images/Icon/in.svg'
import yt from './Images/Icon/yt.svg'
import { } from 'react-icons'
import Popup from 'reactjs-popup'
import { Link, NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import itbutton from './index.js'
import { useHistory } from 'react-router-dom'
import { catalogFilterData,filmPresentData } from './example'



class App extends Component {
    
    state = {
        filmPresent: filmPresentData,
        
        catalogFilter: catalogFilterData,
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
                quickLinkName: 'Трилер',
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
                id: 13
            },
            {
                quickLinkName: 'Фентезі',
                id: 14
            },
            {
                quickLinkName: 'Містичні',
                id: 15
            },
            {
                quickLinkName: 'Драма',
                id: 16
            },
            {
                quickLinkName: 'Комедії',
                id: 17
            },
        ],
        tern: '',
        visiblePoster: [],
        disabledFilm: false,
        next : 1,
    }
    componentDidMount() {
        window.addEventListener('load', this.Clicker);
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
    nextPage =()=>  {
        this.setState((state) => { return { next:state.next + 1 } } )
       
    }
   
    previousPage = () => {
        this.setState({ next: --this.state.next }) 
    }
    onLabelChange = (e) => {
        this.setState({ tern: e.target.value })
 }

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            tern: ''
        })
    }
    Clicker = () => {
        let ar = this.search(this.state.filmPresent, this.state.tern)
        this.setState({ visiblePoster: ar })
    }

    search = (item, tern) => {
        if (tern.length === 0) {
            return item
        }

        var filmsToDisplay = item.filter((it) => {
            let lowerCaseTern = tern.toLowerCase();

            if (it.year.toLowerCase().indexOf(tern) > -1) {
                return true;
            }
            if (it.actors.toLowerCase().indexOf(lowerCaseTern) > -1) {
                return true;
            }
            if (it.director.toLowerCase().indexOf(lowerCaseTern) > -1) {
                return true;
            }
            if (it.name.toLowerCase().indexOf(lowerCaseTern) > -1) {
                return true;
            }
            if (it.genre.toLowerCase().indexOf(lowerCaseTern) > -1) {
                return true;
            }
            if (it.country.toLowerCase().indexOf(lowerCaseTern) > -1) {
                return true;
            }

        }) /*|| this.setState({disabledFilm: true})*/

        if (filmsToDisplay.length > 0) {
            this.setState({ disabledFilm: false })
        
        }
        else {
            this.setState({ disabledFilm: true });
        }

        return filmsToDisplay;
    }

    quickLinkChange = (quikLink) => {
        this.setState({ tern: quikLink }, this.Clicker)
    }
    
    //itbutton = () => {
    //    this.setState((state) => { return {next: state.next + 1 } })
    //}

    render() {
        //const history = useHistory()
        let filmPoster = this.state.visiblePoster.map((visiblePoster) => { 
            return (
                <PosterBlock
                    //name={filmPresent.name}                    
                    //image={filmPresent.image}
                    //year={filmPresent.year}
                    //{...visiblePoster}
                    key={visiblePoster.id}
                    {...visiblePoster} 
                //key={filmPresent.id}
                //onDel={() => this.onDel(filmPresent.id)}
                />
            )
            
        })
        //let filmCards = this.state.filmPresent.map((filmPresent) => {
        //    return (
        //        <MovieCards
        //            //filmImage={filmPresent.image}
        //            {...filmPresent}
        //            //it={itbutton}
        //        />
        //    )

        //})
       
        let quickLink = this.state.quickLink.map((quickLink) => {
            return (
                <QuickLink
                    quickLinkChange={() => this.quickLinkChange}
                    {...quickLink}
                    key={quickLink.id}
              />
            )
        })
        let item = this.state.filmPresent.id
        return (
            <div>
                <Router>
                <Header
                        onLabelChange={this.onLabelChange}
                        onSubmit={this.onSubmit}
                        value={this.state.tern}
                        Clicker={this.Clicker}
                 />
                 

                <div className='container'>
                    <div style={{ marginTop: '100px' }}>
                        <div className='d-inline-flex flex-wrap justify-content-center'>
                            {quickLink}
                        </div>
                    </div>
                </div>
                    <div className=' container' style={{ marginTop: '30px' }}>
                        <div  className='jumbotron'>
                        <div>
                                <div>
                                    <div style={{ borderBottom:'1px solid #222' }} className='catalog-content-inner borderLine'>
                                        <div className='container borderLine'>
                                        <ul  className="d-flex justify-content-center transoformColumn ">
                                            <CatalogFilter
                                                name1={this.state.catalogFilter[0].catalogName}
                                                catalogItem={this.state.catalogFilter[0].catalogItem}
                                                key={this.state.catalogFilter[0].id}
                                                quickLinkChange={() => this.quickLinkChange}
                                            />
                                            <CatalogFilter
                                                name1={this.state.catalogFilter[1].catalogName}
                                                catalogItem={this.state.catalogFilter[1].catalogItem}
                                                key={this.state.catalogFilter[1].id}
                                                quickLinkChange={() => this.quickLinkChange}
                                            />
                                            <CatalogFilter
                                                name1={this.state.catalogFilter[2].catalogName}
                                                catalogItem={this.state.catalogFilter[2].catalogItem}
                                                key={this.state.catalogFilter[2].id}
                                                quickLinkChange={() => this.quickLinkChange}
                                            />
                                            <CatalogFilter
                                                name1={this.state.catalogFilter[3].catalogName}
                                                catalogItem={this.state.catalogFilter[3].catalogItem}
                                                key={this.state.catalogFilter[3].id}
                                                quickLinkChange={() => this.quickLinkChange}
                                            />
                                            </ul>
                                           
                                        </div>
                                    <div style={{ textAlign: 'center' }} className='container d-inline-flex flex-wrap justify-content-center'>

                                            <Route path='/' exact component={() => filmPoster} />
                                            <Route path='/page/1' component={() => filmPoster.slice(0, 5)} />
                                            <Route path='/page/2' component={() => filmPoster.slice(5, 10)} />
                                            <Route path='/page/3' component={() => filmPoster.slice(10, 14)} />
                                            <Route path='/loginForm' component={LoginForm} />
                                            <Route path='loginForm/signUp' component={SignUp} />
                                      
                                            <Route path={'/movieDescription/:id'}
                                                render={({ match, history, location }) => {
                                                    console.log(match.params.id)
                                                    const { id } = match.params
                                                    return (<MovieCards /*id={id}*/ {...this.state.filmPresent[id - 1]} />)
                                                }} /> 
                                            {this.state.disabledFilm && <h1 className='col-12'>За вашим запитом нічого не знайдено</h1>}
                
                                            <NavLink to='/movieDescription/shits'>sdsd</NavLink>
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
                            <li className="page-item">
                                <Link onClick={this.previousPage}  className="page-link" to={'/page/' + this.state.next}>Попередня</Link>
                            </li>
                            <li className="page-item"><Link to = '/page/1' className="page-link">1</Link></li>
                            <li className="page-item"><Link to = '/page/2' className="page-link">2</Link></li>
                            <li className="page-item"><Link to = '/page/3' className="page-link">3</Link></li>
                            <li className="page-item"><Link to = '/page/4' className="page-link">4</Link></li>
                            <li className="page-item"><Link to = '/page/5' className="page-link">5</Link></li>
                            <li className="page-item">
                                <Link onClick={this.nextPage} className="page-link" to={'/page/' + this.state.next}>Наступна</Link>
                            </li>
                        </ul>
                        <button onClick={this.nextPage}>Count+</button>
                        <span style={{ color:'aqua' }}>{this.state.next}</span>
                    </nav>
                   

                    <footer>
                        <div>
                            <div className = 'footerContacts'>
                            <div>
                                  <div>
                                    <h6>Наші контакти:</h6>
                                    <div> <img src={envelope} /><span> hrustanman@gmail.com</span></div>
                                    <div> <img src={iconePhone} /> <span>+380(97)7484854 </span></div>
                                    <div> <img src={mapflag} /><span> Zhitomir, Ukraine</span> </div>
                                  </div>
                            </div>
                                <div className ='socialNetwork'>
                                    <div > <h6> Ми у соцмережах:</h6> </div>
                                    <a href = '#'> <img src={facebook} /> </a>
                                    <a href='#'><img src={twitter} /> </a>
                                    <a href='#'><img src={linkedin} /> </a>
                                    <a href='#'><img src={yt} /> </a>
                                </div>
                            </div>
                            <div className='copyright'><h6> © 2020 Filmoteca.me </h6></div>
                        </div>
                    </footer>
                </Router>
                    </div> 
        )
    }
}

export default App;

