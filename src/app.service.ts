import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import Country from './country.model';

@Injectable()
export class AppService {
  constructor(private readonly _http: HttpService) {}

  async findAll(region: string): Promise<Observable<Country[]>> {
    return this._http
      .get<any>(`https://restcountries.com/v3.1/region/${region}`)
      .pipe(
        map((response) =>
          response.data.map((x) => {
            return { name: x.name.common, population: x.population };
          }),
        ),
      );
  }

  async country(name: string): Promise<Observable<Country[]>> {
    return this._http
      .get<any>(`https://restcountries.com/v3.1/name/${name}`)
      .pipe(
        map((response) =>
          response.data.map((x) => {
            console.log();
            return {
              name: x.name.common,
              population: x.population,
            };
          }),
        ),
      );
  }
}
