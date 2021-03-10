export const get = ( url: string ) => (target: any, name: string, descriptor: any) => {
  let newUrl = ''
  if (url.startsWith('http')) {
    newUrl = url
  } else {
    newUrl = process.env.VUE_APP_MAIN_HOST + url
  }
  const oldValue = descriptor.value
  descriptor.value = function() {
    return oldValue.call(this, {method: 'get', url: newUrl, params: arguments[0]})
  }
  return descriptor
}

export const post = ( url: string ) => (target: any, name: string, descriptor: any) => {
  let newUrl = ''
  if (url.startsWith('http')) {
    newUrl = url
  } else {
    newUrl = process.env.VUE_APP_MAIN_HOST + url
  }
  const oldValue = descriptor.value
  descriptor.value = function() {
    return oldValue.call(this, {method: 'post', url: newUrl, params: arguments[0]})
  }
  return descriptor
}
