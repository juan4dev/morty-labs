import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CharacterListComponent } from '@containers/rick-and-morty/components';

@Component({
  selector: 'app-rick-and-morty-container',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './rick-and-morty-container.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickAndMortyContainerComponent {}
