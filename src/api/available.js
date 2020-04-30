import {get } from './config';

export async function getAvailable(id) {

    return get(`./providers/${id}/available`);
}