import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UserStore implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 0, name: 'Zero', password: '123'},
      {id: 1, name: 'Mr. Nice', password: '123'},
      {id: 2, name: 'Narco', password: '123'},
      {id: 3, name: 'Bombasto', password: '123'},
      {id: 4, name: 'Celeritas', password: '123'},
      {id: 5, name: 'Magneta', password: '123'}
    ];
    return {users};
  }
}
