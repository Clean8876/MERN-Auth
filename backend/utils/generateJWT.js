import JWT from 'jsonwebtoken'




export const generateTokken = (userId)=>{
   return JWT.sign({userId},process.env.JWT_SECRET,{expiresIn:'30d'}
  
   );

}
export const cookieToken  = (res,token)=>{
   res.cookie('JWT',token, {
      httpOnly: true, // Prevent client-side JavaScript access
      secure: process.env.NODE_ENV == 'production', // Use HTTPS in production
      maxAge: 3600000, // 1 hour (match token expiration)
       sameSite: 'strict', // Optional: restrict cookie to same-site requests
    })
 }
