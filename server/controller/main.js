import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../data/user/user.js";
import { config } from "../config.js";

export async function getPeopleNum(req, res, next) {
    const { id, name, congest_level, max_population } = req.body;

    try {
        const hashed = await (bcrypt.hash(user_pw, config.bcrypt.saltRound));
        const userId = await (userRepository.createUser({
            user_name,
            user_id,
            user_pw: hashed,
            user_email,
            user_phone,
            user_area
        }));
        console.log(userId);
        const token = createJwtToken(userId);
        res.status(201).json({ token, user_id });
    } catch (e) {
        console.log('아이디가 중복되었습니다.')
        next();
    }
}




export async function me(req, res, next) {
    const user = await (userRepository.searchByIdx(req.user_idx));
    if (!user) {
        return res.status(404).json({ message: "사용자가 존재하지 않습니다." })
    }
    res.status(200).json({ token: req.token, user_id: user.user_id });
}



function createJwtToken(idx) {
    return jwt.sign({ idx }, config.jwt.secretKey, { expiresIn: config.jwt.expiresInSec });
}