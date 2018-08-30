import {compareByKey} from '@/store/helpers';

const mutations = {};

mutations.demo = function (state, payload) {
  state.structure.companies.push(payload.company.data);
  state.structure.events.push(payload.event.data);
}

mutations.lang = function (state, payload) {
  state.language = payload;
  document.cookie = 'lang=' + payload;
}

mutations.loaded = function (state, payload) {
  state.loaded = true;
}

mutations.addListBlock = function (state, payload) {
  payload.data.list.forEach(item => state.meta.block.push(item));
}

mutations.addListHouse = function (state, payload) {
  payload.data.list.forEach(item => state.meta.house.push(item));
}

mutations.addListCategory = function (state, payload) {
  payload.data.list.forEach(item => state.meta.category.push(item));
}

mutations.addListTags = function (state, payload) {
  payload.data.list.forEach(item => state.meta.tags.push(item));
}

mutations.addCompany = function (state, payload) {

  var data = JSON.parse(unescape(payload.data)).data;
  data.opened.status = false;

  data.meta.active = payload.active;

  state.structure.companies.push(data);
}

mutations.addEvent = function (state, payload) {

  var data = JSON.parse(unescape(payload.data)).data;
  data.opened.status = true;

  data.meta.active = payload.active;

  state.structure.events.push(data);
}

mutations.sortData = function (state, payload) {
  compareByKey(state.structure.companies, 'name');
  compareByKey(state.structure.events, 'name');
}

mutations.clearData = function (state, payload) {
  if (state.structure.companies.length > 0) state.structure.companies.splice(0, state.structure.companies.length);
  if (state.structure.events.length > 0) state.structure.events.splice(0, state.structure.events.length);
}

mutations.processData = function (state, payload) {
  payload.companies.forEach((item) => mutations.addCompany(state, item));
  payload.events.forEach((item) => mutations.addEvent(state, item));
}

mutations.processMeta = function (state, payload) {
  payload.tags.forEach(item => state.meta.tags.push(item));
  payload.category.forEach(item => state.meta.category.push(item));
  payload.house.forEach(item => state.meta.house.push(item));
  payload.block.forEach(item => state.meta.block.push(item));
}

mutations.adminCompanySave = function (state, payload) {
  var json = JSON.parse(unescape(payload.data)).data;
  json.id = Number(json.id);

  var existing = state.structure.companies.find(item => item.id === json.id);

  if (existing) {
    state.structure.companies.splice(state.structure.companies.indexOf(existing), 1);
  }

  // state.structure.companies.push(json);

  mutations.addCompany(state, payload);
}

mutations.adminCompanyDeactivate = function (state, payload) {
  var existing = state.structure.companies.find(item => item.id === payload);

  if (existing) {
    state.structure.companies.splice(state.structure.companies.indexOf(existing), 1);
  }
}

mutations.adminEventSave = function (state, payload) {
  var json = JSON.parse(unescape(payload.data)).data;
  json.id = Number(json.id);

  var existing = state.structure.events.find(item => item.id === json.id);

  if (existing) {
    state.structure.events.splice(state.structure.events.indexOf(existing), 1);
  }

  // state.structure.events.push(json);

  mutations.addEvent(state, payload);
}

mutations.adminEventDeactivate = function (state, payload) {
  var existing = state.structure.events.find(item => item.id === payload);

  if (existing) {
    state.structure.events.splice(state.structure.events.indexOf(existing), 1);
  }
}

mutations.adminMetaSave = function (state, payload) {

  var json = JSON.parse(payload.response);
  json.id = Number(json.id);

  state.meta[payload.type].push(json);
}

mutations.login = function (state, payload) {
  state.user = payload;
}

mutations.cover = function (state, payload) {
  state.cover = payload;
}

mutations.lastTrackedPage = function (state, payload) {
  state.lastTrackedPage = payload;
}

export default mutations;
