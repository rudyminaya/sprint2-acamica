import React from 'react'
import Card from './card'
import Summary from './summary'
import styles from './body.module.css'
import { hotelsData } from '../../data/data'

const Body = () => {
    return (
        <div className={styles.body}>
            <Summary />
            <div className={styles.cardContent}>
                {hotelsData.map((d, i) => {
                    return (
                        <Card
                            key={`card-${i}`}
                            name={d.name}
                            photo={d.photo}
                            description={d.description}
                            rooms={d.rooms}
                            city={d.city}
                            country={d.country}
                            price={d.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Body
