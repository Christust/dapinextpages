import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function HomePage() {
  return (
    <>
      <main>
        <div>DAPI</div>
        <div className="col-6">
          <Carousel
            centerMode={true}
            centerSlidePercentage="100"
            dynamicHeight={false}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div>
              <img width={400} height={400} src="next-black.jpg" />
            </div>
            <div>
              <img width={400} height={400} src="next-white.png" />
            </div>
          </Carousel>
        </div>
      </main>
    </>
  );
}
