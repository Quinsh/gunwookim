import Title from "./mainpage/Title";
import styles from './App.css'
import VerticalFlexbox from "./mainpage/VerticalFlexbox";
import Margin from "./Margin";
import Projects from "./mainpage/Projects";
import WorkExperience from "./mainpage/WorkExperience";
import Education from "./mainpage/Education";
import Star from "./mainpage/Star";

const isMobile = window.innerWidth <= 768;

function App() {
  return (
    <>
      {isMobile ? <Margin size={5}/> : <Margin size={8}/>}
      <VerticalFlexbox>

        <Title/>

        <Star/>
        {/* <Margin size={1}/> */}

        <Projects/>
        <WorkExperience/>
        <Education/>
        <p>building website...</p>
        <Margin size={30}/>
      </VerticalFlexbox>
    </>
  );
}

export default App;
