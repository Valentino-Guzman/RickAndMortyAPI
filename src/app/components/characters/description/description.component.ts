import { Component, Inject, OnInit } from '@angular/core';
import { Characters } from '../../../interfaces/characters';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogContent,MatDialogActions,MatDialogClose } from '@angular/material/dialog';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-description',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose,NgFor ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public character: Characters) {}

}
