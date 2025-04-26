import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usuarios: User[] = [];

  constructor() { }

  public addUser(usuario: User): void {
    this.usuarios.push(usuario);
  }

  public getUsers(): User[] {
    return this.usuarios;
  }

  public getUserById(id: number): User | undefined {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  public getAllUsersByEmail(terminacion: string): User[] {
    return this.usuarios.filter(usuario => {
      const emailDominio = usuario.email.split('@')[1];
      return emailDominio.endsWith(terminacion);
    });
  }
}
