interface IconProps {
  icon: string;
  size?: number;
  className?: string;
}

export function Icon({ icon, size = 20, className }: IconProps) {
  return (
    <img
      src={`/icons/${icon}.svg`}
      width={size}
      height={size}
      alt="icon"
      className={className}
    />
  );
}

interface IconButtonProps extends IconProps {
  onClick?: () => void;
}

export function IconButton({
  icon,
  onClick,
  size,
  className,
}: IconButtonProps) {
  return (
    <button
      className="flex h-20 w-20 items-center justify-center"
      onClick={onClick}
    >
      <Icon icon={icon} size={size} className={className} />
    </button>
  );
}
