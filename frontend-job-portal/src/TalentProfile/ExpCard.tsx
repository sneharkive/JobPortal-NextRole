

const ExpCard = (props:any) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="p-2 rounded-lg bg-zinc-700">
            <img className="w-7" src={`/Icons/Google.png`} alt="" />
          </div>
          <div>
            <div>{props.title}</div>
            <div className="text-gray-500">
              {props.company} &#x2022; {props.location}
            </div>

          </div>
        </div>
          <div>
            <div className="text-sm text-gary-300">{props.startDate} - {props.endDate}</div>
          </div>
      </div>
          <div className="text-sm text-gray-400 text-just">{props.description}</div>

    </div>
  );
};

export default ExpCard;
