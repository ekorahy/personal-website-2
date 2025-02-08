import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import TechList from "@/components/organisms/TechList";
import ArticleSection from "@/components/templates/ArticleSection";

export default function Technologies() {
  return (
    <ArticleSection>
      <section>
        <TitleWithDescriptionSection title="Technologies" description="That I use to tackle problems based on user requirements." isWithDash titleVariant="secondary" descriptionVariant="secondary" />
        <TechList />
      </section>
    </ArticleSection>
  );
}