// src/components/NotificationList.tsx

import React, { useEffect } from 'react';
import { useNotificationContext } from '../context/notificationContext';
import style from '../styles/Notification.module.css';

const NotificationList: React.FC = () => {
    const { notifications, removeNotification } = useNotificationContext();

    useEffect(() => {
        // Auto-dismiss notifications after 5 seconds
        const timer = setInterval(() => {
            if (notifications.length) {
                removeNotification(0);
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [notifications, removeNotification]);

    return (
        <div className={style.notificationContainer}>
            {notifications.map((notification, index) => (
                <div
                    key={index}
                    className={`${style.notification} ${style[notification.type]}`}
                    onClick={() => removeNotification(index)}
                >
                    {notification.message}
                </div>
            ))}
        </div>
    );
};

export default NotificationList;
