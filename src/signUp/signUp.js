import React, { Component } from 'react'
import './signUp.css'
class SignUp extends Component {
    render() {
        return (
            <div className='authorization' >
                <form>
                    <h2>Реєстрація</h2>
                    <div>
                        <input type='text' placeholder = ' Логін' />
                    </div>
                    <div>
                        <input type='password' placeholder=' Пароль' />
                    </div>
                    <div>
                        <input type='password' placeholder=' Підтвердження пароля' />
                    </div>
                    <div>
                        <button>Зареєструватись</button>
                    </div>
                </form>

            </div>

        )
    }
}
export default SignUp