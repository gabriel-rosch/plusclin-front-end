import {get} from './config';

export async function getUser() {
    return get('./user');
}