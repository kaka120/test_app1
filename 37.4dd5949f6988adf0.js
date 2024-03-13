"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[37],{37:(y,h,i)=>{i.r(h),i.d(h,{dashboardModule:()=>U});var c=i(1076),g=i(5437),f=i(5054),u=i.n(f),s=i(95),e=i(9468),p=i(2075),d=i(6814);const v=["chart"];function Z(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"a",10),e._uU(3),e.qZA()(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td")(9,"span"),e._uU(10),e.qZA()(),e.TgZ(11,"td")(12,"span"),e._uU(13),e.qZA()(),e.TgZ(14,"td")(15,"i",11),e.NdJ("click",function(){const l=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.deleteUser(l.userId))}),e.qZA()(),e.TgZ(16,"td")(17,"i",12),e.NdJ("click",function(){const l=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.editUser(l))}),e.qZA()()()}if(2&r){const t=n.$implicit;e.xp6(3),e.Oqu(t.userId),e.xp6(2),e.Oqu(t.userFirstName),e.xp6(2),e.Oqu(t.userLastName),e.xp6(3),e.Oqu(t.userPhone),e.xp6(3),e.Oqu(t.userEmail)}}function T(r,n){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"h2",13),e._uU(2,"Edit User"),e.qZA(),e.TgZ(3,"form",14)(4,"div",15)(5,"label",16),e._uU(6,"First Name"),e.qZA(),e.TgZ(7,"div",17),e._UZ(8,"input",18),e.qZA()(),e.TgZ(9,"div",15)(10,"label",19),e._uU(11,"Last Name"),e.qZA(),e.TgZ(12,"div",20),e._UZ(13,"input",21),e.qZA()(),e.TgZ(14,"div",15)(15,"label",22),e._uU(16,"Phone"),e.qZA(),e.TgZ(17,"div",20),e._UZ(18,"input",23),e.qZA()(),e.TgZ(19,"div",15)(20,"label",24),e._uU(21,"Email"),e.qZA(),e.TgZ(22,"div",20),e._UZ(23,"input",25),e.qZA()(),e.TgZ(24,"div",15)(25,"div",0)(26,"div",26)(27,"button",27),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.save())}),e._uU(28," Save "),e.qZA()(),e.TgZ(29,"div",26)(30,"button",28),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.cancel())}),e._uU(31," Cancel "),e.qZA()()()()(),e.BQk()}if(2&r){const t=e.oxw();e.xp6(3),e.Q6J("formGroup",t.user)}}const x=[{path:"",component:(()=>{class r{constructor(t,o,a){this.authService=t,this._router=o,this.route=a,this.resTableData=[],this.getDashBoradData=()=>{this.authService.getUsers("/v1/users").subscribe({next:l=>{this.resTableData=l,console.log("Result",this.resTableData)},error:l=>console.error(l),complete:()=>console.info(this.resTableData)}),this.resTableData=g,console.log(this.resTableData)},this.monthOptions={chart:{height:450,type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},colors:["#1890ff","#13c2c2"],series:[{name:"Page Views",data:[76,85,101,98,87,105,91,114,94,86,115,35]},{name:"Sessions",data:[110,60,150,35,60,36,26,45,65,52,53,41]}],stroke:{curve:"smooth",width:2},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},this.weekOptions={chart:{height:450,type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},colors:["#1890ff","#13c2c2"],series:[{name:"Page Views",data:[31,40,28,51,42,109,100]},{name:"Sessions",data:[11,32,45,32,34,52,41]}],stroke:{curve:"smooth",width:2},xaxis:{categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},this.card=[{title:"Total Page Views",amount:"4,42,236",background:"bg-light-primary ",border:"border-primary",icon:"ti ti-trending-up",percentage:"59.3%",color:"text-primary",number:"35,000"},{title:"Total Users",amount:"78,250",background:"bg-light-success ",border:"border-success",icon:"ti ti-trending-up",percentage:"70.5%",color:"text-success",number:"8,900"},{title:"Total Order",amount:"18,800",background:"bg-light-warning ",border:"border-warning",icon:"ti ti-trending-down",percentage:"27.4%",color:"text-warning",number:"1,943"},{title:"Total Sales",amount:"$35,078",background:"bg-light-danger ",border:"border-danger",icon:"ti ti-trending-down",percentage:"27.4%",color:"text-danger",number:"$20,395"}],this.tables=g,this.transaction=[{background:"text-success bg-light-success",icon:"ti ti-gift",title:"Order #002434",time:"Today, 2:00 AM",amount:"+ $1,430",percentage:"78%"},{background:"text-primary bg-light-primary",icon:"ti ti-message-circle",title:"Order #984947",time:"5 August, 1:45 PM",amount:"- $302",percentage:"8%"},{background:"text-danger bg-light-danger",icon:"ti ti-settings",title:"Order #988784",time:"7 hours ago",amount:"- $682",percentage:"16%"}],this.chartOptions_4={chart:{type:"bar",height:365,toolbar:{show:!1}},colors:["#13c2c2"],plotOptions:{bar:{columnWidth:"45%",borderRadius:4}},dataLabels:{enabled:!1},series:[{data:[80,95,70,42,65,55,78]}],stroke:{curve:"smooth",width:2},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},grid:{show:!1}},this.chartOptions_5={chart:{type:"line",height:340,toolbar:{show:!1}},colors:["#faad14"],plotOptions:{bar:{columnWidth:"45%",borderRadius:4}},stroke:{curve:"smooth",width:1.5},grid:{strokeDashArray:4},series:[{data:[58,90,38,83,63,75,35,55]}],xaxis:{type:"datetime",categories:["2018-05-19T00:00:00.000Z","2018-06-19T00:00:00.000Z","2018-07-19T01:30:00.000Z","2018-08-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-10-19T04:30:00.000Z","2018-11-19T05:30:00.000Z","2018-12-19T06:30:00.000Z"],labels:{format:"MMM"},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1}},this.chartOptions_6={chart:{type:"bar",height:430,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"30%",borderRadius:4}},stroke:{show:!0,width:8,colors:["transparent"]},dataLabels:{enabled:!1},legend:{position:"top",horizontalAlign:"right",show:!0,fontFamily:"'Public Sans', sans-serif",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:10,height:10,radius:50},itemMargin:{horizontal:15,vertical:5}},colors:["#faad14","#1890ff"],series:[{name:"Net Profit",data:[180,90,135,114,120,145]},{name:"Revenue",data:[120,45,78,150,168,99]}],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun"]}}}editUser(t){this.user=new s.cw({userId:new s.NI(t.userId),userFirstName:new s.NI(t.userFirstName),userLastName:new s.NI(t.userLastName),userPhone:new s.NI(t.userPhone),userEmail:new s.NI(t.userEmail)})}cancel(){this.user=null}deleteUser(t){console.log(t),this.authService.deleteUser("/v1/delete/",t).subscribe({next:o=>{console.log("Result",o),location.reload()},error:o=>console.error(o),complete:()=>console.info("completed")})}save(){console.log(this.user.value),this.authService.updateUser({user_email:this.user.value.userEmail,user_first_name:this.user.value.userFirstName,user_last_name:this.user.value.userLastName,user_phone:this.user.value.userPhone},"/v1/update/",this.user.value.userId).subscribe({next:a=>{console.log("Result",a),location.reload()},error:a=>console.error(a),complete:()=>console.info("completed")}),this.user=null}ngOnInit(){setTimeout(()=>{this.weekChart=new(u())(document.querySelector("#visitor-chart"),this.weekOptions),this.weekChart.render()},500),this.getDashBoradData()}onNavChange(t){1===t.nextId&&setTimeout(()=>{this.weekChart=new(u())(document.querySelector("#visitor-chart"),this.weekOptions),this.weekChart.render()},200),2===t.nextId&&setTimeout(()=>{this.monthChart=new(u())(document.querySelector("#visitor-chart-1"),this.monthOptions),this.monthChart.render()},200)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p.e),e.Y36(c.F0),e.Y36(c.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-dashboard"]],viewQuery:function(t,o){if(1&t&&e.Gf(v,5),2&t){let a;e.iGM(a=e.CRH())&&(o.chart=a.first)}},decls:29,vars:2,consts:[[1,"row"],[1,"col-md-9"],[1,"col-md-12"],[1,"card","tbl-card"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-hover","table-borderless","mb-0","user-table"],[4,"ngFor","ngForOf"],[1,"col-md-3"],[4,"ngIf"],["href","javascript:",1,"text-muted"],[1,"ti","ti-trash",3,"click"],[1,"ti","ti-pencil","btn-outline-primary",3,"click"],[1,"py-4"],[3,"formGroup"],[1,"form-group","row"],["for","userFirstName",1,"col-5","col-form-label"],[1,"col-7"],["type","text","id","userFirstName","formControlName","userFirstName",1,"form-control"],["for","userLastName",1,"col-sm-5","col-form-label"],[1,"col-sm-7"],["type","text","id","userLastName","formControlName","userLastName",1,"form-control"],["for","userPhone",1,"col-sm-5","col-form-label"],["type","text","id","userPhone","formControlName","userPhone",1,"form-control"],["for","userEmail",1,"col-sm-5","col-form-label"],["type","text","id","userEmail","formControlName","userEmail",1,"form-control"],[1,"col-6"],["type","submit",1,"btn","btn-primary","col-12",3,"click"],["type","reset",1,"btn","btn-outline-primary","col-12",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",0),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th"),e._uU(11,"id"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"First Name"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Last Name"),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Phone Number"),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Email"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"Delete"),e.qZA(),e.TgZ(22,"th"),e._uU(23,"Edit"),e.qZA()()(),e.TgZ(24,"tbody"),e.YNc(25,Z,18,5,"tr",7),e.qZA()()()()()()(),e._UZ(26,"div",8),e.TgZ(27,"div",2),e.YNc(28,T,32,1,"ng-container",9),e.qZA()()),2&t&&(e.xp6(25),e.Q6J("ngForOf",o.resTableData),e.xp6(3),e.Q6J("ngIf",o.user))},dependencies:[d.sg,d.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid #e6ebf1}"]}),r})()}];let _=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.Bz.forChild(x),c.Bz]}),r})();var b=i(9862),w=i(3649);let U=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[p.e,{provide:b.TP,useClass:w.N,multi:!0},b.JF],imports:[_,d.ez,s.u5,s.UX]}),r})()}}]);