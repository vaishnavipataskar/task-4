import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit{
  myFormObj : FormGroup | any;

  ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];

  constructor(){}

  ngOnInit(): void {  
    this.myFormObj = new FormGroup({
      onedata : new FormControl(null, Validators.required),
      twodata : new FormControl(null, Validators.required)
    })



    this.ctx = document.getElementById('myChart');

    this.config = {
      type: "pie",
      options : {
      },
      data : {
        labels : this.chartDatalabels,
        datasets : [{
          label : 'chart data',
          data : this.chartData,
        }]
      }
    }
   
  
  
 
    this.chartDatalabels.push('box 1');
    this.chartDatalabels.push('box 2');


  }

    onSubmit(){
      console.log(this.myFormObj);
      let data1 = this.myFormObj.value.onedata;             
      let data2 = this.myFormObj.value.twodata;
      let total = 100;

      if(data1 && !data2){
        data2 = total-data1;
        this.myFormObj.patchValue({
          twodata : total-data1
        })
      }else if(data2 && !data1){
        data1 = total-data2;
        this.myFormObj.patchValue({
          onedata : total-data2
        })
      }else if(data1 + data2 < total){
        throw alert ('please enter valid range >> sum of two numbers should be 100')
      }else if(data1 + data2 >total){
        throw alert('please add valid range >> sum of two numbers should be 100');
      }

    this.chartData.push(data1);
    this.chartData.push(data2);
    const myChart = new Chart(this.ctx, this.config);
    }

}



