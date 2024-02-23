import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { Subject, Subscription, debounceTime } from "rxjs";

@Component({
  selector: "shared-search-box",
  templateUrl: "./search-box.component.html",
  styles: [],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder: string = "Buscar";

  @Input()
  public busqueda: string = "";

  ngOnInit(): void {

    //inicializar txtInput con el valor de busqueda

    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(value: string): void {
    this.debouncer.next(value);
  }
}
