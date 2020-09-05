import { Component } from '@angular/core';


enum SectionType {
  teacher = 'teacher',
  child = 'child'
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent {
  sectionType = SectionType;

  activeSection: SectionType = null;

  changeActiveSection(type: SectionType) {
    console.log(type);
    this.activeSection = type;
  }
}
