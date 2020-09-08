import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import './loginForm.css'
import '../signUp/signUp.css'
import facebook from '../Images/Icon/facebook.png'
import twitter from '../Images/Icon/twitter.png'
import linkedin from '../Images/Icon/in.svg'

class LoginForm extends Component {
    render() {
        return (
            <div className='authorization' >
                <form>
                    <h2>Вхід</h2>
                    <div>
                        <p>Email:</p>
                        <input type='text' />
                    </div>
                    <div>
                        <p>Пароль:</p>
                        <input  type = 'password'/>
                    </div>
                    <div className= 'authorizationTooltip'>
                        <a href='#'> Забули пароль?</a>
                        <Link  to ='/loginForm/signUp' >Зареєструватись</Link> 
                    </div>
                    <div>
                        <button>Увійти</button>
                    </div>
                    <div>
                        <label>
                            <input type='checkbox' />
                             Запам'ятати мене 
                        </label>
                    </div>
                </form>
                <div className='authorizationSocnet'>
                    <p>Через соціальні мережі</p>
                    <div className='socialNetwork'>
                       <a href='#'><img src={facebook}/> </a>
                       <a href='#'><img src={twitter}/> </a>
                       <a href='#'><img src={linkedin}/> </a>
                    </div>
                </div>
            </div>
            
            )
    }
}
export default LoginForm