import { NgModule } from '@angular/core';
import { PieChartModule } from '@swimlane/ngx-charts';

import { PieChartComponent } from 'shared/components/charts/pie-chart';

@NgModule({
  declarations: [
    PieChartComponent
  ],
  imports: [
    PieChartModule
  ],
  exports: [
    PieChartComponent
  ]
})
export class ChartsModule {
}
