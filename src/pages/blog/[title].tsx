import { getAllPostsTitle, getPostData } from "@/lib/blog";
import { PostProps } from "@/types";
import Head from "next/head";
import React from "react";
import styles from "../../styles/remark.module.css";

export async function getStaticPaths() {
  const paths = getAllPostsTitle();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { title: string } }) {
  const postsData = await getPostData(params.title);
  return {
    props: {
      postsData,
    },
  };
}

const Post = ({ postsData }: { postsData: PostProps }) => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>{postsData.title}</title>
      </Head>
      <div className="flex flex-col w-screen-sm">
        <p className="text-2xl">{postsData.title}</p>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postsData.contentHtml }}
        />
      </div>
    </div>
  );
};

export default Post;
