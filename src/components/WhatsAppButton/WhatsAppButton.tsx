import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

const WHATSAPP_URL =
  'https://wa.me/523335558928?text=Hola,%20me%20interesan%20sus%20flores';

const WhatsAppButton: React.FC = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contáctanos por WhatsApp"
    className={styles.btn}
  >
    <FaWhatsapp size={30} />
  </a>
);

export default WhatsAppButton;
