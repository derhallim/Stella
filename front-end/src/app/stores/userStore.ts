import { observable, computed, action, runInAction } from 'mobx';
import { IUserFormValues } from "../models/IUserFormValues";
import agent from "../api/agent";
import { RootStore } from "./rootStore";
import { IUser } from "../models/IUser";
import { history } from "../..";

export default class UserStore {
    rootStore: RootStore;
    userVerified: boolean = false;

    constructor(rootStore: RootStore) {
      this.rootStore = rootStore;
    }
  
    @observable user: IUser | null = null;
  
    @computed get isLoggedIn() {
      return !!this.user || this.userVerified ;
    }
  
    @action setVerification = () => {
        this.userVerified = true;
    }

    @action login = async (values: IUserFormValues) => {
      try {
        const user = await agent.User.login(values);
        runInAction(() => {
          this.user = user;
        });
        this.rootStore.commonStore.setToken(user.token);
        this.rootStore.modalStore.closeModal();
        this.rootStore.userStore.setVerification();
        history.push('/apartments');
      } catch (error) {
        throw error;
      }
    };
  
    // @action register = async (values: IUserFormValues) => {
    //   try {
    //     const user = await agent.User.register(values);
    //     this.rootStore.commonStore.setToken(user.token);
    //     this.rootStore.modalStore.closeModal();
    //     history.push('/activities')
    //   } catch (error) {
    //     throw error;
    //   }
    // }
  
    @action getUser = async () => {
      try {
        const user = await agent.User.current();
        runInAction(() => {
          this.user = user;
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    @action logout = () => {
      this.rootStore.commonStore.setToken(null);
      this.user = null;
      window.location.replace("http://localhost:3000/apartments");
      history.push('/');
    };
  }
  