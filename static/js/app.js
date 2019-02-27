// from data.js
var tableData = data;

var table = d3.select('#ufo-table')
var tbody = table.select('#ufo-table> tbody');
var filter_key
var filter_kind

//var countryFilter=d3.select('head')
//var stateFilter=d3.select('head')
var select=d3.select("#thisisSelect")

var select00=d3.select("MEIYOU")
var select0=d3.select("MEIYOU")

//throw new Error("somthing went wrong!")

var filter_data=[];
for (var filter_kind=0;filter_kind<Object.values(data[0]).length;filter_kind++){
       var value_list=data.map((data_i)=>Object.values(data_i)[filter_kind]);
       value_set = new Set(value_list);filter_data.push(value_set);
                                              }
dates=filter_data[0];
console.log(dates);
console.log(`here is arrayfrom:  ${Array.from(filter_data[0])}`)
ss=Array.from(filter_data[0])
console.log(typeof Array.from(filter_data[0]))
console.log(typeof ss)
console.log(`here is arrayfrom:  ${Array.from(filter_data[3])}`)

console.log(filter_data[1])

// var str="datetime"
// console.log(data[0].datetime)
// console.log(data[0]["datetime"])
// console.log(data[0].str)
// console.log(data[0][str])
// throw new Error("somthing went wrong!")
    
data.forEach(function(data_i) {var row=tbody.append('tr');
                               Object.values(data_i).forEach((info)=>row.append('td').text(info))
                               }
            )
    
//for(var i=0;i<data.length;i++){
//var row=tbody.append('tr');
//Object.values(data[i]).forEach((info)=>row.append('td').text(info))
//}

var filter_button=d3.select("#filter-btn")
var inputField=d3.select(".form-control")
var possible_input = d3.select(".list-group-item")

myinput=possible_input.append('ul').attr('id','myList')
dates.forEach((day)=>myinput.append('li').text(day))


inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
  filter_date=newText;
//  console.log(`here is ${filter_date}`);
});



// This function is triggered when the button is clicked


function filterClick() {
  console.log(`The date chosen is ${filter_date}`);
  tbody.remove()
  

if (!select00.empty()){select00.remove()};
if (!select0.empty()){select0.remove()}

tbody=table.append('tbody');
data.forEach(function(data_i) {ss=Object.values(data_i);if(ss[0]==filter_date){var row=tbody.append('tr');
                               ss.forEach((info)=>row.append('td').text(info));                    
                                                      };
                              }
            );


var moreLabels_arr=["date","city","state","country","shape"]
var moreFilter_arr=["datefilter","cityfilter","statefilter","countryfilter","shapefilter"]

select00=d3.select(".container").append('div').attr("class","row.margin-top-50");

select00.append('div').append('center').attr("class","col-md-2").style("font-size","110%").text('more filters here...👉')
    
MoreFilter=select00.append('div').append('center').attr("class","col-md-10").append('div').attr("class","btn-group btn-group-lg")

for (var i=0;i<5;i++){MoreFilter.append("button").attr("type","button")
                      .attr("class","btn btn-primary")
                      .attr("id",moreLabels_arr[i]+"filter").text(moreLabels_arr[i])}
    

d3.select("#datefilter").on("click",moreFilterClick);
d3.select("#cityfilter").on("click",moreFilterClick);
d3.select("#statefilter").on("click",moreFilterClick);
d3.select("#countryfilter").on("click",moreFilterClick);
d3.select("#shapefilter").on("click",moreFilterClick);


function create_filter_table(filter_kind,filter_value){

if (!select0.empty()){select0.remove()}
// if (!more1.empty()) {more1.remove()};
select0=d3.select(".container").append('div').attr("class","row.margin-top-50")


// if (!filterCondition.empty()){filterCondition.remove()}

var filterCondition=select0.append("div")
filterCondition.append('br')
filterCondition.append('center').style("font-size","150%").text(`The filter is "${moreLabels_arr[filter_kind]}":  ${filter_value} `)
filterCondition.append('br')
var table1 = select0.append('div').attr("class","col-md-12").append('div')
              .attr("id","table-area")
              .style("text-align", "center")
              .append('table')
              .attr('class','table-striped')
              .style("width","100%")
    
var thead=table1.append('thead')
var tbody=table1.append('tbody');
columns=['Date','City','State','Country','Shape','Duration','Comments'];
//create the column names of the table:
thead.append('tr')
          .selectAll('th').style("min-width","90px")
          .data(columns).enter()
          .append('th')
            .text(function (column) { return column; });


tableData.forEach(function(data_i) {ss=Object.values(data_i);if(ss[filter_kind]==filter_value){var row=tbody.append('tr');
                              ss.forEach((info)=>row.append('td').text(info));
                                                     };
                             }
           );
                                               }

function moreFilterClick(){
  console.log (d3.event.target)
 var str=d3.event.target.id;
 if (!str.length<1) {filter_key="#"+str; filter_kind= moreFilter_arr.indexOf(str)}

 console.log(str)
console.log(String(filter_key))

// throw new Error("somthing went wrong!")

data_3 =Array.from(filter_data[filter_kind]);
data_3.unshift(" ")
var select = d3.select(filter_key)
  .append('select')
      .attr('class','select')
    .on('change',onchange)

var options = select
  .selectAll('option')
    .data(data_3).enter()
    .append('option')
        .text(function (d) { return d; });

function onchange() {
  d3.event.preventDefault();
   filter_value = d3.select(filter_key).select('select').property('value')
   console.log('Onchange:',filter_value)
   create_filter_table(filter_kind,filter_value)
   d3.select(filter_key).selectAll("*").remove()

  //  d3.select("div.parent").html("");
};
}

                          }

// We can use the `on` function in d3 to attach an event to the handler function
filter_button.on("click", filterClick);















