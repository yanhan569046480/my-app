function isCanaryShadow(canaryMatrix) {
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
      // console.log('generalSetCanary', generalSetCanary);
      // console.log('preciseSetCanary', preciseSetCanary);
    }

    let existenceOfOutRangeHeader = true;
    generalSetCanary.trafficRules.headers.forEach((generalSetHeader) => {
      let findPreciseHeader = preciseSetCanary.trafficRules.headers.find(
        (preciseSetHeader) => {
          return preciseSetHeader.key == generalSetHeader.key;
        },
      );
      if (!findPreciseHeader) {
        // console.log('findGeneralHeader', findGeneralHeader);
        existenceOfOutRangeHeader = false;
      }
    });
    if (!existenceOfOutRangeHeader) {
      // console.log('exist', exist);
      return false;
    }

    if (
      generalSetCanary.trafficRules.headers.length ==
      preciseSetCanary.trafficRules.headers.length
    ) {
      if (generalSetCanary.priority < preciseSetCanary.priority) {
        preciseSetCanary.beShadowed += 1;

        // console.log('priority.less.than', true);
        return true;
      } else if (generalSetCanary.priority == preciseSetCanary.priority) {
        if (generalSetCanary.name.localeCompare(preciseSetCanary.name) == -1) {
          preciseSetCanary.beShadowed += 1;

          // console.log('priority.equal.but.name.less.than', true);
          return true;
        } else {
          generalSetCanary.beShadowed += 1;

          // console.log('priority.equal.but.name.more.than', true);
          return true;
        }
      } else {
        generalSetCanary.beShadowed += 1;

        // console.log('priority.more.than', true);
        return true;
      }
    } else {
      if (generalSetCanary.priority < preciseSetCanary.priority) {
        preciseSetCanary.beShadowed += 1;

        // console.log('priority.less.than', true);
        return true;
      } else if (generalSetCanary.priority == preciseSetCanary.priority) {
        if (generalSetCanary.name.localeCompare(preciseSetCanary.name) == -1) {
          preciseSetCanary.beShadowed += 1;

          // console.log('priority.equal.but.name.less.than', true);
          return true;
        } else {
          // console.log('priority.equal.but.name.more.than', true);
          return false;
        }
      } else {
        // console.log('priority.more.than', true);
        return false;
      }
    }
  }
}

module.exports = isCanaryShadow;