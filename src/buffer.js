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
        <span> �� ����� </span>
    </div>
    <div>
        <ul className='catalog_filter'>
            <li>������� </li>
            <li> ��������� </li>
            <li> ������� </li>
            <li> ������� </li>
            <li> ³������ </li>
            <li> ��������� </li>
            <li> ��� �񳺿 ������ </li>
            <li> ������������ </li>
            <li> ����� </li>
            <li> �������� </li>
            <li> ����䳿 </li>
            <li> ������� </li>
            <li> ������� </li>
            <li> ��������� </li>
            <li> ̳����� </li>
            <li> ����������� </li>
            <li> ��������� </li>
            <li> ��������� ��� </li>
            <li> ���� </li>
            <li> ����� </li>
            <li> ���������� </li>
            <li> ������ </li>
            <li> ������� </li>
            <li> ��������������� </li>
        </ul>
    </div>
            </li >
                <li>
                    <div className='filter_genre'>
                        <span> �� ���� </span>
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
                    <span> �� ����� </span>
                </div>
                <div>
                    <ul className='catalog_filter'>
                        <li>���</li>
                        <li>�������</li>
                        <li>������</li>
                        <li>ͳ�������</li>
                        <li>����</li>
                        <li>������</li>
                        <li>�������������</li>
                        <li>����</li>
                        <li>������</li>
                        <li>������</li>
                    </ul>
                </div>
    </li>
            <li>
                <div className='filter_genre'>
                    <span> �� ����������� </span>
                </div>
                <div>
                    <ul className='catalog_filter'>
                        <li>�� �������� IMDB</li>
                        <li>�� ������� ������</li>
                        <li>�� ������</li>
                        <li>�� �������</li>
                        <li>�� �����������</li>
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