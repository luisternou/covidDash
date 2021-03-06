const https = require('https');
const request = require('request');
const got = require('got');
const csv = require("async-csv")
const fs = require('fs')
module.exports = {
 

  getEasternCape: async (req, res) => {
     try {
      
      const TIME_API_URL = 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg';



       
    
    function getSummary(url)
      {
        return new Promise((resolve) =>
        {
          https.get(url , response =>
          {
            let data = "";
            response.on('data', chunk => {
            data += chunk;
          });
          response.on('end', () => 
            {
              let summary = JSON.parse(data);
              resolve(summary);
            })

          }).end();
        });


      }      

function amountOfKeys(obj)
{
  return Object.keys(obj).length;
}


function getDistrictLatest(district, province_cases)
{
    
  let all_values = province_cases[district];
console.log(district);

    console.log(all_values);
  let latest_value = all_values[amountOfKeys(all_values)-1]

  return latest_value;
}


 
  (async() => {


let eastern_cape_district_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/districts/ec/ec.json').toString();
eastern_cape_district_cases = JSON.parse(eastern_cape_district_cases_string)

let latest_date = getDistrictLatest('date', eastern_cape_district_cases);

let alfred_nzo_cases = getDistrictLatest('alfred_nzo', eastern_cape_district_cases);

let amathole_cases = getDistrictLatest('amathole', eastern_cape_district_cases);

let buffalo_city_cases = getDistrictLatest('buffalo_city', eastern_cape_district_cases);

let chris_hani_cases = getDistrictLatest('chris_hani', eastern_cape_district_cases);

let joe_gqabi_cases = getDistrictLatest('joe_gqabi', eastern_cape_district_cases);

let nelson_mandela_cases = getDistrictLatest('nelson_mandela', eastern_cape_district_cases);

let or_thambo_cases = getDistrictLatest('or_tambo', eastern_cape_district_cases);

let sarah_baartman_cases = getDistrictLatest('sarah_baartman', eastern_cape_district_cases);

let unallocated_cases = getDistrictLatest('unallocated', eastern_cape_district_cases);

let district_names = ['Alfred Nzo', 'Amathole', 'Buffalo City', 'Chris Hani', 'Joe Gqabi', 'Nelson Mandela Bay', 'O R Thambo', 'Sarah Baartman', 'Unallocated']
let district_cases = [alfred_nzo_cases, amathole_cases, buffalo_city_cases, chris_hani_cases, joe_gqabi_cases, nelson_mandela_cases, or_thambo_cases, sarah_baartman_cases,  unallocated_cases];
let eastern_cape_district_amount = 9;

const district_data_object = district_names.map((district_names, i) => ({ name: district_names, value: district_cases[i] }));


let confirmed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_confirmed.json').toString();
let confirmed_cases_json = JSON.parse(confirmed_cases_string);



let total_cases = confirmed_cases_json['total_cases'];
total_cases = total_cases[0]


let closed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_closed.json').toString();
let closed_cases_json = JSON.parse(closed_cases_string);


let recoveries = closed_cases_json['recoveries'];


recoveries = recoveries[0]

let deaths = closed_cases_json['deaths'];
deaths = deaths[0]

let active = total_cases - recoveries - deaths

      let time_response = await getSummary(TIME_API_URL);
      let current_time = time_response.datetime;
      var date_time = new Date(current_time);
      let time = date_time.toLocaleTimeString('it-IT');

      let short_province = 'ec'

      let year = new Date().getFullYear()
      let province_name = 'Eastern Cape'
       let title = "SA Covid-19 | " + province_name;
      res.render('province', 
       {
        indexCSS: true,
        time,
        year,
        province_name,
        district_data_object,
        total_cases,
        recoveries,
        deaths,
        active,
        short_province,
        latest_date,
        title
    
    
        });
      })();

    } catch (error) 
    {
      return console.log(error);
    } 
//  
  },
  getFreeState: async (req, res) => {
     try {
      
      const TIME_API_URL = 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg';



       
    
    function getSummary(url)
      {
        return new Promise((resolve) =>
        {
          https.get(url , response =>
          {
            let data = "";
            response.on('data', chunk => {
            data += chunk;
          });
          response.on('end', () => 
            {
              let summary = JSON.parse(data);
              resolve(summary);
            })

          }).end();
        });


      }      

function amountOfKeys(obj)
{
  return Object.keys(obj).length;
}


function getDistrictLatest(district, province_cases)
{
  let all_values = province_cases[district];
  let latest_value = all_values[amountOfKeys(all_values)-1]

  return latest_value;
}


 
  (async() => {


let gauteng_district_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/districts/gp/gp.json').toString();
gauteng_district_cases = JSON.parse(gauteng_district_cases_string)

let latest_date = getDistrictLatest('date', gauteng_district_cases);

let johannesburg_cases = getDistrictLatest('johannesburg', gauteng_district_cases);

let ekrhuleni_cases = getDistrictLatest('ekrhuleni', gauteng_district_cases);

let sedibeng_cases = getDistrictLatest('sedibeng', gauteng_district_cases);

let tshwane_cases = getDistrictLatest('tshwane', gauteng_district_cases);

let westrand_cases = getDistrictLatest('westrand', gauteng_district_cases);

let unallocated_cases = getDistrictLatest('unallocated', gauteng_district_cases);

let district_names = ['Johannesburg', 'Ekrhuleni', 'Sedibeng', 'Tshwane', 'Westrand', 'Unallocated']
let district_cases = [johannesburg_cases, ekrhuleni_cases, sedibeng_cases, tshwane_cases, westrand_cases, unallocated_cases];
let gauteng_district_amount = 6;

const district_data_object = district_names.map((district_names, i) => ({ name: district_names, value: district_cases[i] }));


let confirmed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_confirmed.json').toString();
let confirmed_cases_json = JSON.parse(confirmed_cases_string);



let total_cases = confirmed_cases_json['total_cases'];
total_cases = total_cases[1]


let closed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_closed.json').toString();
let closed_cases_json = JSON.parse(closed_cases_string);


let recoveries = closed_cases_json['recoveries'];


recoveries = recoveries[1]

let deaths = closed_cases_json['deaths'];
deaths = deaths[1]

let active = total_cases - recoveries - deaths

      let time_response = await getSummary(TIME_API_URL);
      let current_time = time_response.datetime;
      var date_time = new Date(current_time);
      let time = date_time.toLocaleTimeString('it-IT');

      let short_province = 'fs'

      let year = new Date().getFullYear()
      let province_name = 'Free State'
       let title = "SA Covid-19 | " + province_name;
      res.render('province', 
       {
        indexCSS: true,
        time,
        year,
        province_name,
        district_data_object,
        total_cases,
        recoveries,
        deaths,
        active,
        short_province,
        latest_date,
        title
    
    
        });
      })();

    } catch (error) 
    {
      return console.log(error);
    } 
//  
  },
  getGauteng: async (req, res) => {
    try {
      
      const TIME_API_URL = 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg';



       
    
    function getSummary(url)
      {
        return new Promise((resolve) =>
        {
          https.get(url , response =>
          {
            let data = "";
            response.on('data', chunk => {
            data += chunk;
          });
          response.on('end', () => 
            {
              let summary = JSON.parse(data);
              resolve(summary);
            })

          }).end();
        });


      }      

function amountOfKeys(obj)
{
  return Object.keys(obj).length;
}


function getDistrictLatest(district, province_cases)
{
  let all_values = province_cases[district];
  let latest_value = all_values[amountOfKeys(all_values)-1]

  return latest_value;
}


 
  (async() => {


let gauteng_district_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/districts/gp/gp.json').toString();
gauteng_district_cases = JSON.parse(gauteng_district_cases_string)


let latest_date = getDistrictLatest('date', gauteng_district_cases);

let johannesburg_cases = getDistrictLatest('johannesburg', gauteng_district_cases);

let ekrhuleni_cases = getDistrictLatest('ekrhuleni', gauteng_district_cases);

let sedibeng_cases = getDistrictLatest('sedibeng', gauteng_district_cases);

let tshwane_cases = getDistrictLatest('tshwane', gauteng_district_cases);

let westrand_cases = getDistrictLatest('westrand', gauteng_district_cases);

let unallocated_cases = getDistrictLatest('unallocated', gauteng_district_cases);

let district_names = ['Johannesburg', 'Ekrhuleni', 'Sedibeng', 'Tshwane', 'Westrand', 'Unallocated']
let district_cases = [johannesburg_cases, ekrhuleni_cases, sedibeng_cases, tshwane_cases, westrand_cases, unallocated_cases];
let gauteng_district_amount = 6;

const district_data_object = district_names.map((district_names, i) => ({ name: district_names, value: district_cases[i] }));


let confirmed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_confirmed.json').toString();
let confirmed_cases_json = JSON.parse(confirmed_cases_string);



let total_cases = confirmed_cases_json['total_cases'];
total_cases = total_cases[2]


let closed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_closed.json').toString();
let closed_cases_json = JSON.parse(closed_cases_string);


let recoveries = closed_cases_json['recoveries'];


recoveries = recoveries[2]

let deaths = closed_cases_json['deaths'];
deaths = deaths[2]

let active = total_cases - recoveries - deaths

      let time_response = await getSummary(TIME_API_URL);
      let current_time = time_response.datetime;
      var date_time = new Date(current_time);
      let time = date_time.toLocaleTimeString('it-IT');

      let short_province = 'gp'

      let year = new Date().getFullYear()
      let province_name = 'Gauteng'
       let title = "SA Covid-19 | " + province_name;
      res.render('province', 
       {
        indexCSS: true,
        time,
        year,
        province_name,
        district_data_object,
        total_cases,
        recoveries,
        deaths,
        active,
        short_province,
        latest_date,
        title
    
    
        });
      })();

    } catch (error) 
    {
      return console.log(error);
    } 
//  
  },
  getKwaZuluNatal: async (req, res) => {
     try {
      
      const TIME_API_URL = 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg';



       
    
    function getSummary(url)
      {
        return new Promise((resolve) =>
        {
          https.get(url , response =>
          {
            let data = "";
            response.on('data', chunk => {
            data += chunk;
          });
          response.on('end', () => 
            {
              let summary = JSON.parse(data);
              resolve(summary);
            })

          }).end();
        });


      }      

function amountOfKeys(obj)
{
  return Object.keys(obj).length;
}


function getDistrictLatest(district, province_cases)
{
  let all_values = province_cases[district];
  let latest_value = all_values[amountOfKeys(all_values)-1]

  return latest_value;
}


 
  (async() => {


let gauteng_district_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/districts/gp/gp.json').toString();
gauteng_district_cases = JSON.parse(gauteng_district_cases_string)

let latest_date = getDistrictLatest('date', gauteng_district_cases);

let johannesburg_cases = getDistrictLatest('johannesburg', gauteng_district_cases);

let ekrhuleni_cases = getDistrictLatest('ekrhuleni', gauteng_district_cases);

let sedibeng_cases = getDistrictLatest('sedibeng', gauteng_district_cases);

let tshwane_cases = getDistrictLatest('tshwane', gauteng_district_cases);

let westrand_cases = getDistrictLatest('westrand', gauteng_district_cases);

let unallocated_cases = getDistrictLatest('unallocated', gauteng_district_cases);

let district_names = ['Johannesburg', 'Ekrhuleni', 'Sedibeng', 'Tshwane', 'Westrand', 'Unallocated']
let district_cases = [johannesburg_cases, ekrhuleni_cases, sedibeng_cases, tshwane_cases, westrand_cases, unallocated_cases];
let gauteng_district_amount = 6;

const district_data_object = district_names.map((district_names, i) => ({ name: district_names, value: district_cases[i] }));


let confirmed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_confirmed.json').toString();
let confirmed_cases_json = JSON.parse(confirmed_cases_string);



let total_cases = confirmed_cases_json['total_cases'];
total_cases = total_cases[3]


let closed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_closed.json').toString();
let closed_cases_json = JSON.parse(closed_cases_string);


let recoveries = closed_cases_json['recoveries'];


recoveries = recoveries[3]

let deaths = closed_cases_json['deaths'];
deaths = deaths[3]

let active = total_cases - recoveries - deaths

      let time_response = await getSummary(TIME_API_URL);
      let current_time = time_response.datetime;
      var date_time = new Date(current_time);
      let time = date_time.toLocaleTimeString('it-IT');

      let short_province = 'zn'

      let year = new Date().getFullYear()
      let province_name = 'KwaZulu Natal'
       let title = "SA Covid-19 | " + province_name;
      res.render('province', 
       {
        indexCSS: true,
        time,
        year,
        province_name,
        district_data_object,
        total_cases,
        recoveries,
        deaths,
        active,
        short_province,
        latest_date,
        title
    
    
        });
      })();

    } catch (error) 
    {
      return console.log(error);
    } 
//  
  },
  getLimpopo: async (req, res) => {
     try {
      
      const TIME_API_URL = 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg';



       
    
    function getSummary(url)
      {
        return new Promise((resolve) =>
        {
          https.get(url , response =>
          {
            let data = "";
            response.on('data', chunk => {
            data += chunk;
          });
          response.on('end', () => 
            {
              let summary = JSON.parse(data);
              resolve(summary);
            })

          }).end();
        });


      }      

function amountOfKeys(obj)
{
  return Object.keys(obj).length;
}


function getDistrictLatest(district, province_cases)
{
  let all_values = province_cases[district];
  let latest_value = all_values[amountOfKeys(all_values)-1]

  return latest_value;
}


 
  (async() => {


let gauteng_district_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/districts/gp/gp.json').toString();
gauteng_district_cases = JSON.parse(gauteng_district_cases_string)

let latest_date = getDistrictLatest('date', gauteng_district_cases);

let johannesburg_cases = getDistrictLatest('johannesburg', gauteng_district_cases);

let ekrhuleni_cases = getDistrictLatest('ekrhuleni', gauteng_district_cases);

let sedibeng_cases = getDistrictLatest('sedibeng', gauteng_district_cases);

let tshwane_cases = getDistrictLatest('tshwane', gauteng_district_cases);

let westrand_cases = getDistrictLatest('westrand', gauteng_district_cases);

let unallocated_cases = getDistrictLatest('unallocated', gauteng_district_cases);

let district_names = ['Johannesburg', 'Ekrhuleni', 'Sedibeng', 'Tshwane', 'Westrand', 'Unallocated']
let district_cases = [johannesburg_cases, ekrhuleni_cases, sedibeng_cases, tshwane_cases, westrand_cases, unallocated_cases];
let gauteng_district_amount = 6;

const district_data_object = district_names.map((district_names, i) => ({ name: district_names, value: district_cases[i] }));


let confirmed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_confirmed.json').toString();
let confirmed_cases_json = JSON.parse(confirmed_cases_string);



let total_cases = confirmed_cases_json['total_cases'];
total_cases = total_cases[4]


let closed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_closed.json').toString();
let closed_cases_json = JSON.parse(closed_cases_string);


let recoveries = closed_cases_json['recoveries'];


recoveries = recoveries[4]

let deaths = closed_cases_json['deaths'];
deaths = deaths[4]

let active = total_cases - recoveries - deaths

      let time_response = await getSummary(TIME_API_URL);
      let current_time = time_response.datetime;
      var date_time = new Date(current_time);
      let time = date_time.toLocaleTimeString('it-IT');

      let short_province = 'lp'

      let year = new Date().getFullYear()
      let province_name = 'Limpopo'
       let title = "SA Covid-19 | " + province_name;
      res.render('province', 
       {
        indexCSS: true,
        time,
        year,
        province_name,
        district_data_object,
        total_cases,
        recoveries,
        deaths,
        active,
        short_province,
        latest_date,
        title
    
    
        });
      })();

    } catch (error) 
    {
      return console.log(error);
    } 
//  
  },
  getMpumalanga: async (req, res) => {
     try {
      
      const TIME_API_URL = 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg';



       
    
    function getSummary(url)
      {
        return new Promise((resolve) =>
        {
          https.get(url , response =>
          {
            let data = "";
            response.on('data', chunk => {
            data += chunk;
          });
          response.on('end', () => 
            {
              let summary = JSON.parse(data);
              resolve(summary);
            })

          }).end();
        });


      }      

function amountOfKeys(obj)
{
  return Object.keys(obj).length;
}


function getDistrictLatest(district, province_cases)
{
  let all_values = province_cases[district];
  let latest_value = all_values[amountOfKeys(all_values)-1]

  return latest_value;
}


 
  (async() => {


let gauteng_district_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/districts/gp/gp.json').toString();
gauteng_district_cases = JSON.parse(gauteng_district_cases_string)

let latest_date = getDistrictLatest('date', gauteng_district_cases);

let johannesburg_cases = getDistrictLatest('johannesburg', gauteng_district_cases);

let ekrhuleni_cases = getDistrictLatest('ekrhuleni', gauteng_district_cases);

let sedibeng_cases = getDistrictLatest('sedibeng', gauteng_district_cases);

let tshwane_cases = getDistrictLatest('tshwane', gauteng_district_cases);

let westrand_cases = getDistrictLatest('westrand', gauteng_district_cases);

let unallocated_cases = getDistrictLatest('unallocated', gauteng_district_cases);

let district_names = ['Johannesburg', 'Ekrhuleni', 'Sedibeng', 'Tshwane', 'Westrand', 'Unallocated']
let district_cases = [johannesburg_cases, ekrhuleni_cases, sedibeng_cases, tshwane_cases, westrand_cases, unallocated_cases];
let gauteng_district_amount = 6;

const district_data_object = district_names.map((district_names, i) => ({ name: district_names, value: district_cases[i] }));


let confirmed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_confirmed.json').toString();
let confirmed_cases_json = JSON.parse(confirmed_cases_string);



let total_cases = confirmed_cases_json['total_cases'];
total_cases = total_cases[6]


let closed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_closed.json').toString();
let closed_cases_json = JSON.parse(closed_cases_string);


let recoveries = closed_cases_json['recoveries'];


recoveries = recoveries[5]

let deaths = closed_cases_json['deaths'];
deaths = deaths[5]

let active = total_cases - recoveries - deaths

      let time_response = await getSummary(TIME_API_URL);
      let current_time = time_response.datetime;
      var date_time = new Date(current_time);
      let time = date_time.toLocaleTimeString('it-IT');

      let short_province = 'mp'

      let year = new Date().getFullYear()
      let province_name = 'Mpumalanga'
       let title = "SA Covid-19 | " + province_name;
      res.render('province', 
       {
        indexCSS: true,
        time,
        year,
        province_name,
        district_data_object,
        total_cases,
        recoveries,
        deaths,
        active,
        short_province,
        latest_date,
        title
    
    
        });
      })();

    } catch (error) 
    {
      return console.log(error);
    } 
//  
  },
  getNorthWest: async (req, res) => {
     try {
      
      const TIME_API_URL = 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg';



       
    
    function getSummary(url)
      {
        return new Promise((resolve) =>
        {
          https.get(url , response =>
          {
            let data = "";
            response.on('data', chunk => {
            data += chunk;
          });
          response.on('end', () => 
            {
              let summary = JSON.parse(data);
              resolve(summary);
            })

          }).end();
        });


      }      

function amountOfKeys(obj)
{
  return Object.keys(obj).length;
}


function getDistrictLatest(district, province_cases)
{
  let all_values = province_cases[district];
  let latest_value = all_values[amountOfKeys(all_values)-1]

  return latest_value;
}


 
  (async() => {


let gauteng_district_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/districts/gp/gp.json').toString();
gauteng_district_cases = JSON.parse(gauteng_district_cases_string)

let latest_date = getDistrictLatest('date', gauteng_district_cases);

let johannesburg_cases = getDistrictLatest('johannesburg', gauteng_district_cases);

let ekrhuleni_cases = getDistrictLatest('ekrhuleni', gauteng_district_cases);

let sedibeng_cases = getDistrictLatest('sedibeng', gauteng_district_cases);

let tshwane_cases = getDistrictLatest('tshwane', gauteng_district_cases);

let westrand_cases = getDistrictLatest('westrand', gauteng_district_cases);

let unallocated_cases = getDistrictLatest('unallocated', gauteng_district_cases);

let district_names = ['Johannesburg', 'Ekrhuleni', 'Sedibeng', 'Tshwane', 'Westrand', 'Unallocated']
let district_cases = [johannesburg_cases, ekrhuleni_cases, sedibeng_cases, tshwane_cases, westrand_cases, unallocated_cases];
let gauteng_district_amount = 6;

const district_data_object = district_names.map((district_names, i) => ({ name: district_names, value: district_cases[i] }));


let confirmed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_confirmed.json').toString();
let confirmed_cases_json = JSON.parse(confirmed_cases_string);



let total_cases = confirmed_cases_json['total_cases'];
total_cases = total_cases[6]


let closed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_closed.json').toString();
let closed_cases_json = JSON.parse(closed_cases_string);


let recoveries = closed_cases_json['recoveries'];


recoveries = recoveries[6]

let deaths = closed_cases_json['deaths'];
deaths = deaths[6]

let active = total_cases - recoveries - deaths

      let time_response = await getSummary(TIME_API_URL);
      let current_time = time_response.datetime;
      var date_time = new Date(current_time);
      let time = date_time.toLocaleTimeString('it-IT');

      let short_province = 'nw'

      let year = new Date().getFullYear()
      let province_name = 'North West'
       let title = "SA Covid-19 | " + province_name;
      res.render('province', 
       {
        indexCSS: true,
        time,
        year,
        province_name,
        district_data_object,
        total_cases,
        recoveries,
        deaths,
        active,
        short_province,
        latest_date,
        title
    
    
        });
      })();

    } catch (error) 
    {
      return console.log(error);
    } 
//  
  },
  getNorthernCape: async (req, res) => {
     try {
      
      const TIME_API_URL = 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg';



       
    
    function getSummary(url)
      {
        return new Promise((resolve) =>
        {
          https.get(url , response =>
          {
            let data = "";
            response.on('data', chunk => {
            data += chunk;
          });
          response.on('end', () => 
            {
              let summary = JSON.parse(data);
              resolve(summary);
            })

          }).end();
        });


      }      

function amountOfKeys(obj)
{
  return Object.keys(obj).length;
}


function getDistrictLatest(district, province_cases)
{
  let all_values = province_cases[district];
  let latest_value = all_values[amountOfKeys(all_values)-1]

  return latest_value;
}


 
  (async() => {


let gauteng_district_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/districts/gp/gp.json').toString();
gauteng_district_cases = JSON.parse(gauteng_district_cases_string)

let latest_date = getDistrictLatest('date', gauteng_district_cases);

let johannesburg_cases = getDistrictLatest('johannesburg', gauteng_district_cases);

let ekrhuleni_cases = getDistrictLatest('ekrhuleni', gauteng_district_cases);

let sedibeng_cases = getDistrictLatest('sedibeng', gauteng_district_cases);

let tshwane_cases = getDistrictLatest('tshwane', gauteng_district_cases);

let westrand_cases = getDistrictLatest('westrand', gauteng_district_cases);

let unallocated_cases = getDistrictLatest('unallocated', gauteng_district_cases);

let district_names = ['Johannesburg', 'Ekrhuleni', 'Sedibeng', 'Tshwane', 'Westrand', 'Unallocated']
let district_cases = [johannesburg_cases, ekrhuleni_cases, sedibeng_cases, tshwane_cases, westrand_cases, unallocated_cases];
let gauteng_district_amount = 6;

const district_data_object = district_names.map((district_names, i) => ({ name: district_names, value: district_cases[i] }));


let confirmed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_confirmed.json').toString();
let confirmed_cases_json = JSON.parse(confirmed_cases_string);



let total_cases = confirmed_cases_json['total_cases'];
total_cases = total_cases[7]


let closed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_closed.json').toString();
let closed_cases_json = JSON.parse(closed_cases_string);


let recoveries = closed_cases_json['recoveries'];


recoveries = recoveries[7]

let deaths = closed_cases_json['deaths'];
deaths = deaths[7]

let active = total_cases - recoveries - deaths

      let time_response = await getSummary(TIME_API_URL);
      let current_time = time_response.datetime;
      var date_time = new Date(current_time);
      let time = date_time.toLocaleTimeString('it-IT');

      let short_province = 'nc'

      let year = new Date().getFullYear()
      let province_name = 'Northern Cape'
       let title = "SA Covid-19 | " + province_name;
      res.render('province', 
       {
        indexCSS: true,
        time,
        year,
        province_name,
        district_data_object,
        total_cases,
        recoveries,
        deaths,
        active,
        short_province,
        latest_date,
        title
    
    
        });
      })();

    } catch (error) 
    {
      return console.log(error);
    } 
//  
  },
  getWesternCape: async (req, res) => {
     try {
      
      const TIME_API_URL = 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg';



       
    
    function getSummary(url)
      {
        return new Promise((resolve) =>
        {
          https.get(url , response =>
          {
            let data = "";
            response.on('data', chunk => {
            data += chunk;
          });
          response.on('end', () => 
            {
              let summary = JSON.parse(data);
              resolve(summary);
            })

          }).end();
        });


      }      

function amountOfKeys(obj)
{
  return Object.keys(obj).length;
}


function getDistrictLatest(district, province_cases)
{
  let all_values = province_cases[district];
  let latest_value = all_values[amountOfKeys(all_values)-1]

  return latest_value;
}


 
  (async() => {


let gauteng_district_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/districts/gp/gp.json').toString();
gauteng_district_cases = JSON.parse(gauteng_district_cases_string)

let latest_date = getDistrictLatest('date', gauteng_district_cases);

let johannesburg_cases = getDistrictLatest('johannesburg', gauteng_district_cases);

let ekrhuleni_cases = getDistrictLatest('ekrhuleni', gauteng_district_cases);

let sedibeng_cases = getDistrictLatest('sedibeng', gauteng_district_cases);

let tshwane_cases = getDistrictLatest('tshwane', gauteng_district_cases);

let westrand_cases = getDistrictLatest('westrand', gauteng_district_cases);

let unallocated_cases = getDistrictLatest('unallocated', gauteng_district_cases);

let district_names = ['Johannesburg', 'Ekrhuleni', 'Sedibeng', 'Tshwane', 'Westrand', 'Unallocated']
let district_cases = [johannesburg_cases, ekrhuleni_cases, sedibeng_cases, tshwane_cases, westrand_cases, unallocated_cases];
let gauteng_district_amount = 6;

const district_data_object = district_names.map((district_names, i) => ({ name: district_names, value: district_cases[i] }));


let confirmed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_confirmed.json').toString();
let confirmed_cases_json = JSON.parse(confirmed_cases_string);



let total_cases = confirmed_cases_json['total_cases'];
total_cases = total_cases[8]


let closed_cases_string = fs.readFileSync(process.cwd() +'/covid_stats/json_stats/sa_provinces_closed.json').toString();
let closed_cases_json = JSON.parse(closed_cases_string);


let recoveries = closed_cases_json['recoveries'];


recoveries = recoveries[8]

let deaths = closed_cases_json['deaths'];
deaths = deaths[8]

let active = total_cases - recoveries - deaths

      let time_response = await getSummary(TIME_API_URL);
      let current_time = time_response.datetime;
      var date_time = new Date(current_time);
      let time = date_time.toLocaleTimeString('it-IT');

      let short_province = 'wc'

      let year = new Date().getFullYear()
      let province_name = 'Western Cape'
       let title = "SA Covid-19 | " + province_name;
      res.render('province', 
       {
        indexCSS: true,
        time,
        year,
        province_name,
        district_data_object,
        total_cases,
        recoveries,
        deaths,
        active,
        short_province,
        latest_date,
        title
    
    
        });
      })();

    } catch (error) 
    {
      return console.log(error);
    } 
//  
  },
}

  