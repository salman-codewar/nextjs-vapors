import Head from "next/head";
import Link from "next/link";
import styled from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styled.container}>
            <Head>
                <title>NextJS Vapors</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styled.main}>
                <h1 className={styled.title}>
                    Welcome to
                    <Link href="/"> NextJS Vapors!</Link>
                </h1>
            </main>
        </div>
    );
}
