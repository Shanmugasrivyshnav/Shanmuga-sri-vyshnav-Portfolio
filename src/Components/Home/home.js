import { Link } from "react-router-dom";
import {
  HomeSection,
  HomeContent,
  HomeBadge,
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

const featureTags = ["JavaScript", "React", "Python", "CSS", "Web Apps"];
const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Technologies" },
];

const Home = () => {
  return (
    <HomeSection>
      <HomeContent>
        <HomeBadge>Full Stack Portfolio</HomeBadge>
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
          {stats.map((stat) => (
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
