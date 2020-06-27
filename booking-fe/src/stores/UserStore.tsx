import { observable, action, computed, reaction } from "mobx"
import { createContext } from "react"
import User from "../models/User";

class UserStore {
    constructor() {
        reaction(() => this.users, _ => console.log(this.users.length))
    }
    @observable inputUserName: string = ""
    @observable inputAddress: string = ""

    @observable users: User[] = [
        {
            id: "1",
            userName: "con.nguyenthanh4",
            password: "Dhbk$1234",
            address: {
                address: "104 Lô H, Chung cư KCN Tân Bình",
                city: "Ho Chi Minh City",
                state: "Ho Chi Minh",
                zip: "700000",
                country: "Vietnam"
            },
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            phone: "0988656949",
            email: "cong.nguyenthanh4@novaland.com.vn",
            createdOn: 1593247057531,
            updatedOn: 1593247057531,
            age: 32,
            bod: 1593247122704,
            lastName: "Nguyen",
            middleName: "Thanh",
            firstName: "Cong",
            state: 0
        },
        {
            id: "2",
            userName: "con.nguyenthanh42",
            password: "Dhbk$1234",
            address: {
                address: "104 Lô H, Chung cư KCN Tân Bình",
                city: "Ho Chi Minh City",
                state: "Ho Chi Minh",
                zip: "700000",
                country: "Vietnam"
            },
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            phone: "0988656949",
            email: "cong.nguyenthanh4@novaland.com.vn",
            createdOn: 1593247057531,
            updatedOn: 1593247057531,
            age: 32,
            bod: 1593247122704,
            lastName: "Nguyen",
            middleName: "Thanh",
            firstName: "Cong",
            state: 0
        },
        {
            id: "3",
            userName: "con.nguyenthanh43",
            password: "Dhbk$1234",
            address: {
                address: "104 Lô H, Chung cư KCN Tân Bình",
                city: "Ho Chi Minh City",
                state: "Ho Chi Minh",
                zip: "700000",
                country: "Vietnam"
            },
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            phone: "0988656949",
            email: "cong.nguyenthanh4@novaland.com.vn",
            createdOn: 1593247057531,
            updatedOn: 1593247057531,
            age: 32,
            bod: 1593247122704,
            lastName: "Nguyen",
            middleName: "Thanh",
            firstName: "Cong",
            state: 0
        }
    ]

    @action handleChangeInputUsername = (username: any) => {
        this.inputUserName = username.target.value
        console.log("username", this.inputUserName)
    }

    @action handleChangeAddress = (address: any) => {
        this.inputAddress = address.target.value
    }

    @action addUser = (user: User) => {
        this.users.push({ ...user, id: "44" })
    }

    @action selectAvatar = (file: any) => {
        console.log("Select Avatar", file)
    }
}

export default createContext(new UserStore())
