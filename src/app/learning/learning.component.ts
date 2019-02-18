import { Component, OnInit } from '@angular/core';

import { Book } from './interface';

import {
  ONE_COLUMN_UPPER_LIMIT,
  TWO_COLUMNS_UPPER_LIMIT,
  COLUMNS_DEFAULT
} from '../constants';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  cols = COLUMNS_DEFAULT;
  books: Book[] = [];

  constructor() {
    this.books = [
      {
        title: 'Principles - Ray Dalio',
        url: 'https://www.amazon.ca/Principles-Life-Work-Ray-Dalio/dp/1501124021/ref=sr_1_1?ie=UTF8&qid=1548558111&sr=8-1&keywords=' +
          'principles+ray+dalio'
      },
      {
        title: 'Think and Grow Rich - Napoleon Hill',
        url: 'https://www.amazon.ca/Think-Grow-Rich-Original-RevisedTM/dp/0990797600/ref=sr_1_2?ie=UTF8&qid=1548558138&sr=8-2&keywords=' +
          'think+and+grow+rich'
      },
      {
        title: 'Finding my Virginity - Richard Branson',
        url: 'https://www.amazon.ca/Finding-My-Virginity-New-Autobiography/dp/0735219427/ref=sr_1_1?ie=UTF8&qid=1548558219&sr=8-1&' +
          'keywords=finding+my+virginity'
      },
      {
        title: 'Brave New World - Aldous Huxley',
        url: 'https://www.amazon.ca/Brave-New-World-Aldous-Huxley/dp/030735654X/ref=sr_1_1?ie=UTF8&qid=1548558258&sr=8-1&keywords=brave+' +
          'new+world'
      },
      {
        title: 'American Colossus: The Triumph of Capitalism, 1865 - 1900 - H. W, Brands',
        url: 'https://www.amazon.ca/gp/product/0307386775/ref=ppx_yo_dt_b_asin_title_o00__o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'Hacking the Xbox: An Introduction to Reverse Engineering - Andrew Huang',
        url: 'https://www.amazon.ca/gp/product/1593270291/ref=ppx_yo_dt_b_asin_title_o00__o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'Introduction to Biomedical Engineering Technology - Laurence J. Street',
        url: 'https://www.amazon.ca/gp/product/149872275X/ref=ppx_yo_dt_b_asin_title_o05__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Kafka The Definitive Guide - Neha Narkhede',
        url: 'https://www.amazon.ca/gp/product/1491936169/ref=ppx_yo_dt_b_asin_title_o03__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Kubernetes Cookbook - Sébastien Goasguen',
        url: 'https://www.amazon.ca/gp/product/1491979682/ref=ppx_yo_dt_b_asin_title_o03__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Kubernetes Up and Running - Kelsey Hightower',
        url: 'https://www.amazon.ca/gp/product/1491935677/ref=ppx_yo_dt_b_asin_title_o04__o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'Atlas of Human Anatomy - Frank H. Netter',
        url: 'https://www.amazon.ca/Atlas-Human-Anatomy-Interactive-Ancillaries/dp/1455704180/ref=sr_1_2?ie=UTF8&qid=1548623239&sr=8-2&' +
          'keywords=atlas+of+human+anatomy'
      },
      {
        title: 'Deep Work: Rules for Focused Success in a Distracted World - Cal Newport',
        url: 'https://www.amazon.ca/gp/product/1455586692/ref=ppx_yo_dt_b_asin_title_o04__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Nucleic Acid in Chemistry and Biology - Michael G. Blackburn',
        url: 'https://www.amazon.ca/Nucleic-Chemistry-Biology-Michael-Blackburn-ebook/dp/B017WDD6EO/ref=sr_1_1?ie=UTF8&qid=1548623260&s' +
          'r=8-1&keywords=Nucleic+Acid+in+Chemistry+and+Biology'
      },
      {
        title: 'Deep Learning - Ian Goodfellow',
        url: 'https://www.amazon.ca/gp/product/0262035618/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Machine Learning: A Probabilistic Perspective - Kevin P. Murphy',
        url: 'https://www.amazon.ca/gp/product/0262018020/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'High Output Management - Andrew S. Grove',
        url: 'https://www.amazon.ca/gp/product/0679762884/ref=ppx_yo_dt_b_asin_title_o04__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'A Practical Guide to Linux Commands, Editors, and Shell Programming - Mark G. Sobell',
        url: 'https://www.amazon.ca/Practical-Guide-Commands-Editors-Programming/dp/013308504X/ref=sr_1_2?ie=UTF8&qid=1548623287&sr=8-2' +
          '&keywords=A+Practical+Guide+to+Linux+Commands%2C+Editors%2C+and+Shell+Programming'
      },
      {
        title: 'Vision - A Computational Investigation into the Human Representation and Processing of Visual Information - David Marr',
        url: 'https://www.amazon.ca/Vision-Computational-Investigation-Representation-Information/dp/0262514621/ref=sr_1_1?ie=UTF8&qid=' +
          '1548623307&sr=8-1&keywords=vision+david+marr'
      },
      {
        title: 'Higher Cortical Functions of Man - Alexandr R. Luria',
        url: 'https://www.amazon.ca/gp/product/1461585813/ref=ppx_od_dt_b_asin_title_o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'Leonardo Da Vinci - Walter Isaacson',
        url: 'https://www.amazon.ca/gp/product/1501139150/ref=ppx_od_dt_b_asin_title_o00_s00?ie=UTF8&psc=1'
      },
      { title: 'The Romance of Physics - Keith Irwin', url: 'https://www.amazon.com/Romance-Physics-keith-irwin/dp/B000NTMEIY' },
      {
        title: 'Good to Great - Jim Collins',
        url: 'https://www.amazon.ca/Good-Great-Some-Companies-Others/dp/0066620996/ref=sr_1_1?ie=UTF8&qid=1548623401&sr=8-1&keywords=' +
          'good+to+great'
      },
      {
        title: 'Money Assassins - Chad Viminitz',
        url: 'https://www.amazon.ca/Money-Assassins-stole-financial-freedom/dp/1897178824/ref=sr_1_1?ie=UTF8&qid=1548623419&sr=8-1&' +
          'keywords=money+assassins'
      },
      {
        title: 'The Lean Startup - Eric Reis',
        url: 'https://www.amazon.ca/gp/product/0307887898/ref=ppx_od_dt_b_asin_title_o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Lab-on-a-Chip Devices and Micro-Total Analysis Systems - Jaime Castillo-León',
        url: 'https://www.amazon.ca/gp/product/3319377183/ref=ppx_yo_dt_b_asin_title_o05__o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'Designing Data-Intensive Applications - Martin Kleppmann',
        url: 'https://www.amazon.ca/gp/product/1449373321/ref=ppx_yo_dt_b_asin_title_o03__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Tribe of Mentors - Timothy Ferriss',
        url: 'https://www.amazon.ca/gp/product/1328994961/ref=ppx_yo_dt_b_asin_title_o01__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Benjamin Franklin: An American Life - Walter Isaacson',
        url: 'https://www.amazon.ca/gp/product/0684807610/ref=ppx_yo_dt_b_asin_title_o01__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Einstein: His Life and Universe',
        url: 'https://www.amazon.ca/gp/product/1501171380/ref=ppx_yo_dt_b_asin_title_o01__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Crushing It - Gary Vaynerchuk',
        url: 'https://www.amazon.ca/gp/product/0062674676/ref=ppx_od_dt_b_asin_title_o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'The Hard Things About Hard Things - Ben Horowitz',
        url: 'https://www.amazon.ca/gp/product/0062273205/ref=ppx_yo_dt_b_asin_title_o01__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Titan: The Life of John D. Rockefeller, Sr - Ron Chernow',
        url: 'https://www.amazon.ca/gp/product/1400077303/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'How Google Works - Eric Schmidt',
        url: 'https://www.amazon.ca/How-Google-Works-Eric-Schmidt/dp/1455582344/ref=sr_1_1?ie=UTF8&qid=1548623434&sr=8-1&keywords=' +
          'how+google+works'
      },
      {
        title: 'An Anthropologist on Mars - Oliver Sacks',
        url: 'https://www.amazon.ca/gp/product/0394281519/ref=ppx_yo_dt_b_asin_title_o00__o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'Free Will - Sam Harris',
        url: 'https://www.amazon.ca/gp/product/1451683405/ref=ppx_yo_dt_b_asin_title_o04__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Zero to One: Notes on Startups, or How to Build the Future - Peter Thiel',
        url: 'https://www.amazon.ca/gp/product/0804139296/ref=ppx_od_dt_b_asin_title_o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Musicophilia - Oliver Sacks',
        url: 'https://www.amazon.ca/gp/product/0676979793/ref=ppx_yo_dt_b_asin_title_o00__o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'The Working Brain - Aleksandr R. Luria',
        url: 'https://www.amazon.ca/gp/product/046509208X/ref=ppx_od_dt_b_asin_title_o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'The Hitchhiker\'s Guide to the Galaxy: The Trilogy of Four - Douglas Adams',
        url: 'https://www.amazon.ca/gp/product/0330492047/ref=ppx_yo_dt_b_asin_title_o04__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Neuromancer - William Gibson',
        url: 'https://www.amazon.ca/Neuromancer-William-Gibson/dp/0441569595/ref=sr_1_1?ie=UTF8&qid=1548623450&sr=8-1&keywords=Neuromancer'
      },
      {
        title: 'The Da Vinci Code - Dan Brown',
        url: 'https://www.amazon.ca/gp/product/0307474275/ref=ppx_yo_dt_b_asin_title_o00__o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'Sam Walton: Made in America - Sam Walton',
        url: 'https://www.amazon.ca/Sam-Walton-Made-America/dp/0553562835/ref=sr_1_1?s=books&ie=UTF8&qid=1548623465&sr=1-1&keywords=' +
          'am+walton+made+in+america'
      },
      {
        title: 'Superintelligence - Nick Bostrom',
        url: 'https://www.amazon.ca/gp/product/0198739834/ref=ppx_yo_dt_b_asin_title_o02__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Structures, Or Why Things Don\'t Fall Down - J. E. Gordon',
        url: 'https://www.amazon.ca/gp/product/0306812835/ref=ppx_yo_dt_b_asin_title_o05__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Being Mortal - Atul Gawande',
        url: 'https://www.amazon.ca/gp/product/0385677006/ref=ppx_od_dt_b_asin_title_o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'Awakenings - Oliver Sacks',
        url: 'https://www.amazon.ca/Awakenings-Oliver-Sacks/dp/0307398153/ref=sr_1_1?s=books&ie=UTF8&qid=1548623488&sr=1-1&keywords=' +
          'Awakenings'
      },
      {
        title: 'The Man Who Mistook His Wife for a Hat - Oliver Sacks',
        url: 'https://www.amazon.ca/Man-Who-Mistook-His-Wife/dp/0684853949/ref=sr_1_1?s=books&ie=UTF8&qid=1548623500&sr=1-1&keywords=' +
          'The+Man+Who+Mistook+His+Wife+for+a+Hat'
      },
      {
        title: 'Every Patient Tells a Story - Lisa Sanders',
        url: 'https://www.amazon.ca/Every-Patient-Tells-Story-Mysteries/dp/0767922476/ref=sr_1_1?s=books&ie=UTF8&qid=1548623519&sr=1-1&' +
          'keywords=Every+Patient+Tells+a+Story'
      },
      {
        title: 'The Checklist Manifesto - Atul Gawande',
        url: 'https://www.amazon.ca/Checklist-Manifesto-How-Things-Right/dp/0312430000/ref=sr_1_1?s=books&ie=UTF8&qid=1548623532&sr=1-1&' +
          'keywords=The+Checklist+Manifesto'
      },
      {
        title: 'When the air hits your brain - Frank Vertosick Jr.',
        url: 'https://www.amazon.ca/When-Air-Hits-Your-Brain/dp/0393330494/ref=sr_1_1?s=books&ie=UTF8&qid=1548623547&sr=1-1&keywords=' +
          'When+the+air+hits+your+brain'
      },
      {
        title: 'The Man with a Shattered World - Aleksandr R. Luria',
        url: 'https://www.amazon.ca/Man-Shattered-World-History-Brain/dp/0674546253/ref=sr_1_1?s=books&ie=UTF8&qid=1548623563&sr=1-1&' +
          'keywords=The+Man+with+a+Shattered+World'
      },
      {
        title: 'Asylums: Essays on the Social Situation of Mental Patients and Other Inmates',
        url: 'https://www.amazon.ca/gp/product/0385000162/ref=ppx_yo_dt_b_asin_title_o00__o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'The Mind of a Mnemonist - Aleksandr R. Luria',
        url: 'https://www.amazon.ca/gp/product/0674576225/ref=ppx_od_dt_b_asin_title_o00_s01?ie=UTF8&psc=1'
      },
      {
        title: 'The People of the Abyss - Jack London',
        url: 'https://www.amazon.ca/gp/product/1612034802/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'The Everything Store: Jeff Bezos and the Age of Amazon - Brad Stone',
        url: 'https://www.amazon.ca/Everything-Store-Jeff-Bezos-Amazon/dp/0316219266/ref=sr_1_1?s=books&ie=UTF8&qid=1548623587&sr=1-1&' +
          'keywords=The+Everything+Store%3A+Jeff+Bezos+and+the+Age+of+Amazon'
      },
      {
        title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future - Ashlee Vance',
        url: 'https://www.amazon.ca/Elon-Musk-SpaceX-Fantastic-Future/dp/0062301233/ref=sr_1_1?s=books&ie=UTF8&qid=1548623601&sr=1-1&' +
          'keywords=Elon+Musk%3A+Tesla'
      },
      {
        title: 'How to Win Friends and Influence People - Dale Carnegie',
        url: 'https://www.amazon.ca/gp/product/0671027034/ref=ppx_yo_dt_b_asin_title_o01__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'How to Stop Worrying and Start Living - Dale Carnegie',
        url: 'https://www.amazon.ca/gp/product/0671035975/ref=ppx_yo_dt_b_asin_title_o01__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'The Upstarts: How Uber, Airbnb, and the Killer Companies of the New Sillicon Valley Are Changing the World',
        url: 'https://www.amazon.ca/gp/product/0316388394/ref=ppx_od_dt_b_asin_title_o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Test-Driven Development - Kent Beck',
        url: 'https://www.amazon.ca/Test-Driven-Development-Kent-Beck/dp/0321146530/ref=sr_1_1?s=books&ie=UTF8&qid=1548623614&sr=1-1&' +
          'keywords=Test-Driven+Development'
      },
      {
        title: 'Production-Ready Microservices - Susan Fowler',
        url: 'https://www.amazon.ca/Production-Ready-Microservices-Standardized-Engineering-Organization/dp/1491965975/ref=sr_1_1?s=' +
          'books&ie=UTF8&qid=1548623628&sr=1-1&keywords=Production-Ready+Microservices'
      },
      {
        title: 'The Google Guys: Inside the Brilliant Minds of Google Founders Larry Page and Sergey Brin - Richard L. Brandt',
        url: 'https://www.amazon.ca/gp/product/1591844126/ref=ppx_yo_dt_b_asin_title_o07__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Nineteen Eighty Four - George Orwell',
        url: 'https://www.amazon.ca/gp/product/0141036141/ref=ppx_yo_dt_b_asin_title_o02__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'Origin: A Novel - Dan Brown',
        url: 'https://www.amazon.ca/Origin-Novel-Dan-Brown/dp/0385514239/ref=pd_cart_vw_crc_1_1/136-2292797-2920311?_encoding=UTF8&' +
          'pd_rd_i=0385514239&pd_rd_r=0f4ac891-c6eb-40db-9fc9-46d89ca4dfef&pd_rd_w=UegSU&pd_rd_wg=57A3K&pf_rd_p=76579a91-731a-4d79-' +
          'b72-e7f6ddf1d114&pf_rd_r=PMHG5GK0M1JS1A42SRHZ&psc=1&refRID=PMHG5GK0M1JS1A42SRHZ'
      },
      {
        title: 'Accessory to Water: The Unspoken Alliance Between Astrophysics and the Military',
        url: 'https://www.amazon.ca/gp/product/0393064441/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'A Brief History of Time',
        url: 'https://www.amazon.ca/gp/product/0553380168/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1'
      },
      {
        title: 'All of Statistics: A Concise Course in Statistical Inference',
        url: 'https://www.amazon.ca/gp/product/0387402721/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1'
      },
    ];
  }

  ngOnInit() {
    this.cols = this.getBreakpoint();
  }

  onResize(event: any): void {
    this.cols = this.getBreakpoint();
  }

  private getBreakpoint(): number {
    const width = window.innerWidth;
    if (width < ONE_COLUMN_UPPER_LIMIT) {
      return 1;
    } else if (width < TWO_COLUMNS_UPPER_LIMIT) {
      return 2;
    } else {
      return 3;
    }
  }
}
