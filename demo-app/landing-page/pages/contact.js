import Layout from '../components/layout';
import Alert from '../components/alert';
import Head from 'next/head';
import Script from 'next/script';
import Menu from '../components/menu';
export default function Contact() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Contact</title>
                </Head>
                <Script
                    src="https://vnexpress.vn/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
                <Alert type='success' >
                    message from contact Page   
                </Alert>
                <Menu></Menu>
            </Layout>
        </>
    );
}