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
        <ul className={styles.entryList}>
          {blogPosts.map((entry, i) => ({ ...entry, creationIndex: i })).sort((a, b) => new Date(b.date) - new Date(a.date)).map((entry) => (
            <li key={entry.slug} className={styles.entryItem}>
              <a href={`#/blog/${entry.slug}`} className={styles.entryLink}>
                <span className={styles.entryId}>{String(entry.creationIndex + 1).padStart(2, "0")}</span>
                <span className={styles.entryTitle}>{entry.title}</span>
                <span className={styles.entryDate}>{entry.date}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default BlogPage;
