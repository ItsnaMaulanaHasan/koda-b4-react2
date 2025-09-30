export const Search = ({ onSubmit }) => {
  return (
    <section id="search-bar" className="justify-items-center p-[50px]">
      <form onSubmit={onSubmit} id="form-search" action="" method="">
        <div className="search-wrapper flex text-center justify-between w-[20rem] p-[10px] border border-[#9a9a9a] rounded-[10px]">
          <input type="text" name="search" placeholder="Search character..." className="grow bg-transparent focus:outline-none" />
          <button type="submit">
            <img src="/public/icon/icon-search.svg" alt="search icon" className="w-[20px] h-[20px]" />
          </button>
        </div>
      </form>
    </section>
  );
};
