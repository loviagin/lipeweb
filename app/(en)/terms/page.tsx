import styles from "./page.module.css";

export default function Terms() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>Terms of Use</h1>
        <p className={styles.updated}>Last updated: July 8, 2025</p>
        <p className={styles.intro}>
          Welcome to Lipe — a social platform for meeting people nearby. By creating an account or using the app, you agree to the following:
        </p>
        <h2 className={styles.heading}>1. Eligibility</h2>
        <p className={styles.text}>You must be at least 16 years old to use the app.</p>
        <h2 className={styles.heading}>2. Account Responsibility</h2>
        <p className={styles.text}>You are responsible for all actions taken under your account. Don’t share your login credentials with others.</p>
        <h2 className={styles.heading}>3. Acceptable Use</h2>
        <ul className={styles.list}>
          <li>Do not post offensive, discriminatory, or illegal content</li>
          <li>Do not use the app for harassment or spam</li>
          <li>Do not attempt to access unauthorized parts of the system</li>
        </ul>
        <h2 className={styles.heading}>4. Termination</h2>
        <p className={styles.text}>We reserve the right to suspend or delete your account for violating these terms.</p>
        <h2 className={styles.heading}>5. Changes</h2>
        <p className={styles.text}>We may update these terms. Continued use means you accept the latest version.</p>
        <h2 className={styles.heading}>6. Contact</h2>
        <p className={styles.text}>Email us at <a href="mailto:lipe@lovigin.com" className={styles.link}>lipe@lovigin.com</a> with any questions.</p>
        <hr className={styles.divider} />
        <p className={styles.note}>These terms are subject to updates. Please check them periodically.</p>
      </section>
    </main>
  );
}