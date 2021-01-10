import { useState } from 'react';
import styles from './SignupForm.module.css';

export default function SignupForm() {
  const [email, setEmail] = useState('qweqwe');
  console.log(email);
  const handleEmailChange = event => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
