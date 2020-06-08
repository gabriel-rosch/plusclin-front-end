import {get, post} from './config';

export async function removeAppointments(id) {
    return get(`./appointments/` + id);
}

export async function postAppointments(payload) {
    return post("./appointments", payload);
}