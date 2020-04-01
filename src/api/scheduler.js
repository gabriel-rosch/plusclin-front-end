import {get,delet} from './config';

export async function listScheduler(page) {
    return get(`./appointments?page=`+page);
}
export async function listSchedulerForData(data) {
    return get(`./schedule?date=`+data);
}
<<<<<<< HEAD
export async function removeScheduler(id) {
    return delet(`./schedule/`+id);
}
=======
>>>>>>> 15589aab91eb819b4046a7f6918ba1664c347f4a
