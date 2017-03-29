import { Component, ViewEncapsulation } from '@angular/core';
import * as data from './elements.data';

import { Select2OptionData } from 'ng2-select2/ng2-select2';

declare let jQuery: any;

@Component({
  selector: '[elements]',
  templateUrl: './elements.template.html',
  styleUrls: [ './elements.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Elements {
  colorOptions: Object = {color: '#f0b518'};
  date: Date = new Date(2016, 5, 10);

  getSelect2CountryList(): Select2OptionData[] {
    return data.select2CountryData;
  }

  getSelect2GalaxyList():  Select2OptionData[]  {
    return data.select2GalaxyData;
  }

  getSelect2GroupedList(): Select2OptionData[] {
    return data.select2GroupedData;
  }

  ngOnInit(): void {
    jQuery('.selectpicker').selectpicker();
    jQuery('#colorpicker').colorpicker(this.colorOptions);
    jQuery('.js-slider').slider();
  }
}
