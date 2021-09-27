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

export const Ubicacion = (props) => {
    return (
        <div id="ubicacion" className={styles.divInput}>
            <label htmlFor="ubicaciones" className={styles.labelbt}>
                <FaMapMarkerAlt />
            </label>
            <select
                name="ubicaciones"
                id="ubicaciones"
                onChange={(e) => {
                    props.setSite(e.target.value)
                }}
            >
                <option value="Ubicacion">Ubicación</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
            </select>
        </div>
    )
}

export const CheckIn = (props) => {
    return (
        <div id="dateInit" className={styles.divInput}>
            <label
                htmlFor="checkIn"
                className={(styles.labelbt, styles.labeldate)}
            >
                <FaRegCalendarAlt />
                  CheckIn:
            </label>
            <input
                type="date"
                name="checkIn"
                id="checkIn"
                min={todayDate}
                className={styles.dateInput}
                onChange={(e) => {
                    props.setCheckin(e.target.value)
                }}
            />
        </div>
    )
}

export const CheckOut = (props) => {
    return (
        <div id="dateInit" className={styles.divInput}>
            <label
                htmlFor="checkOut"
                className={`${styles.labelbt} ${styles.labeldate}`}
            >
                <FaRegCalendarAlt />  CheckOut:
            </label>
            <input
                type="date"
                name="checkOut"
                id="checkOut"
                min={tomorrow}
                className={styles.dateInput}
                onChange={(e) => {
                    props.setCheckout(e.target.value)
                }}
            />
        </div>
    )
}

export const SizeRoom = (props) => {
    return (
        <div id="sizeRoom" className={styles.divInput}>
            <label
                htmlFor="size"
                onChange={(e) => {
                    props.setSize(e.target.value)
                }}
            >
                <FaBed />
            </label>
            <select name="size" id="size">
                <option value={0} selected={props.size === 0}>
                    Tamaño
                </option>
                <option value={1} selected={props.size === 1}>
                    Pequeño
                </option>
                <option value={2} selected={props.size === 2}>
                    Mediano
                </option>
                <option value={3} selected={props.size === 3}>
                    Grande
                </option>
            </select>
        </div>
    )
}

export const PriceRoom = (props) => {
    return (
        <div id="priceRoom" className={styles.divInput}>
            <label
                htmlFor="price"
                onChange={(e) => {
                    props.setPrice(e.target.value)
                }}
            >
                <FaDollarSign />
            </label>
            <select name="price" id="price">
                <option value={0} selected={props.price === 0}>
                    Todos
                </option>
                <option value={1} selected={props.price === 1}>
                    Económico
                </option>
                <option value={2} selected={props.price === 2}>
                    Confort
                </option>
                <option value={3} selected={props.price === 3}>
                    Lujos
                </option>
                <option value={4} selected={props.price === 4}>
                    Magnifico
                </option>
            </select>
        </div>
    )
}

export const LimpiarFiltros = () => {
    return <button className={styles.limpiarFiltros}>Limpiar</button>
}
