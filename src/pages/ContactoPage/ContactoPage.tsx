import React from 'react';
import { TbTruckDelivery, TbCreditCard, TbHeadset } from 'react-icons/tb';
import RibbonFooter from '../../components/RibbonFooter/RibbonFooter';
import PageHero from '../../components/ui/PageHero/PageHero';
import {
  CONTACT_BRANCHES,
  CONTACT_INFO_CARDS,
  CONTACT_PAGE_CONTENT,
  CONTACT_QUICK_ITEMS,
} from '../../constants/pagesContent';
import styles from './ContactoPage.module.css';

const INFO_ICON_MAP: Record<string, React.ReactElement> = {
  'Envío':    <TbTruckDelivery size={28} />,
  'Pago':     <TbCreditCard size={28} />,
  'Atención': <TbHeadset size={28} />,
};

const ContactoPage: React.FC = () => {
  return (
    <main className={styles.page}>
      <PageHero
        title={CONTACT_PAGE_CONTENT.heroTitle}
        subtitle={CONTACT_PAGE_CONTENT.heroSubtitle}
      />

      <section className={styles.quickSection}>
        <div className={styles.container}>
          <div className={styles.quickGrid}>
            {CONTACT_QUICK_ITEMS.map((item) => (
              <article key={item.title} className={styles.quickCard} data-kind={item.kind}>
                <div className={styles.quickIconWrap}>
                  <img src={item.iconUrl} alt={item.iconAlt} className={styles.quickIcon} loading="lazy" />
                </div>
                <div>
                  <h2 className={styles.quickTitle}>{item.title}</h2>
                  {item.kind === 'phone' ? (
                    <>
                      <a href="tel:3751197812" className={styles.quickLink}>37 51 19 78 12</a>
                      <a href="tel:3322023270" className={styles.quickLink}>33 22 02 32 70</a>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className={styles.quickLink}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.branchesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{CONTACT_PAGE_CONTENT.branchesTitle}</h2>
          <div className={styles.branchGrid}>
            {CONTACT_BRANCHES.map((branch) => (
              <article key={branch.name} className={styles.branchCard}>
                <header className={styles.branchHeader}>
                  <h3>{branch.name}</h3>
                  <span className={styles.branchTag}>{branch.tag}</span>
                </header>
                <div className={styles.addressBlock}>
                  {branch.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div className={styles.mapWrap}>
                  <iframe
                    src={branch.mapEmbedUrl}
                    title={branch.name}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapsButton}
                >
                  Ver en Maps
                </a>
              </article>
            ))}
          </div>

          <div className={styles.infoGrid}>
            {CONTACT_INFO_CARDS.map((card) => (
              <article key={card.title} className={styles.infoCard}>
                <div className={styles.infoIcon} aria-label={card.iconAlt}>
                  {INFO_ICON_MAP[card.iconAlt]}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RibbonFooter
        title="QUIERES QUE TU EVENTO SEA INOLVIDABLE?"
        subtitle="Nosotros nos encargamos de cada detalle floral para que solo te preocupes por disfrutar."
        buttonLabel="CONTACTANOS"
        buttonHref="https://wa.me/523335558928?text=Hola,%20me%20interesan%20sus%20flores"
      />
    </main>
  );
};

export default ContactoPage;
