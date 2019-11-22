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
import rempageBig from './Images/rempegeBig.jpg'
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
import Popup from 'reactjs-popup'


class App extends Component {

    state = {
        filmPresent: [
            {
                id: 1,
                image: rempage,
                imagePopup: rempageBig,
                name: 'Ремпейдж',
                year: '2018',
                actors: 'Двейн Джонсон,Наомі Гарріс,Малін Акерман',
                director: 'Бред Пейто',
                genre: 'бойовик',
                country: 'США'

            },
            {
                id: 2,
                image: slown,
                imagePopup: slownBig,
                name: 'Слоун',
                year: '2018',
                actors: 'Джесіка Честейн, Марк Стронг, Гугу Мбата-Роу',
                director: 'Джонн Медден',
                genre: 'драма',
                country: 'США,Франція'

            },
            {
                id: 3,
                image: unknow,
                imagePopup: unknownBig,
                name: 'Невідомий',
                year: '2011',
                actors: 'Леонард Голдберг, Джоел Сілвер, Ендрю Рона',
                director: '	Хауме Кольєт-Серра',
                genre: 'трилер',
                country: 'США, Німеччина'
            },
            {
                id: 4,
                image: zodiac,
                imagePopup: zodiacBig,
                name: 'Зодіак',
                year: '2007',
                actors: 'Джейк Джилленгол, Марк Руффало, Роберт Дауні',
                director: 'Девід Фінчер',
                genre: '	трилер',
                country: 'США'
            },
            {
                id: 5,
                image: citizen,
                imagePopup: cityzenBig,
                name: 'Законослухляний громадянин',
                year: '2009',
                actors: 'Джерард Батлер,Курт Віммер,Лукас Фостер',
                director: 'Фелікс Гері Грей',
                genre: 'Трилер',
                country: 'США'
            },
            {
                id: 6,
                image: atlantis,
                imagePopup: atlantysBig,
                name: 'Атлантида',
                year: '2017',
                actors: 'Рей Стівенсон, Девід Оукс,Аура Гаррідо',
                director: 'Ксавьє Жанс',
                genre: 'фантастика',
                country: 'Іспанія, Франція',

            },
            {
                id: 7,
                image: garry,
                imagePopup: garryBig,
                name: 'Гаррі Потер і філософський камінь',
                year: '2002',
                actors: 'Деніел Редкліфф, Руперт Грінт, Емма Вотсон',
                director: 'Кріс Коламбус',
                genre: 'Фентезі',
                country: 'США, Велика Британія'
            },
            {
                id: 8,
                image: Apocalypto,
                imagePopup: apocalyptoBig,
                name: 'Апокаліпсис',
                year: '2006',
                actors: 'Руді Янблад, Далія Ернандез',
                director: 'Мел Гібсон',
                genre: 'Трилер',
                country: 'США'
            },
            {
                id: 9,
                image: Interstellar,
                imagePopup: interstellarBig,
                name: 'Інтерстеллар',
                year: '2014',
                actors: 'Меттью Макконехі, Енн Гетевей, Джессіка Честейн',
                director: 'Крістофер Нолан',
                genre: 'фантастика',
                country: 'США, Велика Британія'
            },
            {
                id: 10,
                image: jungle,
                imagePopup: jungleBig,
                name: 'Джунглі',
                year: '2017',
                actors: 'Деніел Редкліфф, Алекс Рассел, Томас Кречманн',
                director: '	Грег Маклін',
                genre: 'пригодницький',
                country: 'Колумбія, Австралія'
            },
            {
                id: 11,
                image: sniper,
                imagePopup: sniperBig,
                name: 'Снайпер',
                year: '2014',
                actors: 'Бредлі Купер, Сієна Міллер, Макс Чарльз',
                director: 'Клінт Іствуд',
                genre: 'біографія',
                country: 'США'
            },
            {
                id: 12,
                image: mind,
                imagePopup: mindBig,
                name: 'Ігри розуму',
                year: '2001',
                actors: 'Рассел Кроу, Ед Гарріс, Дженніфер Коннеллі',
                director: 'Рон Говард',
                genre: 'драма',
                country: 'США'
            },
            {
                id: 13,
                image: wild,
                imagePopup: wildBig,
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
                    'Фентезі', 'Трилери', 'Постапокаліптичні'],
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
                quickLinkName: 'Рассел Кроу',
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
        console.log()
    }

    search = (item, tern) => {
        if (tern.length === 0) {
            return item
        }
        return item.filter((it) => {
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
        })
    }

    quickLinkChange = (quikLink) => {
        this.setState({ tern: quikLink }, this.Clicker)
    }

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
                    <div className='jumbotron'>
                        <div className='content_body'>
                            <div>
                                <div className='catalog-content-inner'>
                                    <div className='container'>
                                        <ul style={{ padding: '60px' }} className="d-flex justify-content-between">
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
