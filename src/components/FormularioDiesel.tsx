import { useState, useEffect } from "react";
import { useErrorContext } from "../context/errorContext";
import { DieselFormData, FormularioDieselData, Proveedor, MetodoPago, TipoCombustible, FormularioDieselToSend } from "../interfaces/interfaces";
import { getCurrentDate, getCurrentTime, getFormattedDate, getFormattedTime, getFormattedDateTime } from "../utils/date";
import styles from "../styles/FormularioDiesel.module.css";
import { useDieselContext } from "../context/dieselContext";
import Message from "./Message";

const FormularioDiesel = ( {proveedores, metodosPago, tiposCombustible } : FormularioDieselData) => {
    const { camionId } = useDieselContext();
    const { setError, clearError, errorMessage } = useErrorContext();
    const { saveDieselData } = useDieselContext();

    const initialFormState: DieselFormData = {
        provider: "",           // Identificador del proveedor (0 por defecto)
        totalPrice: 0.0,       // Precio total en la moneda especificada
        currency: "MX",           // Moneda (1 podría ser USD por defecto, puedes ajustar según tus necesidades)
        gallons: 0,            // Cantidad de galones
        date: getCurrentDate(),              // Fecha en formato ISO (vacío por defecto)
        time: getCurrentTime(),              // Hora en formato HH:mm (vacío por defecto)
        odometer: '',         // Lectura del odómetro (vacío por defecto)
        ecmTravel: 0,         // Recorrido ECM en millas/kilómetros
        ecmGallons: 0,         // Galones consumidos según ECM
        tipoCombustible: '',
        method: '',
        serie: ''
    };

    const [formData, setFormData] = useState<DieselFormData>(initialFormState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( [ formData.provider, formData.currency, formData.odometer, formData.tipoCombustible, formData.method, formData.serie ].includes('') ||
            [ formData.totalPrice, formData.gallons ].includes(0) ){
            setError("Revise nuevamente la informacion: proveedor, moneda, odometro, precio total y galones ya que son obligatorios.");
            setTimeout(() => {
                clearError();
            }, 30000)
            return;
        }

        const now = new Date();

        let dataToSend: FormularioDieselToSend = {
            tipo: Number(formData.tipoCombustible),
            unidadId: camionId,
            choferId: 5,
            litros: formData.gallons,
            fecha: getFormattedDate(now),
            hora: getFormattedTime(now),
            fechayHora: getFormattedDateTime(now),
            proveedorId: Number(formData.provider),
            metodoPago: Number(formData.method),
            serieBomba: formData.serie,
            odometroCarga: Number(formData.odometer),
            precioTotal: formData.totalPrice,
            monedaCarga: Number(formData.currency),
            estadoId: 0,
            tipoCombustible: Number(formData.tipoCombustible),
            esChofer: true
        };

        saveDieselData(dataToSend);
    }

    return (
        <div className={styles.cardForm}>
            <h2 className={styles.formTitle}>Agregar Diesel</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='provider'>Proveedor</label>
                    <select name="provider" value={formData.provider} onChange={handleChange} className={styles.input}>
                        <option value="" disabled>Selecciona un proveedor</option>
                        { 
                            proveedores &&  proveedores.map((proveedor: Proveedor, index: number) => (
                                <option key={index} value={proveedor.proveedorId} >{proveedor.nComercial}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='tipoCombustible'>Tipo Combustible</label>
                    <select name="tipoCombustible" value={formData.tipoCombustible} onChange={handleChange} className={styles.input}>
                        <option value=""  disabled>Selecciona una moneda</option>
                        {
                            tiposCombustible && tiposCombustible.map((tipoCombustible: TipoCombustible, index: number) => (
                                <option key={index} value={tipoCombustible.tipoCombustibleId}>{ tipoCombustible.nombreTipo }</option>
                            ))
                        }
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='serie'>No. de Serie de la Bomba</label>
                    <input name="serie" defaultValue={formData.serie} onChange={handleChange} className={styles.input} type='text'/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='totalPrice'>Precio Total</label>
                    <input name="totalPrice" value={formData.totalPrice} onChange={handleChange} className={styles.input} type='number'/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='currency'>Moneda</label>
                    <select name="currency" value={formData.currency} onChange={handleChange} className={styles.input}>
                        <option value=""  disabled>Selecciona una moneda</option>
                        <option value="0">USD</option>
                        <option value="1">MXN</option>
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor='method'>Metodo de Pago</label>
                    <select name="method" value={formData.method} onChange={handleChange} className={styles.input}>
                        <option value=""  disabled>Selecciona un metodo de pago</option>
                        {
                            metodosPago && metodosPago.map((metodoPago: MetodoPago, index: number) => (
                                <option key={index} value={metodoPago.metodoId}>{ metodoPago.nombre }</option>
                            ))
                        }
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
                { errorMessage && <Message message={errorMessage} isError={true} />}
            </form>
        </div>
  )
}

export default FormularioDiesel