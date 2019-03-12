import {
  IBerryFlavorMap,
  IChainLink,
  IContestName,
  IDescription,
  IEffect,
  IEvolutionDetail,
  IFlavorBerryMap,
  IFlavorText,
  IName,
  INamedAPIResource,
  IPokemonEntry,
} from '../../src/interfaces';

// BerryFlavorMap
function isBerryFlavorMap(resource: IBerryFlavorMap): resource is IBerryFlavorMap {
  return isNamedAPIResource(resource.flavor) && isNumber(resource.potency);
}

export function isBerryFlavorMapArray(resource: IBerryFlavorMap[]): resource is IBerryFlavorMap[] {
  return isResourceArray(resource, isBerryFlavorMap);
}

// FlavorBerryMap
function isFlavorBerryMap(resource: IFlavorBerryMap): resource is IFlavorBerryMap {
  return isNumber(resource.potency) && isNamedAPIResource(resource.berry);
}

export function isFlavorBerryMapArray(resource: IFlavorBerryMap[]): resource is IFlavorBerryMap[] {
  return isResourceArray(resource, isFlavorBerryMap);
}

// ContestName
function isContestName(resource: IContestName): resource is IContestName {
  return isString(resource.color) && isNamedAPIResource(resource.language) && isString(resource.name);
}

export function isContestNameArray(resource: IContestName[]): resource is IContestName[] {
  return isResourceArray(resource, isContestName);
}

// ChainLink
export function isChainLink(resource: IChainLink): resource is IChainLink {
  return (
    isBoolean(resource.is_baby) &&
    isNamedAPIResource(resource.species) &&
    isEvolutionDetailArray(resource.evolution_details) &&
    isChainLinkArray(resource.evolves_to)
  );
}

function isChainLinkArray(resource: IChainLink[]): resource is IChainLink[] {
  return isResourceArray(resource, isChainLink);
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
    isBoolean(resource.needs_overworld_rain) &&
    isNamedAPIResourceOrNull(resource.party_species) &&
    isNamedAPIResourceOrNull(resource.party_type) &&
    isNumberOrNull(resource.relative_physical_stats) &&
    isString(resource.time_of_day) &&
    isNamedAPIResourceOrNull(resource.trade_species) &&
    isBoolean(resource.turn_upside_down)
  );
}

function isEvolutionDetailArray(resource: IEvolutionDetail[]): resource is IEvolutionDetail[] {
  return isResourceArray(resource, isEvolutionDetail);
}

// PokemonEntry
function isPokemonEntry(resource: IPokemonEntry): resource is IPokemonEntry {
  return isNumber(resource.entry_number) && isNamedAPIResource(resource.pokemon_species);
}

export function isPokemonEntryArray(resource: IPokemonEntry[]): resource is IPokemonEntry[] {
  return isResourceArray(resource, isPokemonEntry);
}

// Description
function isDescription(resource: IDescription): resource is IDescription {
  return isString(resource.description) && isNamedAPIResource(resource.language);
}

export function isDescriptionArray(resource: IDescription[]): resource is IDescription[] {
  return isResourceArray(resource, isDescription);
}

// Effect
function isEffect(resource: IEffect): resource is IEffect {
  return isString(resource.effect) && isNamedAPIResource(resource.language);
}

export function isEffectArray(resource: IEffect[]): resource is IEffect[] {
  return isResourceArray(resource, isEffect);
}

// FlavorText
function isFlavorText(resource: IFlavorText): resource is IFlavorText {
  return isString(resource.flavor_text) && isNamedAPIResource(resource.language);
}

export function isFlavorTextArray(resource: IFlavorText[]): resource is IFlavorText[] {
  return isResourceArray(resource, isFlavorText);
}

// Name
function isName(resource: IName): resource is IName {
  return isString(resource.name) && isNamedAPIResource(resource.language);
}

export function isNameArray(resource: IName[]): resource is IName[] {
  return isResourceArray(resource, isName);
}

// NamedAPIResource
export function isNamedAPIResource(resource: INamedAPIResource): resource is INamedAPIResource {
  return isString(resource.name) && isString(resource.url);
}

export function isNamedAPIResourceArray(resource: INamedAPIResource[]): resource is INamedAPIResource[] {
  return isResourceArray(resource, isNamedAPIResource);
}

// Utility
function isBoolean(value: boolean): value is boolean {
  return typeof value === 'boolean';
}

export function isNamedAPIResourceOrNull(value: INamedAPIResource | null): value is INamedAPIResource | null {
  return isNull(value) || isNamedAPIResource(value);
}

function isNull(value: any): value is null {
  return value === null;
}

function isNumber(value: number): value is number {
  return typeof value === 'number';
}

export function isNumberOrNull(value: number | null): value is number | null {
  return isNull(value) || isNumber(value);
}

function isString(value: string): value is string {
  return typeof value === 'string';
}

export function isStringOrNull(value: string | null): value is string | null {
  return isNull(value) || isString(value);
}

function isResourceArray<T extends any>(resource: T[], resourceCheckMethod: (internalResource: T) => boolean): resource is T[] {
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
