import {get, post} from './config';

export async function getMedicalRecord(appointmentId) {
    return get(`./medicalRecord/` + appointmentId);
}

export async function postMedicalRecord(payload) {
    return post("./medicalRecord", payload);
}