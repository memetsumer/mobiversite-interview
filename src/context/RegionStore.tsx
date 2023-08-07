"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface RegionContextType {
  region: string;
  changeRegion: (newRegion: string) => void;
  resetRegion: () => void;
}

const RegionContext = createContext<RegionContextType>({
  region: "",
  changeRegion: () => {},
  resetRegion: () => {},
});

const useRegion = () => useContext(RegionContext);

const RegionProvider = ({ children }: { children: ReactNode }) => {
  const [region, setRegion] = useState("EN");

  const changeRegion = (newRegion: string) => {
    setRegion(newRegion);
  };

  const resetRegion = () => {
    setRegion("");
  };

  return (
    <RegionContext.Provider value={{ region, changeRegion, resetRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export { RegionProvider, useRegion };
