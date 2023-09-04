import React from "react";
import TransportationDetail from "./TransportationDetail";

export default function TransportationInfo({ selectedAttractions }) {
  return (
    <ol className="lg:basis-1/3 w-full h-96 overflow-y-scroll border-dotted border-2 border-red-300">
      {selectedAttractions.map((_, index) => {
        if (index >= selectedAttractions.length - 1) return null;
        return (
          <TransportationDetail
            key={index}
            start={selectedAttractions[index]}
            end={selectedAttractions[index + 1]}
          />
        );
      })}
    </ol>
  );
}
