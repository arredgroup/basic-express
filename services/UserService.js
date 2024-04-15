const users = [
    {
        name: 'John Doe',
        email: 'john.doe@dominioempresa.com',
        fecha_contratacion: new Date('2023-01-01'),
        fecha_desvinculacion: new Date('2024-01-01'),
    },
    {
        name: 'John Two',
        email: 'john.two@dominioempresa.com',
        fecha_contratacion: new Date('2023-01-01'),
        fecha_desvinculacion: new Date('2024-01-01'),
    },
    {
        name: 'John Three',
        email: 'john.three@dominioempresa.com',
        fecha_contratacion: new Date('2023-01-01'),
        fecha_desvinculacion: new Date('2025-01-01'),
    },
    {
        name: 'John Four',
        email: 'john.four@dominioempresa.com',
        fecha_contratacion: new Date('2023-01-01'),
        fecha_desvinculacion: new Date('2025-01-01'),
    }
];

const getByEmail = async (email) => {
    //TODO: Connect into DB to get User by email;
    return new Promise((resolve, reject) => {
        const user = users.filter((user) => {
            if(user.email !== email){
                return false;
            }
            if(user.fecha_contratacion > new Date()){
                return false;
            }
            if(user.fecha_desvinculacion < new Date()){
                return false;
            }
            return true;
        });
        resolve(user[0]);
    });
};


const getAll = async () => {
    //TODO: Connect into DB to get all Users;
    return new Promise((resolve, reject) => {
        resolve(users);
    });
}

module.exports = {
    getAll,
    getByEmail,
}