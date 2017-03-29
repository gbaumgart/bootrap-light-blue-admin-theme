import { Directive, ElementRef, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
declare let jQuery: any;

@Directive ({
  selector: '[hide-on-upload]'
})

export class HideOnUpload {
  @Input('fileItem') item: any;
  el: any;
  uploadedSubject: Subject<boolean> = new Subject();

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit(): void {
    this.uploadedSubject.subscribe((isUploaded) => {
      if (isUploaded) {
        this.uploadedSubject.unsubscribe();
        this.hideSelf();
      }
    });
  }

  hideSelf(): void {
    setTimeout(() => {
      this.el.style.display = 'none';
    }, 1050);
  }

  ngDoCheck(): void {
    if (!this.uploadedSubject.closed) {
      this.uploadedSubject.next(this.item.isUploaded);
    }
  }
}

