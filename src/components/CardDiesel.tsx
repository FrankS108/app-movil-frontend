import { CardDieselData } from "../interfaces/interfaces"
import { calcularColor } from "../utils/colorDynamic"
import styles from "../styles/CardDiesel.module.css"

export const CardDiesel = ( { 
    noEconomico,
    tanqueActual,
} : CardDieselData ) => {

    let colorDinamico : string = calcularColor(tanqueActual, "#88F52E", "#FC4545");

    return (
        <div className={ styles.card }>
            <div className={ styles.information }>
                <div className={styles.truck}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5z"/></svg>                    <p className={styles.id}>{ noEconomico }</p>
                </div>
                <div className={ styles.percentage } style={{ backgroundColor: colorDinamico }}>
                    <p>{ tanqueActual }%</p>
                </div>
            </div>
        </div>
    )
}
