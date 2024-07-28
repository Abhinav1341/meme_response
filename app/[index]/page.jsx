"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const IndexPage = ({ params }) => {
  const { index } = params;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const predefinedData = await response.json();

        const entry = predefinedData.find(
          (item) => item.id === parseInt(index)
        );
        if (!entry) {
          const notFoundEntry = predefinedData.find((item) => item.id === 404);
          if (notFoundEntry) {
            setData(notFoundEntry);
          } else {
            setError("404 entry not found in data.json");
          }
        } else {
          setData(entry);
        }
      } catch (err) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, [index]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return (
      <div className="text-gray-300 bg-gray-900 h-screen p-4 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-900">
      <div className="text-center ">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-gray-200">
          {data.id} : {data.text}
        </h1>
        <div className="flex justify-center mb-4 max-h-72 ">
          <Image
            src={data.image_location}
            alt={data.alttext}
            width={420}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
