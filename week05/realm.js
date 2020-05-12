let objs = [
  eval,
  isFinite,
  isNaN,
  parseFloat,
  parseInt,
  decodeURI,
  decodeURIComponent,
  encodeURI,
  encodeURIComponent,
  Array,
  Date,
  RegExp,
  Promise,
  Proxy,
  Map,
  WeakMap,
  Set,
  WeakSet,
  Function,
  Boolean,
  String,
  Number,
  Symbol,
  Object,
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
  ArrayBuffer,
  SharedArrayBuffer,
  DataView,
  Float32Array,
  Float64Array,
  Int8Array,
  Int16Array,
  Int32Array,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Uint8ClampedArray,
  Atomics,
  JSON,
  Math,
  Reflect,
];
let set = new Set();

objs.forEach((obj) => set.add(obj));

for (let i = 0; i < objs.length; i++) {
  let obj = objs[i];
  for (let prop of Object.getOwnPropertyNames(obj)) {
    let desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (
      (desc.value !== null && typeof desc.value === "object") ||
      typeof desc.value === "function"
    )
      if (!set.has(desc.value)) set.add(desc.value), objs.push(desc.value);
    if (desc.get)
      if (!set.has(desc.get)) set.add(desc.get), objs.push(desc.get);
    if (desc.set)
      if (!set.has(desc.set)) set.add(desc.set), objs.push(desc.set);
  }
}
console.log(set)
