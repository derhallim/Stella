import {observable} from 'mobx';
import { createContext } from 'react';
class ApartmentsStore{
    @observable title = 'Hello from mobx'
}

export default createContext (new ApartmentsStore());