import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verify } from "../utils/bcryptHandle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIf = await UserModel.findOne({ email });
    if (checkIf) return "USER_IN_USE";
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({ 
        email,
        password: passHash,
        name, 
        });
    return registerNewUser;
}

const loginUser = async ({email , password}:Auth) => {

    const checkIf = await UserModel.findOne({ email });
    if (!checkIf)  return "NOT_FOUND_USER";

    const passwordHash = checkIf.password //encrypted password from DB
    const isCorrect = await verify(password, passwordHash);

    if (!isCorrect) return "WRONG_PASSWORD";

    const token = generateToken(checkIf.email);
    const data = {
        token, 
        user: checkIf,
    }
    return data;
    
    return checkIf;


    // Implementa la lógica de inicio de sesión aquí
}

export { registerNewUser, loginUser };