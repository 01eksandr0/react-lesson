import styled from './Statistics.module.css';

export const StatisticsItem = ({ title, total, Icon }) => {
  return (
    <li className={styled.item}>
      <Icon size={20} color="tomato" />
      <span className={styled.counter}>{total}</span>
      <p className={styled.text}>{title}</p>
    </li>
  );
};
