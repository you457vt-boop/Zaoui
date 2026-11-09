// src/components/Q3.jsx

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getContinents } from "../redux/continentSlice";

export default function Q3() {

  // 1. Dispatch
  const dispatch = useDispatch();

  // 2. Récupérer les données
  const continents = useSelector(
    state => state.continent.continents
  );

  // 3. Fetch au chargement
  useEffect(() => {
    dispatch(getContinents());
  }, [dispatch]);

  // 4. Affichage
  return (
    <div>

      <h2>Liste des Continents</h2>

      <div className="cards">

        {continents.map(c => (

          <div className="card" key={c.Code}>

            <img
              src={c.avatar}
              alt={c.Name}
            />

            <h3>{c.Name}</h3>

            <p>
              SurfaceArea : {c.SurfaceArea} km²
            </p>

            <p>
              Population : {c.Population}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}