export default function FeatureBlockSubsection({ children }): JSX.Element {
  return (
    <figcaption className="bg-gray-200 py-2 px-4 text-sm font-bold">
      {children}
    </figcaption>
  );
}
