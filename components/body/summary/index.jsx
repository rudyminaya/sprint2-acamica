import React from 'react'
import styles from './summary.module.css'

const Summary = () => {
    return (
        <main className={styles.summary}>
            <h3>Estos son nuestros resultados:</h3>
            <p>
                Estadía en <strong>Argentina</strong> del
                <strong> 02 de Marzo del 2021</strong> al
                <strong> 20 de Abril del 2021</strong> en la categoría
                <strong> “Confort”</strong> de tamaño<strong> mediano.</strong>
            </p>
        </main>
    )
}

export default Summary
