import {body} from "express-validator";

export const loginValidation = [
  body("email", "Вы ввели не email").isEmail(),
  body("password", "Длина пароля должна быть от 5 до 32").isLength({min: 5, max: 32})
]

export const registrationValidation = [
  body("email", "Вы ввели не email").isEmail(),
  body("fullName", "Длина имени должна быть от 3 до 32").isLength({min: 3, max: 32}),
  body("password", "Длина пароля должна быть от 5 до 32").isLength({min: 5, max: 32}),
  body("avatarUrl", "Нужна URL аватара").optional().isURL(),
];