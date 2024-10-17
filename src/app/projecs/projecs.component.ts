import { Component } from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {NgFor} from "@angular/common";
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {HeaderComponent} from "../share/header/header.component";
import {TranslateStatusService} from "../service/translate-status.service";

@Component({
  selector: 'app-projecs',
  standalone: true,
  imports: [
    DecimalPipe,
    NgFor,
    NgIf,
    TranslateModule,
    HeaderComponent
  ],
  templateUrl: './projecs.component.html',
  styleUrl: './projecs.component.scss'
})


export class ProjecsComponent {

  constructor(private translateStatus: TranslateStatusService) {
  }


/**
 * Gets the description of the currently selected project.
 * If the translation status is active, returns the description in the current language.
 * Otherwise, returns the description in German.
 *
 * @returns {string} The description of the selected project.
 */
get description(): string {
  return this.translateStatus.translateStatus
    ? this.selectedProject?.description
    : this.cardProjectsDescriptionDE[this.selectedProjectIndex]?.description;
}

  procjects: Projecs[] = [{
    name: 'Join',
    tecUsed: 'HTML | CSS | JavaScript | Firebase',
    miniImg: 'project-img/join.jpg'
  },
    {
      name: 'El Pollo Loco',
      tecUsed: 'HTML | CSS | JavaScript',
      miniImg: 'project-img/el-pollo-loco.jpg'
    },
    {
    name: 'Pokedex',
    tecUsed: 'HTML | CSS | JavaScript | Bootstrap',
      miniImg: 'project-img/pokedex.png'
    },
    {
      name: 'Portfolio',
      tecUsed: 'HTML | CSS | JavaScript | Angular',
      miniImg: 'project-img/portfolio.png'
    }];

  cardProjects = [
    {
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      tecUsed: ['CSS', 'HTML', 'JavaScript'],
      imageUrl: 'project-img/join.jpg',
      liveTest: 'https://join-board.lyonelberzen.dev/',
      github: 'https://github.com/Mori-Takahashi/Join-board'
    },
    {
      name: 'El Pollo Loco',
      description: 'A mini Jump and Run game. Collect coins and salsa to defeat the evil chicken.',
      tecUsed: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'project-img/el-pollo-loco.jpg',
      liveTest: 'https://el-pollo-loco.lyonelberzen.dev/',
      github: 'https://github.com/Mori-Takahashi/el-pollo-loco'
    },
    {
      name: 'Pokedex',
      description: 'A Pokedex app that allows you to search for Pokemon by name. Displays information about the Pokemon and its abilities.',
      tecUsed: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      imageUrl: 'project-img/pokedex.png',
      liveTest: 'https://pokedex.lyonelberzen.dev',
      github: 'https://github.com/Mori-Takahashi/Pokedex'
    },
    {
      name: 'Portfolio',
      description: 'Personal portfolio website. Showcases my projects and provides information about me.',
      tecUsed: ['HTML', 'SCSS', 'TypeScript', 'Angular'],
      imageUrl: 'project-img/portfolio.png',
      liveTest: 'https://lyonelberzen.dev',
      github: 'https://github.com/Mori-Takahashi/Portfolio'
    }
  ];

  cardProjectsDescriptionDE = [
    {description: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'},
    {description: 'Ein Mini-Jump-and-Run-Spiel. Sammle Münzen und Salsa, um das böse Huhn zu besiegen.'},
    {description: 'Eine Pokedex-App, mit der Sie nach Pokemon nach Namen suchen können. Zeigt Informationen über das Pokemon und seine Fähigkeiten an.'},
    {description: 'Persönliche Portfolio-Website. Zeigt meine Projekte und bietet Informationen über mich.'}
  ]


  /**
   * The currently selected project.
   * Initialized to `null`.
   */
  selectedProject: any = null;

  /**
   * The index of the currently selected project.
   */
  selectedProjectIndex: number = 0;

  /**
   * Opens the project at the specified index.
   * Updates `selectedProject` and `selectedProjectIndex` accordingly.
   *
   * @param {number} index - The index of the project to open.
   */
  openProject(index: number) {
    this.selectedProject = this.cardProjects[index];
    this.selectedProjectIndex = index;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this.playAnimation('slide-in');
    }, 500);
  }

  /**
   * Plays the specified animation on the project card.
   *
   * @param {string} animation - The name of the animation to play.
   *                             Can be 'slide-in' or 'slide-out'.
   */
  playAnimation(animation: string) {
    let card = document.getElementById('animation');
    if (card && animation === 'slide-in') {
      card.classList.remove('d-non');
      card.classList.add('slide-in-right');
      card.classList.add('project-card');
    } else if (card && animation === 'slide-out') {
      card.classList.remove('slide-in-right');
      card.classList.add('slide-out-right');
      setTimeout(() => {
        card.classList.remove('project-card');
      }, 500);
    }
  }

  /**
   * Closes the currently open project.
   * Sets `selectedProject` to `null`.
   */
  closeProject() {
    document.body.style.overflow = 'auto';
    this.playAnimation('slide-out');
    setTimeout(() => {
      this.selectedProject = null;
    }, 500);
  }

  /**
   * Advances to the next project in the `cardProjects` array.
   * Updates `selectedProjectIndex` and `selectedProject` accordingly.
   */
  nextProject() {
    this.selectedProjectIndex = (this.selectedProjectIndex + 1) % this.cardProjects.length;
    this.selectedProject = this.cardProjects[this.selectedProjectIndex];
  }

  /**
   * Returns the icon path for a given technology.
   * @param {string} tech - The name of the technology.
   * @returns {string} The path to the icon for the specified technology.
   */
  getTechIcon(tech: string) {
    let iconMap: { [key: string]: string } = {
      'CSS': 'icons/card_CSS.svg',
      'HTML': 'icons/card_HTML.svg',
      'Angular': 'icons/card_angular.svg',
      'TypeScript': 'icons/card_TS.svg',
      'JavaScript': 'icons/card_JavaScript.svg',
      'Firebase': 'icons/card_Firebase.svg',
      'Bootstrap': 'icons/card_bootstrap.svg',
      'SCSS': 'icons/card_SCSS.svg'
    };
    return iconMap[tech];
  }
}



type Projecs = {
  name: string;
  tecUsed: string;
  miniImg: string;
}
