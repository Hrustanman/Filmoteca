import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import './loginForm.css'
import '../signUp/signUp.css'
class LoginForm extends Component {
    render() {
        return (
            <div className='authorization' >
                <form>
                    <h2>Вхід</h2>
                    <div>
                        <input placeholder = ' Логін' type='text' />
                    </div>
                    <div>
                        <input placeholder=' Пароль' type = 'password' />
                    </div>
                    <div>
                        <button>Увійти</button>
                    </div>
                    <div>
                        <label> 
                         <input style={{ width: '20px' }} type='checkbox' />
                             Запам'ятати мене 
                        </label>
                    </div>
                    <div>
                        <Link  to ='/signUp' ><h4>Зареєструватись</h4></Link>
                    </div>
                    <div>
                        <a href='#'> Забули пароль?</a>
                    </div>
                    
                </form>

            </div>
            
            )
    }
}
export default LoginForm