import { MessageData } from "../interfaces/interfaces";
import styles from "../styles/Message.module.css";
const Message = ({message, isError}: MessageData) => {
    return (
        <p className={styles[`${isError ? 'error' : 'success'}`]}>{message}</p>
    );
}

export default Message;