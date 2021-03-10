/**
 *
 * @desc   对象序列化
 * @param  {Object} obj
 * @return {String}
 */
export function stringifyQueryString(obj: any): string {
  if (!obj) {
    return '';
  }
  const pairs = [];

  for (const key in obj) {
    const value = obj[key];

    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(
          encodeURIComponent(key + '[' + i + ']') +
            '=' +
            encodeURIComponent(value[i])
        );
      }
      continue;
    }

    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }

  return pairs.join('&');
}

/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
export function parseQueryString(url: string): any {
  url = !url ? window.location.href : url;
  let search = '';
  if (url.includes('?')) {
    search = url.substring(url.lastIndexOf('?') + 1);
  } else {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}

export function getPath(url: string): string {
  let path = url;
  const symbolIndex = url.indexOf('?');
  if (symbolIndex !== -1) {
    path = path.substring(0, symbolIndex);
  }
  return path;
}

/**
 *
 * @desc   cookie转json
 * @param  {String}
 * @return {Object}
 */
export function Cookie2Json(cookie: string): string {
  let result = '';
  cookie = cookie + ';';
  const cookis = cookie.split(';');
  for (let i = 0; i < cookis.length - 1; i++) {
    if (cookie[i].split('=').length > 0) {
      result =
        result +
        ',"' +
        cookis[i].split('=')[0].trim() +
        '":"' +
        cookis[i].split('=')[1] +
        '"';
    }
  }
  cookie = JSON.parse('{' + result.substr(1).replace('\\', '') + '}');
  result = cookie;
  return result;
}
