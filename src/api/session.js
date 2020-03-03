import { post } from './config';

export async function create(payload) {
    return post('./sessions', {
        ...payload
    });
}