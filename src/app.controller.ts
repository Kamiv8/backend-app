import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import Country from './country.model';
import { Observable } from 'rxjs';

@Controller('/api')
export class AppController {
  constructor(private readonly _appService: AppService) {}

  @Post('byid')
  async findAlls(
    @Body() body: { region: string },
  ): Promise<Observable<Country[]>> {
    return await this._appService.findAll(body.region);
  }

  @Post('byname')
  async findOne(
    @Body() body: { name: string },
  ): Promise<Observable<Country[]>> {
    return await this._appService.country(body.name);
  }
}
