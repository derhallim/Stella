import CMSStore from "./cmsStore";
import IMSStore from "./imsStore";
import UserStore from "./userStore";
import { createContext } from "react";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";

export class RootStore{
    cmsStore: CMSStore; 
    imsStore : IMSStore;
    userStore : UserStore;
    commonStore: CommonStore;
    modalStore: ModalStore;

    constructor(){
        this.cmsStore = new CMSStore(this);
        this.imsStore = new IMSStore(this);
        this.userStore = new UserStore(this);
        this.commonStore = new CommonStore(this);
        this.modalStore = new ModalStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());