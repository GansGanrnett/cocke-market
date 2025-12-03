import { ICardProps } from '../types/TCardProps';

export const cards: ICardProps[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Карта ${i + 1}`,
  // img: `https://picsum.photos/seed/card${i + 1}/600/400`,
  img: `/cakes/img_${i+1}.jpg`,
  description: 'Нежный крем любого цвета на выбор, вафельная основа',
}));
