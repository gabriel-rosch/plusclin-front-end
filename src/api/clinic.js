import {get } from './config';

export async function listClinics(id) {
    return get(`./clinic?specialties_id=${id}`);
}
