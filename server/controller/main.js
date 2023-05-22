import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as placeRepository from "../data/places/place.js";
import { config } from "../config.js";

export async function getAll(req, res, next) {
    const result = await placeRepository.getAll()
    return res.status(200).json(result);
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