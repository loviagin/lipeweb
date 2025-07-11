import styles from "./page.module.css";

export default function DataPolicy() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>Data Policy</h1>
        <p className={styles.updated}>Last updated: July 8, 2025</p>
        <p className={styles.intro}>
          This document describes what data we collect and how we use it in the Lipe app.
        </p>
        <h2 className={styles.heading}>1. What data we collect</h2>
        <ul className={styles.list}>
          <li><b>Required data:</b></li>
          <ul>
            <li>Your name, nickname, email and/or phone number (depending on how you register), date of birth</li>
          </ul>
          <li><b>Optional data or data collected during app usage:</b></li>
          <ul>
            <li>Authentication provider (Apple, Google, etc.)</li>
            <li>Your last location data (if you provide access to location and enable the “Use last location” feature)</li>
            <li>Your profile photo, bio, gender, city, country, language(-s), time of last app login</li>
            <li>Your interests, which you specified in your profile</li>
            <li>Your messages, which you send to other users</li>
            <li>Your likes and dislikes</li>
          </ul>
        </ul>
        <h2 className={styles.heading}>2. How we use your data</h2>
        <ul className={styles.list}>
          <li>To show your approximate location to other users (with your consent)</li>
          <li>To improve app features and prevent fraud</li>
          <li>To work some app features</li>
        </ul>
        <h2 className={styles.heading}>3. Data deletion</h2>
        <p className={styles.text}>
          You can request data deletion at any time in the app, in the “Settings” section. What data is deleted:
          <ul className={styles.list}>
            <li>All non-required data, specified in point 1</li>
            <li>Your messages</li>
            <li>Your likes and dislikes</li>
          </ul>
        </p>
        <h2 className={styles.heading}>4. Account deletion</h2>
        <ul className={styles.list}>
          <li>You can delete your account at any time in the app, in the “Settings” section</li>
          <li>All your data will be deleted, your account will be blocked and removed from our database within 14 days.</li>
        </ul>
        <h2 className={styles.heading}>5. Contact</h2>
        <p className={styles.text}>
          If you have any questions, contact us at <a href="mailto:lipe@lovigin.com" className={styles.link}>lipe@lovigin.com</a>
        </p>
        <hr className={styles.divider} />
        <p className={styles.note}>
          This policy may be updated. Please check it periodically.
        </p>
      </section>
    </main>
  );
}
