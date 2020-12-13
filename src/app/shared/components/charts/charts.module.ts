import { NgModule } from '@angular/core';
import { BarChartModule, PieChartModule } from '@swimlane/ngx-charts';

import { PieChartComponent } from './pie-chart';
import { BarChartComponent } from './bar-chart';

@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    PieChartModule,
    BarChartModule
  ],
  exports: [
    PieChartComponent,
    BarChartComponent
  ]
})
export class ChartsModule {
}
