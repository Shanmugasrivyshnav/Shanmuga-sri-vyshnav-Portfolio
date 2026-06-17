import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeSection,
  HomeContent,
  HomeBadge,
  HomeBadgeText,
  HomeHeading,
  HomeSubtitle,
  HomeDescription,
  HomeTagList,
  HomeTag,
  HomeActions,
  HomeAction,
  HomeStats,
  HomeStat,
  HomeStatValue,
  HomeStatLabel,
  HeroVisual,
  HeroCircle,
  ProfilePicture,
} from "./StyledHome";
import { MdArrowForward } from "react-icons/md";

const featureTags = [
  "JavaScript",
  "React Js ",
  "Node Js",
  "SQL",
  "Python",
  "CSS",
  "HTML",
];
const stats = [
  { value: "3+", label: "Years Experience in Core" },
  { value: "10+", label: "Projects" },
  { value: "7+", label: "Technologies" },
];
const titlesJobs = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const Home = () => {
  const [jobTitles, setjobTitles] = useState(0);
  const [yearsExp, setYearsExp] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setjobTitles((prevjob) => (prevjob + 1) % titlesJobs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateValue = (end, duration, setter) => {
      let current = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    };

    const Experience = animateValue(3, 1500, setYearsExp);
    const Projects = animateValue(10, 1500, setProjects);
    const Technologies = animateValue(5, 1500, setTechnologies);

    return () => {
      Experience();
      Projects();
      Technologies();
    };
  }, []);

  return (
    <HomeSection>
      <HomeContent>
        <HomeBadge>
          <HomeBadgeText>{titlesJobs[jobTitles]}</HomeBadgeText>
        </HomeBadge>
        <HomeHeading>
          KG Shanmuga
          <br />
          Sri Vyshnav
        </HomeHeading>
        <HomeSubtitle>
          Crafting modern web applications with clean code and smart design.
        </HomeSubtitle>
        <HomeDescription>
          I build responsive websites and interactive applications with a focus
          on performance, accessibility, and thoughtful user experience.
        </HomeDescription>

        <HomeTagList>
          {featureTags.map((tag) => (
            <HomeTag key={tag}>{tag}</HomeTag>
          ))}
        </HomeTagList>

        <HomeActions>
          <HomeAction as={Link} to="/projects">
            View Projects <MdArrowForward size={20} />
          </HomeAction>
          <HomeAction as={Link} to="/contact" secondary>
            Contact Me
          </HomeAction>
        </HomeActions>

        <HomeStats>
          {[
            { value: `${yearsExp}+`, label: "Years Experience" },
            { value: `${projects}+`, label: "Projects" },
            { value: `${technologies}+`, label: "Technologies" },
          ].map((stat) => (
            <HomeStat key={stat.label}>
              <HomeStatValue>{stat.value}</HomeStatValue>
              <HomeStatLabel>{stat.label}</HomeStatLabel>
            </HomeStat>
          ))}
        </HomeStats>
      </HomeContent>
      <HeroVisual>
        <HeroCircle>
          <ProfilePicture
            src="https://res.cloudinary.com/dhdmdsvy1/image/upload/v1767538938/banner-image_shanmukha_png_xiw0dz.png"
            alt="shanmukha picture"
          />
        </HeroCircle>
      </HeroVisual>
    </HomeSection>
  );
};

export default Home;
