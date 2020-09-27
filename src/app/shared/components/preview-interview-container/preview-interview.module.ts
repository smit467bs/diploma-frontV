import { NgModule } from '@angular/core';
import { PreviewInterviewContainerComponent } from './preview-interview-container.component';
import { PreviewInterviewComponent } from './previrew-interview';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel';

@NgModule({
  declarations: [
    PreviewInterviewContainerComponent,
    PreviewInterviewComponent,
    ControlPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PreviewInterviewContainerComponent]
})

export class PreviewInterviewModule {
}
