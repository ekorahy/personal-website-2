import TitleSection from "../atoms/TitleSection";
import TitleWithDescriptionSection from "../molecules/TitleWithDescriptionSection";
import TechList from "../organisms/TechList";
import FavoriteTechStack from "./FavoriteTechStack";

export default function HomeFavTechStack() {
  return (
    <section>
      <TitleWithDescriptionSection
        title="Favorite Tech Stack"
        isWithDash={false}
        description="for Front-end Web Development"
        titleVariant="secondary"
        descriptionVariant="secondary"
        alignment="center"
      />
      <FavoriteTechStack />
    </section>
  );
}
