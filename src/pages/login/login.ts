import axios from "axios";

export async function signin(user: {email:string,password:string}){
    
    let res;

    try {
        res = await axios.post("http://localhost:3024/users/login", user);
    } catch (error) {
        res = (error as any).response;
    }

    return res;
}