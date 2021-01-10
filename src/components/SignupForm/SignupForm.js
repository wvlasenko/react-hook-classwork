import { useState } from 'react';
import styles from './SignupForm.module.css';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPasssword(value);
        break;
      default:
        return;
    }
  };
  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
