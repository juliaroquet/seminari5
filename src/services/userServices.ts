import { usersofDB } from '../modelos/types_d_users'
//import userData from './users.json'

export const getEntries = {
    getAll: async()=>{
    return await usersofDB.find();
    },
    findById: async(id:string)=>{
        return await usersofDB.findById(id);
    },
    addExperiencies: async(idUser:string,idExp:string)=>{
        return await usersofDB.findByIdAndUpdate(idUser,{$addToSet:{experiencies:idExp}});
    },
    delExperiencies: async(idUser:string,idExp:string)=>{
        return await usersofDB.findByIdAndDelete(idUser,{$pull:{experiencies:idExp}});
    },
    create: async(entry:object)=>{
        return await usersofDB.create(entry);
    },
    update: async(id:string,body:object)=>{
        console.log(body);
        return await usersofDB.findByIdAndUpdate(id,body,{$new:true});
    },
    delete: async(id:string)=>{
        return await usersofDB.findByIdAndDelete(id);
    },


    //  agregar una experiencia a un usuario
    addExperienceToUser: async (userId: string, experienceId: string) => {
        try {
            const user = await usersofDB.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }
            // Agregar el ID de la experiencia al array 
            user.experiences.push(experienceId);
            await user.save();
            return user;
        } catch (error) {
            throw new Error(`Could not add experience: ${error}`);
        }
    },

    // eliminar una experiencia de un usuario
    removeExperienceFromUser: async (userId: string, experienceId: string) => {
        try {
            const user = await usersofDB.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }
    
            user.experiences = user.experiences.filter(id => id !== experienceId);
            await user.save(); 
            return user;
        } catch (error) {
            throw new Error(`Could not remove experience: ${error}`);
        }
    },

    // obtener todas las experiencias de un usuario
    getUserExperiences: async (userId: string) => {
        try {
            const user = await usersofDB.findById(userId).populate('experiences'); 
            if (!user) {
                throw new Error('User not found');
            }
            return user.experiences; 
        } catch (error) {
            throw new Error(`Could not get experiences: ${error}`);
        }
    }
}
