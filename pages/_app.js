import Head from "next/head";

export default function App({Component, pageProps}) {
    return <div className="hcm">
        <Head>
            <title>Hello World</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Component {...pageProps} />
    </div>
}
