import { Component, ViewEncapsulation } from '@angular/core';
import { CheckAllService } from '../../layout/utils/directives/check-all.service';

interface TableStriped {
  [index: number]: {
    id: number;
    picture: string;
    description: string;
    label?: {
      text: string;
      colorClass: string;
    };
    info: {
      type: string;
      dimensions: string;
    }
    date: Date;
    size: string;
    progress: {
      percent: number;
      colorClass: string;
    }
  };
}

@Component({
  selector: '[static]',
  templateUrl: './static.template.html',
  styleUrls: [ './static.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Static {
  public tableStriped: TableStriped = [
    {
      id: 1,
      picture: 'assets/img/jpeg/1.jpg',
      description: 'Palo Alto',
      info: {
        type: 'JPEG',
        dimensions: '200x150'
      },
      date: new Date('September 14, 2012'),
      size: '45.6 KB',
      progress: {
        percent: 29,
        colorClass: 'success'
      }
    },
    {
      id: 2,
      picture: 'assets/img/jpeg/2.jpg',
      description: 'The Sky',
      info: {
        type: 'PSD',
        dimensions: '2400x1455'
      },
      date: new Date('November 14, 2012'),
      size: '15.3 MB',
      progress: {
        percent: 33,
        colorClass: 'warning'
      }
    },
    {
      id: 3,
      picture: 'assets/img/jpeg/3.jpg',
      description: 'Down the road',
      label: {
        colorClass: 'danger',
        text: 'INFO!'
      },
      info: {
        type: 'JPEG',
        dimensions: '200x150'
      },
      date: new Date('September 14, 2012'),
      size: '49.0 KB',
      progress: {
        percent: 38,
        colorClass: 'bar-gray'
      }
    },
    {
      id: 4,
      picture: 'assets/img/jpeg/4.jpg',
      description: 'The Edge',
      info: {
        type: 'PNG',
        dimensions: '210x160'
      },
      date: new Date('September 15, 2012'),
      size: '69.1 KB',
      progress: {
        percent: 17,
        colorClass: 'danger'
      }
    },
    {
      id: 5,
      picture: 'assets/img/jpeg/11.jpg',
      description: 'Fortress',
      info: {
        type: 'JPEG',
        dimensions: '1452x1320'
      },
      date: new Date('October 1, 2012'),
      size: '2.3 MB',
      progress: {
        percent: 41,
        colorClass: 'primary'
      }
    }
  ];

  constructor(private checkAllService: CheckAllService) {

  }

  checkAll($event, tb) {
    this.checkAllService.checkAll($event, tb);
  }
}
