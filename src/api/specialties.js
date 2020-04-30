import {get } from './config';


export async function listSpecialties() {
    return get('./specialties');
}

export async function listSpecialtiesName(payload) {
    return get(`./specialtiesName?key=${payload}`);
}

export async function listSpecialtiesId(id) {
    return get(`./specialties/${id}`);
}

export async function listSpecialtiesByProvider(idProvider) {
    return get(`/provider/${idProvider}/specialties`);
}