import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const formatDate = (date: string): string => {
  return dayjs(date).utc().local().format('DD/MM/YYYY HH:mm');
};
