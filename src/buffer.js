let className1 = 'poster_block my-3 mx-3'
if (this.state.display) {
    className1 += ' done'
}


disappear = () => {
    this.setState({
        display: !this.state.display
    })
}
onClick = { this.disappear }


    < li >
    <div className='filter_genre'>
        <span> Всі жанри </span>
    </div>
    <div>
        <ul className='catalog_filter'>
            <li>Артхаус </li>
            <li> Біографія </li>
            <li> Бойовик </li>
            <li> Вестерн </li>
            <li> Військові </li>
            <li> Детективи </li>
            <li> Для всієї родини </li>
            <li> Документальні </li>
            <li> Драми </li>
            <li> Історичні </li>
            <li> Комедії </li>
            <li> Кримінал </li>
            <li> Зарубіжні </li>
            <li> Мелодрами </li>
            <li> Містичні </li>
            <li> Пригодницькі </li>
            <li> Музикальні </li>
            <li> Радянське кіно </li>
            <li> Жахи </li>
            <li> Спорт </li>
            <li> Фантистика </li>
            <li> Фентезі </li>
            <li> Трилери </li>
            <li> Постапокаліптичні </li>
        </ul>
    </div>
            </li >
                <li>
                    <div className='filter_genre'>
                        <span> Всі роки </span>
                    </div>
                    <div>
                        <ul className='catalog_filter'>
                            <li>2019 </li>
                            <li>2018 </li>
                            <li>2017 </li>
                            <li>2016 </li>
                            <li>2015 </li>
                            <li>2014 </li>
                            <li>2013 </li>
                            <li>2010 - 2019 </li>
                            <li>2000 - 2010 </li>
                            <li>1990 -2000 </li>
                            <li>1980-1990</li>
                        </ul>
                    </div>

    </li>
            <li>
                <div className='filter_genre'>
                    <span> Всі країни </span>
                </div>
                <div>
                    <ul className='catalog_filter'>
                        <li>США</li>
                        <li>Франція</li>
                        <li>Канада</li>
                        <li>Німеччина</li>
                        <li>Росія</li>
                        <li>Польща</li>
                        <li>Великобританія</li>
                        <li>Данія</li>
                        <li>Швеція</li>
                        <li>Україна</li>
                    </ul>
                </div>
    </li>
            <li>
                <div className='filter_genre'>
                    <span> По популярності </span>
                </div>
                <div>
                    <ul className='catalog_filter'>
                        <li>По рейтингу IMDB</li>
                        <li>По касовим зборам</li>
                        <li>По новизні</li>
                        <li>По бюджету</li>
                        <li>По популярності</li>
                    </ul>
                </div>
    </li>

            <style>
                @media (min-width: 756px) and (max-width: 1200px)
                    {
                        .class1 {
                    widht: 40px;
}
}
                </style>




            <Route path={'/movieDescription/' + this.state.filmPresent[1].id}
        component={() => filmCards[0]} />

            <Route path={'/movieDescription/:id'}
                render={(match, location, history) => {
                    const { id } = match.params;
                    console.log(match.params)
                    alert(match.params)
                    return <MovieCards id={this.props.id} />
                }} />