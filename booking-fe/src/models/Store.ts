export default interface Store {
    id: string,
    storeId: string,
    address: {
        address: string,
        city: string,
        state: string,
        zip: string,
        country: string
    },
    location: [],
}
