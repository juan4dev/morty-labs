import { Character, CharacterInfo } from '@core/models';

export const CharacterAdapter = (characterInfo: CharacterInfo): Character[] => [
  ...characterInfo.results,
];
