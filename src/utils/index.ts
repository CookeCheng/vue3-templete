import { App, ComponentCustomProperties } from 'vue';
import { sleep, getUniqueId, objectType } from './common';
import {
  parseQueryString,
  stringifyQueryString,
  getPath,
  Cookie2Json
} from './queryString';
import { filterSpecial, filterNumber } from './filters';
import Drag from './Drag';
import { parseExcel, exportExcel } from './excel';
import { getPerformance, getResources } from './performance';

interface Utils {
  sleep: typeof sleep;
  parseQueryString: typeof parseQueryString;
  stringifyQueryString: typeof stringifyQueryString;
  getPath: typeof getPath;
  Cookie2Json: typeof Cookie2Json;
  filterSpecial: typeof filterSpecial;
  filterNumber: typeof filterNumber;
  Drag: Drag;
  getUniqueId: typeof getUniqueId;
  objectType: typeof objectType;
  parseExcel: typeof parseExcel;
  exportExcel: typeof exportExcel;
  getPerformance: typeof getPerformance;
  getResources: typeof getResources;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $utils: Utils;
  }
}

export default {
  install(app: App) {
    Object.assign(app.config.globalProperties, {
      $utils: {
        sleep,
        parseQueryString,
        stringifyQueryString,
        getPath,
        Cookie2Json,
        filterSpecial,
        filterNumber,
        Drag,
        getUniqueId,
        objectType,
        parseExcel,
        exportExcel,
        getPerformance,
        getResources
      }
    });
  }
};
