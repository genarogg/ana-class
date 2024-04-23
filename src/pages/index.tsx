import { useState, useEffect } from "react";
import Image from "next/image";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";

interface homeProps {}

const home: React.FC<homeProps> = () => {
  const [img, setImg] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setImg(!img);
    }, 1000);
  }, [img, setImg]);

  return (
    <div>
      {img ? (
        <Image src={img1} width={500} height={500} alt="perrito1" />
      ) : (
        <Image src={img2} width={500} height={500} alt="perrito1" />
      )}
    </div>
  );
};

export default home;
