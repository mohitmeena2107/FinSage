import { currentUser } from "@clerk/nextjs/dist/types/server";
import {db} from "./prisma";

export const checkUser = async () =>{
    const user  = await currentUser();
    if(!user){
        return null;
    }

    try {

        const loguser = await db.user.findUnique({
            where:{
                clerkUserId:user.id,
            }
        })

        if(loguser){
            return loguser;
        }

        const name =`${user.firstName} ${user.lastName}`;

        const newUser = await db.user.create({
            data :{
                clerUserId:user.id,name,imageUrl:user.imageUrl,email:user.emailAddresses[0].emailAddress
            }
        });

        return newUser
    }
    catch(err){
        console.log(err.message);
    }
}