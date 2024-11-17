import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';
// Value provider
const mockSongsService = {
  findAll() {
    return [
      {
        id: 1,
        title: 'Lasting lover',
      },
    ];
  },
};
@Module({
  controllers: [SongsController],
  providers: [
    // Stardard provider
    // SongsService,

    {
      provide: SongsService,
      useClass: SongsService,
    },
    // Value provider use for test
    // {
    //   provide: SongsService,
    //   useValue: mockSongsService,
    // },

    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
