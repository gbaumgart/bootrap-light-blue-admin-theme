import { Component, ViewEncapsulation } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: '[article]',
  templateUrl: './article.template.html',
  styleUrls: [ './article.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Article {
  publishDate: Date;
  items: Array<string> = [];

  ngOnInit(): void {
    jQuery('.selectpicker').selectpicker();
    jQuery('#article-form').parsley({
      errorsContainer:  function ( elem, isRadioOrCheckbox ) {
        return jQuery(elem.$element).closest('.form-group').children('label');
      }
    });
    jQuery('#markdown-editor').markdown();
  }
}
