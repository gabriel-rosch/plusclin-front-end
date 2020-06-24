import {get } from './config';

export async function listClinics(id, date) {
    return get(`./clinic?specialties_id=${id}&date=${date}&city=${JSON.parse(localStorage.getItem('city')).name}`);
}
