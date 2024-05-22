interface ImageProps {
  image: string;
  size?: number;
  alt?: string;
}

export function Image({ image, size = 20, alt = '' }: ImageProps) {
  return (
    <img src={`/images/${image}.png`} width={size} height={size} alt={alt} />
  );
}
