app.service('readjson',function ($http)
{
   this.data = function ()
   {
     // console.log("inside data");
           $http.get("staff.json").then(function (response)
           {
            var information = response.data.staffRecord;
           console.log("Staff.json data: ",information);
         });
       };
 });
