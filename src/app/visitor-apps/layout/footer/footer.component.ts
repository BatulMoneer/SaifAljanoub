import { Component, OnInit } from '@angular/core';
import { visitor } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private impApiService: ImpApiService) { }
  company_whatsapp;
  company_email;
  company_phoneNo;
  ngOnInit(): void {
    this.impApiService.get(visitor.contact).subscribe((data: any) => {
    this.company_email = data.data.company_email
    this.company_phoneNo = data.data.company_phoneNo
    this.company_whatsapp = data.data.company_whatsapp

    })
  }

}
