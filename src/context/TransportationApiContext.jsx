import { createContext, useContext } from "react";
// import TransportationClient from "../api/transportation_data/transportationCllient";
import Transportation from "../api/transportation_data/transportation";
import FakeTransportationClient from "../api/transportation_data/fakeTransportationClient";

export const TransportationApiContext = createContext();

const client = new FakeTransportationClient();
const transportation = new Transportation(client);

export function TransportationApiProvider({ children }) {
  return (
    <TransportationApiContext.Provider value={{ transportation }}>
      {children}
    </TransportationApiContext.Provider>
  );
}

export function useTransportationApi() {
  return useContext(TransportationApiContext);
}
