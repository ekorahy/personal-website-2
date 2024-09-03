import TitleSection from "@/components/atoms/TitleSection";
import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ContactForm from "@/components/templates/ContactForm";

export default function Contact() {
  return (
    <article className="my-20">
      <section>
        <div className="mb-4">
          <TitleWithDescriptionSection
            title="Contact"
            description="Feel free to contact me if you need any insights on web development, especially with frontend tasks. Whether it’s for advice, a discussion, or just to say hello, I will be delighted to assist you."
            titleVariant="secondary"
            descriptionVariant="primary"
          />
        </div>
        <ContactForm />
      </section>
    </article>
  );
}
