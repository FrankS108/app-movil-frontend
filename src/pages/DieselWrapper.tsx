import DieselContextProvider  from '../context/dieselContext';
import { Diesel } from './Diesel';
const DieselWrapper = () => {
    
    return (
        <DieselContextProvider>
        <Diesel />
        </DieselContextProvider>
    );
};

export default DieselWrapper;
