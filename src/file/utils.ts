/* eslint-disable prettier/prettier */
import { HttpException } from "@nestjs/common"
import { extname } from "path"

export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new HttpException(`Sorry this file does not match the requires file we want`, 400), false)
    }
    callback(null, true)
}

export const editFileName = (req, file, callback)=> {
    const name = file.originalname.split('.')[0]
    const fileExtName = extname(file.originalname)
    const randomName = Array(5)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('')
    callback(null, `${name}-${randomName}${fileExtName}`)
}