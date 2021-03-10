import { App, ComponentCustomProperties } from 'vue';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';
import uniqWith from 'lodash/uniqWith';
import isBoolean from 'lodash/isBoolean';
import isDate from 'lodash/isDate';
import isElement from 'lodash/isElement';
import isNil from 'lodash/isNil';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import uniqBy from 'lodash/uniqBy';
import {
  LodashClone,
  LodashDebounce,
  LodashIsBoolean,
  LodashIsDate,
  LodashIsElement,
  LodashIsEqual,
  LodashIsNil,
  LodashThrottle,
  LodashUniqBy,
  LodashUniqWith
} from 'lodash/fp';

interface MyLodash {
  cloneDeep: LodashClone;
  isEqual: LodashIsEqual;
  uniqWith: LodashUniqWith;
  isBoolean: LodashIsBoolean;
  isDate: LodashIsDate;
  isElement: LodashIsElement;
  isNil: LodashIsNil;
  throttle: LodashThrottle;
  debounce: LodashDebounce;
  uniqBy: LodashUniqBy;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $_: MyLodash;
  }
}

export default {
  install(app: App) {
    Object.assign(app.config.globalProperties, {
      $_: {
        cloneDeep,
        isEqual,
        uniqWith,
        isBoolean,
        isDate,
        isElement,
        isNil,
        throttle,
        debounce,
        uniqBy
      }
    });
  }
};
