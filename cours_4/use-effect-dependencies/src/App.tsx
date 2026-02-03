import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);

  return (
    <div>
      <h1>Recherche</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Tapez votre recherche"
      />

      <p>Nombre de recherches déclenchées : {searchCount}</p>
    </div>
  );
}
