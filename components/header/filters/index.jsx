import React, { useState } from 'react'
import styles from './filters.module.css'
import {
    CheckIn,
    CheckOut,
    LimpiarFiltros,
    PriceRoom,
    SizeRoom,
    Ubicacion,
} from './option'

const Filters = (props) => {
    const [site, setSite] = useState()
    const [checkin, setCheckin] = useState()
    const [checkout, setCheckout] = useState()
    const [size, setSize] = useState()
    const [price, setPrice] = useState()
    return (
        <div className={styles.capsula}>
            <Ubicacion site={site} setSite={setSite} />
            <CheckIn checkin={checkin} setCheckin={setCheckin} />
            <CheckOut checkout={checkout} setCheckout={setCheckout} />
            <SizeRoom size={size} setSize={setSize} />
            <PriceRoom price={price} setPrice={setPrice} />
            <LimpiarFiltros />
        </div>
    )
}

export default Filters
