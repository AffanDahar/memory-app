import jwt from 'jsonwebtoken'

const genrateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET , {
        expiresIn : "1d"
    })
}


export default genrateToken