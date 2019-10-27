import React from 'react'
import './header.css'
const Header = (props) => {
    return (
        <header className=''>
            <nav className="navbar navbar-expand-lg navbar-light /*bg-light*/ fixed-top text-white">
                <a className='navbar-brand'><h1 style={{ fontFamily: 'Snell Roundhand, cursive', color: '#3F7C9E' }}>FilMotecA</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="films" role="button" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
                                Фільми
                            </a>
                            <div className="dropdown-menu" aria-labelledby="films">
                                <a className="dropdown-item" href="#">Трилери</a>
                                <a className="dropdown-item" href="#">Військові</a>
                                <a className="dropdown-item" href="#">Бойовики</a>
                                <a className="dropdown-item" href="#">Історичні</a>
                                <a className="dropdown-item" href="#">Комедії</a>
                                <a className="dropdown-item" href="#">Фантастика</a>
                                <a className="dropdown-item" href="#">Кримінал</a>
                                <a className="dropdown-item" href="#">Пригодницькі</a>
                                <a className="dropdown-item" href="#">Жахи</a>
                                <a className="dropdown-item" href="#">Мелодрами</a>
                                <a className="dropdown-item" href="#">Постапокаліптичні</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="serials" role="button" data-hover="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Серіали
                            </a>
                            <div className="dropdown-menu" aria-labelledby="serials">
                                <a className="dropdown-item" href="#">Бойовики </a>
                                <a className="dropdown-item" href="#">Військові</a>
                                <a className="dropdown-item" href="#">Комедії</a>
                                <a className="dropdown-item" href="#">Історичні</a>
                                <a className="dropdown-item" href="#">Драми</a>
                                <a className="dropdown-item" href="#">Фантастика</a>
                                <a className="dropdown-item" href="#">Трилери</a>
                                <a className="dropdown-item" href="#">Мелодрами</a>
                                <a className="dropdown-item" href="#">Пригоди</a>


                            </div>
                        </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="trailers" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Трейлери
                            </a>
                            <div className="dropdown-menu" aria-labelledby="trailers">
                                <a className="dropdown-item" href="#">Нові трейлери</a>
                                <a className="dropdown-item" href="#">Популярні трейлери</a>
                                <a className="dropdown-item" href="#">Трейлери 2018</a>
                            </div>
                        </li>
                                <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="cartoons" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Мультфільми
                            </a>
                            <div className="dropdown-menu" aria-labelledby="cartoons">
                                <a className="dropdown-item" href="#">Серіали</a>
                                <a className="dropdown-item" href="#">Для дітей</a>
                                <a className="dropdown-item" href="#">Повнометражні</a>
                                <a className="dropdown-item" href="#">Для дорослих</a>
                                <a className="dropdown-item" href="#">Аніме</a>
                            </div>
                        </li>
                                <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="collections" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Колекції
                            </a>
                            <div className="dropdown-menu" aria-labelledby="collections">
                                <a className="dropdown-item" href="#">Сімейні</a>
                                <a className="dropdown-item" href="#">Про любов</a>
                                <a className="dropdown-item" href="#">На реальних подіях</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Пошук" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Пошук</button>
                        
                    </form>
                </div>

            </nav>

        </header>
        )
}

export default Header