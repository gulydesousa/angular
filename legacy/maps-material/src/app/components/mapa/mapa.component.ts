import { Component, ViewChild } from "@angular/core";

import { Marcador } from "src/app/classes/marcador.class";
import { CoordenadasComponent } from "../coordenadas/coordenadas.component";

import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSelectionList } from "@angular/material/list";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"],
})
export class MapaComponent {
  marcadores: Marcador[] = [];

  @ViewChild("selectionList") selectionList!: MatSelectionList;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores")!);
    }
  }

  isItemSelected(index: number): boolean {
    return this.selectionList.selectedOptions.selected.some(
      (option) => option.value === index
    );
  }

  guardarStorage() {
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores));
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
  }

  editarMarcador(i: number, result: Marcador) {
    this.marcadores[i] = result;
    this.guardarStorage();
    this.snackBar.open("Marcador editado", "Cerrar", { duration: 3000 });
  }

  guardarMarcador(marcador: Marcador) {
    this.marcadores.push(marcador);
    this.guardarStorage();
    this.snackBar.open("Marcador agregado", "Cerrar", { duration: 3000 });
  }

  deleteSelectedItems(selectionList: any) {
    let selectedIndexes = selectionList.selectedOptions.selected.map(
      (option: { value: any }) => option.value
    );
    // Ordenamos los índices de mayor a menor para evitar problemas con el splice
    selectedIndexes.sort((a: number, b: number) => b - a); 

    selectedIndexes.forEach((index: number) => {
      this.borrarMarcador(index);
    });
    this.snackBar.open("Marcador(es) eliminado(s)", "Cerrar", {
      duration: 3000,
    });
  }

  dialogoConfig(marcador: Marcador): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = "no-scrollbar"; // Add the CSS class here
    dialogConfig.data = marcador;
    return dialogConfig;
  }

  agregarMarcador() {
    const dialogConfig = this.dialogoConfig(new Marcador(0, 0));
    const dialogRef = this.dialog.open(CoordenadasComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result: Marcador) => {
      if (!result) {
        return;
      }
      this.guardarMarcador(result);
    });
  }

  editItem(i: number) {
    if (this.isItemSelected(i)) {
      return;
    }

    const dialogConfig = this.dialogoConfig(this.marcadores[i]);
    const dialogRef = this.dialog.open(CoordenadasComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result: Marcador) => {
      if (!result) {
        return;
      }
      this.editarMarcador(i, result);
    });
  }

  onEditButtonClick(event: Event, index: number) {
    event.stopPropagation();
    //Para evitar que se seleccione el marcador al hacer click en el botón de editar
    this.editItem(index);
  }
}
