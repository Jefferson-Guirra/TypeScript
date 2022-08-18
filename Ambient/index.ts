//Singleton - Gof | Factory Method
class Database {
  private static database: Database
  private constructor(
    private host: string,
    private user: string,
    private password: string | number
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`)
  }

  static getDatabase(host: string, user: string, password: string) {
    if (Database.database) return Database.database
    Database.database = new Database(host, user, password)
    return Database.database
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123')
const db2 = Database.getDatabase('localhost', 'root', '123')
console.log(db1 === db2)
