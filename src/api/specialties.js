import {get } from './config';

// export async function create (payload) {
//     return post('./api/monitoring', {
//         ...payload
//     });
// }

export async function listSpecialties() {
    return get('./specialties');
}