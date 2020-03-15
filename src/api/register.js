import { post } from './config';

export async function register(payload) {
    return post('./user', {
        ...payload
    });
}