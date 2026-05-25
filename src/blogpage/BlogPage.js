import React from "react";
import styles from "./BlogPage.module.css";
import Margin from "../Margin";
import blogPosts from "./blogPosts.json";

const BlogPage = () => {
  return (
    <main className={styles.page}>
      <a href="#/" className={styles.backButton}>home</a>
      <section className={styles.inner}>
        <Margin size={4} />
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>Thoughts, notes, and work logs.</p>
        <ul className={styles.entryList}>
          {blogPosts.map((entry) => (
            <li key={entry.slug} className={styles.entryItem}>
              <a href={`#/blog/${entry.slug}`} className={styles.entryLink}>
                <h2 className={styles.entryTitle}>{entry.title}</h2>
                <p className={styles.entryDate}>{entry.date}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default BlogPage;
