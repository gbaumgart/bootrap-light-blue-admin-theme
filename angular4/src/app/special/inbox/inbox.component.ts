import { Component, ElementRef } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: '[inbox]',
  templateUrl: './inbox.template.html',
  styleUrls: ['./inbox.style.scss']
})

export class Inbox {
  mailListShow: boolean = true;
  mailFormShow: boolean = false;
  mailDetailShow: boolean = false;
  currentMail: any;
  currentFolderName: string = 'Inbox';
  $el: any;
  repliedMessage: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);

    this.initMailboxAppDemo(this.$el);
  }

  handleComposeBtn(event): void {
    this.repliedMessage = event || undefined;
    this.changeEmailComponents('mailForm');
  }

  onReplyMail(mail: any): void {
    this.currentMail = mail;
    this.changeEmailComponents('mailDetail');
  }

  changeEmailComponents(componentName: string): void {
    let mailState = {
      'mailList': (that): void => {
        that.mailFormShow = that.mailDetailShow = false;
        that.mailListShow = true;
      },

      'mailForm': (that): void => {
        that.mailListShow = that.mailDetailShow = false;
        that.mailFormShow = true;
      },

      'mailDetail': (that): void => {
        that.mailListShow = that.mailFormShow = false;
        that.mailDetailShow = true;
      },
    };

    mailState[componentName](this);
  }

  setFolderName(folderName: string): void {
    this.currentFolderName = folderName;
    if (!this.mailListShow) {
      this.changeEmailComponents('mailList');
    }
  }
  /* tslint:disable */
  initMailboxAppDemo($el: any): void {
    let showAlert = () => {
      $el.find('#app-alert')
        .removeClass('hide')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(): void {
          jQuery(this).removeClass('animated bounceInLeft');
        });
    };

    setTimeout(() => showAlert(), 3000);
  }
  /* tslint:enable */
  changeActiveItem(): void {
    this.$el.find('.nav a').on('click', function(): void {
      jQuery('.nav').find('.active').removeClass('active');
      jQuery(this).parent().addClass('active');
    });
  }

  ngOnInit(): void {
    this.changeActiveItem();
  }
}
