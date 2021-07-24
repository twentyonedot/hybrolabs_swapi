import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchData } from "../utils/api";

const People = () => {
  const [page, setPage] = useState(1);

  const { isLoading, error, data } = useQuery(
    ["people", page],
    () => fetchData(`https://swapi.dev/api/people/?page=${page}`),
    {
      keepPreviousData: true,
    }
  );

  return (
    <div className="card h-3/4 md:h-1/2 overflow-auto">
      <h1 className="sticky top-0 text-center bg-[#80afe7] p-2 m-0 text-2xl">
        Starwars Characters
      </h1>
      {error && <p>Error: {error}</p>}
      {isLoading && <p>Loading...</p>}
      {data?.results.map((character) => (
        <Link to={`people/${character.url.split("/").slice(-2)[0]}`}>
          <div
            key={character.name}
            className="bg-[#213b5b] my-2 px-3 rounded-lg py-4 mx-3 text-white cursor-pointer"
          >
            <div className="flex justify-between">
              <h3>{character.name}</h3>
              <div className="bg-[#b7cae1] rounded-lg px-2 py-1 font-light text-sm text-black ml-4">
                <Species link={character.species[0]} />
              </div>
            </div>
            <p className="text-left text-xs text-[#ccd3da]">
              <Planet link={character.homeworld} />
            </p>
          </div>
        </Link>
      ))}
      <div className="flex justify-between items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
        >
          Prev
        </button>
        <span>{page}</span>
        <button
          disabled={!data || !data.next}
          onClick={() =>
            setPage((old) => (!data || !data.next ? old : old + 1))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Species = ({ link }) => {
  console.log(link);
  const { isLoading, error, data } = useQuery(
    ["species", link],
    () => fetchData(link),
    { keepPreviousData: true }
  );
  console.log(data);
  return <>{data?.name || "Human"}</>;
};

const Planet = ({ link }) => {
  console.log(link);
  const { isLoading, error, data } = useQuery(
    ["species", link],
    () => fetchData(link),
    { keepPreviousData: true }
  );
  console.log(data);
  return <>{data?.name}</>;
};

export default People;
