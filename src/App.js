import { useEffect, useState } from "react";
import Title from "./mainpage/Title";
import "./App.css";
import VerticalFlexbox from "./mainpage/VerticalFlexbox";
import Margin from "./Margin";
import Projects from "./mainpage/Projects";
import WorkExperience from "./mainpage/WorkExperience";
import Education from "./mainpage/Education";
import BlogPage from "./blogpage/BlogPage";
import BlogPostPage from "./blogpage/BlogPostPage";

const isMobile = window.innerWidth <= 768;
const BLOG_ROUTE = "#/blog";
const BLOG_POST_PREFIX = "#/blog/";

const getCurrentRoute = () => {
  const hash = window.location.hash || "#/";

  if (hash.startsWith(BLOG_POST_PREFIX)) {
    const slug = hash.replace(BLOG_POST_PREFIX, "").split("/")[0];
    return { page: "blogPost", slug };
  }

  if (hash.startsWith(BLOG_ROUTE)) {
    return { page: "blog" };
  }

  return { page: "home" };
};

function App() {
  const [route, setRoute] = useState(getCurrentRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getCurrentRoute());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route.page === "blog") {
    return <BlogPage />;
  }

  if (route.page === "blogPost") {
    return <BlogPostPage slug={route.slug} />;
  }

  return (
    <>
      {isMobile ? <Margin size={2}/> : <Margin size={3}/>}
      <VerticalFlexbox>

        <Title/>

        <Margin size={3}/>

        <Projects/>
        <WorkExperience/>
        <Education/>
        <p>building website...</p>
        <Margin size={3}/>
      </VerticalFlexbox>
    </>
  );
}

export default App;
