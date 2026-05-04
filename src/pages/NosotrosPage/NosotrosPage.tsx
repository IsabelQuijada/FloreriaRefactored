import React from 'react';
import RibbonFooter from '../../components/RibbonFooter/RibbonFooter';
import PageHero from '../../components/ui/PageHero/PageHero';
import {
  ABOUT_PAGE_CONTENT,
  ABOUT_TEAM,
  ABOUT_TEAM_MEMBERS,
  ABOUT_VALUES,
} from '../../constants/pagesContent';
import styles from './NosotrosPage.module.css';

const NosotrosPage: React.FC = () => {
  return (
    <main className={styles.page}>
      <PageHero
        title={ABOUT_PAGE_CONTENT.heroTitle}
        subtitle={ABOUT_PAGE_CONTENT.heroSubtitle}
      />

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <article className={styles.storyText}>
              <h2 className={styles.sectionTitle}>{ABOUT_PAGE_CONTENT.sectionTitle}</h2>
              <p className={styles.storyIntro}>{ABOUT_PAGE_CONTENT.intro}</p>
              {ABOUT_PAGE_CONTENT.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.storyParagraph}>
                  {paragraph}
                </p>
              ))}
            </article>

            <figure className={styles.storyFigure}>
              <img
                src={ABOUT_PAGE_CONTENT.imageUrl}
                alt={ABOUT_PAGE_CONTENT.imageAlt}
                loading="lazy"
                className={styles.storyImage}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>{ABOUT_PAGE_CONTENT.valuesTitle}</h2>
          <div className={styles.valuesGrid}>
            {ABOUT_VALUES.map((value) => (
              <article key={value.title} className={styles.valueCard}>
                <span className={styles.valueIconWrap}>
                  <img src={value.iconUrl} alt={value.iconAlt} loading="lazy" className={styles.valueIcon} />
                </span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>{ABOUT_TEAM.title}</h2>
          <p className={styles.teamIntro}>{ABOUT_TEAM.intro}</p>
          <div className={styles.teamGrid}>
            {ABOUT_TEAM_MEMBERS.map((member) => (
              <article key={member.name} className={styles.teamCard}>
                <img
                  src={member.imageUrl}
                  alt={member.imageAlt}
                  loading="lazy"
                  className={styles.teamImage}
                />
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamDescription}>{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RibbonFooter
        title="TU CÓMPLICE FLORAL"
        subtitle="Flores frescas, diseños únicos y entregas a tiempo, siempre con amor."
        buttonLabel="CONTÁCTANOS"
        buttonHref="https://wa.me/523335558928?text=Hola,%20me%20interesan%20sus%20flores"
      />
    </main>
  );
};

export default NosotrosPage;
