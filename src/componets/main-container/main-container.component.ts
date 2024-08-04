import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharactersService } from '../../services';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {
  private charactersService: CharactersService = inject(CharactersService);
  characters$: Observable<Character[]> = this.charactersService.getCharacters();
}
