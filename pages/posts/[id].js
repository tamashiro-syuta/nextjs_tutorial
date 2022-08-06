import { getAllPostIds } from "../../lib/posts";

export default getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
