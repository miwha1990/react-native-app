import { observable, action, computed } from 'mobx';
let index = 0;
class Store {
    @observable list = ['milk', 'bread'];
    @observable filter = "";

    @action addList = (item) => {
        this.list.push(item)
    };

    @computed get listCount() {
       return this.list.length;
    }
    addListItem (item) {
        this.list.push({
            name: item,
            items: [],
            index
        })
        index++
    }
}

const store = new Store();

export default store

/*
autorun(() => {
    console.log(store.filter)
    console.log(store.list[0])
})*/
