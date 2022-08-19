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

const shanghai = {
  name: 'shanghai',
  priority: 4,
  selector: {
    matchServices: [
      {
        name: 'delivery-mesh',
        current_dock_image: 'lastest',
        canary_dock_image: 'lastest1',
        service_canary_id: 51,
        id: 'a3436834-9f4b-489a-8c5b-49d615b2029d',
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
        id: '930fde0c-a240-4c2d-8866-c5468d64d9a1',
        key: 'X-Location',
        value: {
          exact: 'Shanghai',
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

const preciseSetEqualGeneralSetAndPriorityLessThan = [
  beijing,
  shanghai,
];

module.exports = preciseSetEqualGeneralSetAndPriorityLessThan;
