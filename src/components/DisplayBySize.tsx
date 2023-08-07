import { useRegion } from "@/context/RegionStore";
import { appStoreSS } from "@/mockData/data";
import NoScreenShots from "./NoScreenShots";
import DisplayDefaultSize from "./DisplayDefaultSize";

export const DisplaySSBySize = ({ size }: { size: string }) => {
  const { region } = useRegion();
  const screenshots = appStoreSS[region][size];

  if (region === "EN" && screenshots === undefined) {
    return <NoScreenShots region="EN" size={size} />;
  }

  if (region !== "EN" && parseInt(size) < 55 && screenshots === undefined) {
    return <DisplayDefaultSize size={size} defaultSize="55" />;
  }

  if (region !== "EN" && size !== "65" && screenshots === undefined) {
    return <DisplayDefaultSize size={size} defaultSize="65" />;
  }

  if (screenshots === undefined) {
    return <NoScreenShots size={size} />;
  }

  return (
    <div className="m-6 pt-2 py-4 px-6 rounded-lg bg-slate-100 w-1/2">
      <p className="my-2 font-medium">{size} Display</p>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {screenshots.map((screenshot: number) => {
          return (
            <img
              key={screenshot}
              src={`appStoreSS/${region} ${size} ${screenshot}.jpg`}
              alt="appStoreScreenShots"
              className="object-cover rounded-md"
            />
          );
        })}
      </div>
    </div>
  );
};
