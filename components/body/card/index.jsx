import React from 'react'
import styles from './card.module.css'
import { FaBed, FaCalendarAlt, FaMapMarkedAlt, FaStar } from 'react-icons/fa'

const Card = (props) => {
    let precio = props.price
    let grises = 4 - precio

    let ambars = (p) => {
        for (var i = 0; i < p; i++) {
            return <FaStar className={styles.ambar} />
        }
    }

    let noAmbars = (g) => {
        for (var i = 0; i < g; i++) {
            return <FaStar className={styles.star} />
        }
    }
    return (
        <div className={styles.card}>
            <img src={props.photo} alt={`foto de ${props.name}`} />
            <div className={styles.headerCard}>
                <p className={styles.title}>{props.name}</p>
                <div className={styles.stars}>
                    {ambars(precio)}
                    {noAmbars(grises)}
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
