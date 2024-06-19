'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div style={styles.container}>
            <p>
                Ta strona korzysta z plików cookie w celu poprawy
                komfortu użytkowania. Korzystając z naszej strony,
                zgadzasz się na używanie przez nas <Link style={styles.link} href={'/cookie'}>Plików Cookie</Link>&nbsp;
                i naszej&nbsp; <Link style={styles.link} href={'/privacy'}>Polityki Prywatności</Link>
            </p>
            <button onClick={handleAccept} style={styles.button}>Accept</button>
            <button onClick={handleDecline} style={styles.button}>Decline</button>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        zIndex: 1000,
    },
    button: {
        margin: '5px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        color: 'black',
    },
    link: {
        color: 'dodgerblue',
        cursor: 'pointer',
        textDecoration: 'underline'
    }
};

export default CookieConsent;