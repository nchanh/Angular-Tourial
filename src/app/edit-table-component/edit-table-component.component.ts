import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-table-component',
  templateUrl: './edit-table-component.component.html',
  styleUrls: ['./edit-table-component.component.css'],
})
export class EditTableComponentComponent implements OnInit {

  showEditTable: boolean = false
  editRowId: number = -1

  constructor() {}

  ngOnInit() {}

  backendData = [
    {
      id: 1,
      name: 'Target',
      value: '100',
      description: 'abc',
    },
    {
      id: 2,
      name: 'Size',
      value: '20',
      description: 'def',
    },
    {
      id: 3,
      name: 'Industry',
      value: '40',
      description: 'ghi',
    },
  ];

  edit(value) {
    this.editRowId = value.id
  }

  save(id) {
    const oject = this.backendData.filter(
      data => data.id === id
    )[0]

    console.log(oject);
  }

  cancel() {
    this.editRowId = -1
  }
}
