import { Component } from '@angular/core';

@Component({
  selector: 'app-projecs',
  standalone: true,
  imports: [],
  templateUrl: './projecs.component.html',
  styleUrl: './projecs.component.scss'
})


export class ProjecsComponent {

  procjects: Projecs[] = [{
    name: 'Join',
    tecUsed: 'HTML | CSS | JavaScript | Firebase'
  },
    {
      name: 'El Pollo Loco',
      tecUsed: 'HTML | CSS | JavaScript'
    }];



  openProject(projectID: number) {
    console.log(`Open project ${projectID}`);
  }

}



type Projecs = {
  name: string;
  tecUsed: string;
}
