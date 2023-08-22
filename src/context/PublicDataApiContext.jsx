import { createContext, useContext } from "react";
import PublicData from "../api/public_data/publicData";
import FakePublicDataClient from "../api/public_data/fakePublicDataClient";

export const PublicDataApiContext = createContext();

const client = new FakePublicDataClient();
const publicData = new PublicData(client);

export function PublicDataApiProvider({ children }) {
  return (
    <PublicDataApiContext.Provider value={{ publicData }}>
      {children}
    </PublicDataApiContext.Provider>
  );
}

export function usePublicDataApi() {
  return useContext(PublicDataApiContext);
}
