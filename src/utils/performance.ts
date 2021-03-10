export function getPerformance() {
  if (!window.performance) return;
  const timing: PerformanceTiming = window.performance.timing;
  const performance = {
    // 重定向耗时
    redirect: timing.redirectEnd - timing.redirectStart,
    // 白屏时间
    whiteScreen: (window as any).whiteScreen,
    // DOM 渲染耗时
    dom: timing.domComplete - timing.domLoading,
    // 页面加载耗时
    load: timing.loadEventEnd - timing.navigationStart,
    // 页面卸载耗时
    unload: timing.unloadEventEnd - timing.unloadEventStart,
    // 请求耗时
    request: timing.responseEnd - timing.requestStart,
    // 获取性能信息时当前时间
    time: new Date().getTime()
  };

  return performance;
}

interface ResourceItem {
  name: string;
  duration: string;
  size: string;
  protocol: string;
}

interface Resource {
  xmlhttprequest: Array<ResourceItem>;
  css: Array<ResourceItem>;
  other: Array<ResourceItem>;
  script: Array<ResourceItem>;
  img: Array<ResourceItem>;
  link: Array<ResourceItem>;
  fetch: Array<ResourceItem>;
  time: number;
}

export function getResources() {
  if (!window.performance) return;
  const data: any[] = window.performance.getEntriesByType('resource');
  const resource: Resource = {
    xmlhttprequest: [],
    css: [],
    other: [],
    script: [],
    img: [],
    link: [],
    fetch: [],
    time: new Date().getTime()
  };

  data.forEach(item => {
    const initiatorType: keyof Resource = item.initiatorType;
    const arry: Array<ResourceItem> | number = resource[initiatorType];
    if (Array.isArray(arry)) {
      arry.push({
        // 资源的名称
        name: item.name,
        // 资源加载耗时
        duration: item.duration.toFixed(2),
        // 资源大小
        size: item.transferSize,
        // 资源所用协议
        protocol: item.nextHopProtocol
      });
    }
  });

  return resource;
}
