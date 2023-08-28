import React, { useEffect, useState } from 'react'

const TourismLists = ({ cities }) => {
    const [myCities, setMyCities] = useState([]);
    const [recommendedCities, setRecommendedCities] = useState([]);

    useEffect(() => {
        setRecommendedCities(cities);
    }, [cities]);

    const addToMyCities = (city) => {
        setMyCities([...myCities, city]);

        const updatedRecommendedCities = recommendedCities.filter((recommendedCity) => recommendedCity.title !== city.title);
        setRecommendedCities(updatedRecommendedCities);

    }

    const deleteInMyCities = (city) => {
        const updatedMyCites = myCities.filter((myCity) => myCity.title !== city.title);
        setMyCities(updatedMyCites);

        setRecommendedCities([city, ...recommendedCities]);
    }
    
    return (
        <>
            <div className="absolute bottom-20 left-1/3 transform -translate-x-1/4 w-1/5 h-1/3 p-4 border border-gray-300 rounded-lg overflow-y-scroll bg-gray-100 bg-opacity-75">
                <h2 className="text-xl font-semibold mb-4 text-center">추천 관광지</h2>
                <ul className="list-disc pl-6">
                    {recommendedCities.map((city, index) => (
                        <li key={index}>
                            {city.title}
                            <button
                                className="ml-5"
                                onClick={() => addToMyCities(city)}
                            >
                                ➕
                            </button>    
                        </li>
                    ))}
                </ul>
            </div>
            <div className="absolute bottom-20 right-1/3 transform translate-x-1/4 w-1/5 h-1/3 p-4 border border-gray-300 rounded-lg overflow-y-scroll bg-gray-100 bg-opacity-75">
                <h2 className="text-xl font-semibold mb-4 text-center">내 관광지</h2>
                <ul className="list-disc pl-6">
                    {myCities.map((city, index) => (
                        <li key={index}>
                            {city.title}
                            <button
                                className="ml-5"
                                onClick={() => deleteInMyCities(city)}
                            >
                                ➖
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TourismLists