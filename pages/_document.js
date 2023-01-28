import { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';

export default function Document() {
    return (
        <Html>
            <Head>
            </Head>
            <body>
                <div id="globalLoader">
                    <Image width={276} height={276} src="https://usagif.com/wp-content/uploads/loading-55.gif" alt="" />
                </div>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}