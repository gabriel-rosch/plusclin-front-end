import {get } from './config';


export async function listSpecialties() {
    return get('./specialties');
}

export async function listSpecialtiesName(payload) {
    return get(`./specialtiesName?key=${payload}`);
}