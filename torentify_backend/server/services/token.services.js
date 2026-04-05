import jwt from "jsonwebtoken";

const JWT_SECRET = "s3cr3t123";

export const generateToken = (user) => {

  return jwt.sign(
    {
      id: user.id,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};
