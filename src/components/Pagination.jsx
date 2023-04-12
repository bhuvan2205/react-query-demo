import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);

  const fetchPlanets = async () => {
    const url = `http://swapi.dev/api/planets/?page=${page}`;

    console.log("[URL] :", url);

    const res = await fetch(url);

    return await res.json();
  };

  const {
    isLoading,
    error,
    data,
    isPreviousData,
  } = useQuery(["planets", page], fetchPlanets);

  console.log(data);

  return (
    <div>
      <h2>Planets</h2>

      {isLoading && <div>Loading data...</div>}

      {error && <div>Error fetching data</div>}

      {data && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            {"<<"}
          </button>

          <span>Current Page: {page}</span>

          <button
            onClick={() => {
              if (!isPreviousData && data.next) {
                setPage((old) => old + 1);

                console.log(page);
              }
            }}
            disabled={!data?.next}
          >
            {">>"}
          </button>

          <div>
            {data.results.map((planet) => (
              <div key={planet.id}>{planet.name}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
