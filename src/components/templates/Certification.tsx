import TitleSection from "../atoms/TitleSection";
import CertificationCarousel from "../organisms/CertificationCarausel";
import ArticleSection from "./ArticleSection";

export default function Certification() {
  return (
    <ArticleSection>
      <section>
        <TitleSection
          title="Certifications"
          isWithDash={false}
          alignment="center"
          variant="secondary"
        />
        <CertificationCarousel />
      </section>
    </ArticleSection>
  );
}
