import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { changed } from 'core/utils';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnChanges {
  @Input()
  data: Array<{ name: string, value: number }>;

  // chart options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  showYAxisLabel = true;
  yAxisLabel = 'Choices';

  colorScheme = 'cool';

  yAxisTicks: Array<number>;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const data = changed(changes, 'data');
    if (data) {
      this.yAxisTicks = [0, ...this.data.map(({value}) => value)];
    }
  }

  onSelect(event) {
    console.log(event);
  }
}
