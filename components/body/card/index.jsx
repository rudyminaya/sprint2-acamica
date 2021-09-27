import React from 'react'
import styles from './card.module.css'
import { FaBed, FaCalendarAlt, FaMapMarkedAlt, FaStar } from 'react-icons/fa'

const Card = (props) => {
    let arr = []
    let grisArr = []
    let precio = props.price
    let grises = 4 - precio

    if (precio === 1) {
        arr = [1]
        grisArr = ['a', 'b', 'c']
    } else if (precio === 2) {
        arr = [1, 2]
        grisArr = ['a', 'b']
    } else if (precio === 3) {
        arr = [1, 2, 3]
        grisArr = ['a']
    } else if (precio === 4) {
        arr = [1, 2, 3, 4]
        grisArr = []
    }

    console.log('SOY EL PRIMER ARREGLO ', arr)
    console.log('SOY EL OTRO ARREGLO ', grisArr)
    return (
        <div className={styles.card}>
            <img src={props.photo} alt={`foto de ${props.name}`} />
            <div className={styles.headerCard}>
                <p className={styles.title}>{props.name}</p>
                <div className={styles.stars}>
                    {arr.map(() => {
                        return <FaStar className={styles.ambar} />
                    })}
                    {grisArr.map(() => {
                        return <FaStar className={styles.star} />
                    })}
                </div>
            </div>
            <div className={styles.summaryCard}>
                <div className={styles.summary}>{props.description}</div>
            </div>
            <div className={styles.featuresCard}>
                <div className={styles.label}>
                    <FaMapMarkedAlt />
                    <span>
                        {props.country}, {props.city}
                    </span>
                </div>
                <div className={styles.label}>
                    <FaBed />
                    <span>{props.rooms} Habitaciones</span>
                </div>
                <div className={styles.label}>
                    <FaCalendarAlt />
                    <div>
                        <p>Del jueves, 1 de abril del 2021</p>
                        <p>Al Martes, 30 de mayo del 2021</p>
                    </div>
                </div>
            </div>
            <a className={styles.reservar}>Reservar</a>
        </div>
    )
}

export default Card
