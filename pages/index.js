import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import useSound from "use-sound";

export default function Home() {
  const [play] = useSound("/sounds/dont-woof.mp3");
  return (
    <div className={styles.container}>
      <Head>
        <title>Woof</title>
        <meta name="description" content="Woof!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/cute-dog.gif"
          width={200}
          height={198}
          alt="cute blinking dog"
        />
        <h1 className={styles.title}>
          Don&apos;t press it, the doggo will woof.
        </h1>
        <button className={styles.button} onClick={play}>
          Ring the bell! 🔔
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
