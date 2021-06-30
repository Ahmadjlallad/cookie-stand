/*
----------------------> Lab 06
Stores the min / max hourly customers, and the average cookies per customer, in object properties...done
Uses a method of that object to generate a random number of customers per hour.Objects / Math / random...done
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
Store the results for each location in a separate array… perhaps as a property of the object representing that location
Display the values of each array as unordered lists in the browser
Calculating the sum of these hourly totals;
Location	(Min / Cust)	(Max / Cust)	(Avg Cookie / Sale)
Seattle	    23	             65	                6.3
Tokyo	    3	             24	                1.2
Dubai	    11	             38	                3.7
Paris	    20	             38	                2.3
Lima	        2	             16	                4.6
*/
/*
----------------------> Lab 07
1. Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

2. Replace all of your object literals for the salmon cookie stand with a single constructor function that,
when called with the ‘new’ keyword, it creates a new instance.

3. Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

4. Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.
process of thanking 
1. create object -> 1. send max, min & avg to the RandomFunction 2. modify the array responsible for creat the AvgCustCalcu
2. constructor for first one 
3. test it
*/
("use strict");

// ------------------------------------------------------------------------------------------> DOM Declaration

let main = document.getElementsByTagName("main");
let _section = document.getElementById("calcu");
let _table = document.createElement("table");
let _thead = document.createElement("thead");
let _tbody = document.createElement("tbody");
let _tfoot = document.createElement("tfoot");
_section.appendChild(_table);
_table.appendChild(_thead);
_table.appendChild(_tfoot);
_table.appendChild(_tbody);

// ------------------------------------------------------------------------------------------> Time function

function hours(start_from) {
  if (start_from < 24) {
    if (start_from > 12) {
      return `${start_from - 12} Pm`;
    } else {
      return `${start_from} Am`;
    }
  }
}

// ------------------------------------------------------------------------------------------> constructor

let storedCreatedObj = [];
let SalmonCookie = function (Name, AvgCust, Mincust, MaxCust, working_hours) {
  this.Name = Name;
  this.AvgCust = AvgCust;
  this.Mincust = Mincust;
  this.MaxCust = MaxCust;
  this.working_hours = working_hours;

  storedCreatedObj.push(this);
  this.calculatorFunction();
};

// ------------------------------------------------------------------------------------------> sales calculator prototype function

SalmonCookie.prototype.calculatorFunction = function () {
  this.arrayOf_results_array = [];
  this.gg = 0;
  for (let i = 0; i < this.working_hours; i++) {
    this.arrayOf_results_array[i] = Math.round(
      (Math.random() * (this.MaxCust - this.Mincust + 1) + this.Mincust) *
        this.AvgCust
    );
    this.gg += this.arrayOf_results_array[i];
    this.arrayOf_results_array.push(this.gg);
  }

  return this.arrayOf_results_array;
};

// ------------------------------------------------------------------------------------------> hourlycalculator sales calculator prototype function

SalmonCookie.prototype.hourlycalculator = function () {
  this.dummy = [];
  this.big = 0;
  for (let i = 0; i < this.working_hours; i++) {
    this.dummys = 0;
    for (let j = 0; j < storedCreatedObj.length; j++) {
      // console.log(this.dummy);
      this.dummys += storedCreatedObj[j].arrayOf_results_array[i];
    }
    this.big += this.dummys;
    this.dummy.push(this.dummys);
  }
  // return this.dummy;
};

// ------------------------------------------------------------------------------------------> instances declaration

let Seattle = new SalmonCookie("Seattle", 6.3, 23, 65, 14);
let Tokyo = new SalmonCookie("Tokyo", 1.2, 3, 24, 14);
let Dubai = new SalmonCookie("Dubai", 3.7, 11, 38, 14);
let Paris = new SalmonCookie("Paris", 2.3, 20, 38, 14);
let Lima = new SalmonCookie("Lima", 4.6, 2, 16, 14);

// ------------------------------------------------------------------------------------------> render_for_head prototype function

SalmonCookie.prototype.render_for_head = function () {
  let _tr = document.createElement("tr");
  _thead.appendChild(_tr);
  let _th1 = document.createElement("th");
  _tr.appendChild(_th1);
  _th1.textContent = ``;
  let time = 7;
  for (let i = 0; i < this.working_hours; i++) {
    let _th = document.createElement("th");
    _tr.appendChild(_th);
    _th.textContent = `${hours(time++)}`;
  }
  let _th2 = document.createElement("th");
  _tr.appendChild(_th2);
  _th2.textContent = `Daily Location Total`;
};

// ------------------------------------------------------------------------------------------> render_for_foot prototype function

SalmonCookie.prototype.render_for_foot = function () {
  let _trfoot = document.createElement("tr");

  _tfoot.appendChild(_trfoot);

  let _thfoot1 = document.createElement("th");
  _trfoot.appendChild(_thfoot1);
  _thfoot1.textContent = `Total`;
  this.hourlycalculator();
  for (let i = 0; i < this.working_hours; i++) {
    let _th = document.createElement("th");
    _trfoot.appendChild(_th);
    _th.textContent = `${this.dummy[i]}`;
  }
  let _thfoot2 = document.createElement("th");
  _trfoot.appendChild(_thfoot2);
  _thfoot2.textContent = `Total EL TOTAL ${this.big}`;
};

// ------------------------------------------------------------------------------------------> render_for_body prototype function

SalmonCookie.prototype.render_for_body = function () {
  let _trbody = document.createElement("tr");
  _tbody.appendChild(_trbody);
  let _thName = document.createElement("th");
  _trbody.appendChild(_thName);
  _thName.textContent = `${this.Name}`;
  for (let i = 0; i < this.arrayOf_results_array.length; i++) {
    let _td_for_results = document.createElement("td");
    _trbody.appendChild(_td_for_results);
    _td_for_results.textContent = `${this.arrayOf_results_array[i]}`;
  }
};

// ------------------------------------------------------------------------------------------> addEventListener prototype function

const _form = document.getElementById("sales_form");
_form.addEventListener("submit", _form_Huddler);

function _form_Huddler(event) {
  event.preventDefault();

  const _location_Name = event.target.Name.value;
  const _min_form = event.target.min.value;
  const _max_form = event.target.max.value;
  const _avg_form = event.target.avg.value;
  console.log(_location_Name);
  console.log(_min_form);
  console.log(_max_form);
  console.log(_avg_form);
  const _input_form = new SalmonCookie(
    _location_Name,
    _avg_form,
    _min_form,
    _max_form,
    14
  );

  // remove footer then cull it aging

  _table.removeChild(_tfoot);
  _tfoot = document.createElement("tfoot");
  _table.appendChild(_tfoot);
  _input_form.render_for_body();
  storedCreatedObj[0].render_for_foot();
}

// ------------------------------------------------------------------------------------------> function stand alone function to call render functions

function render() {
  for (let i = 0; i < storedCreatedObj.length; i++) {
    storedCreatedObj[i].render_for_body();
  }
  storedCreatedObj[0].render_for_head();
  storedCreatedObj[0].render_for_foot();
}

render();
