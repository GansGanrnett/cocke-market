import style from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CardGrid from '@/components/ui/CardGrid/CardGrid';
import Container from './components/ui/Container/Container';
import Block from './components/ui/Block/Block';
import Carousel from './components/ui/Carousel/Carousel';
import { CarouselData } from './data/CarouselData';
import Gallery from './components/ui/Gallery/Gallery';
import { ButtonContext } from './types/ButtonContext';

export default function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="app-root">
      <Header />

      <div className={style.main}>
        <ButtonContext value={{ text: 'Перейти в каталог', onClick: handleClick }}>
          <Container
            height={1294}
            backgroundColor="#081130"
            backgroundImage="url(pick_1.jpg)"
            backgroundPosition="right bottom"
            left={
              <Block
                label="Надзаголовок"
                bigText="Большой жирный текст"
                midText="Средний текст"
                smallText="Маленькая подпись под кнопкой"
                color="#fff"
              />
            }

            // right={<div> <img src="pick_1.jpg" /></div>}
          />
        </ButtonContext>

        <ButtonContext value={{ text: 'Купить', onClick: handleClick }}>
          <CardGrid backgroundColor="#FFF" />
        </ButtonContext>

        <ButtonContext value={{ text: 'Купить', onClick: handleClick }}>
          <Container
            height={1352}
            backgroundColor="#081130"
            backgroundImage="url(cloud_bottom.png), url(cloud_top.png), url(phone.png)"
            backgroundPosition="bottom, top, left bottom"
            right={
              <Block
                label="Другой блок"
                bigText="Вторая половина контейнера"
                midText="Здесь тоже можно что-то писать"
                smallText="Подпись"
                color="#fff"
              />
            }
          />
        </ButtonContext>

        <ButtonContext value={{ text: 'Купить', onClick: handleClick }}>
          <Container
            height={830}
            backgroundColor="#FFF"
            bg2='url(woman.png)'
            // backgroundImage="url(woman.png)"
            // backgroundPosition="center"
            // backgroundImage="url(cloud_top_2.png), url(cloud_bottom_2.png)"
            // backgroundPosition="top, bottom"
            left={
              <Block
                label="Надзаголовок"
                bigText="Большой жирный текст"
                midText="Средний текст"
                smallText="Маленькая подпись под кнопкой"
              />
            }
            
          />
        </ButtonContext>

        <Carousel
          backgroundImage="url(cloud_top_2.png), url(cloud_bottom_2.png)"
          backgroundPosition="top, bottom"
          items={CarouselData}
        />

        <Gallery />
      </div>

      <Footer />
    </div>
  );
}
