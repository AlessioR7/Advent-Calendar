import Day from "../day";
import "./index.css";

const DayList = ({ gifts }) => {
  return (
    <div className="day__list">
      {gifts.map((gift) => (
        <Day key={gift.day} gift={gift} />
      ))}
    </div>
  );
};

export default DayList;
