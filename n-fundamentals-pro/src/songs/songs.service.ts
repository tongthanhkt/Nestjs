import { Inject, Injectable } from '@nestjs/common';
import { CONNECTION } from 'src/common/constants/connection';

@Injectable()
export class SongsService {
  constructor(@Inject('CONNECTION') connection: CONNECTION) {
    console.log('connection string', connection.CONNECTION_STRING);
  }
  private readonly songs = [];
  create(song) {
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    return this.songs;
  }
}
