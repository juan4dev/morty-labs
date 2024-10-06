import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from '@core/store';
import { CharacterCardComponent } from '@containers/rick-and-morty/components';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  readonly store = inject(GlobalStore);
}
