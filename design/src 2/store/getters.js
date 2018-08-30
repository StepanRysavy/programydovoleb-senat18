import {demo} from './helpers';

const getters = {
  vuexState: state => state
}

getters.demo = (state, getters) => () => {
  demo();
};

getters.getItemByID = (state, getters) => (type, id) => {
  return state.structure[type].find(item => item.id === Number(id));
};

getters.getItemByHash = (state, getters) => (type, hash) => {
  return state.structure[type].find(item => item.hash === hash);
};

getters.getItemsByPriority = (state, getters) => (type, priority) => {
  return state.structure[type].filter(item => item.meta.priority >= priority);
};

getters.getItemsByKey = (state, getters) => (type, key, value) => {

  switch (key) {
    case 'house': {
      return state.structure[type].filter(item => item.meta.house === Number(value));
    }
    case 'block': {
      return state.structure[type].filter(item => item.meta.block === Number(value));
    }
    case 'category': {
      return state.structure[type].filter(item => {
        return typeof item.meta.category.find(tag => tag === Number(value)) !== 'undefined';
      });
    }
    case 'tags': {
      return state.structure[type].filter(item => {
        return typeof item.meta.tags.find(tag => tag === Number(value)) !== 'undefined';
      });
    }
  }

  return [];
};

getters.getEventByID = (state, getters) => (id) => {
  return getters.getItemByID('events', id);
};

getters.getCompanyByID = (state, getters) => (id) => {
  return getters.getItemByID('companies', id);
};

getters.getEventByHash = (state, getters) => (id) => {
  return getters.getItemByHash('events', id);
};

getters.getCompanyByHash = (state, getters) => (id) => {
  return getters.getItemByHash('companies', id);
};

getters.getEventsByPriority = (state, getters) => (priority) => {
  return getters.getItemsByPriority('events', priority);
};

getters.getCompaniesByPriority = (state, getters) => (priority) => {
  return getters.getItemsByPriority('companies', priority);
};

getters.getCompaniesByKey = (state, getters) => (key, value) => {
  return getters.getItemsByKey('companies', key, value);
};

getters.getEventsByKey = (state, getters) => (key, value) => {
  return getters.getItemsByKey('events', key, value);
};

export default getters;
