
import { Component, QueryList, ViewChildren, AfterViewInit, ElementRef } from '@angular/core';
import { ListKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-keyboard',
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent implements AfterViewInit {
  items = ['Option 1', 'Option 2', 'Option 3'];
  keyManager!: ListKeyManager<ElementRef>;

  @ViewChildren('itemEl') itemElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.keyManager = new ListKeyManager(this.itemElements).withWrap();
  }

  onKeydown(event: KeyboardEvent) {
    this.keyManager.onKeydown(event);

    if (event.key === 'Enter') {
      const activeIndex = this.keyManager.activeItemIndex;
      if (activeIndex != null) {
        this.selectItem(this.items[activeIndex]);
      }
    }
  }

  selectItem(item: string) {
    console.log('Selected:', item);
  }
}
