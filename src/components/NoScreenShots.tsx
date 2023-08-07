const NoScreenShots = ({ region, size }: { region?: string; size: string }) => {
  return (
    <div className="m-6 pt-2 py-4 px-6 rounded-lg bg-slate-100 w-1/2">
      <p className="my-2 font-medium">{size} Display</p>
      <p className="my-2 font-medium w-full bg-yellow-300/20 p-1 text-yellow-900">
        <span className="font-bold">Warning:</span> No Screenshots{" "}
        {region ?? ""}
      </p>
    </div>
  );
};

export default NoScreenShots;
