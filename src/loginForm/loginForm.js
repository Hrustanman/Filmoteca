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
                        <p>Логін:</p>
                        <input type='text' />
                    </div>
                    <div>
                        <p>Пароль:</p>
                        <input  type = 'password' />
                    </div>
                    <div>
                        <a href='#'> Забули пароль?</a>
                        <Link  to ='/signUp' >Зареєструватись</Link> 
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

            </div>
            
            )
    }
}
export default LoginForm