import PageTemplate from "../../components/reusable/template/PageTemplate.tsx";
import st from "./contact.module.scss";

export default function Contact() {
  const contactData = [
    {
      imgUrl: "/contact/location.png",
      desc: "123, ABC Street, New Colony, Hong Kong.",
      type: "address",
    },
    {
      imgUrl: "/contact/email.png",
      desc: "info@Project M2.in",
      type: "email",
    },
    {
      imgUrl: "/contact/phone-call.png",
      desc: "+917398757031",
      type: "phone",
    },
  ];

  return (
    <PageTemplate outsideApp>
      <div className={st.mainContainer}>
        <div>
          <h1>Contact Project M2</h1>
          <p>Let's discuss how we can help you!</p>
        </div>
        <div>
          {contactData.map((data, index) => (
            <div key={index}>
              <img src={data.imgUrl} />
              {data.type == "email" ? (
                <a href={`mailto:${data.desc}`}>{data.desc}</a>
              ) : data.type == "phone" ? (
                <a href={`tel:${data.desc}`}>{data.desc}</a>
              ) : (
                <p>{data.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
