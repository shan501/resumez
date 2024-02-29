export default function Button(props: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="bg-black color white rounded-lg text-white px-4 py-2"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
