import { model, ObjectId, Schema } from "mongoose";

export interface usersInterface{
    id: number,
    name: string,
    mail: string,
    password: string,
<<<<<<< HEAD
    comment: string
    experiences: Array<string>;
=======
    comment: string,
    experiencies: ObjectId[]
>>>>>>> 352e7feb04cd9db4e22ca90d1ffe727b14a0aa24
}
export type UsersInterfacePublicInfo = Pick<usersInterface, 'id' | 'name' | 'comment'>
export type newUserInfo = Omit<usersInterface,'id'>

export const usersSchema = new Schema<usersInterface>({
    id: Number,
    name: String,
    mail: String,
    password: String,
    comment: String,
<<<<<<< HEAD
    experiences: [{ type: Schema.Types.ObjectId, ref: 'Experience' }]
=======
    experiencies:[{type: Schema.Types.ObjectId, ref:'user'}]
>>>>>>> 352e7feb04cd9db4e22ca90d1ffe727b14a0aa24
})

export const usersofDB = model<usersInterface>('user',usersSchema)



