interface IconProps {
  icon: string;
  size?: number;
}

export function Icon({ icon, size = 20 }: IconProps) {
  return (
    <img
      src={`/icons/${icon}.svg`}
      width={size}
      height={size}
      alt="icon"
      style={{ height: '20px' }}
    />
  );
}

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
}

export function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button
      className="flex h-20 w-20 items-center justify-center"
      onClick={onClick}
    >
      <Icon icon={icon} />
    </button>
  );
}
