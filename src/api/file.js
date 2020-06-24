import {get } from './config';

export async function getFile(id) {
    return get(`./files/${id}`);
}