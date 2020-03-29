import {get} from './config';

export async function listScheduler(page) {
    return get(`./appointments?page=`+page);
}
export async function listSchedulerForData(data) {
    return get(`./schedule?date=`+data);
}
export async function listSchedulerForData(data) {
    return get(`./schedule?date=`+data);
}