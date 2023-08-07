import NoScreenShots from "./NoScreenShots";
import { appStoreSS } from "@/mockData/data";
import { useRegion } from "@/context/RegionStore";

const DisplayDefaultSize = ({
  size,
  defaultSize,
}: {
  size: string;
  defaultSize: string;
}) => {
  const { region } = useRegion();
  const screenshots = appStoreSS[region][defaultSize];
  if (screenshots === undefined) {
    return <NoScreenShots region={`EN and ${region}`} size="65" />;
  }
  return (
    <div className="m-6 pt-2 py-4  px-6 rounded-lg bg-slate-100">
      <p className="my-2 font-medium">{size} Display</p>
      <p className="my-2 font-medium w-full bg-yellow-300/20 p-1 text-yellow-900">
        <span className="font-bold">Warning:</span> Displaying {defaultSize}
      </p>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 opacity-70">
        {screenshots.map((screenshot: number) => {
          return (
            <img
              key={screenshot}
              src={`appStoreSS/${region} ${defaultSize} ${screenshot}.jpg`}
              alt="appStoreScreenShots"
              className="object-cover rounded-md max-w-[200px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default DisplayDefaultSize;
