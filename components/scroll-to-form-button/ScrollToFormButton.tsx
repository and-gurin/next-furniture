'use client';
import React from 'react';
import styles from './ScrollToFormButton.module.scss';
import { FaEnvelope } from 'react-icons/fa';

const ScrollToFormButton = () => {
    const handleClick = () => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button className={styles.stickyButton} onClick={handleClick}>
            <FaEnvelope />
        </button>
    );
};

export default ScrollToFormButton;
