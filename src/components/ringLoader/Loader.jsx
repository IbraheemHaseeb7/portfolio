import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.container}>
      <svg height="200" width="200">
        <circle
          className={styles.ring}
          cx="100"
          cy="102"
          r="70"
          stroke="#f3ffbd"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}
