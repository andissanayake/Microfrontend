import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiLabelComponent } from '@app-workspace/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,UiLabelComponent],
  selector: 'app-workspace-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-one';
}
