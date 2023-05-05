import Link from "next/link";
import styles from "../styles/navbar/Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>sobre</Link>
        </li>
      </ul>
    </div>
  );
}
