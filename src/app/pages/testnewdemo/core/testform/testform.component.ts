/**
 * Created by: deepali arvind
 * Date: 16/08/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'testform',
	templateUrl: 'testform.component.html'
})
export class TestformComponent implements OnInit
{
	testformModel:TestformModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testformModel=new TestformModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class TestformModel
{
	 firstName: string; 
	 lastName: string; 
}
