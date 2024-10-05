import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListComponent {

}
