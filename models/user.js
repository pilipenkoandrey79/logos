var moment = require('moment');

var user = {
  name: 'Andrii',
  surname: 'Sidorenko',
  projects: [
      {
          title: 'project1',
          started: moment('2018-01-02').format('LLL')
      },
      {
          title: 'project2',
          started: moment('2018-03-01').format('LLL')
      },
  ]
};

module.exports = user;
