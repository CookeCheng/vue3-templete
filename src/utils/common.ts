import { v4 as uuidv4 } from 'uuid';
export function sleep(time: number): Promise<void> {
  return new Promise(resolve => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, time);
  });
}

export function getUniqueId(): string {
  return uuidv4();
}

export function objectType(obj: any): string {
  return Object.prototype.toString.call(obj);
}
