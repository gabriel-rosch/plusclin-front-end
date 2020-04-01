import {get} from './config';

export async function removeAppointments(id) {
    return get(`./appointments/` + id);
}