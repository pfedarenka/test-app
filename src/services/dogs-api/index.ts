import { isNull } from 'lodash-es';
import apiPath from '../../constants/api-path';
import { DogsApiResponse } from './types';

const getBreeds = async (): Promise<{ [breed: string]: string[] }> => {
  const response = await fetch(`${apiPath.dogsApi}/breeds/list/all`);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const data: DogsApiResponse = await response.json();
  return data.message;
};

const getImage = async (breed: string, sub: string): Promise<string> => {
  const path = isNull(sub)
    ? `breed/${breed}/images/random`
    : `breed/${breed}/${sub}/images/random`;

  const response = await fetch(`${apiPath.dogsApi}/${path}`);
  if (!response.ok) {
    throw Error(response.statusText);
  }

  const data: DogsApiResponse = await response.json();
  return data.message;
};

export { getBreeds, getImage };
