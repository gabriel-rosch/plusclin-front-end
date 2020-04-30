import {get} from './config';

export async function getAvailable(id, date) {
    return get(`./providers/${id}/available?date=${date}`);
}