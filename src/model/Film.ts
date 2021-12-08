import { v4 as uuidV4 } from 'uuid';

class Film {
  id?: string;
  name: string;
  director: string;
  year: number;
  cast: string[];
  gender:string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Film };
