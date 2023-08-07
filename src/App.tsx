import { DisplaySSBySize } from "./components/DisplayBySize";
import SelectRegion from "./components/SelectRegion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function App() {
  const sizes = ["67", "65", "61", "58", "55", "47", "40"];

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col p-8">
      <div className="flex items-center justify-between w-full lg:w-1/2">
        <p>Mehmet Sumer</p>
        <SelectRegion />
      </div>
      <div className="flex items-center justify-start w-full lg:w-1/2 mt-4">
        <GitHubLogoIcon className="mr-2" />
        <a
          href="https://github.com/memetsumer/mobiversite-interview"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Source code
        </a>
      </div>

      {sizes.map((size) => {
        return <DisplaySSBySize key={size} size={size} />;
      })}
    </div>
  );
}

export default App;
