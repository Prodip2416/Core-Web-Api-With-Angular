import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { Position } from '../position';
import { PositionsService } from '../position.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  positions: Position[] = [];
  createForm;
  constructor(public playersService: PlayersService,
              public positionsService: PositionsService,
              private router: Router,
              private formBuilder: FormBuilder,
              private toast: ToastrService) {
    this.createForm = this.formBuilder.group({
      shirtNo: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      name: ['', Validators.required],
      positionId: [''],
      appearances: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      goals: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  ngOnInit(): void {
    this.positionsService.getPosition().subscribe((data: Position[]) => {
      this.positions = data;
    });
  }
  onSubmit(formData) {
    this.playersService.createPlayer(formData.value).subscribe(res => {
      this.toast.success('Player Data Save Successfully.');
      this.router.navigateByUrl('players/list');
    });
  }
  get f(){
    return this.createForm.controls;
  }
}
