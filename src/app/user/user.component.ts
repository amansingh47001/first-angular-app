import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

//Taking avatar and name as a prop using newer signal method
// export class UserComponent {
//   avatar = input<string>();
//   name = input<string>();
//   name = input.required<string>();
//   avatar = input.required<string>();

//     imagePath = computed(() => {
//     return 'assets/users/' + this.avatar();
//   });

//   onSelectUser() {
//     console.log('clicked.');
//   }
// }


// Taking avatar and name as a prop using older decorator method @Input
// export class UserComponent {
//   @Input({required: true}) id!: string;
//   @Input({required: true}) avatar!: string;
//   @Input({required: true}) name!: string;
//   @Output() select = new EventEmitter<string>();
//   // select = output<string>();

//   get imagePath() {
//     return 'assets/users/' + this.avatar;
//   }

//   onSelectUser() {
//    this.select.emit(this.id);
//   }
// }

//Accepting only user
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selectedUserId!: boolean;


  // @Input({required: true}) user!: {
  //   id: string,
  //   name: string,
  //   avatar: string
  // };
  
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
   this.select.emit(this.user.id);
  }
}


//Rendering single random user using newer method which uses signal.
// export class UserComponent {
//   user = signal(DUMMY_USERS[randomIndex]);

//   imagePath = computed(() => {
//     return 'assets/users/' + this.user().avatar;
//   });

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.user.set(DUMMY_USERS[randomIndex]);
//     console.log('clicked.');
//   }
// }



// Rendering single random user using older method which uses zone.js
// export class UserComponent {
//  user = DUMMY_USERS[randomIndex]

//  get imagePath (){
//   return 'assets/users/' + this.user.avatar;
//  }

//  onSelectUser(){
//   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//   this.user = DUMMY_USERS[randomIndex];
//   console.log("clicked.")
//  }
// }
