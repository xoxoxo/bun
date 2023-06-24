import {promises} from "node:dns";
var {
  lookup,
  lookupService,
  resolve,
  resolve4,
  resolveAny,
  resolveCname,
  resolveCaa,
  resolveMx,
  resolveNaptr,
  resolveNs,
  resolvePtr,
  resolveSoa,
  resolveSrv,
  resolveTxt,
  reverse,
  Resolver,
  setServers,
  setDefaultResultOrder
} = promises, dns_promises_default = {
  lookup,
  lookupService,
  resolve,
  resolve4,
  resolveAny,
  resolveCname,
  resolveCaa,
  resolveMx,
  resolveNaptr,
  resolveNs,
  resolvePtr,
  resolveSoa,
  resolveSrv,
  resolveTxt,
  reverse,
  Resolver,
  setServers,
  setDefaultResultOrder,
  [Symbol.for("CommonJS")]: 0
};
export {
  setServers,
  setDefaultResultOrder,
  reverse,
  resolveTxt,
  resolveSrv,
  resolveSoa,
  resolvePtr,
  resolveNs,
  resolveNaptr,
  resolveMx,
  resolveCname,
  resolveCaa,
  resolveAny,
  resolve4,
  resolve,
  lookupService,
  lookup,
  dns_promises_default as default,
  Resolver
};
