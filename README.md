Here, 
	- employees is module 
	- employee is component of eployees module

For create modules :- 
		- ng g module modules/employees --module=app
		
Create Component in specific module :- 
		- ng g c modules/employees/employee --module=modules/employees
		

Install json server globally in a system  :- 

		- npm install json-server -g

RUN Json Server :-

		- json-server --watch db.json 

Create service in modules and shared folder :- 

		- ng g s modules/shared/employee
		
		
Different type of Data Binding

1. Interpolation( ex:-  {{  }} )
2. Property Binding( ex:-  [  ] )
3. Event Binding( ex:-  (  ) )
4. Two Way Data Binding( ex:-  [{  }] )
		
