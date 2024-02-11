import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Publisher, Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public heroName:string = "";

  public heroForm = new FormGroup({
    id:        new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img:    new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];


  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit(): void {

    if ( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroById( id ) ),
      ).subscribe( hero => {

        if ( !hero ) {
          return this.router.navigateByUrl('/');
        }
        this.heroName = hero.superhero;
        this.heroForm.reset( hero );
        return;
      });
  }

  onSubmit():void {

    if ( this.heroForm.invalid ) return;

    if ( this.currentHero.id ) {
      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => {
          this.showSnackbar(`${ hero.superhero } updated!`);
        });

      return;
    }

    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        this.router.navigate(['/heroes/edit', hero.id ]);
        this.showSnackbar(`${ hero.superhero } created!`);
      });
  }

  onDeleteHero() {
    if ( !this.currentHero.id ) throw Error('Hero id is required');

    //Enviar el heroe al dialogo
    const dialogRef = this.dialog.open( ConfirmDialogComponent
                                    , {data: this.heroForm.value});

    //Suscribirse para escuchar la respuesta del botón
    dialogRef.afterClosed()
      //ponemos un pipe para interceptar la respuesta del botón
      .pipe(
        filter( (result: boolean) => result===true ), //filtra el resultado del botón
        switchMap( () => this.heroesService.deleteHeroById( this.currentHero.id )), //Si es true, elimina el heroe
        filter( (wasDeleted: boolean) => wasDeleted===true ), //Si  no fue eliminado, no hago nada
      )
      //Si el pipe no ha interceptado la respuesta, redireccionamos
      .subscribe(() => {
        this.showSnackbar(`Superhero ${this.currentHero.superhero} eliminado`);
        this.router.navigate(['/heroes']);
      });

    // dialogRef.afterClosed().subscribe(result => {
    //   if ( !result ) return;

    //   this.heroesService.deleteHeroById( this.currentHero.id )
    //   .subscribe( wasDeleted => {
    //     if ( wasDeleted )
    //       this.router.navigate(['/heroes']);
    //   })
    // });

  }

  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'done', {duration: 2500,});
  }

}
