export default function Button({
  children,
  onClick,
  secondary = false, // Providing a default value for secondary
  extraClassName = "", // Providing a default value for extraClassName
}: {
  children: React.ReactNode;
  onClick: () => void;
  extraClassName?: string;
  secondary?: boolean;
}) {
  return (
    <>
      {
        // Ensuring proper spacing for concatenation and fixing className syntax
        secondary && (
          <button
            className={`${extraClassName} bg-white text-black border border-color-border rounded-lg px-4 py-2`}
            onClick={onClick}
          >
            {children}
          </button>
        )
      }
      {
        // Ensuring proper spacing for concatenation and fixing className syntax
        !secondary && (
          <button
            className={`${extraClassName} bg-black text-white rounded-lg px-4 py-2`}
            onClick={onClick}
          >
            {children}
          </button>
        )
      }
    </>
  );
}
