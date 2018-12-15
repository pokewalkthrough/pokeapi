import { IBerryFlavorMap, IFlavorBerryMap, IName, INamedAPIResource } from '../../src/interfaces';

// BerryFlavorMap
export function isBerryFlavorMap(resource: IBerryFlavorMap): resource is IBerryFlavorMap {
  return isNamedAPIResource(resource.flavor) && typeof resource.potency === 'number';
}

export function isBerryFlavorMapArray(resource: IBerryFlavorMap[]): resource is IBerryFlavorMap[] {
  return _isResourceArray(resource, isBerryFlavorMap);
}

// FlavorBerryMap
export function isFlavorBerryMap(resource: IFlavorBerryMap): resource is IFlavorBerryMap {
  return typeof resource.potency === 'number' && isNamedAPIResource(resource.berry);
}

export function isFlavorBerryMapArray(resource: IFlavorBerryMap[]): resource is IFlavorBerryMap[] {
  return _isResourceArray(resource, isFlavorBerryMap);
}

// Name
export function isName(resource: IName): resource is IName {
  return typeof resource.name === 'string' && isNamedAPIResource(resource.language);
}

export function isNameArray(resource: IName[]): resource is IName[] {
  return _isResourceArray(resource, isName);
}

// NamedAPIResource
export function isNamedAPIResource(resource: INamedAPIResource): resource is INamedAPIResource {
  return typeof resource.name === 'string' && typeof resource.url === 'string';
}

export function isNamedAPIResourceArray(resource: INamedAPIResource[]): resource is INamedAPIResource[] {
  return _isResourceArray(resource, isNamedAPIResource);
}

// Utility
export function isStringOrNull(value: string | null): value is string | null {
  return _isNull(value) || _isString(value);
}

function _isNull(value: any): value is null {
  return value === null;
}

function _isString(value: string): value is string {
  return typeof value === 'string';
}

function _isResourceArray<T extends any>(resource: T[], resourceCheckMethod: (internalResource: T) => boolean): boolean {
  const isArray: boolean = Array.isArray(resource);
  const contentsCheck: boolean = resource.every((value: T) => {
    return resourceCheckMethod(value);
  });

  return isArray && contentsCheck;
}
