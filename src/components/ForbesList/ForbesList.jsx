import { ForbesListItem } from 'components/ForbesListItem/ForbesListItem';
import style from './ForbesList.module.css';

export const ForbesList = ({forbs}) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {forbs.map(({ id, name, isIncrease, avatar, capital })=>{
          return (
            <li className={style.item} key={id}>
              <ForbesListItem
                name={name}
                avatar={avatar}
                isIncrease={isIncrease}
                capital={capital}
              />
            </li>
          );
        })}
        
      </ul>
    </div>
  );
};
