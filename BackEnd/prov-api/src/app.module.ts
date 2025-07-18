import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DptoModule } from './dpto/dpto.module';
import { MunicipioModule } from './municipio/municipio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 61061,
      username: 'sa',
      password: 'Clave01.',
      database: 'proveedorWeb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: { encrypt: false }
    }),

    DptoModule, MunicipioModule, AuthModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

