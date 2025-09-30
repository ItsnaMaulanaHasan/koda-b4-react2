import { useEffect, useState } from "react";
import { Search } from "./components/SearchForm";
import { CardUser } from "./components/cardUser";

function App() {
  const [users, setUsers] = useState([]);
  const [usersFilter, setUsersFilter] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getData = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const dataUsers = await data.json();
    setUsers(dataUsers.results);
    setUsersFilter(dataUsers.results);
  };

  const handleFormSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.search.value);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const toLowerCaseSearch = searchValue.toLowerCase();
    const characterFilter = users.filter((o) => o.name.toLowerCase().includes(toLowerCaseSearch));
    setUsersFilter(characterFilter);
  }, [searchValue, users]);

  return (
    <main>
      <Search onSubmit={(e) => handleFormSearch(e)} />
      <section id="container" className="grid justify-items-center content-center gap-[20px] md:grid-cols-4 xl:grid-cols-5 p-[20px]">
        {usersFilter.map((user) => (
          <CardUser img={user.image} name={user.name} />
        ))}
      </section>
    </main>
  );
}

export default App;
