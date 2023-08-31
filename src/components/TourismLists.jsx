import React, { useEffect, useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

const TourismLists = ({ cities, onUpdateMyAttractions }) => {
  const [myAttractions, setMyAttractions] = useState([]);
  const [recommendedCities, setRecommendedCities] = useState([]);

  useEffect(() => {
    setRecommendedCities(cities);
  }, [cities]);

  const addToMyAttractions = (city) => {
    const newAttractions = [...myAttractions, city];
    setMyAttractions(newAttractions);
    onUpdateMyAttractions(newAttractions);
    const updatedRecommendedCities = recommendedCities.filter(
      (recommendedCity) => !newAttractions.includes(recommendedCity)
    );
    setRecommendedCities(updatedRecommendedCities);
  };

  const deleteInMyAttractions = (city) => {
    setMyAttractions((prevMyAttractions) => {
      const attractions = prevMyAttractions.filter(
        (myCity) => myCity.title !== city.title
      );
      onUpdateMyAttractions(attractions);
      return attractions;
    });
    setRecommendedCities([city, ...recommendedCities]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over) {
      const updatedMyAttractions = [...myAttractions];
      const oldIndex = myAttractions.findIndex(
        (city) => city.title === active.id
      );
      const newIndex = myAttractions.findIndex(
        (city) => city.title === over.id
      );

      updatedMyAttractions.splice(
        newIndex,
        0,
        updatedMyAttractions.splice(oldIndex, 1)[0]
      );
      setMyAttractions(updatedMyAttractions);
    }
  };

  const DraggableCity = ({ city, index }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id: city.title,
    });

    const { setNodeRef: droppableRef } = useDroppable({
      id: city.title,
    });

    const style = {
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : undefined,
      zIndex: transform ? 2 : undefined,
    };

    return (
      <li
        ref={(node) => {
          setNodeRef(node);
          droppableRef(node);
        }}
        key={city.contentid}
        style={style}
        className="hover:text-amber-500 list-none"
        {...attributes}
        {...listeners}
      >
        {index + 1}. {city.title}
      </li>
    );
  };

  return (
    <>
      <div className="absolute bottom-20 left-1/3 transform -translate-x-1/4 w-1/5 h-1/3 p-4 border border-gray-300 rounded-lg overflow-y-scroll bg-gray-100 bg-opacity-75">
        <h2 className="text-xl font-semibold mb-4 text-center">추천 관광지</h2>
        <ul className="list-disc pl-6">
          {recommendedCities.map((city, index) => (
            <li key={city.contentid} className="hover:text-blue-400">
              {city.title}
              <button className="ml-5" onClick={() => addToMyAttractions(city)}>
                ➕
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-20 right-1/3 transform translate-x-1/4 w-1/5 h-1/3 p-4 border border-gray-300 rounded-lg overflow-y-scroll bg-gray-100 bg-opacity-75">
        <h2 className="text-xl font-semibold mb-4 text-center">내 관광지</h2>
        <DndContext onDragEnd={handleDragEnd}>
          <ul className="list-disc pl-6">
            {myAttractions.map((city, index) => (
              <>
                <DraggableCity key={city.contentid} city={city} index={index} />
                <button
                  className="ml-5"
                  onClick={() => deleteInMyAttractions(city)}
                >
                  ➖
                </button>
              </>
            ))}
          </ul>
        </DndContext>
      </div>
    </>
  );
};

export default TourismLists;
