import figure1 from "../assets/albumImages/figure1.png";
import figure2 from "../assets/albumImages/figure2.png";
import figure3 from "../assets/albumImages/figure3.png";
import figure4 from "../assets/albumImages/figure4.png";
import figure5 from "../assets/albumImages/figure5.png";
import figure6 from "../assets/albumImages/figure6.png";
import figure7 from "../assets/albumImages/figure7.png";

type image = HTMLImageElement;
type imageArr = image[];
interface album {
  id: number;
  albumTitle: string;
  images: imageArr;
}

const albumData: album[] = [
  {
    id: 1,
    albumTitle: "1touch",
    images: [figure1],
  },
  {
    id: 2,
    albumTitle: "Album Name",
    images: [figure2, figure3, figure4],
  },
  {
    id: 3,
    albumTitle: "Album Name",
    images: [figure5, figure6],
  },
  {
    id: 4,
    albumTitle: "Album Name",
    images: [figure7],
  },
];

export { image, imageArr, album, albumData };
