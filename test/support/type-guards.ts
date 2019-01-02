import { IBerryFlavorMap, IContestName, IEffect, IFlavorBerryMap, IFlavorText, IName, INamedAPIResource } from '../../src/interfaces';

// BerryFlavorMap
function isBerryFlavorMap(resource: IBerryFlavorMap): resource is IBerryFlavorMap {
  return isNamedAPIResource(resource.flavor) && typeof resource.potency === 'number';
}

export function isBerryFlavorMapArray(resource: IBerryFlavorMap[]): resource is IBerryFlavorMap[] {
  return _isResourceArray(resource, isBerryFlavorMap);
}

// FlavorBerryMap
function isFlavorBerryMap(resource: IFlavorBerryMap): resource is IFlavorBerryMap {
  return typeof resource.potency === 'number' && isNamedAPIResource(resource.berry);
}

export function isFlavorBerryMapArray(resource: IFlavorBerryMap[]): resource is IFlavorBerryMap[] {
  return _isResourceArray(resource, isFlavorBerryMap);
}

// ContestName
function isContestName(resource: IContestName): resource is IContestName {
  return typeof resource.color === 'string' && isNamedAPIResource(resource.language) && typeof resource.name === 'string';
}

export function isContestNameArray(resource: IContestName[]): resource is IContestName[] {
  return _isResourceArray(resource, isContestName);
}

// Effect
function isEffect(resource: IEffect): resource is IEffect {
  return typeof resource.effect === 'string' && isNamedAPIResource(resource.language);
}

export function isEffectArray(resource: IEffect[]): resource is IEffect[] {
  return _isResourceArray(resource, isEffect);
}

// FlavorText
function isFlavorText(resource: IFlavorText): resource is IFlavorText {
  return typeof resource.flavor_text === 'string' && isNamedAPIResource(resource.language);
}

export function isFlavorTextArray(resource: IFlavorText[]): resource is IFlavorText[] {
  return _isResourceArray(resource, isFlavorText);
}

// Name
function isName(resource: IName): resource is IName {
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

// TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names
function _isResourceArray<T extends any>(resource: T[], resourceCheckMethod: (internalResource: T) => boolean): boolean {
  const isArray: boolean = Array.isArray(resource);
  const contentsCheck: boolean = resource.every((value: T) => {
    return resourceCheckMethod(value);
  });

  return isArray && contentsCheck;
}
