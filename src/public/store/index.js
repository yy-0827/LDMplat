import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/index'
//import api from './mockapi'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loginname: "",
        show: {
            edit: false,
            more: false,
            add: false
        },
        iteminfo: "",
        searchlock: false,
        recentlist: [],//展示列表
        searchlist: [],//搜索列表
        recentpage: 1,
        size: 10,
        totalitems: 0
    },
    mutations: {
        setShow(state, arr) {
            state.show[arr[0]] = arr[1];
        },
        setRecentList(state, { data, page, limit }) {
            state.recentlist = data.rows;
            state.recentpage = page;
            state.size = limit;
            state.totalitems = data.count;
        },
        setSearchList(state, list) {
            state.searchlist = list;
            state.searchlock = true;
            state.totalitems = list.length;
        },
        setSearchLock(state, flag) {
            state.searchlock = flag;
        },
        insertNewItem(state, item) {
            state.recentlist.unshift(item);
            state.recentlist.pop();
        },
        setItemInfo(state, info) {
            state.iteminfo = info;
        },
        login(state, name) {
            state.loginname = name;
        }
    },
    actions: {
        //对搜索列表的操作
        getSearchList({ state, commit }, { page, limit }) {
            if (!limit) limit = state.size;
            page = Math.min(Math.ceil(state.totalitems / limit), page) || 1;
            let firstindex = (page - 1) * limit;
            let lastindex = page * limit - 1;
            let arr = state.searchlist.slice(firstindex, lastindex);
            let data = { rows: arr, count: state.totalitems };
            commit("setRecentList", { data, page, limit });
        },
        //对用户的操作
        getUserList({ state, commit, dispatch }, { page, limit }) {
            if (!page) page = state.recentpage;
            if (!limit) limit = state.size;
            if (!state.searchlock) {
                api.getUserList(page, limit).then(data => {
                    data = data.data.data;
                    //判断页数是否超额，否则跳转到最后一页
                    page = Math.min(Math.ceil(data.count / limit), page) || 1;
                    commit("setRecentList", { data, page, limit });
                })
            } else { dispatch("getSearchList", { page, limit }) }
        },
        searchUser({ commit, dispatch }, info) {
            api.searchUser(info).then(data => {
                if (data.data.data.length == 0) {
                    let eptinfo = { rows: null, count: 0 }
                    commit("setRecentList", { page: 1, data: eptinfo });
                } else {
                    commit("setSearchList", data.data.data);
                    dispatch("getSearchList", { page: 1 });
                }
            })
        },
        addUser({ commit }, info) {
            api.addUser(info).then(data => {
                commit("insertNewItem", info)
            }).catch(err => console.log(err))
        },
        delUser({ state, dispatch }, userid) {
            api.delUser(userid).then(_ => {
                dispatch("getUserList", { page: 1 })
            }).catch(err => console.log(err))
        },
        updateUser({ state, dispatch }, obj) {
            api.updateUser(obj.userid, obj).then(_ => {
                dispatch("getUserList", {})
            })
        },
        //对设备的操作
        getDeviceList({ state, commit, dispatch }, { page, limit }) {
            if (!page) page = state.recentpage;
            if (!limit) limit = state.size;
            if (!state.searchlock) {
                api.getDeviceList(page, limit).then(data => {
                    data = data.data.data;
                    //判断页数是否超额，否则跳转到最后一页
                    page = Math.min(Math.ceil(data.count / limit), page) || 1;
                    commit("setRecentList", { data, page, limit });
                })
            } else { dispatch("getSearchList", { page, limit }) }
        },
        searchDevice({ commit, dispatch }, info) {
            api.searchDevice(info).then(data => {
                if (data.data.data.length == 0) {
                    let eptinfo = { rows: null, count: 0 }
                    commit("setRecentList", { page: 1, data: eptinfo });
                } else {
                    commit("setSearchList", data.data.data);
                    dispatch("getSearchList", { page: 1 });
                }
            })
        },
        addDevice({ commit }, info) {
            api.addDevice(info).then(data => {
                commit("insertNewItem", info)
            }).catch(err => console.log(err))
        },
        //获取告警信息
        getAlarmList({ state, commit, dispatch }, { page, limit }) {
            if (!page) page = state.recentpage;
            if (!limit) limit = state.size;
            if (!state.searchlock) {
                api.getAlarmList(page, limit).then(data => {
                    data = data.data.data;
                    //判断页数是否超额，否则跳转到最后一页
                    page = Math.min(Math.ceil(data.count / limit), page) || 1;
                    commit("setItemInfo", "");
                    commit("setRecentList", { data, page, limit });
                })
            } else { dispatch("getSearchList", { page, limit }) }
        },
        searchAlarm({ commit, dispatch }, info) {
            api.searchAlarm(info).then(data => {
                //未获得数据
                if (typeof (data.data.data) == "string" || data.data.data.length == 0) {
                    let eptinfo = { rows: [], count: 0 }
                    commit("setRecentList", { page: 1, data: eptinfo });
                    if (typeof (data.data.data) == "string") {
                        commit("setItemInfo", data.data.data)
                    }
                } else {
                    //获取数据
                    commit("setSearchList", data.data.data);
                    commit("setItemInfo", "");
                    dispatch("getSearchList", { page: 1 });
                }
            }
            )
        },
        //测试接口
        test({ commit, state }, item) {
            console.log("test", item)
            api.test(item).then(data => console.log(data)).catch(err => console.log(err))
        }
    },
    modules: {
    }
});