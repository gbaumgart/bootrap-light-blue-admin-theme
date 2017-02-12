import { Component, ViewEncapsulation } from '@angular/core';
import { tableData } from './tables-dynamic.data';

const PEOPLE = [
  {
    'id': '1',
    'name': 'Algerd',
    'info': {
      'type': 'JPEG',
      'dimensions': '200x150'
    },
    'description': 'Palo Alto',
    'date': 'June 27, 2013',
    'status': {
      'progress': '29',
      'type': 'success'
    }
  },
  {
    'id': '2',
    'name': 'Vitaut',
    'info': {
      'type': 'PNG',
      'dimensions': '6433x4522'
    },
    'description': 'Vilnia',
    'date': 'January 1, 1442',
    'status': {
      'progress': '19',
      'type': 'danger'
    }
  },
  {
    'id': '3',
    'name': 'Honar',
    'info': {
      'type': 'AVI',
      'dimensions': '1440x980'
    },
    'description': 'Berlin',
    'date': 'August 6, 2013',
    'status': {
      'progress': '49',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '4',
    'name': 'Jack',
    'info': {
      'type': 'PNG',
      'dimensions': '12x43'
    },
    'description': 'San Francisco',
    'date': 'August 19, 2013',
    'status': {
      'progress': '69'
    }
  },
  {
    'id': '5',
    'name': 'Leon',
    'info': {
      'type': 'MP4',
      'dimensions': '800x480'
    },
    'description': 'Brasilia',
    'date': 'October 1, 2013',
    'status': {
      'progress': '9',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '6',
    'name': 'Max',
    'info': {
      'type': 'TXT',
      'dimensions': '-'
    },
    'description': 'Helsinki',
    'date': 'October 29, 2013',
    'status': {
      'progress': '38',
      'type': 'warning'
    }
  },
  {
    'id': '7',
    'name': 'Pol',
    'info': {
      'type': 'MOV',
      'dimensions': '640x480'
    },
    'description': 'Radashkovichi',
    'date': 'November 11, 2013',
    'status': {
      'progress': '83',
      'type': 'danger'
    }
  },
  {
    'id': '8',
    'name': 'Chrishna',
    'info': {
      'type': 'DOC',
      'dimensions': '-'
    },
    'description': 'Mumbai',
    'date': 'December 2, 2013',
    'status': {
      'progress': '40',
      'type': 'info'
    }
  },
  {
    'id': '9',
    'name': 'Leslie',
    'info': {
      'type': 'AVI',
      'dimensions': '4820x2140'
    },
    'description': 'Singapore',
    'date': 'December 6, 2013',
    'status': {
      'progress': '18',
      'type': 'warning'
    }
  },
  {
    'id': '10',
    'name': 'David',
    'info': {
      'type': 'XML',
      'dimensions': '-'
    },
    'description': 'Portland',
    'date': 'December 13, 2013',
    'status': {
      'progress': '54',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '11',
    'name': 'Andrej',
    'info': {
      'type': 'VOB',
      'dimensions': '6433x4522'
    },
    'description': 'Minsk',
    'date': 'December 14, 2013',
    'status': {
      'progress': '25'
    }
  },
  {
    'id': '12',
    'name': 'Julia',
    'info': {
      'type': 'JPEG',
      'dimensions': '40x40'
    },
    'description': 'Hrodna',
    'date': 'July 9, 2012',
    'status': {
      'progress': '50',
      'type': 'warning'
    }
  },
  {
    'id': '13',
    'name': 'Ihnat',
    'info': {
      'type': 'JAVA',
      'dimensions': '-'
    },
    'description': 'Los Angeles',
    'date': 'August 2, 2012',
    'status': {
      'progress': '8',
      'type': 'success'
    }
  },
  {
    'id': '14',
    'name': 'Abraham',
    'info': {
      'type': 'DOCX',
      'dimensions': '-'
    },
    'description': 'Panama',
    'date': 'September 3, 2012',
    'status': {
      'progress': '80',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '15',
    'name': 'Tomas',
    'info': {
      'type': 'JPEG',
      'dimensions': '1800x1420'
    },
    'description': 'Amsterdam',
    'date': 'November 13, 2012',
    'status': {
      'progress': '10',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '16',
    'name': 'Scott',
    'info': {
      'type': 'PNG',
      'dimensions': '240x460'
    },
    'description': 'Sluck',
    'date': 'December 5, 2012',
    'status': {
      'progress': '93'
    }
  },
  {
    'id': '17',
    'name': 'Pham',
    'info': {
      'type': 'MAIL',
      'dimensions': '-'
    },
    'description': 'Tokyo',
    'date': 'December 8, 2012',
    'status': {
      'progress': '44',
      'type': 'danger'
    }
  },
  {
    'id': '18',
    'name': 'Peter',
    'info': {
      'type': 'PNG',
      'dimensions': '8320x6400'
    },
    'description': 'Cape Town',
    'date': 'December 29, 2012',
    'status': {
      'progress': '5',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '19',
    'name': 'Uladz',
    'info': {
      'type': 'JPEG',
      'dimensions': '2200x1600'
    },
    'description': 'Mahileu',
    'date': 'December 7, 2013',
    'status': {
      'progress': '0',
      'type': 'gray-light'
    }
  }
];

@Component({
  selector: '[dynamic]',
  templateUrl: './dynamic.template.html',
  styleUrls: [ './dynamic.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Dynamic {
  data: any[] = PEOPLE;

  rows: Array<any> = [];
  columns: Array<any> = [
    {title: 'Name', name: 'name'},
    {title: 'Position', name: 'position', sort: false},
    {title: 'Office', name: 'office', sort: 'asc'},
    {title: 'Extn.', name: 'ext', sort: ''},
    {title: 'Start date', name: 'startDate'},
    {title: 'Salary ($)', name: 'salary'}
  ];

  page: number = 1;
  itemsPerPage: number = 10;
  maxSize: number = 5;
  numPages: number = 1;
  length: number = 0;

  config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'position'}
  };

  ng2TableData: Array<any> = tableData;

  pagingConfigStyle: Object = {
    'background': 'none',
    'border': 'none'
  };

  constructor() {
    this.length = this.ng2TableData.length;
  }

  ngOnInit(): void {
    this.onChangeTable(this.config);
  }

  changePage(page: any, data: Array<any> = this.ng2TableData): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  changeFilter(data: any, config: any): any {
    if (!config.filtering) {
      return data;
    }

    let filteredData: Array<any> = data.filter((item: any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));

    return filteredData;
  }

  onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.ng2TableData, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }
}
