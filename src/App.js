import React from 'react';
import { Component } from 'react'
import Header from './header/header';
import './App.css'
import SignUp from './signUp/signUp'
import LoginForm from './loginForm/loginForm'
import PosterBlock from './poster-block/poster-block'
import CatalogFilter from './catalog-filter/catalog-filter'
import MovieCards from './movieCards/movieCards'
import garryBig from './Images/garry poter big.jpg'
import QuickLink from './quickLink/quickLink';
import rempageBig from './Images/rempegeBig1.jpg'
import slownBig from './Images/slownBig.jfif'
import unknownBig from './Images/unknownBig.jfif'
import zodiacBig from './Images/zodiacBig.jfif'
import cityzenBig from './Images/cityzenBig.jfif'
import atlantysBig from './Images/atlantysBig.jfif'
import apocalyptoBig from './Images/apocalyptoBig.jfif'
import interstellarBig from './Images/interstellarBig.jfif'
import jungleBig from './Images/jungleBig.jfif'
import sniperBig from './Images/sniperBig.jfif'
import mindBig from './Images/mindBig.jfif'
import wildBig from './Images/wildBig.jfif'
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



class App extends Component {
 
    state= {
        filmPresent: [
            {
                id: 1,
                image: rempageBig,
                name: 'Ремпейдж',
                year: '2018',
                actors: 'Двейн Джонсон, Наомі Гарріс, Малін Акерман',
                director: 'Бред Пейто',
                genre: 'Бойовик',
                country: 'США',
                discription: "Девіс Окою, колишній спецназівець, борець з браконьєрами, а нині фахівець з мавп, давно зрозумів, що спілкуватися з тваринами йому куди простіше, ніж з людьми. Своє подальше життя він вирішив присвятити роботі в каліфорнійському національному заповіднику: тут Девіс контролює популяцію горил, а заодно наглядає за своїм улюбленцем - горилою-альбіносом Джорджем, якого він колись врятував від смерті. В черговий раз заступивши на зміну, Девіс виявляє, що за ніч з Джорджем відбулися жахливі зміни: він став набагато більше, в рази сильніше і перетворився на некерованого і лютого звіра. Намагаючись у всьому розібратися, Девіс знайомиться з доктором Кейт Колдуелл, яка визнається, що за всім, що відбувається варто корпорація «Енерджін» і її експерименти в області генної інженерії, які вийшли з-під контролю. Кейт і сама колись брала участь в розробках «Енерджін», тому вона єдина, хто може вилікувати Джорджа. Незабаром з'ясовується, що Джордж - не єдине тварина, яке постраждало в результаті помилок корпорації: в країні виявляються ще два звіра-мутанта - дев'ятиметровий вовк і гігантський алігатор. При цьому тварини несподівано об'єднуються і спрямовуються в Чикаго, погрожуючи стерти місто з лиця землі.Фільм «Ремпейдж», заснований на однойменній відеогрі 1980-х років, ви можете подивитися онлайн на нашому сайті.",
                secondaryActors: 'Джо Манганьєлло,Марлі Шелтон,Джеффрі Дін Морган',
                producer: '	Бо Флінн, Хірам Гарсія, Двейн Джонсон',
                screenwriter: "Карлтон К'юз Раян Енгл,Раян Дж.Кондел",
                operator: 'Джерон Презент',
                duration: '107 хвилин',
                translation: 'Професійний',
                company: 'New Line Cinema,Twisted Media, Wrigley Pictures'

            },
            {
                id: 2,
                image: slownBig,
                name: 'Слоун',
                year: '2018',
                actors: 'Джесіка Честейн, Марк Стронг, Гугу Мбата-Роу',
                director: 'Джонн Медден',
                genre: 'драма',
                country: 'США,Франція'

            },
            {
                id: 3,
                image: unknownBig,
                name: 'Невідомий',
                year: '2011',
                actors: 'Леонард Голдберг, Джоел Сілвер, Ендрю Рона',
                director: '	Хауме Кольєт-Серра',
                genre: 'трилер',
                country: 'США, Німеччина'
            },
            {
                id: 4,
                image: zodiacBig,
                name: 'Зодіак',
                year: '2007',
                actors: 'Джейк Джилленгол, Марк Руффало, Роберт Дауні',
                director: 'Девід Фінчер',
                genre: '	трилер',
                country: 'США'
            },
            {
                id: 5,
                image: cityzenBig,
                name: 'Законослухляний громадянин',
                year: '2009',
                actors: 'Джерард Батлер,Курт Віммер,Лукас Фостер',
                director: 'Фелікс Гері Грей',
                genre: 'Трилер',
                country: 'США'
            },
            {
                id: 6,
                image: atlantysBig,
                name: 'Атлантида',
                year: '2017',
                actors: 'Рей Стівенсон, Девід Оукс,Аура Гаррідо',
                director: 'Ксавьє Жанс',
                genre: 'фантастика',
                country: 'Іспанія, Франція',

            },
            {
                id: 7,
                image: garryBig,
                name: 'Гаррі Потер і філософський камінь',
                year: '2002',
                actors: 'Деніел Редкліфф, Руперт Грінт, Емма Вотсон',
                director: 'Кріс Коламбус',
                genre: 'Фентезі',
                country: 'США, Велика Британія'
            },
            {
                id: 8,
                image: apocalyptoBig,
                name: 'Апокаліпсис',
                year: '2006',
                actors: 'Руді Янблад, Далія Ернандез',
                director: 'Мел Гібсон',
                genre: 'Трилер',
                country: 'США'
            },
            {
                id: 9,
                image: interstellarBig,
                name: 'Інтерстеллар',
                year: '2014',
                actors: 'Меттью Макконехі, Енн Гетевей, Джессіка Честейн',
                director: 'Крістофер Нолан',
                genre: 'фантастика',
                country: 'США, Велика Британія'
            },
            {
                id: 10,
                image: jungleBig,
                name: 'Джунглі',
                year: '2017',
                actors: 'Деніел Редкліфф, Алекс Рассел, Томас Кречманн',
                director: '	Грег Маклін',
                genre: 'пригодницький',
                country: 'Колумбія, Австралія'
            },
            {
                id: 11,
                image: sniperBig,
                name: 'Снайпер',
                year: '2014',
                actors: 'Бредлі Купер, Сієна Міллер, Макс Чарльз',
                director: 'Клінт Іствуд',
                genre: 'біографія',
                country: 'США'
            },
            {
                id: 12,
                image: mindBig,
                name: 'Ігри розуму',
                year: '2001',
                actors: 'Рассел Кроу, Ед Гарріс, Дженніфер Коннеллі',
                director: 'Рон Говард',
                genre: 'драма',
                country: 'США'
            },
            {
                id: 13,
                image: wildBig,
                name: 'В диких умовах',
                year: '2007',
                actors: 'Еміль Гірш, Марсія Гей Гарден, Вільям Герт,',
                director: 'Шон Пенн',
                genre: 'пригодницький',
                country: 'США'
            }


        ],
        catalogFilter: [
            {
                catalogName: 'Всі жанри',
                catalogItem: ['Артхаус ', 'Біографія', 'Бойовик', 'Вестерн',
                    'Військові', 'Детективи', 'Документальні', 'Драми',
                    'Історичні', 'Комедії', 'Кримінал', 'Мелодрами', 'Містичні',
                    'Пригодницькі', 'Музикальні', 'Жахи', 'Спорт', 'Фантистика',
                    'Фентезі', 'Трилери'],
                id: 1

            },
            {
                catalogName: 'Всі роки',
                catalogItem: ['2019', '2018', '2017', '2016', '2010-2017', '2000-2010', '1990-2000', '1980-1990'],
                id: 2,

            },
            {
                catalogName: 'Всі країни',
                catalogItem: ['США', 'Франція', 'Канада', 'Німеччина', 'Росія', 'Польща', 'Великобританія', 'Данія', 'Швеція'],
                id: 3
            },
            {
                catalogName: 'По популярності',
                catalogItem: ['По рейтингу IMDB', 'По касовим зборам', 'По новизні', 'По бюджету', 'По популярності'],
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
        let filmCards = this.state.filmPresent.map((filmPresent) => {
            return (
                <MovieCards
                    //filmImage={filmPresent.image}
                    {...filmPresent}
                    //it={itbutton}
                />
            )

        })
       
        let quickLink = this.state.quickLink.map((quickLink) => {
            return (
                <QuickLink
                    quickLinkChange={() => this.quickLinkChange}
                    {...quickLink}
                    key={quickLink.id}
              />
            )
        })
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
                        <div /*style={{ width: '1200px' }}*/ className='jumbotron'>
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
                                                    console.log(match)
                                                    //console.log(history)
                                                    //console.log(location)
                                                    const { id } = match.params
                                                    return (<MovieCards />)
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

