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

  return (
    <section id="detail-container" className="h-screen flex justify-center items-center">
      <div className="item flex flex-col justify-center items-center bg-white gap-[14px] p-[20px] w-max rounded-[20px] shadow-xl">
        <img src={dataCharacter.image} alt={dataCharacter.name} className="w-[150px] h-[150px] rounded-[20px]" />
        <div className="inline-block overflow-hidden whitespace-nowrap text-ellipsis max-w-40">{dataCharacter.name}</div>
        <p>Status: {dataCharacter.status}</p>
        <p>Spesies: {dataCharacter.species}</p>
      </div>
    </section>
  );
}

export default DetailCharacter;
