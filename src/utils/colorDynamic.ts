export const calcularColor = (porcentaje: number, colorAlto: string, colorBajo: string) => {
    // Convertir porcentaje a un valor entre 0 y 1
    const valorPorcentaje = porcentaje / 100;

    // Calcular color intermedio utilizando interpolación lineal
    const r = Math.ceil(parseInt(colorBajo.substring(1, 3), 16) * (1 - valorPorcentaje) + parseInt(colorAlto.substring(1, 3), 16) * valorPorcentaje);
    const g = Math.ceil(parseInt(colorBajo.substring(3, 5), 16) * (1 - valorPorcentaje) + parseInt(colorAlto.substring(3, 5), 16) * valorPorcentaje);
    const b = Math.ceil(parseInt(colorBajo.substring(5, 7), 16) * (1 - valorPorcentaje) + parseInt(colorAlto.substring(5, 7), 16) * valorPorcentaje);

    // Construir el color intermedio en formato hex
    const colorIntermedio = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

    return colorIntermedio;
};