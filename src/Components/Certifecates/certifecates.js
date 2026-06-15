import {
  CertificateSection,
  SectionHeader,
  SectionTitle,
  SectionIntro,
  CertificateGrid,
  CertificateCard,
  CertificateTitle,
  CertificateIssuer,
  CertificateDate,
} from "./StyledCertifecates";

const certificates = [
  {
    title: "Full Stack Development Certification",
    issuer: "NxtWave",
    date: "2026",
  },
  {
    title: "Advanced JavaScript & React",
    issuer: "Udemy",
    date: "2025",
  },
  {
    title: "Python for Data Science",
    issuer: "Coursera",
    date: "2024",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2024",
  },
];

const Certifecates = () => {
  return (
    <CertificateSection id="certificates">
      <SectionHeader>
        <SectionTitle>Certifications</SectionTitle>
        <SectionIntro>
          Professional credentials that demonstrate my technical knowledge and
          commitment to continuous learning.
        </SectionIntro>
      </SectionHeader>

      <CertificateGrid>
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.title}>
            <CertificateTitle>{certificate.title}</CertificateTitle>
            <CertificateIssuer>{certificate.issuer}</CertificateIssuer>
            <CertificateDate>{certificate.date}</CertificateDate>
          </CertificateCard>
        ))}
      </CertificateGrid>
    </CertificateSection>
  );
};

export default Certifecates;
