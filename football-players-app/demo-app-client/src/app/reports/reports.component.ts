import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players/players.service';
import { PlayerDetails } from '../players/playersDetails';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  fileName = 'PlayerDetails.xlsx';
  playersDetail: PlayerDetails[] = [];
  playerName = '';

  constructor(public playerService: PlayersService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') == null) {
      this.router.navigateByUrl('');
    }
  }

  searchByName() {
    if (this.playerName === '') {
      this.toast.error('Please enter player name');
    } else {
      this.playerService.getPlayersDetail(this.playerName).subscribe((data: PlayerDetails[]) => {
        this.playersDetail = data;
        if (this.playersDetail.length === 0) {
          this.toast.error('There are no player in this name. Please try again.');
        }
      });
    }
  }

  downloadFile() {
    const element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }
}
