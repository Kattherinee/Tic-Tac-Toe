import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style.header}>
      <img className={style.image} src="public/game-logo.png" alt="tic-tac" />
      <h1>Tic-Tac-Toe</h1>
    </div>
  );
}
