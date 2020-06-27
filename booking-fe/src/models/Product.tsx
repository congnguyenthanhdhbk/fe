export default interface Product {
    sku: string,
    title: string,
    description?: string,
    manufactureDetails?: {
        modelNumber: string,
        releaseDate: string,
    },
    shippingDetails?: {
        weight: number,
        width: number,
        height: number,
        depth: number
    },
    quantity: number,
    thumbnail: string,
    storeId: string,
    price: number,
    categories: []
}
