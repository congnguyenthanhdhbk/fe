export default interface Booking {
    id: string,
    userId: string,
    state?: string,
    shipping?: {
        customer: string,
        address: string,
        state: string,
        deliveryNotes?: string,
        tracking?: {
            company: string,
            trackingNumber: string,
            // onTruck
            status: string,
            // long time
            estimatedDelivery?: number | any
        }
    },
    payment?: {
        method: string,
        transactionId: string
    },
    reservations?: {
        // The number of products which apply for e-commerce
        quantity?: number | string,
        // The appointment time
        appointment?: number | any,
        // for booking room
        schedule?: {
            from: number | any,
            to: number | any
        },
        // Date time to create a reservations
        creationOn: number | any
    },
    product: [{
        quantity: number,
        sku: string,
        price: number,
        title: string,
        currency: string,
        ext?: object
    }],
    promotion?: object,
    createdOn: number | any,
    updatedOn: number | any,
    totalPrice: number | any
}
