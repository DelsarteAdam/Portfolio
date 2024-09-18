import Footer from "../components/Footer";
import Header from "../components/Header";

function NotFound() {
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
          <p style={{ fontSize: "5rem", margin: "auto" }}>404</p>
          <p style={{ fontSize: "5rem", margin: "auto" }}> NOT FOUND</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
