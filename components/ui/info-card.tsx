
export default function InfoCard({ data, title }: any) {
  if (typeof data === "object" && data) {
    return (
      <div className="flex flex-col m-5 border w-70 text-3xl justify-around h-50 rounded-xl items-center">
        <p>{data.text}</p>
        <img src={data.icon}/>
        <p>{title}</p>
      </div>
    );
  }
  if(title === "Day/Night" && data===1){
      return (
    <div className="flex flex-col m-5 border w-70 text-3xl justify-around h-50 rounded-xl hover:bg-dark-700 items-center">
      <p>Day</p>
      <p>{title}</p>
    </div>
  );
  }else if(title === "Day/Night" && data===0){
    return (
    <div className="flex flex-col m-5 border w-70 text-3xl justify-around h-50 rounded-xl hover:bg-dark-700 items-center">
      <p>Night</p>
      <p>{title}</p>
    </div>
  );
  }
  return (
    <div className="flex flex-col m-5 border w-70 text-3xl justify-around h-50 rounded-xl hover:bg-dark-700 items-center">
      <p>{data}</p>
      <p>{title}</p>
    </div>
  );
}
