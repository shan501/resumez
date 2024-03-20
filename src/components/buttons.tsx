export default function Button({
  children,
  onClick,
  primaryButton = true,
  extraClassName = "", // Providing a default value for extraClassName
  size,
}: {
  children: React.ReactNode;
  onClick: () => void;
  extraClassName?: string;
  primaryButton: boolean;
  size?: "small" | "medium" | "large";
}) {
  return (
    <button
      className={`${extraClassName} ${
        primaryButton
          ? "bg-black text-white"
          : "bg-white text-black border border-color-border"
      } rounded-lg 
      ${size === "small" ? "px-3 py-1" : ""}
      ${size === "medium" ? "" : ""}
      ${size === "large" ? "px-4 py-2" : ""} 
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
