import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

export const Statistics = ({ statistics, title }) => {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {statistics.map(({ id, title, total }, index) => {
          return (
            <StatisticsItem
              key={id}
              title={title}
              total={total}
              Icon={icons[index]}
            />
          );
        })}
      </ul>
    </>
  );
};
