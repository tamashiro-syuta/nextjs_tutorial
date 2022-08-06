// [hoge].js のページよりリクエストされたURLに応じて動的なページが返されるようになる

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // getPostDataをasyncにしたので、結果をawaitで待つように変更
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      {/* dangerouslySetInnerHTMLを使用してcontentHtmlをレンダリング => Reactから安全にHTMLを生成 */}
      {/* dangerouslyと付いているのは、コードからHTMLを生成するのはXSSの脆弱性を生む危険があることを認識させるため */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default Post;
