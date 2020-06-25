import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrandPrixesService } from 'src/app/shared/services/grand-prixes.service';

@Component({
  selector: 'app-grand-prix',
  templateUrl: './grand-prix.component.html',
  styleUrls: ['./grand-prix.component.scss']
})
export class GrandPrixComponent implements OnInit {
  gpId;
  grandPrix;

  qualifying = [
    {
      driver: 'JuanluTwoDITF',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/sauber.png',
      tyre: 'soft',
      time: '1:31.678'
    },
    {
      driver: 'ori nkb',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/ferrari.png',
      tyre: 'soft',
      time: '1:32.048'
    },
    {
      driver: 'AlessiG',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/mercedes.png',
      tyre: 'soft',
      time: '1:32.170'
    },
    {
      driver: 'bOOster94',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/renault.png',
      tyre: 'soft',
      time: '1:32.301'
    },
    {
      driver: 'Jorge Gallardo',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/redbull.png',
      tyre: 'soft',
      time: '1:32.713'
    },
    {
      driver: 'SpainKrisis',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/ferrari.png',
      tyre: 'soft',
      time: '1:32.745'
    },
    {
      driver: 'SupliX',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/mclaren.png',
      tyre: 'soft',
      time: '1:33.002'
    },
    {
      driver: 'jackbacole',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/haas_f1_team.png',
      tyre: 'soft',
      time: '1:33.084'
    },
    {
      driver: 'Luchas',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/williams.png',
      tyre: 'soft',
      time: '1:33.378'
    },
    {
      driver: 'KASUGA',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/mercedes.png',
      tyre: 'soft',
      time: '1:33.524'
    },
    {
      driver: '04ikersimon',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/toro_rosso.png',
      tyre: 'soft',
      time: '1:33.703'
    },
    {
      driver: 'mpibe7',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/haas_f1_team.png',
      tyre: 'soft',
      time: '1:34.342'
    },
    {
      driver: 'HahaVids',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/williams.png',
      tyre: 'soft',
      time: '1:34.603'
    },
    {
      driver: 'darkmarinov',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/redbull.png',
      tyre: 'soft',
      time: '1:34.640'
    },
  ];

  race = [
    {
      driver: 'JuanluTwoDITF',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/sauber.png',
      time: '22:45.854',
      stops: 1,
      points: '26'
    },
    {
      driver: 'ori nkb',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/ferrari.png',
      time: '+1.483',
      stops: 1,
      points: '18'
    },
    {
      driver: 'AlessiG',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/mercedes.png',
      time: '+9.128',
      stops: 1,
      points: '15'
    },
    {
      driver: 'bOOster94',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/renault.png',
      time: '+14.285',
      stops: 1,
      points: '12'
    },
    {
      driver: 'SpainKrisis',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/ferrari.png',
      time: '+23.791',
      stops: 1,
      points: '10'
    },
    {
      driver: 'Jorge Gallardo',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/redbull.png',
      time: '+24.235',
      stops: 1,
      points: '8'
    },
    {
      driver: 'Luchas',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/williams.png',
      time: '+36.252',
      stops: 1,
      points: '6'
    },
    {
      driver: 'jackbacole',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/haas_f1_team.png',
      time: '+39.678',
      stops: 1,
      points: '4'
    },
    {
      driver: 'mpibe7',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/haas_f1_team.png',
      time: '+43.179',
      stops: 1,
      points: '2'
    },
    {
      driver: 'KASUGA',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/mercedes.png',
      time: '+49.838',
      stops: 1,
      points: '1'
    },
    {
      driver: 'SupliX',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/mclaren.png',
      time: '+54.286',
      stops: 1,
      points: ''
    },
    {
      driver: 'HahaVids',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/williams.png',
      time: '+59.888',
      stops: 1,
      points: ''
    },
    {
      driver: 'Biel04',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/mclaren.png',
      time: '+1:10.847',
      stops: 1,
      points: ''
    },
    {
      driver: 'darkmarinov',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/redbull.png',
      time: '+1:18.406',
      stops: 1,
      points: ''
    },
    {
      driver: '04ikersimon',
      team: 'https://as01.epimg.net/img/motor/formula_1/2019/coches/200x47/toro_rosso.png',
      time: 'DNF',
      stops: 1,
      points: ''
    },
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private grandPrixService: GrandPrixesService
  ) {
    this.gpId = this.activatedRoute.snapshot.params['id'];

   }

  ngOnInit() {
    this.grandPrixService
    .getById(this.gpId)
    .subscribe((response) => {
      this.grandPrix = response.payload.data();
    });
  }

}
