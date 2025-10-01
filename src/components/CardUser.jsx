/**
 *
 * @param {object} props
 * @param {String} props.img Url of character image
 * @param {String} props.name  Name of Character
 * @returns
 */

export const CardUser = ({ img, name }) => {
  return (
    <div className="item flex flex-col justify-center items-center bg-white gap-[14px] p-[20px] w-max rounded-[20px] shadow-xl">
      <img src={img} alt={name} className="w-[150px] h-[150px] rounded-[20px]" />
      <div className="inline-block overflow-hidden whitespace-nowrap text-ellipsis max-w-40">{name}</div>
    </div>
  );
};
