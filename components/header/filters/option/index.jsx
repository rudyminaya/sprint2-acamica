import React from 'react'
import styles from './option.module.css'
import { hotelsData } from '../../../../data/data'
import { FaMapMarkerAlt } from 'react-icons/fa'

export const Ubicacion = () => {
    return (
        <div id="ubicacion" className={styles.divInput}>
            <label htmlFor="ubicaciones">
                <FaMapMarkerAlt />
            </label>
            <select name="ubicaciones" id="ubicaciones">
                <option value="Ubicación">Ubicación</option>
                {hotelsData.map((e, i) => (
                    <option key={i} value={`${e.city}, ${e.country}`}>
                        {e.city}, {e.country}
                    </option>
                ))}
            </select>
        </div>
    )
}
