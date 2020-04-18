import CMSStore from "./cmsStore";
import IMSStore from "./imsStore";
import UserStore from "./userStore";
import { createContext } from "react";

export class RootStore{
    cmsStore: CMSStore; 
    imsStore : IMSStore;
    userStore : UserStore;

    constructor(){
        this.cmsStore = new CMSStore(this);
        this.imsStore = new IMSStore(this);
        this.userStore = new UserStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());