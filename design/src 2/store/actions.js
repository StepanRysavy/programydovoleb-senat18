import axios from 'axios';

import ListBlock from '@/demo/list-block';
import ListHouse from '@/demo/list-house';
import ListTags from '@/demo/list-tags';
import ListCategory from '@/demo/list-category';

import DemoCompany1 from '@/demo/company-1';
import DemoEvent1 from '@/demo/event-1';

import DemoCompany2 from '@/demo/company-2';
import DemoEvent2 from '@/demo/event-2';

import DemoCompany3 from '@/demo/company-3';
import DemoEvent3 from '@/demo/event-3';

import DemoCompany4 from '@/demo/company-4';
import DemoEvent4 from '@/demo/event-4';

import DemoCompany5 from '@/demo/company-5';
import DemoEvent5 from '@/demo/event-5';

const actions = {};

function getServerData () {
  return axios.get('data.fetch');
}

function getAdminData () {
  return axios.get('admin.fetch');
}

function getServerMeta () {
  return axios.get('meta.full');
}

function getCookie (name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

actions.startAdmin = function (context, payload) {

  axios.all([getAdminData()])
  .then(axios.spread((data) => {

    context.commit('clearData');

    context.commit('processData', data.data.list);

    context.commit('sortData');

    context.commit('loaded');

    if (payload.onComplete) payload.onComplete(payload);
  }))
  .catch((error) => {
    console.log(error);
  });
}

actions.start = function (context, payload) {

  var cookieLang = getCookie('lang');

  if (cookieLang != null) {
    context.commit('lang', cookieLang);
  }

  if (context.state.test === false) {

    axios.all([getServerData(), getServerMeta()])
    .then(axios.spread((data, meta) => {

      context.commit('clearData');

      context.commit('processMeta', meta.data.list);
      context.commit('processData', data.data.list);

      context.commit('sortData');

      context.commit('loaded');

      if (payload.onComplete) payload.onComplete(payload);
    }))
    .catch((error) => {
      console.log(error);
    });

  } else {

    context.commit('addListBlock', JSON.parse(ListBlock));
    context.commit('addListHouse', JSON.parse(ListHouse));
    context.commit('addListTags', JSON.parse(ListTags));
    context.commit('addListCategory', JSON.parse(ListCategory));

    var demoData = {
      events: [
        JSON.parse(DemoEvent1),
        JSON.parse(DemoEvent2),
        JSON.parse(DemoEvent3),
        JSON.parse(DemoEvent4),
        JSON.parse(DemoEvent5)
      ],
      companies: [
        JSON.parse(DemoCompany1),
        JSON.parse(DemoCompany2),
        JSON.parse(DemoCompany3),
        JSON.parse(DemoCompany4),
        JSON.parse(DemoCompany5)
      ]
    };

    payload.response = demoData;

    context.commit('processData', payload.response);

    if (payload.onComplete) payload.onComplete(payload);
  }
};

function q (payload) {

  var params;

  if (typeof URLSearchParams !== 'undefined') {
    params = new URLSearchParams();

    Object.keys(payload).forEach(key => {
      if (key !== 'onComplete') params.append(key, payload[key]);
    });
  } else {
    params = payload;
  }

  // console.log(params);

  return params;
}

actions.companySave = function (context, payload) {

  axios.post('admin.company_save', q(payload)).then((response) => {
    if (response.data.code === 200) {
      context.commit('adminCompanySave', response.data.node);
      context.commit('sortData');
      if (payload.onComplete) payload.onComplete(JSON.parse(unescape(response.data.node.data)).data.id);
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
};

actions.companyDeactivate = function (context, payload) {

  axios.post('admin.company_deactivate', q(payload)).then((response) => {
    if (response.data.code === 200) {
      context.commit('adminCompanyDeactivate', payload.id);
      if (payload.onComplete) payload.onComplete(payload.id);
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
};

actions.eventSave = function (context, payload) {

  axios.post('admin.event_save', q(payload)).then((response) => {
    if (response.data.code === 200) {
      context.commit('adminEventSave', response.data.node);
      context.commit('sortData');
      if (payload.onComplete) payload.onComplete(JSON.parse(unescape(response.data.node.data)).data.id);
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
};

actions.eventDeactivate = function (context, payload) {

  axios.post('admin.event_deactivate', q(payload)).then((response) => {
    if (response.data.code === 200) {
      context.commit('adminEventDeactivate', payload.id);
      if (payload.onComplete) payload.onComplete(payload.id);
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
};

actions.metaSave = function (context, payload) {

  axios.post('admin.meta_save', q(payload)).then((response) => {
    if (response.data.code === 200) {
      payload.response = response.data.node;
      context.commit('adminMetaSave', payload);
      if (payload.onComplete) payload.onComplete(JSON.parse(response.data.node).id);
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })

}

actions.login = function (context, payload) {

  axios.post('admin.login', q(payload.data)).then((response) => {
    if (response.data.code === 200) {
      context.commit('login', response.data.node);
      if (payload.onComplete) payload.onComplete();
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })

}

actions.feedback = function (context, payload) {

  axios.post('feedback.add', q(payload)).then((response) => {
    if (response.data.code === 200) {
      if (payload.onComplete) payload.onComplete();
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })

}

export default actions;
