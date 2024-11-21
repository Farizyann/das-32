  import { IUser } from "@/type/type";
import { createAppSlice } from "./../../createAppSlice";
import { createUserApi, deleteUserByIdApi, getUserByIdApi, getUsersApi, updateUserApi } from "./userApi";
  
  interface IState {
    users: IUser[];
    user: IUser;
  }
  const initialState: IState = {
    users: [],
    user: {} as IUser,
  };
  
  export const userSlice = createAppSlice({
    name: "user",
    initialState,
    reducers: (create) => ({
      getusersData: create.asyncThunk(
        async () => {
          return await getUsersApi();
        },
        {
          fulfilled: (state, action) => {
            state.users = action.payload;
          },
        }
      ),
      getuserByIdData: create.asyncThunk(
        async (id: number) => {
          return await getUserByIdApi(id);
        },
        {
          fulfilled: (state, action) => {
            state.user = action.payload;
          },
        }
      ),
      createuserData: create.asyncThunk(
        async (obj: IUser) => {
          return await createUserApi(obj);
        },
      ),
      updateuserData: create.asyncThunk(
          async ({
              id,
              obj,
            }: {
              id: number;
              obj: IUser;
            }) => {
              return await updateUserApi({id, obj});
            },
            {fulfilled: (state, action) => {
              state.user = action.payload
            }}
      ),
      deleteuserByIdData : create.asyncThunk(
          async(id: number) => {
              return await deleteUserByIdApi(id)
          }
      )
    }),
    selectors: {
      selectusers: (app) => app.users,
      selectuser: (app) => app.user,
    },
  });
  
  
  export const {getusersData, getuserByIdData, createuserData, updateuserData,deleteuserByIdData} = userSlice.actions
  export const {
      selectusers,selectuser
  } = userSlice.selectors