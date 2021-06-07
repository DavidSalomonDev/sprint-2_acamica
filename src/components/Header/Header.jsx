import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <h1 className={style.title}>Hoteles</h1>
            <p className={style.info}>En cualquier fecha</p>
            <p className={style.info}>En cualquier país</p>
            <p className={style.info}>De cualquier precio</p>
            <p className={style.info}>De cualquier tamaño</p>
        </div>
    )
}

export default Header
