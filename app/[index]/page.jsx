"use client";

import { useEffect, useState } from "react";

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
    <div>
      <h1>{data.text}</h1>
      <img src={data.image_location} alt={data.alttext} />
      <p>{data.alttext}</p>
    </div>
  );
};

export default IndexPage;
