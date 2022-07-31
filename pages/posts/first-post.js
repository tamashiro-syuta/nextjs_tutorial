import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

const FirstPost = () => {
  return (
    <>
      {/* Headタグでページのメタデータを設定できる */}
      <Head>
        <title>FirstPost</title>
      </Head>
      {/* Scriptタグで、スクリプトの読み込みや実行を最適化 => 通常のscriptタグではsrcのフェッチにより他コンテンツの読み込みが遅れる可能性がある */}
      {/* スクリプトのレイジーロードを行うようにする => レージーロードとは、表示範囲外のコンテンツの読み込みを遅延させ、画面表示の高速化を図ること */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnLoad"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href={"/"}>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default FirstPost;
