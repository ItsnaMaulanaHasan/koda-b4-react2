import { useEffect, useState } from "react";
import { Search } from "./components/SearchForm";
import { CardUser } from "./components/cardUser";

function App() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const dataUsers = await data.json();
    setUsers(dataUsers.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main>
      <Search />
      <section id="container" className="grid justify-items-center content-center gap-[20px] md:grid-cols-4 xl:grid-cols-5 p-[20px]">
        {users.map((user) => (
          <CardUser img={user.image} name={user.name} />
        ))}
      </section>
    </main>
  );
}

export default App;
