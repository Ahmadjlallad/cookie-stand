// Stores the min / max hourly customers, and the average cookies per customer, in object properties...done
// Uses a method of that object to generate a random number of customers per hour.Objects / Math / random...done
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals;
// Location	(Min / Cust)	(Max / Cust)	(Avg Cookie / Sale)
// Seattle	    23	             65	                6.3
// Tokyo	    3	             24	                1.2
// Dubai	    11	             38	                3.7
// Paris	    20	             38	                2.3
// Lima	        2	             16	                4.6
("use strict");

// Seattle_sells ----------------------------------------------->>>>>

const Seattle_sells = {
  getname: "seattle",
  avecust: 6.3,
  mincust: 23,
  maxcust: 65,
  working_hours: 14,
  random_number_cust: function () {
    return Math.floor(
      Math.random() * (this.maxcust - this.mincust + 1) + this.mincust
    );
  },
  amounts_of_cookies_purchased: function () {
    return Math.round(this.random_number_cust() * this.avecust);
  },
  arrayOf_results_array: [],
  arrayOf: function () {
    let gg = 0;
    for (let i = 0; i < this.working_hours; i++) {
      this.arrayOf_results_array[i] = this.amounts_of_cookies_purchased();
      gg += this.amounts_of_cookies_purchased();
    }
    console.log(gg);
    console.log(this.arrayOf_results_array);

    this.arrayOf_results_array.push(gg);
    return this.arrayOf_results_array;
  },
};

// Tokyo_sells -------------------------------------------------->>>>>

const Tokyo_sells = {
  getname: "Tokyo",
  avecust: 1.2,
  mincust: 3,
  maxcust: 24,
  working_hours: 14,
  random_number_cust: function () {
    return Math.floor(
      Math.random() * (this.maxcust - this.mincust + 1) + this.mincust
    );
  },
  amounts_of_cookies_purchased: function () {
    return Math.round(this.random_number_cust() * this.avecust);
  },
  arrayOf_results_array: [],
  arrayOf: function () {
    let gg = 0;
    for (let i = 0; i < this.working_hours; i++) {
      this.arrayOf_results_array[i] = this.amounts_of_cookies_purchased();
      gg += this.amounts_of_cookies_purchased();
    }
    console.log(gg);
    console.log(this.arrayOf_results_array);

    this.arrayOf_results_array.push(gg);
    return this.arrayOf_results_array;
  },
};

// Dubai_sells --------------------------------------------------->>>>>

const Dubai_sells = {
  getname: "Dubai",
  avecust: 3.7,
  mincust: 11,
  maxcust: 38,
  working_hours: 14,
  random_number_cust: function () {
    return Math.floor(
      Math.random() * (this.maxcust - this.mincust + 1) + this.mincust
    );
  },
  amounts_of_cookies_purchased: function () {
    return Math.round(this.random_number_cust() * this.avecust);
  },
  arrayOf_results_array: [],
  arrayOf: function () {
    let gg = 0;
    for (let i = 0; i < this.working_hours; i++) {
      this.arrayOf_results_array[i] = this.amounts_of_cookies_purchased();
      gg += this.amounts_of_cookies_purchased();
    }
    console.log(gg);
    console.log(this.arrayOf_results_array);

    this.arrayOf_results_array.push(gg);
    return this.arrayOf_results_array;
  },
};

// Paris_sells --------------------------------------------------->>>>>

const Paris_sells = {
  getname: "Paris",
  avecust: 2.3,
  mincust: 20,
  maxcust: 38,
  working_hours: 14,
  random_number_cust: function () {
    return Math.floor(
      Math.random() * (this.maxcust - this.mincust + 1) + this.mincust
    );
  },
  amounts_of_cookies_purchased: function () {
    return Math.round(this.random_number_cust() * this.avecust);
  },
  arrayOf_results_array: [],
  arrayOf: function () {
    let gg = 0;
    for (let i = 0; i < this.working_hours; i++) {
      this.arrayOf_results_array[i] = this.amounts_of_cookies_purchased();
      gg += this.amounts_of_cookies_purchased();
    }
    console.log(gg);
    console.log(this.arrayOf_results_array);

    this.arrayOf_results_array.push(gg);
    return this.arrayOf_results_array;
  },
};

// Lima_sells ---------------------------------------------------->>>>>

const Lima_sells = {
  getname: "Lima",
  avecust: 4.6,
  mincust: 2,
  maxcust: 16,
  working_hours: 14,
  random_number_cust: function () {
    return Math.floor(
      Math.random() * (this.maxcust - this.mincust + 1) + this.mincust
    );
  },
  amounts_of_cookies_purchased: function () {
    return Math.round(this.random_number_cust() * this.avecust);
  },
  arrayOf_results_array: [],
  arrayOf: function () {
    let gg = 0;
    for (let i = 0; i < this.working_hours; i++) {
      this.arrayOf_results_array[i] = this.amounts_of_cookies_purchased();
      gg += this.amounts_of_cookies_purchased();
    }
    console.log(gg);
    console.log(this.arrayOf_results_array);

    this.arrayOf_results_array.push(gg);
    return this.arrayOf_results_array;
  },
};

// html_injector function ----------------------------------------->>>>>

function html_injector(arrName, getname) {
  let Parent = document.getElementById("calcu");
  let paragraph = document.createElement("p");
  Parent.appendChild(paragraph);
  paragraph.textContent = `${getname} sells`;
  function hours(start_from) {
    if (start_from < 24) {
      if (start_from > 12) {
        return `${start_from - 12} Pm`;
      } else {
        return `${start_from} Am`;
      }
    }
  }
  let child = document.createElement("ul");
  child.setAttribute("class", `${getname}`);
  Parent.appendChild(child);
  for (let i = 0; i < arrName.length; i++) {
    if (arrName.length === i + 1) {
      let uscreat = child.appendChild(document.createElement("li"));
      uscreat.textContent = `Total : ${arrName[i]} cookies`;
      uscreat.setAttribute(`class`, `li${getname}${i}`);
      break;
    }
    let g = 6;
    let uscreat = child.appendChild(document.createElement("li"));
    uscreat.setAttribute(`class`, `li${getname}${i}`);
    uscreat.textContent = `${hours([(g += i)])} : ${arrName[i]} cookies`;
  }
  let linebreak = document.createElement("br");
  Parent.appendChild(linebreak);
}
let aRR = [Seattle_sells, Tokyo_sells, Dubai_sells, Paris_sells, Lima_sells]; // the goal is to make another object or function that get names of all objects and put it in the array but this is enough for now
for (let i = 0; i < aRR.length; i++) {
  html_injector(aRR[i].arrayOf(), aRR[i].getname);
}
