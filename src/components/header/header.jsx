import style from "./header.module.css";
import logo from "../../assets/game-logo.png";

export default function Header() {
  return (
    <div className={style.header}>
      <img className={style.image} src={logo} alt="tic-tac" />
      <h1>Tic-Tac-Toe</h1>
    </div>
  );
}
