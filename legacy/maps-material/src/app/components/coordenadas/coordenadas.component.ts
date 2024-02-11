import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Marcador } from "src/app/classes/marcador.class";

@Component({
  selector: "app-coordenadas",
  templateUrl: "./coordenadas.component.html",
  styleUrls: ["./coordenadas.component.css"],
})
export class CoordenadasComponent {
  forma: FormGroup = new FormGroup({});

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<CoordenadasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marcador
  ) {
    this.forma = fb.group({
      lat: data.lat,
      lng: data.lng,
      titulo: data.titulo,
      desc: data.desc,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  guardarCambios() {
    const marcador: Marcador = this.forma.value;
    this.dialogRef.close(marcador);
  }
}
