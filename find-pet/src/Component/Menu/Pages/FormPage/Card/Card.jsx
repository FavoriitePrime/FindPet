import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className='page-card'>
            <div className='page-card-content'>
                <div className='page-card-form'>
                    <div className='page-card-info'>
                        Адрес:
                        <input>

                        </input>
                        <br />
                        Состояние:
                        <select>
                            <option>Хорошое</option>
                            <option>Плохое</option>
                        </select>
                        <br />
                        Время:
                        <input type="date">

                        </input>
                        <input type="time">

                        </input>
                        <br />
                    </div>
                    <div className='page-card-buttons'>
                        <Link to="/">
                            <button className='page-card-button'>Отправить</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card