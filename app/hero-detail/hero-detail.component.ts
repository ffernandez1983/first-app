import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: '/app/hero-detail/hero-detail.component.html',
  styleUrls: [ '/app/hero-detail/hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit
{
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
  goBack(): void {
    this.location.back();
  }
}
