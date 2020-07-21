import React, { Component } from 'react'
import './signUp.css'
import facebook from '../Images/Icon/facebook.png'
import twitter from '../Images/Icon/twitter.png'
import linkedin from '../Images/Icon/in.svg'
class SignUp extends Component {
    render() {
        return (
            <div className='authorization' >
                <form>
                    <h2>Реєстрація</h2>
                    <div>
                        <p>Email:</p>
                        <input type='email' />
                    </div>
                    <div>
                        <p>Логін:</p>
                        <input type='password' />
                    </div>
                    <div>
                        <p>Пароль:</p>
                        <input type='password' />
                    </div>
                    <div>
                        <button>Зареєструватись</button>
                    </div>
                </form>
                <div className='authorizationSocnet'>
                    <p>Через соціальні мережі</p>
                    <div className='socialNetwork'>
                        <a href='#'><img src={facebook} /> </a>
                        <a href='#'><img src={twitter} /> </a>
                        <a href='#'><img src={linkedin} /> </a>
                    </div>
                </div>
            </div>

        )
    }
}
export default SignUp