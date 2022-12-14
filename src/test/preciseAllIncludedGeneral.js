const beijing = {
  name: 'beijing',
  priority: 3,
  selector: {
    matchServices: [
      {
        name: 'delivery-mesh',
        current_dock_image: 'lastest',
        canary_dock_image: 'lastest1',
        service_canary_id: 51,
        id: 'a3436834-9f4b-489a-8c5b-49d615b2029c',
      },
    ],
    matchInstanceLabels: {
      key: '',
      value: '',
    },
  },
  trafficRules: {
    headers: [
      {
        id: '930fde0c-a240-4c2d-8866-c5468d64d9a0',
        key: 'X-Location',
        value: {
          exact: 'Beijing',
        },
      },
    ],
  },
  status: 0,
  close_time: 0,
  id: '4c730e29-a812-4f8f-ba07-a0552805c7ab',
  style: {
    stroke: '#FF5C00',
  },
  beShadowed: 0,
};

const beijingAndroid = {
  name: 'beijing-android',
  priority: 1,
  selector: {
    matchServices: [
      {
        name: 'restaurant-mesh',
        current_dock_image: 'lastest',
        canary_dock_image: 'lastest1',
        service_canary_id: 52,
        id: '3bab10be-bf12-4544-9fc0-cc3886bef676',
      },
    ],
    matchInstanceLabels: {
      key: '',
      value: '',
    },
  },
  trafficRules: {
    headers: [
      {
        id: '9034bc89-42a6-49d4-9cd1-9b20a2479ee0',
        key: 'X-Location',
        value: {
          exact: 'Beijing',
        },
      },
      {
        id: '832a9315-988c-4f0f-8051-78640cce7e8d',
        key: 'X-Phone-Os',
        value: {
          exact: 'Android',
        },
      },
    ],
  },
  status: 0,
  close_time: 0,
  id: '02b4fb8c-0dbf-43e4-a9ac-4d5eb48c245a',
  style: {
    stroke: '#D8D8D8',
    lineDash: [5, 5],
  },
  beShadowed: 0,
};

const preciseAllIncludedGeneral = [
  beijing,
  beijingAndroid,
];
module.exports = preciseAllIncludedGeneral;