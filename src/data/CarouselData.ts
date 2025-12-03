import { ICarouselItem } from '@/types/TCarouselItem';

export const CarouselData: ICarouselItem[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: '«Спасибо за прекрасные капкейки, все на высоте»',
  text: `«Никогда не выдумывайте отзывы ради красивого текста. Будьте честны: расскажите реальную историю или впечатление. Люди это ценят больше всего!»`,
  img: `https://picsum.photos/seed/card${i + 1}/600/400`,

  name: 'Иван Демидов',
  city: 'Краснодар',
  color: '#5D6AFB',
}));
