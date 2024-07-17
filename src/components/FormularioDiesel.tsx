import { useState, useEffect } from "react";
import { useErrorContext } from "../context/errorContext";
import { DieselFormData } from "../interfaces/interfaces";
import { getCurrentDate, getCurrentTime } from "../utils/date";
import styles from "../styles/FormularioDiesel.module.css";

const FormularioDiesel = () => {
    const { setError, clearError } = useErrorContext();
    const initialFormState: DieselFormData = {
        provider: "",           // Identificador del proveedor (0 por defecto)
        totalPrice: 0.0,       // Precio total en la moneda especificada
        currency: "MX",           // Moneda (1 podría ser USD por defecto, puedes ajustar según tus necesidades)
        gallons: 0,            // Cantidad de galones
        date: getCurrentDate(),              // Fecha en formato ISO (vacío por defecto)
        time: getCurrentTime(),              // Hora en formato HH:mm (vacío por defecto)
        odometer: '',         // Lectura del odómetro (vacío por defecto)
        ecmTravel: 0,         // Recorrido ECM en millas/kilómetros
        ecmGallons: 0         // Galones consumidos según ECM
    };

    const [formData, setFormData] = useState<DieselFormData>(initialFormState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        if( [ formData.provider, formData.currency, formData.odometer ].includes('') ||
            [ formData.totalPrice, formData.gallons ].includes(0) ){
            setError("Revise nuevamente la informacion: proveedor, moneda, odometro, precio total y galones ya que son obligatorios.");
            setTimeout(() => {
                clearError();
            }, 30000)
            return;
        }
        //TODO: Llamar API
    }

    
    

    return (
        <div className={styles.cardForm}>
            <h2 className={styles.formTitle}>Agregar Diesel</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='provider'>Proveedor</label>
                    <select name="provider" value={formData.provider} onChange={handleChange} className={styles.input}>
                        <option value=""  disabled>Selecciona un proveedor</option>
                        <option value="1">Proveedor 1</option>
                        <option value="2">Proveedor 2</option>
                        <option value="3">Proveedor 3</option>
                        <option value="4">Proveedor 4</option>
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='totalPrice'>Precio Total</label>
                    <input name="totalPrice" value={formData.totalPrice} onChange={handleChange} className={styles.input} type='number'/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='currency'>Moneda</label>
                    <select name="currency" value={formData.currency} onChange={handleChange} className={styles.input}>
                        <option value=""  disabled>Selecciona una moneda</option>
                        <option value="MX">MX</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='gallons'>Galones</label>
                    <input name="gallons" value={formData.gallons} onChange={handleChange} className={styles.input} type='number'/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='date'>Fecha</label>
                    <input name="date" defaultValue={formData.date} className={styles.input} type='text'readOnly/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='time'>Hora</label>
                    <input name="time" defaultValue={formData.time} className={styles.input} type='text'readOnly/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='odometer'>Odómetro</label>
                    <input name="odometer" value={formData.odometer} onChange={handleChange} className={styles.input} type='text'/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='ecmTravel'>Recorrido ECM</label>
                    <input name="ecmTravel" value={formData.ecmTravel} onChange={handleChange} className={styles.input} type='number'/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='ecmGallons'>Galones ECM</label>
                    <input name="ecmGallons" value={formData.ecmGallons} onChange={handleChange} className={styles.input} type='text'/>
                </div>
                <input type="submit" value="Guardar Carga" className={styles.buttonSumbit}/>
            </form>
        </div>
  )
}

export default FormularioDiesel