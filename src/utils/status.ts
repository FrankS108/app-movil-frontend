const statusTextMap: { [key: number]: string } = {
    1: 'Pendiente Subir Documentos',
    4: 'Pagado',
  };
  
  export const getStatusText = (status: number): string => {
    return statusTextMap[status] || 'Estado no definido';
  };