import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput', {static: true}) searchInputE1: ElementRef

  onSearchTextChanged() {
    //this.searchTextChanged.emit(this.searchText);
  }

  // updateSearchText(inputEl: HTMLInputElement) {
  //   //this.searchText = event.target.value;
  //   this.searchText = inputEl.value;
  //   this.searchTextChanged.emit(this.searchText);
  // }
  updateSearchText() {
    //this.searchText = event.target.value;
    this.searchText = this.searchInputE1.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
