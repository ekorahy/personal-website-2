import TitleSection from "@/components/atoms/TitleSection";
import ContactForm from "@/components/templates/ContactForm";

export default function Contact() {
  return (
    <article className="mt-20">
      <section className="[&>*]:mb-8">
        <TitleSection title="Contact" />
        <ContactForm />
      </section>
    </article>
  );
}