export default interface User {
    id: string,
    userName: string,
    password: string,
    address: {
        address: string,
        city: string,
        state: string,
        zip: string,
        country: string
    },
    avatar?: string,
    phone: string,
    email: string,
    createdOn: number | any,
    updatedOn: number | any,
    age: number,
    bod: number | any,
    lastName: string,
    middleName: string,
    firstName: string,
    // 0: active, 1: delete
    state: number
}
