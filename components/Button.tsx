type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  icon,
  iconPosition = "right",
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-8 py-3 rounded-xl font-semibold transition duration-300 flex items-center gap-2 group";

  const variants = {
    primary:
        "bg-indigo-50 text-gray-950 shadow-[0_0_10px_rgba(218,218,218,0.3)] hover:shadow-[0_0_30px_rgba(218,218,218,0.8)] hover:scale-105 transition duration-300",
    outline:
        "border-2 border-gray-500 text-gray-200 hover:bg-white/5 transition",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}