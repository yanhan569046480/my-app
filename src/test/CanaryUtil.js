function isCanaryShadow(canaryMatrix, highWeightCanaryMap, lowWeightCanaryMap) {
  // console.log('canaryMatrix', canaryMatrix);
  let supersetCanary = canaryMatrix[0];
  let subsetCanary = canaryMatrix[1];
  // console.log('supersetCanary', supersetCanary);
  // console.log('subsetCanary', subsetCanary);

  if (
    supersetCanary &&
    supersetCanary.trafficRules &&
    supersetCanary.trafficRules.headers &&
    supersetCanary.trafficRules.headers.length > 0 &&
    subsetCanary &&
    subsetCanary.trafficRules &&
    subsetCanary.trafficRules.headers &&
    subsetCanary.trafficRules.headers.length > 0
  ) {
    if (
      supersetCanary.trafficRules.headers.length <
      subsetCanary.trafficRules.headers.length
    ) {
      [supersetCanary, subsetCanary] = [subsetCanary, supersetCanary];
      // console.log('supersetCanary', supersetCanary);
      // console.log('subsetCanary', subsetCanary);
    }

    let flag = true;
    subsetCanary.trafficRules.headers.forEach((subHeader) => {
      let findSuperHeader = supersetCanary.trafficRules.headers.find(
        (superHeader) => {
          return superHeader.key == subHeader.key;
        },
      );
      if (!findSuperHeader) {
        // console.log('findSuperHeader', findSuperHeader);
        supersetCanary.style = {
          stroke: '#FF5C00',
        };
        supersetCanary.weight = 'high';

        subsetCanary.style = {
          stroke: '#FF5C00',
        };
        subsetCanary.weight = 'high';

        highWeightCanaryMap.set(supersetCanary.name, supersetCanary);
        highWeightCanaryMap.set(subsetCanary.name, subsetCanary);

        flag = false;
      }
    });
    if (!flag) {
      return false;
    }

    if (
      supersetCanary.trafficRules.headers.length ==
      subsetCanary.trafficRules.headers.length
    ) {
      supersetCanary.style = {
        stroke: '#D8D8D8',
        lineDash: [5, 5],
      };
      supersetCanary.weight = 'low';

      subsetCanary.style = {
        stroke: '#D8D8D8',
        lineDash: [5, 5],
      };
      subsetCanary.weight = 'low';

      lowWeightCanaryMap.set(supersetCanary.name, supersetCanary);
      lowWeightCanaryMap.set(subsetCanary.name, subsetCanary);

      return true;
    }

    if (supersetCanary.priority < subsetCanary.priority) {
      supersetCanary.style = {
        stroke: '#FF5C00',
      };
      supersetCanary.weight = 'high';

      subsetCanary.style = {
        stroke: '#D8D8D8',
        lineDash: [5, 5],
      };
      subsetCanary.weight = 'low';

      highWeightCanaryMap.set(supersetCanary.name, supersetCanary);
      lowWeightCanaryMap.set(subsetCanary.name, subsetCanary);

      return true;
    } else if (supersetCanary.priority == subsetCanary.priority) {
      if (supersetCanary.name.localeCompare(subsetCanary.name) == -1) {
        supersetCanary.style = {
          stroke: '#FF5C00',
        };
        supersetCanary.weight = 'high';

        subsetCanary.style = {
          stroke: '#D8D8D8',
          lineDash: [5, 5],
        };
        subsetCanary.weight = 'low';

        highWeightCanaryMap.set(supersetCanary.name, supersetCanary);
        lowWeightCanaryMap.set(subsetCanary.name, subsetCanary);

        return true;
      }else if (supersetCanary.name.localeCompare(subsetCanary.name) == 1) {
        supersetCanary.style = {
          stroke: '#D8D8D8',
          lineDash: [5, 5],
        };
        supersetCanary.weight = 'low';

        subsetCanary.style = {
          stroke: '#FF5C00',
        };
        subsetCanary.weight = 'high';

        highWeightCanaryMap.set(subsetCanary.name, subsetCanary);
        lowWeightCanaryMap.set(supersetCanary.name, supersetCanary);

        return true;
      }
    } else if (supersetCanary.priority > subsetCanary.priority) {
      supersetCanary.style = {
        stroke: '#D8D8D8',
        lineDash: [5, 5],
      };
      supersetCanary.weight = 'low';

      subsetCanary.style = {
        stroke: '#FF5C00',
      };
      subsetCanary.weight = 'high';

      highWeightCanaryMap.set(subsetCanary.name, subsetCanary);
      lowWeightCanaryMap.set(supersetCanary.name, supersetCanary);

      return true;
    }
  }

  supersetCanary.style = {
    stroke: '#FF5C00',
  };
  supersetCanary.weight = 'high';

  subsetCanary.style = {
    stroke: '#FF5C00',
  };
  subsetCanary.weight = 'high';

  highWeightCanaryMap.set(supersetCanary.name, supersetCanary);
  highWeightCanaryMap.set(subsetCanary.name, subsetCanary);

  return false;
}

module.exports = isCanaryShadow;