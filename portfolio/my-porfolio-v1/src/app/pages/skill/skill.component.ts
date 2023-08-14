import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent {

  public openList = 'frontend';

  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}

