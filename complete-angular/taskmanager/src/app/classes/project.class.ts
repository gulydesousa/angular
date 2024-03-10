export class Project {
  ID: number = 0;
  Name: string = '';
  // Ahora es un string en formato 'YYYY-MM-DD' que viene asi desde la api
  DateOfStart: string = '';
  TeamSize: number | undefined;
}
