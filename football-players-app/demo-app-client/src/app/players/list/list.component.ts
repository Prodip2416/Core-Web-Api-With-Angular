import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: Player[] = [];
  constructor(public playerService: PlayersService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') == null) {
      this.router.navigateByUrl('');
    }

    this.playerService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
    });
  }

  deletePlayer(id) {
    this.playerService.deletePlayer(id).subscribe(res => {
      this.toast.success('Players are Deleted.');
      this.players = this.players.filter(item => item.id !== id);
    });
  }

}
