import Footer from "../components/Footer";
import Header from "../components/Header";
import ImgBox from "../components/ImgBox";
import data from "../data/portfolio.json";

type dataType = {
  folder: string;
  filePath: string;
  fileName: string;
};

function Galery() {
  console.log(data);

  return (
    <>
      <Header />
      <div className="container">
        {data.map((file: dataType) => (
          <ImgBox filePath={file.filePath} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Galery;
