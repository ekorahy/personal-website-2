import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ContactForm from "@/components/templates/ContactForm";

export default function Contact() {
  return (
    <article className="my-20">
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
    </article>
  );
}
