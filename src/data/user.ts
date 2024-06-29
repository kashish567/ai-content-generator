const users=[
    {
        email:"kashish@gmail.com",
        password:"kash123"
    },
    {
        email:"test@gmail.com",
        password:"test"
    }

]

export const getUserByEmail=(email:any)=>{
    const found = users.find(user=>user.email===email);
    return found;
}