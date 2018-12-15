import { IBerryFlavorMap, IName, INamedAPIResource } from '../../src/interfaces';

// BerryFlavorMap
export function isBerryFlavorMap(resource: any): resource is IBerryFlavorMap {
  return isNamedAPIResource(resource.flavor) && typeof resource.potency === 'number';
}

export function isBerryFlavorMapArray(resource: any): resource is IBerryFlavorMap[] {
  return _isResourceArray(resource, isBerryFlavorMap);
}

// Name
export function isName(resource: any): resource is IName {
  return typeof resource.name === 'string' && isNamedAPIResource(resource.language);
}

export function isNameArray(resource: any): resource is IName[] {
  return _isResourceArray(resource, isName);
}

// NamedAPIResource
export function isNamedAPIResource(resource: any): resource is INamedAPIResource {
  return typeof resource.name === 'string' && typeof resource.url === 'string';
}

export function isNamedAPIResourceArray(resource: any): resource is INamedAPIResource[] {
  return _isResourceArray(resource, isNamedAPIResource);
}

// Utility
export function isStringOrNull(value: any): value is string | null {
  return _isNull(value) || _isString(value);
}

function _isNull(value: any): value is null {
  return value === null;
}

function _isString(value: any): value is string {
  return typeof value === 'string';
}

function _isResourceArray<T extends any>(resource: T[], resourceCheckMethod: (internalResource: T) => boolean): boolean {
  const isArray: boolean = Array.isArray(resource);
  const contentsCheck: boolean = resource.every((value: T) => {
    return resourceCheckMethod(value);
  });

  return isArray && contentsCheck;
}
