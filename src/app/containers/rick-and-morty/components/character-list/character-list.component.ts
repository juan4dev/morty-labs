import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from '@core/store';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  readonly store = inject(GlobalStore);
}
