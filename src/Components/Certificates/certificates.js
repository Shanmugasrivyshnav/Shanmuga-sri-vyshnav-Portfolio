import { useEffect, useState } from "react";
import {
  CertificateSection,
  SectionHeader,
  SectionTitle,
  SectionIntro,
  CertificateCarousel,
  CertificateTrack,
  CertificateSlide,
  CertificateCard,
  CertificateTitle,
  CertificateIssuer,
  CertificateDate,
  CertificateDescription,
  CertificateLink,
  CarouselControls,
  CarouselButton,
  CarouselSlideList,
  CarouselSlide,
} from "./StyledCertificates";

const defaultCertificates = [
  {
    title: "Build Your Own Static Website",
    issuer: "NXT WAVE ACADEMY",
    date: "08/04/2025",
    description:
      "Design and build responsive static websites using HTML, CSS, and Bootstrap framework.",
    link: "https://certificates.ccbp.in/academy/static-website?id=JBGBKIAMVA",
  },
  {
    title: "Build Your Own Responsive Website",
    issuer: "NXT WAVE ACADEMY",
    date: "07/05/2025",
    description:
      "Build a responsive website that appears beautifully on the screen of any size. Develop a user-centric food tech website, an E-commerce product listing website for small business owners using bootstrap fundamental concepts.",
    link: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=GMBDWGRLZW",
  },
  {
    title: "Introduction to Databases",
    issuer: "NXT WAVE ACADEMY",
    date: "01/06/2025",
    description:
      "Learned about the incredibly prevalent databases. Through the course, develop strong fundamentals and be proficient in concepts related to Databases and DBMS. Most importantly, able to perform powerful queries on databases using SQL.",
    link: "https://certificates.ccbp.in/academy/introduction-to-databases?id=EOFCEICVYU",
  },
  {
    title: "Programming Foundations with Python",
    issuer: "NXT WAVE ACADEMY",
    date: "05/10/2025",
    description:
      "With the course proficient in writing Python code and build real-world software using Object-Oriented Principles. Also build strong foundations in programming constructs of Python language.",
    link: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=NEIQCTLPVK",
  },
  {
    title: "Build Your Own Dynamic Web Application",
    issuer: "NXT WAVE ACADEMY",
    date: "28/11/2025",
    description:
      "real-world/interactive applications using JavaScript and develop skills that really matter to the companies.",
    link: "https://certificates.ccbp.in/academy/dynamic-web-application?id=PGHMWMKUQS",
  },
  {
    title: "JavaScript Essentials",
    issuer: "NXT WAVE ACADEMY",
    date: "20/12/2025",
    description:
      "learning about concepts such as events, scope, hoisting, and asynchronous JavaScript, you will gain a deeper understanding of how the language works and be able to write more effective code.",
    link: "https://certificates.ccbp.in/academy/javascript-essentials?id=UXJZDOUQUO",
  },
  {
    title: "Responsive Web Design using Flex-box",
    issuer: "NXT WAVE ACADEMY",
    date: "04/01/2026",
    description:
      "Powerful tool for creating responsive layouts that look good on any device Responsive design helps ensure that users have a seamless and enjoyable experience,responsive web design using Flex-box help you create better, more user-friendly devices",
    link: "https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=PPFILFMNLK",
  },
  {
    title: "Developer Foundations GIT and COMMAND LINE",
    issuer: "NXT WAVE ACADEMY",
    date: "02/02/2026",
    description:
      "Efficient ways to work with the computers and internet makes a better developer,understanding of how Operating Systems & Internet works,with Command-Line and Git which are every-day essentials for an applications.",
    link: "https://certificates.ccbp.in/academy/developer-foundations?id=YGPTOJMPWX",
  },
  {
    title: "Node JS",
    issuer: "NXT WAVE ACADEMY",
    date: "27/02/2026",
    description:
      "web application development, including routing, working with databases, building APIs, and security and deployment. By the end of the course, you will have a well-rounded understanding of how to build a backend web application using Node.js and Express.",
    link: "https://certificates.ccbp.in/academy/node-js?id=DLIIDCRXHX",
  },
  {
    title: "React JS",
    issuer: "NXT WAVE ACADEMY",
    date: "02/06/2026",
    description:
      "Working with ReactJS can make a developer's life easier thanks to its simplicity and modular infrastructure. By learning ReactJS, gain a highly sought-after skill that can open up a range of career and make a valuable asset to companies.",
    link: "https://certificates.ccbp.in/academy/react-js?id=MSZTAJPEOG",
  },
];

const Certificates = () => {
  const [certificates] = useState(defaultCertificates);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (certificates.length === 0) return;

    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [certificates.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  return (
    <CertificateSection id="certificates">
      <SectionHeader>
        <SectionTitle>Certifications</SectionTitle>
        <SectionIntro>
          Professional credentials that demonstrate my technical knowledge and
          commitment to continuous learning.
        </SectionIntro>
      </SectionHeader>

      <CertificateCarousel>
        <CertificateTrack $activeIndex={activeIndex}>
          {certificates.map((certificate) => (
            <CertificateSlide key={certificate.title}>
              <CertificateCard>
                <CertificateTitle>{certificate.title}</CertificateTitle>
                <CertificateIssuer>{certificate.issuer}</CertificateIssuer>
                <CertificateDate>{certificate.date}</CertificateDate>
                <CertificateDescription>
                  {certificate.description}
                </CertificateDescription>
                <CertificateLink
                  href={certificate.link}
                  target="_blank"
                  rel="no-referrer"
                >
                  View Credential
                </CertificateLink>
              </CertificateCard>
            </CertificateSlide>
          ))}
        </CertificateTrack>

        <CarouselControls>
          <CarouselButton type="button" onClick={handlePrev}>
            Previous
          </CarouselButton>
          <CarouselButton type="button" onClick={handleNext}>
            Next
          </CarouselButton>
        </CarouselControls>

        <CarouselSlideList>
          {certificates.map((_, index) => (
            <CarouselSlide
              key={index}
              $active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </CarouselSlideList>
      </CertificateCarousel>
    </CertificateSection>
  );
};

export default Certificates;
