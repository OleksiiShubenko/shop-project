import { Injectable, OnInit, InjectionToken, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  generate(): number {
    return Math.random();
  }

}

export function GenerateNFactory(n: number): (generator: GeneratorService) => number {
  //in provider deps section specify what GeneratorService will be injected here
  return (generator: GeneratorService): number => generator.generate() * n;
}

export const Generator3 = new InjectionToken<number>('Generator3');

// export const Generator3 = new InjectionToken<number>('Generator3', {
//   providedIn: 'root',
//   factory: () => {
//     const generatorService = inject(GeneratorService);
//     return generatorService.generate();
//   }
// });
