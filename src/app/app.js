export default class ErrorRepository {
  constructor() {
    this.repo = new Map();
    this.repo.set('303', 'Имя должно быть не менее 3 символов и не более 10');
    this.repo.set('226', 'Такой логин уже зарегистрирован');
  }

  translate(code) {
    if (this.repo.has(code)) {
      return this.repo.get(code);
    }
    return 'Unknown error';
  }
}
