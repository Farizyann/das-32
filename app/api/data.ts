import { IUser } from "@/type/type";

export const data: {users: IUser[], user: IUser}={
    user:{} as IUser,
    users: [
        {
            id: 1,
            name: "John",
            surname: "Doe",
            email: "john.doe@example.com",
            age: 30
        },
        {
            id: 2,
            name: "Jane",
            surname: "Smith",
            email: "jane.smith@example.com",
            age: 25
        },
        {
            id: 3,
            name: "Sam",
            surname: "Wilson",
            email: "sam.wilson@example.com",
            age: 28
        },
        {
            id: 4,
            name: "Anna",
            surname: "Taylor",
            email: "anna.taylor@example.com",
            age: 32
        },
        {
            id: 5,
            name: "Michael",
            surname: "Brown",
            email: "michael.brown@example.com",
            age: 45
        }
    ]
}