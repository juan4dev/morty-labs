import { inject, InjectionToken } from '@angular/core';

import { patchState, signalStore, withHooks, withState } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { lastValueFrom } from 'rxjs';
import { Character } from '@core/models';
import { CharacterService } from '@containers/rick-and-morty/services/';

type StoreState = {
  characters: Character[];
};

export const initialState: StoreState = {
  characters: [],
};

const STORE_STATE = new InjectionToken<StoreState>('GlobalStoreState', {
  factory: () => initialState,
});

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(() => inject(STORE_STATE)),
  withEntities<Character>(),
  withHooks({
    async onInit(store, characterService = inject(CharacterService)) {
      const characters = await lastValueFrom(
        characterService.getAllCharacters()
      );

      patchState(store, { characters });
    },
  })
);
