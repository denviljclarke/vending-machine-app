// import styles from "../styles/VendingMachine.module.css";
import Head from "next/head";
import "bulma/css/bulma.css";

export default function VendingMachine() {
  return (
    <div>
      <Head>
        <title>Vending Machine App</title>
        <meta name="description" content="A blockchain vending machine app" />
      </Head>
      <h1>Vending Machine</h1>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <h1>VM</h1>
          </div>
          <div className="navbar-end">
            <button className="button is-primary"> Connect Wallet</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
