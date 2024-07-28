"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const IndexPage = ({ params }) => {
  const { index } = params;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!index) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${index}`);
        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          setError(result.error);
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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="text-center ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">{data.text}</h1>
        <div className="flex justify-center mb-4">
          <Image
            src={data.image_location}
            alt={data.alttext}
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-600">{data.alttext}</p>
      </div>
    </div>
  );
};

export default IndexPage;
