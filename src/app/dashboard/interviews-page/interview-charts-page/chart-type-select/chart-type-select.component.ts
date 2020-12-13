import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Dictionary } from 'core/models';
import { ChartType } from 'core/models/types';

@Component({
  selector: 'chart-type-select',
  templateUrl: './chart-type-select.component.html',
  styleUrls: ['./chart-type-select.component.scss']
})
export class ChartTypeSelectComponent {
  @Input()
  questionId: string;
  @Output()
  chartTypeChange = new EventEmitter<Dictionary<ChartType>>();

  onChartChange(value: ChartType): void {
    this.chartTypeChange.emit({[this.questionId]: value});
  }
}
