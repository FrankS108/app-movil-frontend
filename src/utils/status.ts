const statusTextMap: { [key: number]: string } = {
    0: 'Pending',
    1: 'Completed',
    2: 'Cancelled',
    // Añade más estados según sea necesario
  };
  
  export const getStatusText = (status: number): string => {
    return statusTextMap[status] || 'Unknown Status';
  };