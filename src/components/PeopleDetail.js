import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchData } from "../utils/api";

const PeopleDetail = () => {
  const params = useParams();

  const { isLoading, error, data } = useQuery(
    ["characterDetail", params?.id],
    () => fetchData(`https://swapi.dev/api/people/${params?.id}`),
    {
      keepPreviousData: true,
    }
  );
  console.log(data);
  return (
    <div className="card">
      {error && <p>Error: {error}</p>}
      {isLoading && <p>Loading...</p>}
      {data && (
        <>
          <div className="px-4 py-2">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <div className="flex my-4">
              <p className="badge">{data.gender.toUpperCase()}</p>
              <p className="badge">{data.mass}kg</p>
              <p className="badge">{data.height}cm</p>
            </div>
            <div className="my-2">
              <h2 className="font-semibold">Vehicles: </h2>
              <ul className="list-decimal px-4">
                {data.vehicles.map((vehicle) => (
                  <li key={vehicle} className="text-sm">
                    <Vehicle link={vehicle} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-2">
              <h2 className="font-semibold">Starships</h2>
              <ul className="list-decimal px-4">
                {data.starships.map((starship) => (
                  <li key={starship} className="text-sm">
                    <Starship link={starship} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Vehicle = ({ link }) => {
  const { isLoading, error, data } = useQuery(
    ["vehicle", link],
    () => fetchData(link),
    {
      keepPreviousData: true,
    }
  );

  return (
    <>
      {error && <p>Error: {error}</p>}
      {isLoading && <p>Loading...</p>}
      {data?.name}
    </>
  );
};

const Starship = ({ link }) => {
  const { isLoading, error, data } = useQuery(
    ["starship", link],
    () => fetchData(link),
    {
      keepPreviousData: true,
    }
  );

  return (
    <>
      {error && <p>Error: {error}</p>}
      {isLoading && <p>Loading...</p>}
      {data?.name}
    </>
  );
};

export default PeopleDetail;
