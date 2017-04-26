import { Component, NgZone } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { Select2OptionData } from 'ng2-select2/ng2-select2';
declare let google: any;
declare let jQuery: any;

@Component({
  selector: '[maps]',
  templateUrl: './maps.template.html',
  styleUrls: [ './maps.style.scss' ]
})
export class Maps {
  latFirst: number = -37.813179;
  lngFirst: number = 144.950259;
  latSecond: number = 53.901771;
  lngSecond: number = 27.501222;
  zoom: number = 12;
  vmRegion: string = '';
  vmCode: string = '';

  select2Continents: Select2OptionData[] = [
    {
      id: 'europe_en',
      text: 'Europe'
    },
    {
      id: 'usa_en',
      text: 'USA'
    },
    {
      id: 'australia_en',
      text: 'Australia'
    }
  ];

  vectorMapContinent: string = 'europe_en';

  constructor(private apiLoader: MapsAPILoader, private zone: NgZone) { }

  regionModalInfoOpen($event, modal) {
    this.vmRegion = $event.region;
    this.vmCode = $event.code.toUpperCase();
    modal.show();
  }

  // workaround for ng2-bootstrap modal backdrop issue

  showBackdrop() {
    let el = document.createElement('div');
    el.className = 'modal-backdrop fade in';
    document.body.appendChild(el);
  }
  hideBackdrop() {
    document.body.removeChild(document.querySelector('.modal-backdrop'));
  }

  ngOnInit() {
    jQuery('.selectpicker').selectpicker().on('change', (event) => {
      this.vectorMapContinent = event.target.value;
    });

    this.apiLoader.load().then(() => {
      let autocomplete =
        new google.maps.places.Autocomplete(document.getElementById('address'), {});
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        this.zone.run(() => {
          let place = autocomplete.getPlace();
          if (place.geometry.location) {
            this.latSecond = place.geometry.location.lat();
            this.lngSecond = place.geometry.location.lng();
          }
        });
      });
    });
  }
}
