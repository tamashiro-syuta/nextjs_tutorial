import Link from "next/link";
import Head from "next/head";

const FirstPost = () => {
  return (
    <>
      {/* Headタグでペ時のメタデータを設定できる */}
      <Head>
        <title>FirstPost</title>
      </Head>
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
