export function translate(x: number, y: number) {
  return `translate3d(${x}px, ${y}px, 0)`;
}

export function addClass(cls: string, res: any): string {
  if (typeof res === 'string') {
    cls += ' ' + res;
  } else if (typeof res === 'object') {
    Object.keys(res).forEach(k => cls += (res[k] === true) ? ` ${k}` : '');
  }
  return cls;
}
