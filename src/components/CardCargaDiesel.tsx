import { CargaDieselCardData } from '../interfaces/interfaces'
import styles from '../styles/CardCargaDiesel.module.css'

export const CardCargaDiesel = ({
    cargaId,
    fecha,
    rendimientoCarga,
    rendimientoEsperado
} : CargaDieselCardData) => {
  return (
    <div className={styles.card}>
        <div className={styles.extraInformationContainer}>
            <div className={styles.orderAndStatusContainer}>
                <p className={styles.orderTextColor}>#{ cargaId }</p>
            </div>
            <p className={styles.extraInformation}>Fecha: {fecha}</p>
            <p className={styles.extraInformation}>Rendimiento Carga: {rendimientoCarga}</p>
            <p className={styles.extraInformation}>Rendimiento Esperado: {rendimientoEsperado}</p>
        </div>
    </div>
  )
}
