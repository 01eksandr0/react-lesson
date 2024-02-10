const tableHeaders = ['№', 'price', 'amount', 'date'];
import style from './CryptoHistory.module.css';
import { formatDate } from '../../helpers/formatDate.js';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map(item => {
            return (
              <th key={item} className={style.th}>
                {item}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, price, amount, date }, idx) => {
          return (
            <tr className={style.tr} key={id}>
              <td className={style.td}>{idx + 1}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{formatDate(date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
