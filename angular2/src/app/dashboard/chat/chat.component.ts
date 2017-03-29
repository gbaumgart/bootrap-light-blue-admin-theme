import { Component, Input } from '@angular/core';

declare let jQuery: any;
@Component({
  selector: '[chat]',
  templateUrl: './chat.template.html'
})
export class Chat {
  _messages;
  @Input()
  set messages(messages: Array<any>) {
    this._messages = messages || '<no message set>';
  }

  get name() { return this._messages; }

  ngOnInit(): void {
    jQuery('.chat-messages').slimscroll({
      height: '240px',
      size: '5px',
      alwaysVisible: true,
      railVisible: true
    });
  }

  doneTyping($event) {
    if ($event.which === 13) {
      this.pushMessage($event.target.value);
      $event.target.value = null;
      this.scrollDown();
    }
  }

  addMessage(inputEl: HTMLInputElement) {
    this.pushMessage(inputEl.value);
    inputEl.value = null;
    this.scrollDown();
  }

  private pushMessage(message): void {
      this._messages.push({
          'time': 'just now',
          'sender': 'Tikhon Laninga',
          'text': `${message}`,
          'image': 'assets/img/2.png'
      });
  }

  private scrollDown() {
    setTimeout(() => {
        jQuery('.chat-messages').slimscroll({scrollBy: '500px'});
    }, 10);
  }
}
