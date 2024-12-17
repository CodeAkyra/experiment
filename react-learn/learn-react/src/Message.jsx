// Pascal case or PascalCase is a programming
// naming convention where the first letter
// of each compound word in a variable is capitalized

export default function Message() {
  // JSX : JavaScript XML

  const name = "Mark";
  if (name)
    return (
      <div>
        <h1 className="text-3xl font-bold underline">Hello {name}</h1>
      </div>
    );
  return <h1 className="underline">Hello World!</h1>;
}
