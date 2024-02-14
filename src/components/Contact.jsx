import ContactElement from "./ContactElement";
import SmallDivider from "./SmallDivider";
import contacts from "../data/contacts";
import "../style/Contact.css";

function Contact() {
  return (
    <>
      <h3 className="contact-title">Contact</h3>
      <SmallDivider short={true} />

      <div className="contacts-list">
        {contacts.map((c) => (
          <ContactElement
            image={c.image}
            alt={c.alt}
            text={c.text}
            link={c.link}
            key={c.text}
          />
        ))}
      </div>
    </>
  );
}

export default Contact;
