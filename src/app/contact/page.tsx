import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ArticleSection from "@/components/templates/ArticleSection";
import ContactForm from "@/components/templates/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Feel free to reach out to me for inquiries, collaborations, or any other questions. I’m open to discussing opportunities, providing feedback, or connecting with fellow professionals and enthusiasts.",
  keywords: [
    "contact",
    "get in touch",
    "reach out",
    "collaborations",
    "inquiries",
    "professional connections",
    "feedback",
    "networking",
    "Eksa",
    "Eko Rahayu Widodo",
    "contact form",
    "communication",
  ],
};

export default function Contact() {
  return (
    <ArticleSection>
      <section>
        <div className="mb-4">
          <TitleWithDescriptionSection
            title="Contact"
            description="Feel free to contact me."
            titleVariant="secondary"
            descriptionVariant="secondary"
          />
        </div>
        <ContactForm />
      </section>
    </ArticleSection>
  );
}
