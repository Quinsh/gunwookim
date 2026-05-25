import React from "react";
import styles from "./BlogPostPage.module.css";
import Margin from "../Margin";
import blogPosts from "./blogPosts.json";

const BlogPostPage = ({ slug }) => {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className={styles.page}>
        <a href="#/blog" className={styles.backButton}>blog</a>
        <article className={styles.inner}>
          <Margin size={4} />
          <h1 className={styles.title}>Post not found</h1>
          <p className={styles.date}>Please select a valid post from the blog list.</p>
        </article>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <a href="#/blog" className={styles.backButton}>blog</a>
      <article className={styles.inner}>
        <Margin size={4} />
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.date}>{post.date}</p>
        {post.content.map((paragraph, index) => (
          <p key={index} className={styles.body}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
};

export default BlogPostPage;
