import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="main">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p style={{ fontSize: "5rem", margin: "auto" }}>
            delsarte.adam@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
