export const positions: {
  [key: string]: string[];
} = {
  marketing: ['마케팅', '마케터'],
  product: ['기획', '기획자'],
  design: ['디자인', '디자이너'],
  development: ['개발', '개발자'],
};

export const positionList = [
  {
    icon: 'marketing',
    position: 'marketing',
    title: positions.marketing[0],
    size: 67,
  },
  {
    icon: 'product',
    position: 'product',
    title: positions.product[0],
    size: 41,
  },
  {
    icon: 'design',
    position: 'design',
    title: positions.design[0],
    size: 47,
  },
  {
    icon: 'development',
    position: 'development',
    title: positions.development[0],
    size: 48,
  },
];
