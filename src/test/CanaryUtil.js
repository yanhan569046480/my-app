function isCanaryShadow(canaryMatrix, highWeightCanaryMap, lowWeightCanaryMap) {
  // console.log('canaryMatrix', canaryMatrix);
  let generalSetCanary = canaryMatrix[0];
  let preciseSetCanary = canaryMatrix[1];
  // console.log('generalSetCanary', generalSetCanary);
  // console.log('preciseSetCanary', preciseSetCanary);

  if (
    generalSetCanary &&
    generalSetCanary.trafficRules &&
    generalSetCanary.trafficRules.headers &&
    generalSetCanary.trafficRules.headers.length > 0 &&
    preciseSetCanary &&
    preciseSetCanary.trafficRules &&
    preciseSetCanary.trafficRules.headers &&
    preciseSetCanary.trafficRules.headers.length > 0
  ) {
    if (
      generalSetCanary.trafficRules.headers.length >
      preciseSetCanary.trafficRules.headers.length
    ) {
      [generalSetCanary, preciseSetCanary] = [
        preciseSetCanary,
        generalSetCanary,
      ];
      console.log('generalSetCanary', generalSetCanary);
      console.log('preciseSetCanary', preciseSetCanary);
    }

    let exist = true;
    generalSetCanary.trafficRules.headers.forEach((generalSetHeader) => {
      let findPreciseHeader = preciseSetCanary.trafficRules.headers.find(
        (preciseSetHeader) => {
          return preciseSetHeader.key == generalSetHeader.key;
        },
      );
      if (!findPreciseHeader) {
        // console.log('findGeneralHeader', findGeneralHeader);
        exist = false;
      }
    });
    if (!exist) {
      // if(!generalSetCanary.weight){
      generalSetCanary.style = {
        stroke: 'l(0) 0:#FF0000 1:#FEA9A9',
      };
      generalSetCanary.weight = 'high';
      generalSetCanary.edgeType = 'custom-edge';
      highWeightCanaryMap.set(generalSetCanary.name, generalSetCanary);
      // }

      // if(!preciseSetCanary.weight){
      preciseSetCanary.style = {
        stroke: 'l(0) 0:#FF0000 1:#FEA9A9',
      };
      preciseSetCanary.weight = 'high';
      preciseSetCanary.edgeType = 'custom-edge';
      highWeightCanaryMap.set(preciseSetCanary.name, preciseSetCanary);
      // }

      console.log('exist', exist);

      return false;
    }

    if (
      generalSetCanary.trafficRules.headers.length ==
      preciseSetCanary.trafficRules.headers.length
    ) {
      // if(!generalSetCanary.weight){
      generalSetCanary.style = {
        // stroke: '#D8D8D8',
        // lineDash: [5, 5],
        stroke: 'l(0) 0:#FF0000 1:#FEA9A9',
      };
      generalSetCanary.weight = 'low';
      generalSetCanary.edgeType = 'custom-edge';
      lowWeightCanaryMap.set(generalSetCanary.name, generalSetCanary);
      // }

      // if(!preciseSetCanary.weight){
      preciseSetCanary.style = {
        // stroke: '#D8D8D8',
        // lineDash: [5, 5],
        stroke: 'l(0) 0:#FF0000 1:#FEA9A9',
      };
      preciseSetCanary.weight = 'low';
      preciseSetCanary.edgeType = 'custom-edge';
      lowWeightCanaryMap.set(preciseSetCanary.name, preciseSetCanary);
      // }

      console.log('headers.length.equal', true);

      return true;
    }

    if (generalSetCanary.priority < preciseSetCanary.priority) {
      // if(!generalSetCanary.weight){
      generalSetCanary.style = {
        stroke: 'l(0) 0:#FF0000 1:#FEA9A9',
      };
      generalSetCanary.weight = 'high';
      generalSetCanary.edgeType = 'custom-edge';
      highWeightCanaryMap.set(generalSetCanary.name, generalSetCanary);
      // }

      // if(!preciseSetCanary.weight){
      preciseSetCanary.style = {
        stroke: '#D8D8D8',
        lineDash: [5, 5],
      };
      preciseSetCanary.weight = 'low';
      preciseSetCanary.edgeType = 'mid-point-edge';
      // preciseSetCanary.edgeType = 'custom-edge';
      lowWeightCanaryMap.set(preciseSetCanary.name, preciseSetCanary);
      // }

      console.log('priority.less.than', true);

      return true;
    } else if (generalSetCanary.priority == preciseSetCanary.priority) {
      if (generalSetCanary.name.localeCompare(preciseSetCanary.name) == -1) {
        // if(!generalSetCanary.weight){
        generalSetCanary.style = {
          stroke: 'l(0) 0:#FF0000 1:#FEA9A9',
        };
        generalSetCanary.weight = 'high';
        generalSetCanary.edgeType = 'custom-edge';
        highWeightCanaryMap.set(generalSetCanary.name, generalSetCanary);
        // }

        // if(!preciseSetCanary.weight){
        preciseSetCanary.style = {
          stroke: '#D8D8D8',
          lineDash: [5, 5],
        };
        preciseSetCanary.weight = 'low';
        preciseSetCanary.edgeType = 'mid-point-edge';
        // preciseSetCanary.edgeType = 'custom-edge';
        lowWeightCanaryMap.set(preciseSetCanary.name, preciseSetCanary);
        // }

        console.log('priority.equal.but.name.less.than', true);

        return true;
      } else if (
        generalSetCanary.name.localeCompare(preciseSetCanary.name) == 1
      ) {
        // if(!generalSetCanary.weight){
        generalSetCanary.style = {
          stroke: '#D8D8D8',
          lineDash: [5, 5],
        };
        generalSetCanary.weight = 'low';
        generalSetCanary.edgeType = 'mid-point-edge';
        // generalSetCanary.edgeType = 'custom-edge';
        lowWeightCanaryMap.set(generalSetCanary.name, generalSetCanary);
        // }

        // if(!preciseSetCanary.weight){
        preciseSetCanary.style = {
          stroke: 'l(0) 0:#FF0000 1:#FEA9A9',
        };
        preciseSetCanary.weight = 'high';
        preciseSetCanary.edgeType = 'custom-edge';
        highWeightCanaryMap.set(preciseSetCanary.name, preciseSetCanary);
        // }

        console.log('priority.equal.but.name.more.than', true);

        return true;
      } else {
        // if(!generalSetCanary.weight){
        generalSetCanary.style = {
          stroke: 'l(0) 0:#FF0000 1:#FEA9A9',
        };
        generalSetCanary.weight = 'high';
        generalSetCanary.edgeType = 'custom-edge';
        highWeightCanaryMap.set(generalSetCanary.name, generalSetCanary);
        // }

        // if(!preciseSetCanary.weight){
        preciseSetCanary.style = {
          stroke: 'l(0) 0:#FF0000 1:#FEA9A9',
        };
        preciseSetCanary.weight = 'high';
        preciseSetCanary.edgeType = 'custom-edge';
        highWeightCanaryMap.set(preciseSetCanary.name, preciseSetCanary);
        // }

        console.log('priority.equal.and.name.equal', false);

        return false;
      }
    } else if (generalSetCanary.priority > preciseSetCanary.priority) {
      // if(!generalSetCanary.weight){
      generalSetCanary.style = {
        stroke: '#D8D8D8',
        lineDash: [5, 5],
      };
      generalSetCanary.weight = 'low';
      generalSetCanary.edgeType = 'mid-point-edge';
      // generalSetCanary.edgeType = 'custom-edge';
      lowWeightCanaryMap.set(generalSetCanary.name, generalSetCanary);
      // }

      // if(!preciseSetCanary.weight){
      preciseSetCanary.style = {
        stroke: 'l(0) 0:#FF0000 1:#FEA9A9',
      };
      preciseSetCanary.weight = 'high';
      preciseSetCanary.edgeType = 'custom-edge';
      highWeightCanaryMap.set(preciseSetCanary.name, preciseSetCanary);
      // }

      console.log('priority.more.than', true);

      return true;
    }
  }
}

module.exports = isCanaryShadow;