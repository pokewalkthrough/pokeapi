import {
  IAPIResource,
  IAbilityEffectChange,
  IAbilityFlavorText,
  IAbilityPokemon,
  IAwesomeName,
  IBerry,
  IBerryFlavorMap,
  IChainLink,
  IContestComboDetail,
  IContestComboSets,
  IContestName,
  IDescription,
  IEffect,
  IEncounter,
  IEncounterMethodRate,
  IEncounterVersionDetails,
  IEvolutionDetail,
  IFlavorBerryMap,
  IFlavorText,
  IGenerationGameIndex,
  IGenus,
  IGrowthRateExperienceLevel,
  IItemHolderPokemon,
  IItemHolderPokemonVersionDetail,
  IItemSprites,
  IMachineVersionDetail,
  IMoveBattleStylePreference,
  IMoveFlavorText,
  IMoveMetaData,
  IMoveStatAffect,
  IMoveStatAffectSets,
  IMoveStatChange,
  IName,
  INamedAPIResource,
  INaturePokeathlonStatAffect,
  INaturePokeathlonStatAffectSets,
  INatureStatAffectSets,
  INatureStatChange,
  IPalParkEncounterArea,
  IPalParkEncounterSpecies,
  IPastMoveStatValues,
  IPokemonAbility,
  IPokemonEncounter,
  IPokemonEntry,
  IPokemonFormSprites,
  IPokemonHeldItem,
  IPokemonHeldItemVersion,
  IPokemonMove,
  IPokemonMoveVersion,
  IPokemonSpeciesDexEntry,
  IPokemonSpeciesGender,
  IPokemonSpeciesVariety,
  IPokemonSprites,
  IPokemonStat,
  IPokemonType,
  ITypePokemon,
  ITypeRelations,
  IVerboseEffect,
  IVersionEncounterDetail,
  IVersionGameIndex,
  IVersionGroupFlavorText,
} from '../../src/interfaces';

// Berry
export function isBerry(resource: IBerry): resource is IBerry {
  const expectedKeys: string[] = [
    'firmness',
    'flavors',
    'growth_time',
    'id',
    'item',
    'max_harvest',
    'name',
    'natural_gift_power',
    'natural_gift_type',
    'size',
    'smoothness',
    'soil_dryness',
  ];

  return (
    isNamedAPIResource(resource.firmness) &&
    isBerryFlavorMapArray(resource.flavors) &&
    isNumber(resource.growth_time) &&
    isNamedAPIResource(resource.item) &&
    isNumber(resource.max_harvest) &&
    isNumber(resource.natural_gift_power) &&
    isNamedAPIResource(resource.natural_gift_type) &&
    isNumber(resource.size) &&
    isNumber(resource.smoothness) &&
    isNumber(resource.soil_dryness) &&
    isExpectedStructure(resource, expectedKeys)
  );
}

// BerryFlavorMap
function isBerryFlavorMap(resource: IBerryFlavorMap): resource is IBerryFlavorMap {
  const keys: string[] = Object.keys(resource);

  return isNamedAPIResource(resource.flavor) && isNumber(resource.potency) && keys.length === 2;
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

// ItemSprites
export function isItemSprites(resource: IItemSprites): resource is IItemSprites {
  return isStringOrNull(resource.default);
}

// ItemHolderPokemon
function isItemHolderPokemon(resource: IItemHolderPokemon): resource is IItemHolderPokemon {
  return isNamedAPIResource(resource.pokemon) && isItemHolderPokemonVersionDetailArray(resource.version_details);
}

export function isItemHolderPokemonArray(resource: IItemHolderPokemon[]): resource is IItemHolderPokemon[] {
  return isResourceArray(resource, isItemHolderPokemon);
}

// ItemHolderPokemonVersionDetail
function isItemHolderPokemonVersionDetail(resource: IItemHolderPokemonVersionDetail): resource is IItemHolderPokemonVersionDetail {
  return isNumber(resource.rarity) && isNamedAPIResource(resource.version);
}

function isItemHolderPokemonVersionDetailArray(resource: IItemHolderPokemonVersionDetail[]): resource is IItemHolderPokemonVersionDetail[] {
  return isResourceArray(resource, isItemHolderPokemonVersionDetail);
}

// EncounterMethodRate
function isEncounterMethodRate(resource: IEncounterMethodRate): resource is IEncounterMethodRate {
  return isNamedAPIResource(resource.encounter_method) && isEncounterVersionDetailsArray(resource.version_details);
}

export function isEncounterMethodRateArray(resource: IEncounterMethodRate[]): resource is IEncounterMethodRate[] {
  return isResourceArray(resource, isEncounterMethodRate);
}

// EncounterVersionDetails
function isEncounterVersionDetails(resource: IEncounterVersionDetails): resource is IEncounterVersionDetails {
  return isNumber(resource.rate) && isNamedAPIResource(resource.version);
}

function isEncounterVersionDetailsArray(resource: IEncounterVersionDetails[]): resource is IEncounterVersionDetails[] {
  return isResourceArray(resource, isEncounterVersionDetails);
}

// PokemonEncounter
function isPokemonEncounter(resource: IPokemonEncounter): resource is IPokemonEncounter {
  return isNamedAPIResource(resource.pokemon) && isVersionEncounterDetailArray(resource.version_details);
}

export function isPokemonEncounterArray(resource: IPokemonEncounter[]): resource is IPokemonEncounter[] {
  return isResourceArray(resource, isPokemonEncounter);
}

// PalParkEncounterSpecies
function isPalParkEncounterSpecies(resource: IPalParkEncounterSpecies): resource is IPalParkEncounterSpecies {
  return isNumber(resource.base_score) && isNumber(resource.rate) && isNamedAPIResource(resource.pokemon_species);
}

export function isPalParkEncounterSpeciesArray(resource: IPalParkEncounterSpecies[]): resource is IPalParkEncounterSpecies[] {
  return isResourceArray(resource, isPalParkEncounterSpecies);
}

// ContestComboSets
function isContestComboSets(resource: IContestComboSets): resource is IContestComboSets {
  return isContestComboDetail(resource.normal) && isContestComboDetail(resource.super);
}

// ContestComboDetail
function isContestComboDetail(resource: IContestComboDetail): resource is IContestComboDetail {
  return isNamedAPIResourceArrayOrNull(resource.use_before) && isNamedAPIResourceArrayOrNull(resource.use_after);
}

// MoveFlavorText
function isMoveFlavorText(resource: IMoveFlavorText): resource is IMoveFlavorText {
  return isString(resource.flavor_text) && isNamedAPIResource(resource.language) && isNamedAPIResource(resource.version_group);
}

export function isMoveFlavorTextArray(resource: IMoveFlavorText[]): resource is IMoveFlavorText[] {
  return isResourceArray(resource, isMoveFlavorText);
}

// MoveMetaData
function isMoveMetaData(resource: IMoveMetaData): resource is IMoveMetaData {
  return (
    isNamedAPIResource(resource.ailment) &&
    isNamedAPIResource(resource.category) &&
    isNumberOrNull(resource.min_hits) &&
    isNumberOrNull(resource.max_hits) &&
    isNumberOrNull(resource.min_turns) &&
    isNumberOrNull(resource.max_turns) &&
    isNumber(resource.drain) &&
    isNumber(resource.healing) &&
    isNumber(resource.crit_rate) &&
    isNumber(resource.ailment_chance) &&
    isNumber(resource.flinch_chance) &&
    isNumber(resource.stat_chance)
  );
}

// MoveStatChange
function isMoveStatChange(resource: IMoveStatChange): resource is IMoveStatChange {
  return isNumber(resource.change) && isNamedAPIResource(resource.stat);
}

export function isMoveStatChangeArray(resource: IMoveStatChange[]): resource is IMoveStatChange[] {
  return isResourceArray(resource, isMoveStatChange);
}

// PastMoveStatValues
function isPastMoveStatValues(resource: IPastMoveStatValues): resource is IPastMoveStatValues {
  return (
    isNumberOrNull(resource.accuracy) &&
    isNumberOrNull(resource.effect_chance) &&
    isNumberOrNull(resource.power) &&
    isNumberOrNull(resource.pp) &&
    isVerboseEffectArray(resource.effect_entries) &&
    isNamedAPIResourceOrNull(resource.type) &&
    isNamedAPIResource(resource.version_group)
  );
}

export function isPastMoveStatValuesArray(resource: IPastMoveStatValues[]): resource is IPastMoveStatValues[] {
  return isResourceArray(resource, isPastMoveStatValues);
}

// AbilityEffectChange
function isAbilityEffectChange(resource: IAbilityEffectChange): resource is IAbilityEffectChange {
  return isEffectArray(resource.effect_entries) && isNamedAPIResource(resource.version_group);
}

export function isAbilityEffectChangeArray(resource: IAbilityEffectChange[]): resource is IAbilityEffectChange[] {
  return isResourceArray(resource, isAbilityEffectChange);
}

// AbilityFlavorText
function isAbilityFlavorText(resource: IAbilityFlavorText): resource is IAbilityFlavorText {
  return isString(resource.flavor_text) && isNamedAPIResource(resource.language) && isNamedAPIResource(resource.version_group);
}

export function isAbilityFlavorTextArray(resource: IAbilityFlavorText[]): resource is IAbilityFlavorText[] {
  return isResourceArray(resource, isAbilityFlavorText);
}

// AbilityPokemon
function isAbilityPokemon(resource: IAbilityPokemon): resource is IAbilityPokemon {
  return isBoolean(resource.is_hidden) && isNumber(resource.slot) && isNamedAPIResource(resource.pokemon);
}

export function isAbilityPokemonArray(resource: IAbilityPokemon[]): resource is IAbilityPokemon[] {
  return isResourceArray(resource, isAbilityPokemon);
}

// PokemonSpeciesGender
function isPokemonSpeciesGender(resource: IPokemonSpeciesGender): resource is IPokemonSpeciesGender {
  return isNumber(resource.rate) && isNamedAPIResource(resource.pokemon_species);
}

export function isPokemonSpeciesGenderArray(resource: IPokemonSpeciesGender[]): resource is IPokemonSpeciesGender[] {
  return isResourceArray(resource, isPokemonSpeciesGender);
}

// GrowthRateExperienceLevel
function isGrowthRateExperienceLevel(resource: IGrowthRateExperienceLevel): resource is IGrowthRateExperienceLevel {
  return isNumber(resource.level) && isNumber(resource.experience);
}

export function isGrowthRateExperienceLevelArray(resource: IGrowthRateExperienceLevel[]): resource is IGrowthRateExperienceLevel[] {
  return isResourceArray(resource, isGrowthRateExperienceLevel);
}

// NatureStatChange
function isNatureStatChange(resource: INatureStatChange): resource is INatureStatChange {
  return isNumber(resource.max_change) && isNamedAPIResource(resource.pokeathlon_stat);
}

export function isNatureStatChangeArray(resource: INatureStatChange[]): resource is INatureStatChange[] {
  return isResourceArray(resource, isNatureStatChange);
}

// MoveBattleStylePreference
function isMoveBattleStylePreference(resource: IMoveBattleStylePreference): resource is IMoveBattleStylePreference {
  return isNumber(resource.low_hp_preference) && isNumber(resource.high_hp_preference) && isNamedAPIResource(resource.move_battle_style);
}

export function isMoveBattleStylePreferenceArray(resource: IMoveBattleStylePreference[]): resource is IMoveBattleStylePreference[] {
  return isResourceArray(resource, isMoveBattleStylePreference);
}

// NaturePokeathlonStatAffectSets
export function isNaturePokeathlonStatAffectSets(resource: INaturePokeathlonStatAffectSets): resource is INaturePokeathlonStatAffectSets {
  return isNaturePokeathlonStatAffectArray(resource.increase) && isNaturePokeathlonStatAffectArray(resource.decrease);
}

// NaturePokeathlonStatAffect
function isNaturePokeathlonStatAffect(resource: INaturePokeathlonStatAffect): resource is INaturePokeathlonStatAffect {
  return isNumber(resource.max_change) && isNamedAPIResource(resource.nature);
}

function isNaturePokeathlonStatAffectArray(resource: INaturePokeathlonStatAffect[]): resource is INaturePokeathlonStatAffect[] {
  return isResourceArray(resource, isNaturePokeathlonStatAffect);
}

// PokemonAbility
function isPokemonAbility(resource: IPokemonAbility): resource is IPokemonAbility {
  return isBoolean(resource.is_hidden) && isNumber(resource.slot) && isNamedAPIResource(resource.ability);
}

export function isPokemonAbilityArray(resource: IPokemonAbility[]): resource is IPokemonAbility[] {
  return isResourceArray(resource, isPokemonAbility);
}

// PokemonType
function isPokemonType(resource: IPokemonType): resource is IPokemonType {
  return isNumber(resource.slot) && isNamedAPIResource(resource.type);
}

export function isPokemonTypeArray(resource: IPokemonType[]): resource is IPokemonType[] {
  return isResourceArray(resource, isPokemonType);
}

// PokemonHeldItem
function isPokemonHeldItem(resource: IPokemonHeldItem): resource is IPokemonHeldItem {
  return isNamedAPIResource(resource.item) && isPokemonHeldItemVersionArray(resource.version_details);
}

export function isPokemonHeldItemArray(resource: IPokemonHeldItem[]): resource is IPokemonHeldItem[] {
  return isResourceArray(resource, isPokemonHeldItem);
}

// PokemonHeldItemVersion
function isPokemonHeldItemVersion(resource: IPokemonHeldItemVersion): resource is IPokemonHeldItemVersion {
  return isNamedAPIResource(resource.version) && isNumber(resource.rarity);
}

function isPokemonHeldItemVersionArray(resource: IPokemonHeldItemVersion[]): resource is IPokemonHeldItemVersion[] {
  return isResourceArray(resource, isPokemonHeldItemVersion);
}

// PokemonMove
function isPokemonMove(resource: IPokemonMove): resource is IPokemonMove {
  return isNamedAPIResource(resource.move) && isPokemonMoveVersionArray(resource.version_group_details);
}

export function isPokemonMoveArray(resource: IPokemonMove[]): resource is IPokemonMove[] {
  return isResourceArray(resource, isPokemonMove);
}

// PokemonMoveVersion
function isPokemonMoveVersion(resource: IPokemonMoveVersion): resource is IPokemonMoveVersion {
  return isNamedAPIResource(resource.move_learn_method) && isNamedAPIResource(resource.version_group) && isNumber(resource.level_learned_at);
}

function isPokemonMoveVersionArray(resource: IPokemonMoveVersion[]): resource is IPokemonMoveVersion[] {
  return isResourceArray(resource, isPokemonMoveVersion);
}

// PokemonStat
function isPokemonStat(resource: IPokemonStat): resource is IPokemonStat {
  return isNamedAPIResource(resource.stat) && isNumber(resource.effort) && isNumber(resource.base_stat);
}

export function isPokemonStatArray(resource: IPokemonStat[]): resource is IPokemonStat[] {
  return isResourceArray(resource, isPokemonStat);
}

// PokemonSprites
export function isPokemonSprites(resource: IPokemonSprites): resource is IPokemonSprites {
  return (
    isStringOrNull(resource.front_default) &&
    isStringOrNull(resource.front_shiny) &&
    isStringOrNull(resource.front_female) &&
    isStringOrNull(resource.front_shiny_female) &&
    isStringOrNull(resource.back_default) &&
    isStringOrNull(resource.back_shiny) &&
    isStringOrNull(resource.back_female) &&
    isStringOrNull(resource.back_shiny_female)
  );
}

// PokemonFormSprites
export function isPokemonFormSprites(resource: IPokemonFormSprites): resource is IPokemonFormSprites {
  return (
    isStringOrNull(resource.front_default) &&
    isStringOrNull(resource.front_shiny) &&
    isStringOrNull(resource.back_default) &&
    isStringOrNull(resource.back_shiny)
  );
}

// AwesomeName
function isAwesomeName(resource: IAwesomeName): resource is IAwesomeName {
  return isString(resource.awesome_name) && isNamedAPIResource(resource.language);
}

export function isAwesomeNameArray(resource: IAwesomeName[]): resource is IAwesomeName[] {
  return isResourceArray(resource, isAwesomeName);
}

// Genus
function isGenus(resource: IGenus): resource is IGenus {
  return isString(resource.genus) && isNamedAPIResource(resource.language);
}

export function isGenusArray(resource: IGenus[]): resource is IGenus[] {
  return isResourceArray(resource, isGenus);
}

// PokemonSpeciesDexEntry
function isPokemonSpeciesDexEntry(resource: IPokemonSpeciesDexEntry): resource is IPokemonSpeciesDexEntry {
  return isNumber(resource.entry_number) && isNamedAPIResource(resource.pokedex);
}

export function isPokemonSpeciesDexEntryArray(resource: IPokemonSpeciesDexEntry[]): resource is IPokemonSpeciesDexEntry[] {
  return isResourceArray(resource, isPokemonSpeciesDexEntry);
}

// PalParkEncounterArea
function isPalParkEncounterArea(resource: IPalParkEncounterArea): resource is IPalParkEncounterArea {
  return isNumber(resource.base_score) && isNumber(resource.rate) && isNamedAPIResource(resource.area);
}

export function isPalParkEncounterAreaArray(resource: IPalParkEncounterArea[]): resource is IPalParkEncounterArea[] {
  return isResourceArray(resource, isPalParkEncounterArea);
}

// PokemonSpeciesVariety
function isPokemonSpeciesVariety(resource: IPokemonSpeciesVariety): resource is IPokemonSpeciesVariety {
  return isBoolean(resource.is_default) && isNamedAPIResource(resource.pokemon);
}

export function isPokemonSpeciesVarietyArray(resource: IPokemonSpeciesVariety[]): resource is IPokemonSpeciesVariety[] {
  return isResourceArray(resource, isPokemonSpeciesVariety);
}

// MoveStatAffectSets
export function isMoveStatAffectSets(resource: IMoveStatAffectSets): resource is IMoveStatAffectSets {
  return isMoveStatAffectArray(resource.increase) && isMoveStatAffectArray(resource.decrease);
}

// MoveStatAffect
function isMoveStatAffect(resource: IMoveStatAffect): resource is IMoveStatAffect {
  return isNumber(resource.change) && isNamedAPIResource(resource.move);
}

function isMoveStatAffectArray(resource: IMoveStatAffect[]): resource is IMoveStatAffect[] {
  return isResourceArray(resource, isMoveStatAffect);
}

// NatureStatAffectSets
export function isNatureStatAffectSets(resource: INatureStatAffectSets): resource is INatureStatAffectSets {
  return isNamedAPIResourceArray(resource.increase) && isNamedAPIResourceArray(resource.decrease);
}

// TypePokemon
function isTypePokemon(resource: ITypePokemon): resource is ITypePokemon {
  return isNumber(resource.slot) && isNamedAPIResource(resource.pokemon);
}

export function isTypePokemonArray(resource: ITypePokemon[]): resource is ITypePokemon[] {
  return isResourceArray(resource, isTypePokemon);
}

// TypeRelations
export function isTypeRelations(resource: ITypeRelations): resource is ITypeRelations {
  return (
    isNamedAPIResourceArray(resource.no_damage_to) &&
    isNamedAPIResourceArray(resource.half_damage_to) &&
    isNamedAPIResourceArray(resource.double_damage_to) &&
    isNamedAPIResourceArray(resource.no_damage_from) &&
    isNamedAPIResourceArray(resource.half_damage_from) &&
    isNamedAPIResourceArray(resource.double_damage_from)
  );
}

// APIResource
export function isAPIResource(resource: IAPIResource): resource is IAPIResource {
  return isString(resource.url);
}

export function isAPIResourceArray(resource: IAPIResource[]): resource is IAPIResource[] {
  return isResourceArray(resource, isAPIResource);
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

// Encounter
function isEncounter(resource: IEncounter): resource is IEncounter {
  return (
    isNumber(resource.min_level) &&
    isNumber(resource.max_level) &&
    isNamedAPIResourceArray(resource.condition_values) &&
    isNumber(resource.chance) &&
    isNamedAPIResource(resource.method)
  );
}

function isEncounterArray(resource: IEncounter[]): resource is IEncounter[] {
  return isResourceArray(resource, isEncounter);
}

// FlavorText
function isFlavorText(resource: IFlavorText): resource is IFlavorText {
  return isString(resource.flavor_text) && isNamedAPIResource(resource.language);
}

export function isFlavorTextArray(resource: IFlavorText[]): resource is IFlavorText[] {
  return isResourceArray(resource, isFlavorText);
}

// GenerationGameIndex
function isGenerationGameIndex(resource: IGenerationGameIndex): resource is IGenerationGameIndex {
  return isNumber(resource.game_index) && isNamedAPIResource(resource.generation);
}

export function isGenerationGameIndexArray(resource: IGenerationGameIndex[]): resource is IGenerationGameIndex[] {
  return isResourceArray(resource, isGenerationGameIndex);
}

// MachineVersionDetail
function isMachineVersionDetail(resource: IMachineVersionDetail): resource is IMachineVersionDetail {
  return isAPIResource(resource.machine) && isNamedAPIResource(resource.version_group);
}

export function isMachineVersionDetailArray(resource: IMachineVersionDetail[]): resource is IMachineVersionDetail[] {
  return isResourceArray(resource, isMachineVersionDetail);
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
  const keys: string[] = Object.keys(resource);

  return isString(resource.name) && isString(resource.url) && keys.length === 2;
}

export function isNamedAPIResourceArray(resource: INamedAPIResource[]): resource is INamedAPIResource[] {
  return isResourceArray(resource, isNamedAPIResource);
}

// VerboseEffect
function isVerboseEffect(resource: IVerboseEffect): resource is IVerboseEffect {
  return isString(resource.effect) && isString(resource.short_effect) && isNamedAPIResource(resource.language);
}

export function isVerboseEffectArray(resource: IVerboseEffect[]): resource is IVerboseEffect[] {
  return isResourceArray(resource, isVerboseEffect);
}

// VersionEncounterDetail
function isVersionEncounterDetail(resource: IVersionEncounterDetail): resource is IVersionEncounterDetail {
  return isNamedAPIResource(resource.version) && isNumber(resource.max_chance) && isEncounterArray(resource.encounter_details);
}

function isVersionEncounterDetailArray(resource: IVersionEncounterDetail[]): resource is IVersionEncounterDetail[] {
  return isResourceArray(resource, isVersionEncounterDetail);
}

// VersionGameIndex
function isVersionGameIndex(resource: IVersionGameIndex): resource is IVersionGameIndex {
  return isNumber(resource.game_index) && isNamedAPIResource(resource.version);
}

export function isVersionGameIndexArray(resource: IVersionGameIndex[]): resource is IVersionGameIndex[] {
  return isResourceArray(resource, isVersionGameIndex);
}

// VersionGroupFlavorText
function isVersionGroupFlavorText(resource: IVersionGroupFlavorText): resource is IVersionGroupFlavorText {
  return isString(resource.text) && isNamedAPIResource(resource.language) && isNamedAPIResource(resource.version_group);
}

export function isVersionGroupFlavorTextArray(resource: IVersionGroupFlavorText[]): resource is IVersionGroupFlavorText[] {
  return isResourceArray(resource, isVersionGroupFlavorText);
}

// Utility
export function isAPIResourceOrNull(value: IAPIResource | null): value is IAPIResource | null {
  return isNull(value) || isAPIResource(value);
}

function isBoolean(value: boolean): value is boolean {
  return typeof value === 'boolean';
}

export function isContestComboSetsOrNull(value: IContestComboSets | null): value is IContestComboSets | null {
  return isNull(value) || isContestComboSets(value);
}

function isExpectedStructure<T extends any>(resource: T, expectedKeys: string[]): boolean {
  return (
    Object.keys(resource).filter((value: string) => {
      return !expectedKeys.includes(value);
    }).length === 0
  );
}

export function isMoveMetaDataOrNull(value: IMoveMetaData | null): value is IMoveMetaData | null {
  return isNull(value) || isMoveMetaData(value);
}

export function isNamedAPIResourceOrNull(value: INamedAPIResource | null): value is INamedAPIResource | null {
  return isNull(value) || isNamedAPIResource(value);
}

export function isNamedAPIResourceArrayOrNull(value: INamedAPIResource[] | null): value is INamedAPIResource[] | null {
  return isNull(value) || isNamedAPIResourceArray(value);
}

function isNull(value: any): value is null {
  return value === null;
}

function isNumber(value: number): value is number {
  return typeof value === 'number';
}

export function isNumberArray(value: number[]): value is number[] {
  return isResourceArray(value, isNumber);
}

export function isNumberOrNull(value: number | null): value is number | null {
  return isNull(value) || isNumber(value);
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

function isString(value: string): value is string {
  return typeof value === 'string';
}

export function isStringOrNull(value: string | null): value is string | null {
  return isNull(value) || isString(value);
}
