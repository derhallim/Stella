import { observable, computed, action } from "mobx";
import { IUserFormValues } from "../models/IUserFormValues";
import agent from "../api/agent";
import { RootStore } from "./rootStore";
import { IUser } from "../models/IUser";

export default class UserStore {
    rootStore: RootStore; 

    constructor(rootStore: RootStore){
      this.rootStore = rootStore;
    }


    @observable user: IUser | null = null;

    @computed get isLoggedIn() { return !!this.user}

    @action login = async (values: IUserFormValues) => {
        try {
            const user = await agent.User.login(values);
            this.user = user;
        }

        catch (error){
            console.log(error)
        }
    }
}