// tslint:disable:no-console

import axios, { AxiosResponse } from 'axios';
import fs from 'fs';

import { IAPIResource, IAPIResourceList, INamedAPIResource, INamedAPIResourceList, TPokeAPIEndpoint } from '../src/interfaces';

interface IEndpoint {
  filter?: string | number;
  name: TPokeAPIEndpoint;
}

function updateLocalResources(): void {
  const endpoints: IEndpoint[] = [
    { name: 'berry' },
    { name: 'berry-firmness' },
    { name: 'berry-flavor' },
    { name: 'contest-type' },
    { name: 'contest-effect' },
    { name: 'super-contest-effect' },
    { name: 'encounter-method' },
    { name: 'encounter-condition' },
    { name: 'encounter-condition-value' },
    { name: 'evolution-chain' },
    { name: 'evolution-trigger' },
    { name: 'generation' },
    { name: 'pokedex' },
    { name: 'version' },
    { name: 'version-group' },
    { name: 'item' },
    { name: 'item-attribute' },
    { name: 'item-category' },
    { name: 'item-fling-effect' },
    { name: 'item-pocket' },
    { name: 'location' },
    { name: 'location-area' },
    { name: 'pal-park-area' },
    { name: 'region' },
    { name: 'machine' },
    { name: 'move' },
    { name: 'move-ailment' },
    { name: 'move-battle-style' },
    { name: 'move-category' },
    { name: 'move-damage-class' },
    { name: 'move-learn-method' },
    { name: 'move-target' },
    { name: 'ability' },
    { name: 'characteristic' },
    { name: 'egg-group' },
    { name: 'gender' },
    { name: 'growth-rate' },
    { name: 'nature' },
    { name: 'pokeathlon-stat' },
    { name: 'pokemon' },
    { name: 'pokemon-color' },
    { name: 'pokemon-form' },
    { name: 'pokemon-habitat' },
    { name: 'pokemon-shape' },
    { name: 'pokemon-species' },
    { name: 'stat' },
    { name: 'type' },
    { name: 'language' },
  ];

  const urlPrefix: string = 'https://pokeapi.co/api/v2/';

  endpoints.forEach(
    async (value: IEndpoint): Promise<void> => {
      console.log(`Downloading '${value.name}' list`);

      const listUrl: string = `${urlPrefix}${value.name}/?limit=2000`;
      const listJson: IAPIResourceList | INamedAPIResourceList = await axios
        .get<IAPIResourceList | INamedAPIResourceList>(listUrl)
        .then((response: AxiosResponse<IAPIResourceList | INamedAPIResourceList>) => {
          return response.data;
        })
        .catch((reason: any) => {
          return reason;
        });

      let filter: string | number;

      if (typeof value.filter === 'string' || typeof value.filter === 'number') {
        console.log(
          `Found preassigned '${value.name}' filter: ${typeof value.filter === 'string' ? "'" : ''}${value.filter}${
            typeof value.filter === 'string' ? "'" : ''
          }`,
        );

        filter = value.filter;
      } else {
        const randomIndex: number = Math.floor(Math.random() * (Math.floor(listJson.count - 1) + 1));
        const result: IAPIResource | INamedAPIResource = listJson.results[randomIndex];
        const urlParts: string[] = result.url.split('/');
        const id: number = Number(urlParts[urlParts.length - 2]);

        filter = id;
      }

      console.log(`Downloading '${value.name}' item with filter: ${typeof filter === 'string' ? "'" : ''}${filter}${typeof filter === 'string' ? "'" : ''}`);

      const itemUrl: string = `${urlPrefix}${value.name}/${filter}`;
      const itemJson: IAPIResource | INamedAPIResource = await axios
        .get<IAPIResource | INamedAPIResource>(itemUrl)
        .then((response: AxiosResponse<IAPIResource | INamedAPIResource>) => {
          return response.data;
        })
        .catch((reason: any) => {
          return reason;
        });

      console.log(`Saving '${value.name}' files`);

      await fs.promises.mkdir('./test/resources', { recursive: true });
      await fs.promises.writeFile(`./test/resources/${value.name}-list.json`, JSON.stringify(listJson, null, 2));
      await fs.promises.writeFile(`./test/resources/${value.name}-item.json`, JSON.stringify(itemJson, null, 2));
    },
  );
}

updateLocalResources();
