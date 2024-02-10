import { formatDistanceToNow } from 'date-fns';

export const normalizeDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
