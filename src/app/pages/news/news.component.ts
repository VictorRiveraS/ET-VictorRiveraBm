import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiNoticiasService } from 'src/app/shared/services/api-noticias.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public articles = [];
  public dataForm: any;
  public pais: any = 'mx';
  public categoria: any = 'business';
  public noticias: any;
  public edme: any;

  contries = [
    { name: 'Argentina', id: 'ar' },
    { name: 'Australia', id: 'at' },
    { name: 'Austria', id: 'au' },
    { name: 'Belgium', id: 'be' },
    { name: 'Brazil', id: 'br' },
    { name: 'Bulgaria', id: 'bg' },
    { name: 'Canada', id: 'ca' },
    { name: 'China', id: 'cn' },
    { name: 'Colombia', id: 'co' },
    { name: 'Cuba', id: 'cu' },
    { name: 'Czech Republic', id: 'cz' },
    { name: 'Egypt', id: 'eg' },
    { name: 'France', id: 'fr' },
    { name: 'Germany', id: 'de' },
    { name: 'Greece', id: 'gr' },
    { name: 'Hong Kong', id: 'hk' },
    { name: 'Hungary', id: 'hu' },
    { name: 'India', id: 'id' },
    { name: 'Indonesia', id: 'in' },
    { name: 'Ireland', id: 'ie' },
    { name: 'Israel', id: 'il' },
    { name: 'Italy', id: 'it' },
    { name: 'Japan', id: 'jp' },
    { name: 'Latvia', id: 'lv' },
    { name: 'Lithuania', id: 'lt' },
    { name: 'Malaysia', id: 'my' },
    { name: 'Mexico', id: 'mx' },
    { name: 'Morocco', id: 'ma' },
    { name: 'Netherlands', id: 'nl' },
    { name: 'New Zealand', id: 'nz' },
    { name: 'Nigeria', id: 'ng' },
    { name: 'Norway', id: 'no' },
    { name: 'Philippines', id: 'ph' },
    { name: 'Poland', id: 'pl' },
    { name: 'Portugal', id: 'pt' },
    { name: 'Romania', id: 'ro' },
    { name: 'Russia', id: 'ru' },
    { name: 'Saudi Arabia', id: 'sa' },
    { name: 'Serbia', id: 'rs' },
    { name: 'Singapore', id: 'sg' },
    { name: 'Slovakia', id: 'sk' },
    { name: 'Slovenia', id: 'si' },
    { name: 'South Africa', id: 'za' },
    { name: 'South Korea', id: 'kr' },
    { name: 'Thailand', id: 'th' },
    { name: 'Sweden', id: 'se' },
    { name: 'Switzerland', id: 'ch' },
    { name: 'Taiwan', id: 'tw' },
    { name: 'Turkey', id: 'tr' },
    { name: 'UAE', id: 'ae' },
    { name: 'Ukraine', id: 'ua' },
    { name: 'United Kingdom', id: 'gb' },
    { name: 'United States', id: 'us' },
    { name: 'Venuzuela', id: 've' },
  ];

  categories = [
    'business',
    'entertainment',
    'science',
    'sports',
    'technology'
  ];

  constructor(private apiservice: ApiNoticiasService) { }

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      country: new FormControl('mx', [Validators.required]),
      category: new FormControl('business', [Validators.required]),
    });

    this.apiservice.getNoti(this.pais, this.categoria).subscribe((val) => {
      this.noticias = val;
    });

    this.dataForm.get('country').valueChanges.subscribe((val: string) => {
      this.pais = val
      this.apiservice.getNoti(this.pais, this.categoria).subscribe((val) => {
        this.noticias = val;
      });
    });

    this.dataForm.get('category').valueChanges.subscribe((val: string) => {
      this.categoria = val
      this.apiservice.getNoti(this.pais, this.categoria).subscribe((val) => {
        this.noticias = val;
      });
    });
  }
}
