import React from 'react'
import Brand from './brand'
import Filters from './filters'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.contenedor}>
            <Brand />
            <Filters />
        </header>
    )
}

export default Header
