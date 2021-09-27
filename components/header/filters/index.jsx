import React from 'react'
import styles from './filters.module.css'
import {
    CheckIn,
    CheckOut,
    LimpiarFiltros,
    PriceRoom,
    SizeRoom,
    Ubicacion,
} from './option'

const Filters = () => {
    return (
        <div className={styles.capsula}>
            <Ubicacion />
            <CheckIn />
            <CheckOut />
            <SizeRoom />
            <PriceRoom />
            <LimpiarFiltros />
        </div>
    )
}

export default Filters
