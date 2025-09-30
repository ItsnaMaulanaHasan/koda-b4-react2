import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailCharacter() {
  const { id } = useParams();
  const [dataCharacter, setDataCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getDataCharacter = async () => {
    try {
      const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const dataJson = await data.json();
      setDataCharacter(dataJson);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataCharacter();
  }, [id]);

  if (isLoading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  const shadowColorClass = dataCharacter.status === "Alive" ? "drop-shadow-indigo-500/100" : dataCharacter.status === "Dead" ? "drop-shadow-red-500/100" : "drop-shadow-gray-500/100";

  return (
    <section id="detail-container" className="h-screen flex justify-center items-center">
      <div className={`item flex flex-col justify-center items-start bg-white gap-[14px] p-[20px] rounded-[20px] drop-shadow-xl ${shadowColorClass}`}>
        <img src={dataCharacter.image} alt={dataCharacter.name} className="rounded-[20px]" />
        <div className="text-3xl">
          <div className="inline-block overflow-hidden whitespace-nowrap text-ellipsis max-w-60">{dataCharacter.name}</div>
          <p>Status: {dataCharacter.status}</p>
          <p>Spesies: {dataCharacter.species}</p>
          <p>Gender: {dataCharacter.gender}</p>
        </div>
      </div>
    </section>
  );
}

export default DetailCharacter;
