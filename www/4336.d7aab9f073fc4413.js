"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4336],{4336:(A,h,s)=>{s.r(h),s.d(h,{CommitpayPageModule:()=>v});var p=s(177),f=s(4341),c=s(1075),g=s(9860),C=s(9107),_=s(7239),F=s.n(_),t=s(4438),b=s(3366);function E(e,r){if(1&e&&(t.j41(0,"div",18)(1,"div",19),t.nrm(2,"img",7),t.j41(3,"h1"),t.EFF(4,"PsicoAgenda"),t.k0s()(),t.j41(5,"h2"),t.EFF(6,"Comprobante de Pago"),t.k0s(),t.j41(7,"p"),t.EFF(8),t.k0s(),t.j41(9,"p"),t.EFF(10,"Se adjuntan los datos de la transacci\xf3n:"),t.k0s(),t.j41(11,"table",20)(12,"tbody")(13,"tr")(14,"td")(15,"strong"),t.EFF(16,"Estado:"),t.k0s()(),t.j41(17,"td"),t.EFF(18),t.k0s()(),t.j41(19,"tr")(20,"td")(21,"strong"),t.EFF(22,"Fecha Pago:"),t.k0s()(),t.j41(23,"td"),t.EFF(24),t.k0s()(),t.j41(25,"tr")(26,"td")(27,"strong"),t.EFF(28,"N\xb0 de tarjeta:"),t.k0s()(),t.j41(29,"td"),t.EFF(30),t.k0s()(),t.j41(31,"tr")(32,"td")(33,"strong"),t.EFF(34,"Tipo de Pago:"),t.k0s()(),t.j41(35,"td"),t.EFF(36),t.k0s()(),t.j41(37,"tr")(38,"td")(39,"strong"),t.EFF(40,"Monto Pagado:"),t.k0s()(),t.j41(41,"td"),t.EFF(42),t.k0s()(),t.j41(43,"tr")(44,"td")(45,"strong"),t.EFF(46,"Comprobante:"),t.k0s()(),t.j41(47,"td"),t.EFF(48),t.k0s()(),t.j41(49,"tr")(50,"td")(51,"strong"),t.EFF(52,"N\xb0 Orden:"),t.k0s()(),t.j41(53,"td"),t.EFF(54),t.k0s()(),t.j41(55,"tr")(56,"td")(57,"strong"),t.EFF(58,"Psicologo:"),t.k0s()(),t.j41(59,"td"),t.EFF(60),t.k0s()(),t.j41(61,"tr")(62,"td")(63,"strong"),t.EFF(64,"Fecha Cita:"),t.k0s()(),t.j41(65,"td"),t.EFF(66),t.k0s()(),t.j41(67,"tr")(68,"td")(69,"strong"),t.EFF(70,"Hora Cita:"),t.k0s()(),t.j41(71,"td"),t.EFF(72),t.k0s()()()(),t.j41(73,"p"),t.EFF(74,"WebPay Plus es solo el facilitador del proceso de pago y no se hace responsable sobre la entrega de productos y servicios. Cualquier duda o consulta por favor contacta al comercio."),t.k0s()()),2&e){const i=t.XpG();t.R7$(8),t.SpI("El pago de su cita #",i.idCita," ha sido procesado correctamente."),t.R7$(10),t.JRh(i.transactionDetail.state),t.R7$(6),t.JRh(i.transactionDetail.transaction_date),t.R7$(6),t.SpI("XXXX XXXX XXXX ",i.transactionDetail.card_number,""),t.R7$(6),t.JRh(i.transactionDetail.pay_type),t.R7$(6),t.JRh(i.transactionDetail.amount),t.R7$(6),t.JRh(i.transactionDetail.authorization_code),t.R7$(6),t.JRh(i.transactionDetail.buy_order),t.R7$(6),t.JRh(i.nombrePsicologo),t.R7$(6),t.JRh(i.fechaCita),t.R7$(6),t.JRh(i.horaCita)}}function y(e,r){if(1&e){const i=t.RV6();t.j41(0,"ion-button",21),t.bIt("click",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.goHome())}),t.EFF(1,"Volver"),t.k0s()}}function j(e,r){if(1&e){const i=t.RV6();t.j41(0,"ion-button",21),t.bIt("click",function(){t.eBV(i);const n=t.XpG();return t.Njj(n.downloadPDF())}),t.EFF(1,"Descargar Comprobante"),t.k0s()}}function k(e,r){if(1&e){const i=t.RV6();t.j41(0,"ion-button",21),t.bIt("click",function(){t.eBV(i);const n=t.XpG(2);return t.Njj(n.goHome())}),t.EFF(1,"Volver"),t.k0s()}}function O(e,r){if(1&e&&(t.j41(0,"div",22)(1,"h2"),t.EFF(2),t.k0s(),t.DNE(3,k,2,0,"ion-button",10),t.k0s()),2&e){const i=t.XpG();t.R7$(2),t.JRh(i.errorMessage),t.R7$(),t.Y8G("ngIf",i.error)}}const M=[{path:"",component:(()=>{var e;class r{constructor(o,n,a){this.router=o,this.route=n,this.apiService=a,this.showOptions=!1,this.errorMessage="",this.token_ws="",this.idCita=0,this.idPaciente=0,this.login=!1,this.correo="",this.nombrePsicologo="",this.fechaCita="",this.horaCita="",this.idTipo=0,this.idUsuario=0,this.error=!1,this.idPersona=0}ngOnInit(){this.route.queryParams.subscribe(o=>{try{this.token_ws=o.token_ws,this.idCita=JSON.parse(localStorage.getItem("idCita")||"0"),this.idPaciente=JSON.parse(localStorage.getItem("idPaciente")||"0"),this.login=JSON.parse(localStorage.getItem("login")||"false"),this.correo=JSON.parse(localStorage.getItem("correo")||""),this.nombrePsicologo=JSON.parse(localStorage.getItem("nombrePsicologo")||""),this.fechaCita=JSON.parse(localStorage.getItem("fechaCita")||""),this.horaCita=JSON.parse(localStorage.getItem("horaCita")||""),this.idPersona=JSON.parse(localStorage.getItem("idPersona")||"0"),this.idUsuario=JSON.parse(localStorage.getItem("idUsuario")||"0"),console.log("ID USUARIO: "+this.idUsuario),console.log(this.idCita),console.log(this.idPaciente),console.log(this.correo),console.log(this.nombrePsicologo),console.log(this.fechaCita),console.log(this.horaCita),this.token_ws?this.apiService.commitTransaction(this.token_ws).subscribe(n=>{console.log("Pago Correcto"),"AUTHORIZED"===n.status&&0===n.response_code?(this.transactionDetail={card_number:n.card_detail.card_number,transaction_date:new Date(n.transaction_date).toLocaleString(),state:"AUTHORIZED"===n.status?"Aceptado":"Rechazado",pay_type:this.getPaymentType(n.payment_type_code),amount:this.formatAmount(n.amount),authorization_code:n.authorization_code,buy_order:n.buy_order},this.apiService.confirmarCita(this.idPaciente,1,this.idCita).subscribe(a=>{console.log("Cita Agendada Correctamente",a)},a=>{console.error("Error al agendar la cita",a)}),this.sendEmail(),localStorage.clear()):(this.errorMessage="ERROR EN LA TRANSACCI\xd3N, SE RECHAZA LA TRANSACCI\xd3N.",this.error=!0,localStorage.clear())},n=>{this.errorMessage="ERROR EN LA TRANSACCI\xd3N, SE CANCELO EL PAGO.",this.error=!0,localStorage.clear()}):(this.errorMessage="ERROR EN LA TRANSACCI\xd3N, SE CANCELO EL PAGO.",this.error=!0,localStorage.clear())}catch(n){console.error("Error parsing JSON",n),this.router.navigate(["home"])}})}sendEmail(){this.apiService.sendEmail(this.correo,"Hora Agendada en PsicoAgenda","Hola!,\n\nAgendaste una hora a traves de PsicoAgenda APP, revisa los detalles.\n\nPsicologo: "+this.nombrePsicologo+"\n\nFecha: "+this.fechaCita+"\n\nHora: "+this.horaCita+"\n\nTe Saluda,\nEquipo de PsicoAgenda APP.",`\n              <p>Hola!,</p>\n              <p>Agendaste una hora a traves de PsicoAgenda APP, revisa los detalles.</p>\n              <p><strong>Psicologo: ${this.nombrePsicologo}</strong></p>\n              <p><strong>Fecha: ${this.fechaCita}</strong></p>\n              <p><strong>Hora: ${this.horaCita}</strong></p>\n              <p>Te Saluda,</p>\n              <p>Equipo de PsicoAgenda APP.</p>\n          `).subscribe(l=>{console.log("Email Enviado Correctamente",l)},l=>{console.error("Error al enviar correo",l)})}downloadPDF(){const o=document.getElementById("PDF");o?F()(o,{scale:2}).then(a=>{const l=a.toDataURL("image/png"),u=a.height/2*350/(a.width/2),P=new C.default("landscape","mm",[350,u]);P.addImage(l,"PNG",20,20,310,u-40),P.save("Comprobante.pdf")}).catch(a=>{console.error("Error al generar el PDF:",a)}):console.error('El elemento con id "PDF" no se encontr\xf3.')}goEditar(){this.router.navigate(["editarpaciente"],{state:{login:this.login,idPaciente:this.idPaciente,correo:this.correo,idUsuario:this.idUsuario,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}toggleOptions(){this.showOptions=!this.showOptions}redirectTo(o){this.router.navigate([o])}goHome(){console.log("Login: ",this.login),this.login?this.router.navigate(["cliente"],{state:{login:this.login,idPaciente:this.idPaciente,correo:this.correo,idUsuario:this.idUsuario,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0}):this.router.navigate(["home"],{replaceUrl:!0})}goHistorial(){console.log("Login: ",this.login),this.router.navigate(["atencionespaciente"],{state:{login:this.login,idPaciente:this.idPaciente,correo:this.correo,idUsuario:this.idUsuario,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}logout(){this.login=!1,this.router.navigate(["home"],{state:{login:this.login},replaceUrl:!0})}getPaymentType(o){return"VD"===o?"Tarjeta de D\xe9bito":"Desconocido"}formatAmount(o){return o.toLocaleString("es-CL",{style:"currency",currency:"CLP"})}}return(e=r).\u0275fac=function(o){return new(o||e)(t.rXU(g.Ix),t.rXU(g.nX),t.rXU(b.G))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-commitpay"]],decls:38,vars:4,consts:[["errorTemplate",""],[1,"toolbarheader"],["slot","start"],["slot","end"],[3,"click"],[1,"header-title"],[1,"logo-link",2,"color","#000000",3,"click"],["src","../../assets/icon/psicoagendalogo.png","alt","Logo",1,"header-logo"],["id","PDF","style","margin-left: 15%; margin-right: 15%;",4,"ngIf","ngIfElse"],[1,"botones",2,"margin-left","15%","margin-right","15%","margin-bottom","20px"],["class","boton",3,"click",4,"ngIf"],[1,"footer-content"],[1,"footer-left"],[1,"footer-center"],[1,"footer-right"],[1,"logo-link"],["name","call-outline",1,"header-logo"],["name","logo-instagram",1,"header-logo"],["id","PDF",2,"margin-left","15%","margin-right","15%"],[1,"receipt-header"],["id","tbl-transaction-detail"],[1,"boton",3,"click"],[1,"center-content"]],template:function(o,n){if(1&o){const a=t.RV6();t.j41(0,"ion-header")(1,"ion-toolbar",1)(2,"ion-buttons",2),t.nrm(3,"ion-menu-button"),t.k0s(),t.j41(4,"ion-buttons",3)(5,"ion-button",4),t.bIt("click",function(){return t.eBV(a),t.Njj(n.goEditar())}),t.EFF(6,"Editar datos"),t.k0s(),t.j41(7,"ion-button",4),t.bIt("click",function(){return t.eBV(a),t.Njj(n.goHistorial())}),t.EFF(8,"Historial de atenciones"),t.k0s(),t.j41(9,"ion-button",4),t.bIt("click",function(){return t.eBV(a),t.Njj(n.logout())}),t.EFF(10,"Cerrar sesi\xf3n"),t.k0s()(),t.j41(11,"ion-title",5)(12,"a",6),t.bIt("click",function(){return t.eBV(a),t.Njj(n.goHome())}),t.nrm(13,"img",7),t.EFF(14," PsicoAgenda "),t.k0s()()()(),t.j41(15,"ion-content"),t.DNE(16,E,75,11,"div",8),t.j41(17,"table",9),t.DNE(18,y,2,0,"ion-button",10)(19,j,2,0,"ion-button",10),t.k0s(),t.DNE(20,O,4,2,"ng-template",null,0,t.C5r),t.k0s(),t.j41(22,"ion-footer")(23,"ion-toolbar")(24,"div",11)(25,"div",12)(26,"p"),t.EFF(27,"\xa92024 - PsicoAgenda APP"),t.k0s(),t.j41(28,"p"),t.EFF(29,"Todos los Derechos Reservados"),t.k0s()(),t.nrm(30,"div",13),t.j41(31,"div",14)(32,"p",15),t.nrm(33,"ion-icon",16),t.EFF(34,"Tel\xe9fono Contacto: 920256865"),t.k0s(),t.j41(35,"p",15),t.nrm(36,"ion-icon",17),t.EFF(37,"www.instagram.com/psicoagenda"),t.k0s()()()()()}if(2&o){const a=t.sdS(21);t.R7$(16),t.Y8G("ngIf",n.transactionDetail)("ngIfElse",a),t.R7$(2),t.Y8G("ngIf",n.transactionDetail),t.R7$(),t.Y8G("ngIf",n.transactionDetail)}},dependencies:[p.bT,c.Jm,c.QW,c.W9,c.M0,c.eU,c.iq,c.MC,c.BC,c.ai],styles:['@charset "UTF-8";ion-footer[_ngcontent-%COMP%]{--background: var(--ion-footer-background);color:var(--ion-footer-text-color);width:100%;padding:0;box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;position:relative}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;--background: #333;color:#fff;padding:1.5rem;font-size:.8rem;text-align:center}ion-footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{display:flexbox;justify-content:space-between;align-items:center;width:100%}ion-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]{flex:1;text-align:center;display:flex;flex-direction:column;justify-content:center}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]{text-align:right;position:absolute}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-text-color);text-decoration:none}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{--color: var(--ion-text-color)}ion-icon[_ngcontent-%COMP%]{font-size:2em;color:#009688;width:24px;height:24px}ion-toolbar[_ngcontent-%COMP%]{--padding-start: 16px;--padding-end: 16px;--background: #32E0C4}.center-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%;flex-direction:column}.horizontal-layout[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:stretch;width:100%;gap:1px}.card-content-md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;font-weight:400;line-height:1.5}.custom-card[_ngcontent-%COMP%]{--background: url(1600w-9JEcmfgB4FU.39aaa5c7fb12f91d.png) no-repeat center center / cover;flex:.5;margin:1%;width:100%;text-align:center}.calendario[_ngcontent-%COMP%]{margin:1%}.calendario-lista[_ngcontent-%COMP%]{margin-top:0;width:100%;text-align:center}.imagen1[_ngcontent-%COMP%]{max-width:20%;margin-left:auto;margin-right:auto;margin-top:5%}ion-card-header[_ngcontent-%COMP%]{margin-top:6%}.botonpago[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;justify-content:center;align-items:center;display:flex;max-width:20%;--background: #32E0C4;margin-top:1rem;margin-bottom:1rem}.receipt-header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px;margin-top:20px}.receipt-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px}.header-logo[_ngcontent-%COMP%]{height:50px}#tbl-transaction-detail[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:20px}#tbl-transaction-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;border:1px solid #ddd}.botones[_ngcontent-%COMP%]{margin-top:20px;text-align:center}.center-content[_ngcontent-%COMP%]{text-align:center;margin-top:50px}']}),r})()}];let R=(()=>{var e;class r{}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[g.iI.forChild(M),g.iI]}),r})(),v=(()=>{var e;class r{}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[p.MD,f.YN,c.bv,R]}),r})()}}]);