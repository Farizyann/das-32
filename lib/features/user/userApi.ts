import { IUser } from "@/type/type";
import axios from "axios";

export const getUsersApi = async () => {
  const { data } = await axios.get(
    "http://localhost:3000/api/users"
  );
  return data;
};

export const getUserByIdApi = async (id: number) => {
  const { data } = await axios.get(
    "http://localhost:3000/api/users/" + id
  );
  return data;
};

export const createUserApi = async (obj: IUser) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/add/user",
    obj
  );
  return data;
};

export const updateUserApi = async ({
  id,
  obj,
}: {
  id: number;
  obj: IUser;
}) => {
  const { data } = await axios.patch(
    "http://localhost:3000/api/users/" + id+"/update",
    obj
  );
  return data;
};

export const deleteUserByIdApi = async (id: number) => {
  const { data } = await axios.delete(
    "http://localhost:3000/api/users/" + id+"/delete"
  );
  return data;
};