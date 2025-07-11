import styles from "./page.module.css";

export default function Privacy() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: July 8, 2025</p>
        <p className={styles.intro}>
          This Privacy Policy explains how Lipe (“we”, “us”, or “our”) collects, uses, and protects your personal data when you use our mobile application.
        </p>
        <h2 className={styles.heading}>1. Information We Collect</h2>
        <ul className={styles.list}>
          <li>Your name, nickname, email, phone number (if provided)</li>
          <li>Authentication provider (Apple, Google, etc.)</li>
          <li>Location data (if enabled for “users nearby” feature)</li>
          <li>Profile photo, bio, and preferences</li>
        </ul>
        <h2 className={styles.heading}>2. How We Use Your Data</h2>
        <ul className={styles.list}>
          <li>To create and manage your account</li>
          <li>To show your approximate location to other users (with your consent)</li>
          <li>To improve app features and prevent fraud</li>
        </ul>
        <h2 className={styles.heading}>3. Data Sharing</h2>
        <p className={styles.text}>
          We do not sell your personal data. We may share it with service providers (e.g., Firebase) to operate the app.
        </p>
        <h2 className={styles.heading}>4. Your Rights</h2>
        <ul className={styles.list}>
          <li>You can delete your account at any time from the app</li>
          <li>You can disable location tracking in your settings</li>
        </ul>
        <h2 className={styles.heading}>5. Contact</h2>
        <p className={styles.text}>
          If you have any questions, contact us at <a href="mailto:lipe@lovigin.com" className={styles.link}>lipe@lovigin.com</a>
        </p>
        <hr className={styles.divider} />
        <p className={styles.note}>
          This policy is subject to updates. Please check it periodically.
        </p>
      </section>
    </main>
  );
}
