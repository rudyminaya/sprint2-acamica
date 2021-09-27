import React, { useState } from 'react'
import styles from './option.module.css'
import { hotelsData } from '../../../../data/data'
import {
    FaMapMarkerAlt,
    FaRegCalendarAlt,
    FaBed,
    FaDollarSign,
} from 'react-icons/fa'

let time = new Date()

let year = time.getFullYear()

let month = time.getMonth() + 1
if (month <= 9) {
    month = `0${month}`
}

let today = time.getDate()

if (today <= 9) {
    today = `0${today}`
}

let nextDay = time.getDate() + 1
if (nextDay <= 9) {
    nextDay = `0${nextDay}`
}

let todayDate = year + '-' + month + '-' + today
let tomorrow = year + '-' + month + '-' + nextDay

export const Ubicacion = () => {
    return (
        <div id="ubicacion" className={styles.divInput}>
            <label htmlFor="ubicaciones" className={styles.labelbt}>
                <FaMapMarkerAlt />
            </label>
            <select name="ubicaciones" id="ubicaciones">
                <option value="Ubicacion">Ubicación</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
            </select>
        </div>
    )
}

export const CheckIn = () => {
    const [selectCheckIn, setSelectCheckIn] = useState('Check-In')
    return (
        <div id="dateInit" className={styles.divInput}>
            <label htmlFor="checkIn" className={styles.labelbt}>
                <FaRegCalendarAlt />
            </label>
            <input
                type="date"
                name="checkIn"
                id="checkIn"
                min={todayDate}
                className={styles.dateInput}
            />
        </div>
    )
}

export const CheckOut = () => {
    const [selectCheckOut, setSelectCheckOut] = useState('Check-Out')
    return (
        <div id="dateInit" className={styles.divInput}>
            <label htmlFor="checkOut" className={styles.labelbt}>
                <FaRegCalendarAlt />
            </label>
            <input
                type="date"
                name="checkOut"
                id="checkOut"
                min={tomorrow}
                className={styles.dateInput}
            />
        </div>
    )
}

export const SizeRoom = () => {
    return (
        <div id="sizeRoom" className={styles.divInput}>
            <label htmlFor="size">
                <FaBed />
            </label>
            <select name="size" id="size">
                <option value="tamano">Tamaño</option>
                <option value="pequeno">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
            </select>
        </div>
    )
}

export const PriceRoom = () => {
    return (
        <div id="priceRoom" className={styles.divInput}>
            <label htmlFor="price">
                <FaDollarSign />
            </label>
            <select name="price" id="price">
                <option value="todos">Todos</option>
                <option value="1">Económico</option>
                <option value="2">Confort</option>
                <option value="3">Lujos</option>
                <option value="4">Magnifico</option>
            </select>
        </div>
    )
}

export const LimpiarFiltros = () => {
    return <button className={styles.limpiarFiltros}>Limpiar</button>
}
