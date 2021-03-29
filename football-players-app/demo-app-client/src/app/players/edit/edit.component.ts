import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player';
import { PlayersService } from '../players.service';
import { Position } from '../position';
import { PositionsService } from '../position.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  player: Player;
  positions: Position[] = [];
  editForm;
  constructor(public playersService: PlayersService,
              public positionsService: PositionsService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private toast: ToastrService) {
    this.editForm = this.formBuilder.group({
      id: [''],
      shirtNo: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      name: ['', Validators.required],
      positionId: [''],
      appearances: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      goals: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['playerId'];

    this.positionsService.getPosition().subscribe((data: Position[]) => {
      this.positions = data;
    });

    this.playersService.getPlayer(this.id).subscribe((data: Player) => {
      this.player = data;
      this.editForm.patchValue(data);
    });
    
  }
  onSubmit(formData) {
    this.playersService.updatePlayer(this.id, formData.value).subscribe(res => {
      this.toast.success('Player Data are Updated.');
      this.router.navigateByUrl('players/list');
    });
  }
  get f(){
    return this.editForm.controls;
  }

}
