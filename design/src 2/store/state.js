import {timeInfo} from './helpers';

export default {
  user: -1,
  admin: false,
  test: false,
  current: timeInfo(),
  loaded: false,
  structure: {
    companies: [],
    events: []
  },
  meta: {
    category: [],
    tags: [],
    block: [],
    house: []
  },
  language: 'cs',
  defaults: {
    server: 'https://api.nasjirak.cz/',
    local: 'http://localhost:8080/',
    api: 'v.1.2/api.php'
  },
  showFeedback: false,
  cover: null,
  lastTrackedPage: ''
};
