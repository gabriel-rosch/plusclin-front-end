import {register} from "../api/register";
import {create} from "../api/session";


export async function createLogin(password, name, email) {
    const response = await register({
        password: password,
        name: name,
        email: email
    });
    var session;
    if (response.ok) {
         session = await response.json();
         session.status = "register";
        return session;
    } else {
        session = await response.json();
        if (session.error == "user already exists.") {
            const response = await create({
                password: password,
                email: email
            });
            session = await response.json();
            if (response.ok) {
                session.status = "login";
                return session;
            } else {
                session.status = "erro";
                return session;
            }
        }
        session.status = "erro";
        return session;
    }
}
