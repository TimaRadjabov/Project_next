import Image from "next/image";
import s from "./page.module.css";
import Slider from "@/components/Slider";
import { quotes } from "./quotes";
export default function Home() {
  return (
    <main className={s.main}>
      <div className={s.content}>
        <div className={s.text}>
          <h1 className={s.title}>
            Мой путь становления Фронтенд разработчиком
          </h1>
          <div className={s.box}>
            <div className={s.descr}>
              <Slider data={quotes} />
            </div>
          </div>
        </div>
        <div className={s.image}>
          <Image
            src="/react.jpeg"
            alt="React image"
            width={420}
            height={420}
            priority={true}
          />
        </div>
      </div>
    </main>
  );
}
