import CardClass from "../../components/card-class/CardClass";
import "./Home.css";

export default function Home() {
  return (
    <main className="main">
      <h3 className="titulo">Meterias</h3>
      <div className="grid-videos">
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
      </div>
    </main>
  );
}
