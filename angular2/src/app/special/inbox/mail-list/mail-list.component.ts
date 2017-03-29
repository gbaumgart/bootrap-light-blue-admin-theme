import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Output, Input } from '@angular/core';
import { EventEmitter, ElementRef } from '@angular/core';
declare let jQuery: any;

const MAILS = [
  { id: 1,
    'sender': 'Philip Horbacheuski',
    'senderMail': 'philip.horbacheuski@example.com',
    'subject': 'Hi, Welcome to Google Mail',
    'date': '18:31',
    'paperclip': true,
    'attachment': true,
    'unread': true,
    'starred': true,
    'folderId': 1,
    'selected': false,
    'attachments': ['assets/img/jpeg/1.jpg', 'assets/img/jpeg/2.jpg'],
    'body': '<p>Projecting surrounded literature ' +
    'yet delightful alteration but bed men. Open are' +
    ' from long why cold. If must snug by upon sang ' +
    'loud left. As me do preference entreaties compliment ' +
    'motionless ye literature. Day behaviour explained law' +
    ' remainder.</p>    <p><strong>On then sake' +
    ' home</strong> is am leaf. Of suspicion do' +
    ' departure at extremely he believing. Do know ' +
    'said mind do rent they oh hope of. General enquire' +
    ' picture letters garrets on offices of no on.</p>' +
    ' <p>All the best,</p> <p>Vitaut the Great, CEO,' +
    ' <br>Fooby Inc.</p>'},

  { 'id': 2,
    'sender': 'StackExchange',
    'subject': 'New Python questions for this week!',
    'date': 'Aug 14',
    'paperclip': true,
    'unread': true,
    'attachment': true,
    'timestamp': 1376508566000,
    'folderId': 1,
    'selected': false,
    'attachments': ['assets/img/jpeg/3.jpg'],
    'body': '<h1>THIS IS HTML!!!!</h1>' },

  { 'id': 3,
    'sender': 'notifications@facebook.com',
    'senderMail': 'notifications@facebook.com',
    'subject': 'Someone just commented on your photo!',
    'date': 'Aug 7',
    'selected': false,
    'unread': false,
    'timestamp': 1375877213000,
    'folderId': 1 },

  { 'id': 4,
    'sender': 'Twitter',
    'subject': '@hackernews is now following you on Twitter',
    'date': 'Jul 31',
    'starred': true,
    'unread': true,
    'selected': false,
    'timestamp': 1375261974000,
    'folderId': 1 },

  { 'id': 5,
    'sender': 'LinkedIn',
    'subject': 'Jobs you may be interested in',
    'date': 'May 12',
    'selected': false,
    'unread': false,
    'timestamp': 1373634231000,
    'folderId': 1 },

  { 'id': 6,
    'sender': 'Naevius Victorsson',
    'subject': 'Front no party young abode state up',
    'date': 'May 1',
    'starred': true,
    'unread': false,
    'selected': false,
    'timestamp': 1373516566000,
    'folderId': 1},

  { 'id': 7,
    'sender': 'Nikola Foley',
    'subject': 'Quiet led own cause three him',
    'date': 'Apr 23',
    'paperclip': true,
    'attachment': true,
    'attachments': ['assets/img/jpeg/5.jpg', 'assets/img/jpeg/4.jpg'],
    'unread': false,
    'selected': false,
    'timestamp': 1374508566000,
    'folderId': 1 },

  { 'id': 8,
    'sender': 'Ernst Hardy',
    'subject': 'Raising say express had chiefly detract demands she',
    'date': 'Apr 20',
    'selected': false,
    'unread': false,
    'timestamp': 1373877213000,
    'folderId': 1 },

  { 'id': 9,
    'sender': 'Lubbert Fuller',
    'subject': 'Civility vicinity graceful is it at',
    'date': 'Jul 3',
    'starred': true,
    'selected': false,
    'unread': false,
    'timestamp': 1376516566000,
    'folderId': 2},

  { 'id': 10,
    'sender': 'Tatenda Guerra',
    'subject': 'Improve up at to on mention perhaps raising',
    'date': 'Jul 13',
    'attachment': true,
    'attachments': ['assets/img/jpeg/6.jpg'],
    'selected': false,
    'unread': false,
    'timestamp': 1376508566000,
    'folderId': 3 },

  { 'id': 12,
    'sender': 'Ladislao Roche',
    'subject': 'Way building not get formerly her peculiar',
    'date': 'Jul 18',
    'selected': false,
    'unread': true,
    'timestamp': 1375877213000,
    'folderId': 2 },

  { 'id': 13,
    'sender': 'Areli.Tanzi@gmail.com',
    'senderMail': 'Areli.Tanzi@gmail.com',
    'subject': 'Up uncommonly prosperous sentiments simplicity',
    'date': 'Jul 24',
    'starred': true,
    'attachment': true,
    'attachments': ['assets/img/jpeg/9.jpg'],
    'selected': false,
    'unread': false,
    'timestamp': 1375261974000,
    'folderId': 2 },

  { 'id': 14,
    'sender': 'Oluwaseyi Tremble',
    'subject': 'Reasonable appearance companions oh',
    'date': 'Jul 28',
    'selected': false,
    'unread': false,
    'timestamp': 1373634231000,
    'folderId': 3 }
];

@Component({
  selector: '[mail-list]',
  templateUrl: './mail-list.template.html',
  styles: [require('./mail-list.style.scss')],
  encapsulation: ViewEncapsulation.None
})

export class MailList  {
  @Output() replyMail = new EventEmitter();
  @Input() folderName: any;
  mails = MAILS;
  $el: any;
  $toggleAll: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  openMail(mail: any): void {
    mail.unread = false;
    this.replyMail.emit(mail);
  }

  selectMail(mail: any): void {
    mail.selected = mail.selected ? false : true;
    this.checkToggleAll();
  }

  selectAll(): void {
    let checked = this.$toggleAll.prop('checked');

    this.toggleAll(checked);
  }

  checkToggleAll(): void {
    let checked = true;

    // TODO select read (all)
    this.$el.find('.toggle-one').each(function(i, el): void {
      if (!jQuery(el).prop('checked') && checked) {
        checked = false;
      }
    });

    this.$toggleAll.prop('checked', checked);
  }

  toggleAll(checked: boolean): void {
    for (let mail of this.mails) {
      mail.selected = checked;
    }

    this.$toggleAll.prop('checked', checked);
  }

  selectRead(): void {
    this.toggleAll(false);
    this.mails.filter(mail => !mail.unread).forEach(mail => mail.selected = true);
    this.checkToggleAll();
  }

  selectUnread(): void {
    this.toggleAll(false);
    this.mails.filter(mail => mail.unread).forEach(mail => mail.selected = true);
    this.checkToggleAll();
  }

  markSelectedAsRead(): void {
    this.mails.filter(mail => mail.selected).forEach(mail => mail.unread = false);
  }

  markSelectedAsUnread(): void {
    this.mails.filter(mail => mail.selected).forEach(mail => mail.unread = true);
  }

  deleteEmails(): void {
    let mails = [];
    this.mails.forEach((mail) => {
      if (!mail.selected) {
        mails.push(mail);
      }
    });
    this.mails = mails;
  }

  ngOnInit(): void {
    this.$toggleAll = this.$el.find('#toggle-all');
  }

  ngOnChanges(event): void {
    if ('folderName' in event) {
      if (!(event.folderName.previousValue instanceof Object)) {
        this.toggleAll(false);
      }
    }
  }

  changeStarStatus(mail): void {
    mail.starred = !mail.starred;
  }
}
