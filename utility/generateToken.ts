import jwt from "jsonwebtoken";

const generateToken = (id: any) => {
  return jwt.sign({ id }, <string>process.env.JWT_TOKEN, 
    { expiresIn: "6d" }
  );
};

export default generateToken;