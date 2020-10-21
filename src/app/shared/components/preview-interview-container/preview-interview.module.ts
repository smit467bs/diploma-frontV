import { NgModule } from '@angular/core';
import { PreviewInterviewContainerComponent } from './preview-interview-container.component';
import { PreviewInterviewComponent } from './previrew-interview';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PreviewInterviewContainerComponent,
    PreviewInterviewComponent,
    ControlPanelComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [PreviewInterviewContainerComponent]
})

export class PreviewInterviewModule {
}
