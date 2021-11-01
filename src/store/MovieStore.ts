import axios from "axios";
import { observable, action, makeObservable, computed, toJS } from "mobx";


export class MovieStore {
    @observable.shallow movieList : any = []

    constructor(list : []) {
        makeObservable(this)
    }

    @action
    getMovies =  () => {
        axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "f181e9665a1225fc3009fac03bb2c5af",
                page: 1,
                query: "Star Wars",
            }
        }).then((res) => this.movieList = res.data).then(()=> console.log(toJS(this.movieList)))
    }
}

