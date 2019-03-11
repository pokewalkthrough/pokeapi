import {
  IBerryFlavorMap,
  IChainLink,
  IContestName,
  IEffect,
  IEvolutionDetail,
  IFlavorBerryMap,
  IFlavorText,
  IName,
  INamedAPIResource,
} from '../../src/interfaces';

// BerryFlavorMap
function isBerryFlavorMap(resource: IBerryFlavorMap): resource is IBerryFlavorMap {
  return isNamedAPIResource(resource.flavor) && _isNumber(resource.potency);
}

export function isBerryFlavorMapArray(resource: IBerryFlavorMap[]): resource is IBerryFlavorMap[] {
  return _isResourceArray(resource, isBerryFlavorMap);
}

// FlavorBerryMap
function isFlavorBerryMap(resource: IFlavorBerryMap): resource is IFlavorBerryMap {
  return _isNumber(resource.potency) && isNamedAPIResource(resource.berry);
}

export function isFlavorBerryMapArray(resource: IFlavorBerryMap[]): resource is IFlavorBerryMap[] {
  return _isResourceArray(resource, isFlavorBerryMap);
}

// ContestName
function isContestName(resource: IContestName): resource is IContestName {
  return _isString(resource.color) && isNamedAPIResource(resource.language) && _isString(resource.name);
}

export function isContestNameArray(resource: IContestName[]): resource is IContestName[] {
  return _isResourceArray(resource, isContestName);
}

// ChainLink
export function isChainLink(resource: IChainLink): resource is IChainLink {
  return (
    _isBoolean(resource.is_baby) &&
    isNamedAPIResource(resource.species) &&
    isEvolutionDetailArray(resource.evolution_details) &&
    isChainLinkArray(resource.evolves_to)
  );
}

function isChainLinkArray(resource: IChainLink[]): resource is IChainLink[] {
  return _isResourceArray(resource, isChainLink);
}

// EvolutionDetail
function isEvolutionDetail(resource: IEvolutionDetail): resource is IEvolutionDetail {
  return (
    isNamedAPIResourceOrNull(resource.item) &&
    isNamedAPIResource(resource.trigger) &&
    isNumberOrNull(resource.gender) &&
    isNamedAPIResourceOrNull(resource.held_item) &&
    isNamedAPIResourceOrNull(resource.known_move) &&
    isNamedAPIResourceOrNull(resource.known_move_type) &&
    isNamedAPIResourceOrNull(resource.location) &&
    isNumberOrNull(resource.min_level) &&
    isNumberOrNull(resource.min_happiness) &&
    isNumberOrNull(resource.min_beauty) &&
    isNumberOrNull(resource.min_affection) &&
    _isBoolean(resource.needs_overworld_rain) &&
    isNamedAPIResourceOrNull(resource.party_species) &&
    isNamedAPIResourceOrNull(resource.party_type) &&
    isNumberOrNull(resource.relative_physical_stats) &&
    _isString(resource.time_of_day) &&
    isNamedAPIResourceOrNull(resource.trade_species) &&
    _isBoolean(resource.turn_upside_down)
  );
}

function isEvolutionDetailArray(resource: IEvolutionDetail[]): resource is IEvolutionDetail[] {
  return _isResourceArray(resource, isEvolutionDetail);
}

// Effect
function isEffect(resource: IEffect): resource is IEffect {
  return _isString(resource.effect) && isNamedAPIResource(resource.language);
}

export function isEffectArray(resource: IEffect[]): resource is IEffect[] {
  return _isResourceArray(resource, isEffect);
}

// FlavorText
function isFlavorText(resource: IFlavorText): resource is IFlavorText {
  return _isString(resource.flavor_text) && isNamedAPIResource(resource.language);
}

export function isFlavorTextArray(resource: IFlavorText[]): resource is IFlavorText[] {
  return _isResourceArray(resource, isFlavorText);
}

// Name
function isName(resource: IName): resource is IName {
  return _isString(resource.name) && isNamedAPIResource(resource.language);
}

export function isNameArray(resource: IName[]): resource is IName[] {
  return _isResourceArray(resource, isName);
}

// NamedAPIResource
export function isNamedAPIResource(resource: INamedAPIResource): resource is INamedAPIResource {
  return _isString(resource.name) && _isString(resource.url);
}

export function isNamedAPIResourceArray(resource: INamedAPIResource[]): resource is INamedAPIResource[] {
  return _isResourceArray(resource, isNamedAPIResource);
}

// Utility
export function isNamedAPIResourceOrNull(value: INamedAPIResource | null): value is INamedAPIResource | null {
  return _isNull(value) || isNamedAPIResource(value);
}

export function isNumberOrNull(value: number | null): value is number | null {
  return _isNull(value) || _isNumber(value);
}

export function isStringOrNull(value: string | null): value is string | null {
  return _isNull(value) || _isString(value);
}

function _isBoolean(value: boolean): value is boolean {
  return typeof value === 'boolean';
}

function _isNull(value: any): value is null {
  return value === null;
}

function _isNumber(value: number): value is number {
  return typeof value === 'number';
}

function _isString(value: string): value is string {
  return typeof value === 'string';
}

function _isResourceArray<T extends any>(resource: T[], resourceCheckMethod: (internalResource: T) => boolean): resource is T[] {
  if (Array.isArray(resource)) {
    if (resource.length === 0) {
      return true;
    } else {
      return resource.every((value: T) => {
        return resourceCheckMethod(value);
      });
    }
  } else {
    return false;
  }
}
