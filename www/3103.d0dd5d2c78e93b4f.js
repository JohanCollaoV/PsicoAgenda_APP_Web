"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3103],{3862:(I,c)=>{var g,a;c.EW=c.A3=c.Tb=c.$K=c.Q7=c.iW=c.X1=c.jh=c.R7=void 0,c.R7=a=>/^(\d{0,2})\.?(\d{3})\.?(\d{3})-?(\d|k)$/gi.test(a),c.jh=a=>/^(\d)\1?\.?(\1{3})\.?(\1{3})-?(\d|k)?$/gi.test(a),c.X1=a=>(0,c.R7)(a)?a.replace(/[^0-9k]/gi,""):"",c.iW=a=>(0,c.X1)(a).slice(0,-1),c.Q7=a=>(0,c.X1)(a).slice(-1),(a=g=c.$K||(c.$K={}))[a.DOTS=0]="DOTS",a[a.DASH=1]="DASH",a[a.DOTS_DASH=2]="DOTS_DASH",c.Tb=(a,r=g.DASH)=>{if(null==a)return"";if("string"!=typeof a)throw new TypeError("RUT needs to be a string or undefined");if(!(0,c.R7)(a))return a;switch(r){case g.DOTS:return a.replace(/^(\d{0,2})\.?(\d{3})\.?(\d{3})-?(\d|k)$/gi,(...l)=>`${l[1]?`${l[1]}.`:""}${l[2]}.${l[3]}${l[4]}`);case g.DASH:return a.replace(/^(\d{0,2})\.?(\d{3})\.?(\d{3})-?(\d|k)$/gi,"$1$2$3-$4");case g.DOTS_DASH:return a.replace(/^(\d{0,2})\.?(\d{3})\.?(\d{3})-?(\d|k)$/gi,(...l)=>`${l[1]?`${l[1]}.`:""}${l[2]}.${l[3]}-${l[4]}`);default:return a.replace(/^(\d{0,2})\.?(\d{3})\.?(\d{3})-?(\d|k)$/gi,"$1$2$3$4")}},c.A3=a=>{let r=0,l=2,p=a.length;for(;p--;)r+=parseInt(a.charAt(p))*l,l%7==0?l=2:l++;const n=r%11;return 0===n?"0":1===n?"k":""+(11-n)},c.EW=(a,r=!0)=>!(!(0,c.R7)(a)||r&&(0,c.jh)(a))&&(0,c.Q7)(a).toLowerCase()===(0,c.A3)((0,c.iW)(a))},3103:(I,c,d)=>{d.r(c),d.d(c,{RegistropacientePageModule:()=>a});var b=d(177),P=d(4341),u=d(1075),f=d(9860),R=d(467),O=d(3207),i=d(3862),e=d(4438),g=d(3366);function m(r,l){if(1&r){const p=e.RV6();e.j41(0,"ion-list",39)(1,"ion-button",40),e.bIt("click",function(){e.eBV(p);const t=e.XpG();return e.Njj(t.redirectTo("/login"))}),e.EFF(2,"Ingresa"),e.k0s(),e.j41(3,"ion-button",40),e.bIt("click",function(){e.eBV(p);const t=e.XpG();return e.Njj(t.redirectTo("/registropsico"))}),e.EFF(4,"Registrate"),e.k0s()()}}function h(r,l){if(1&r&&(e.j41(0,"ion-select-option",41),e.EFF(1),e.k0s()),2&r){const p=l.$implicit;e.Y8G("value",p.IdComuna),e.R7$(),e.JRh(p.NombreComuna)}}const C=[{path:"",component:(()=>{var r;class l{constructor(n,t){this.router=n,this.apiService=t,this.showOptions=!1,this.mdl_rut="",this.mdl_calle="",this.mdl_numero=null,this.idComuna=0,this.mdl_primerNombre="",this.mdl_segundoNombre="",this.mdl_apellidoPaterno="",this.mdl_apellidoMaterno="",this.mdl_telefono="",this.mdl_fechaNacimiento="",this.mdl_correo="",this.mdl_contrasena="",this.idTipoUsuario=1,this.mdl_comuna="",this.lista_comunas=[],this.isAlertOpen=!1,this.isAlertOpen2=!1,this.isAlertOpen3=!1,this.isAlertOpen4=!1,this.isAlertOpen5=!1,this.alertButtons=["OK"]}ngOnInit(){var n=this;return(0,R.A)(function*(){yield n.cargarComunas()})()}cargarComunas(){var n=this;return(0,R.A)(function*(){try{const t=n.apiService.obtenerComunas();n.lista_comunas=yield(0,O.s)(t),console.log("Lista de comunas cargadas:",n.lista_comunas)}catch(t){console.error("Error al cargar las comunas",t)}})()}validatePhone(n){let s=n.target.value;/^[0-9]*$/.test(s)||(n.target.value=s.replace(/[^0-9]/g,""))}validateEmail(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n).toLowerCase())}validateNumero(n){let s=n.target.value;s.length>5&&(n.target.value=s.slice(0,5)),/^[0-9]*$/.test(s)||(n.target.value=s.replace(/[^0-9]/g,""))}register(){if(this.resetAlerts(),this.validateForm()){if(!(0,i.EW)(this.mdl_rut))return this.isAlertOpen2=!0,void(this.mdl_rut="");if(!this.validateEmail(this.mdl_correo))return this.isAlertOpen4=!0,void(this.mdl_correo="");(s=>{this.mdl_fechaNacimiento.split("-").reverse().join("-")})(),this.apiService.registrarPaciente(this.mdl_calle,this.mdl_numero,this.idComuna,this.mdl_primerNombre,this.mdl_segundoNombre,this.mdl_apellidoPaterno,this.mdl_apellidoMaterno,this.mdl_telefono,this.mdl_fechaNacimiento,this.mdl_correo,this.mdl_contrasena,this.idTipoUsuario,this.mdl_rut).subscribe(s=>{console.log("Paciente registrado correctamente",s),this.sendEmail(),this.isAlertOpen3=!0},s=>{console.error("Error al registrar paciente",s),this.isAlertOpen5=!0})}else this.isAlertOpen=!0}validateForm(){return""!==this.mdl_calle&&null!==this.mdl_numero&&""!==this.mdl_rut&&0!==this.idComuna&&""!==this.mdl_primerNombre&&""!==this.mdl_segundoNombre&&""!==this.mdl_apellidoPaterno&&""!==this.mdl_apellidoMaterno&&""!==this.mdl_telefono&&""!==this.mdl_fechaNacimiento&&""!==this.mdl_contrasena}resetAlerts(){this.isAlertOpen=!1,this.isAlertOpen2=!1,this.isAlertOpen3=!1,this.isAlertOpen4=!1,this.isAlertOpen5=!1}goHome(){this.router.navigate(["home"],{replaceUrl:!0})}toggleOptions(){this.showOptions=!this.showOptions}redirectTo(n){this.router.navigate([n])}setOpen(n){this.isAlertOpen=n}setOpen2(n){this.isAlertOpen2=n}setOpen3(n){this.isAlertOpen3=n}setOpen4(n){this.isAlertOpen4=n}setOpen5(n){this.isAlertOpen5=n}sendEmail(){this.apiService.sendEmail(this.mdl_correo,"Bienvenido a PsicoAgenda APP","Hola "+this.mdl_primerNombre+",\n\nTe registrate correctamente en PsicoAgenda APP.\n\nTu usuario es: "+this.mdl_correo+"\n\nTe Saluda,\nEquipo de PsicoAgenda APP.",`\n              <p>Hola ${this.mdl_primerNombre},</p>\n              <p>Te registrate correctamente en PsicoAgenda APP.</p>\n              <p><strong>Usuario: ${this.mdl_correo}</strong></p>\n              <p>Te Saluda,</p>\n              <p>Equipo de PsicoAgenda APP.</p>\n          `).subscribe(o=>{console.log("Email Enviado Correctamente",o)},o=>{console.error("Error al enviar correo",o)})}}return(r=l).\u0275fac=function(n){return new(n||r)(e.rXU(f.Ix),e.rXU(g.G))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-registropaciente"]],decls:76,vars:24,consts:[[1,"toolbarheader"],["slot","start"],["slot","end"],["routerLink","/login"],[3,"click"],[1,"header-title"],[1,"logo-link",2,"color","#000000",3,"click"],["src","../../assets/icon/psicoagendalogo.png","alt","Logo",1,"header-logo"],["class","opciones-lista",4,"ngIf"],[2,"--background","url(../../../assets/icon/psicologia.png) no-repeat center center / cover"],[1,"form-container"],[1,"titulo-formulario"],[3,"ngSubmit"],["label","Rut","label-placement","floating","fill","outline","type","text","name","rut",3,"ngModelChange","ngModel"],["label","Calle","label-placement","floating","fill","outline","type","text","name","calle",3,"ngModelChange","ngModel"],["label","N\xfamero","label-placement","floating","fill","outline","type","number","name","numero","min","1","max","99999",3,"ngModelChange","ionInput","ngModel"],["label","Comuna","label-placement","floating","fill","outline","name","comuna",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["label","Primer Nombre","label-placement","floating","fill","outline","type","text","name","primerNombre",3,"ngModelChange","ngModel"],["label","Segundo Nombre","label-placement","floating","fill","outline","type","text","name","segundoNombre",3,"ngModelChange","ngModel"],["label","Apellido Paterno","label-placement","floating","fill","outline","type","text","name","apellidoPaterno",3,"ngModelChange","ngModel"],["label","Apellido Materno","label-placement","floating","fill","outline","type","text","name","apellidoMaterno",3,"ngModelChange","ngModel"],["label","Tel\xe9fono","label-placement","floating","fill","outline","type","tel","name","telefono","maxlength","9",3,"ngModelChange","ionInput","ngModel"],["label","Fecha de Nacimiento","label-placement","floating","fill","outline","type","date","name","fechaNacimiento",3,"ngModelChange","ngModel"],["label","Correo Electr\xf3nico","label-placement","floating","fill","outline","type","email","name","correo",3,"ngModelChange","ngModel"],["label","Contrase\xf1a","label-placement","floating","fill","outline","type","password","name","contrasena",3,"ngModelChange","ngModel"],["expand","block","type","submit",1,"ion-button-registar"],[1,"footer-content"],[1,"footer-left"],[1,"footer-center"],[1,"footer-right"],[1,"logo-link"],["name","call-outline",1,"header-logo"],["name","logo-instagram",1,"header-logo"],["header","Informaci\xf3n","message","No puede dejar campos vac\xedos",3,"didDismiss","isOpen","buttons"],["header","Informaci\xf3n","message","RUT inv\xe1lido. Por favor ingrese un RUT v\xe1lido.",3,"didDismiss","isOpen","buttons"],["header","Informaci\xf3n","message","Correo inv\xe1lido. Por favor ingrese un Correo v\xe1lido.",3,"didDismiss","isOpen","buttons"],["header","Informaci\xf3n","message","Error al completar el registro.",3,"didDismiss","click","isOpen","buttons"],["header","Informaci\xf3n","message","Registro Completado",3,"didDismiss","click","isOpen","buttons"],[1,"opciones-lista"],[1,"opciones-item",3,"click"],[3,"value"]],template:function(n,t){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e.nrm(3,"ion-menu-button"),e.k0s(),e.j41(4,"ion-buttons",2)(5,"ion-button",3),e.EFF(6,"Entrar"),e.k0s(),e.j41(7,"ion-button",4),e.bIt("click",function(){return t.redirectTo("/registropaciente")}),e.EFF(8,"Registrarse"),e.k0s(),e.j41(9,"ion-button",4),e.bIt("click",function(){return t.toggleOptions()}),e.EFF(10,"Profesionales"),e.k0s()(),e.j41(11,"ion-title",5)(12,"a",6),e.bIt("click",function(){return t.goHome()}),e.nrm(13,"img",7),e.EFF(14," PsicoAgenda "),e.k0s()()(),e.DNE(15,m,5,0,"ion-list",8),e.k0s(),e.j41(16,"ion-content",9)(17,"div",10)(18,"ion-title",11),e.EFF(19,"\xdanete como paciente"),e.k0s(),e.j41(20,"form",12),e.bIt("ngSubmit",function(){return t.register()}),e.j41(21,"ion-grid")(22,"ion-row")(23,"ion-col")(24,"ion-input",13),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_rut,o)||(t.mdl_rut=o),o}),e.k0s()(),e.j41(25,"ion-col")(26,"ion-input",14),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_calle,o)||(t.mdl_calle=o),o}),e.k0s()(),e.j41(27,"ion-col")(28,"ion-input",15),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_numero,o)||(t.mdl_numero=o),o}),e.bIt("ionInput",function(o){return t.validateNumero(o)}),e.k0s()()(),e.j41(29,"ion-row")(30,"ion-col")(31,"ion-select",16),e.mxI("ngModelChange",function(o){return e.DH7(t.idComuna,o)||(t.idComuna=o),o}),e.DNE(32,h,2,2,"ion-select-option",17),e.k0s()(),e.j41(33,"ion-col")(34,"ion-input",18),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_primerNombre,o)||(t.mdl_primerNombre=o),o}),e.k0s()(),e.j41(35,"ion-col")(36,"ion-input",19),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_segundoNombre,o)||(t.mdl_segundoNombre=o),o}),e.k0s()()(),e.j41(37,"ion-row")(38,"ion-col")(39,"ion-input",20),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_apellidoPaterno,o)||(t.mdl_apellidoPaterno=o),o}),e.k0s()(),e.j41(40,"ion-col")(41,"ion-input",21),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_apellidoMaterno,o)||(t.mdl_apellidoMaterno=o),o}),e.k0s()(),e.j41(42,"ion-col")(43,"ion-input",22),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_telefono,o)||(t.mdl_telefono=o),o}),e.bIt("ionInput",function(o){return t.validatePhone(o)}),e.k0s()()(),e.j41(44,"ion-row")(45,"ion-col")(46,"ion-input",23),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_fechaNacimiento,o)||(t.mdl_fechaNacimiento=o),o}),e.k0s()(),e.j41(47,"ion-col")(48,"ion-input",24),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_correo,o)||(t.mdl_correo=o),o}),e.k0s()(),e.j41(49,"ion-col")(50,"ion-input",25),e.mxI("ngModelChange",function(o){return e.DH7(t.mdl_contrasena,o)||(t.mdl_contrasena=o),o}),e.k0s()()(),e.j41(51,"ion-row")(52,"ion-col")(53,"ion-button",26),e.EFF(54,"Registrar"),e.k0s()()()()()(),e.j41(55,"ion-footer")(56,"ion-toolbar")(57,"div",27)(58,"div",28)(59,"p"),e.EFF(60,"\xa92024 - PsicoAgenda APP"),e.k0s(),e.j41(61,"p"),e.EFF(62,"Todos los Derechos Reservados"),e.k0s()(),e.nrm(63,"div",29),e.j41(64,"div",30)(65,"p",31),e.nrm(66,"ion-icon",32),e.EFF(67,"Tel\xe9fono Contacto: 920256865 "),e.k0s(),e.j41(68,"p",31),e.nrm(69,"ion-icon",33),e.EFF(70,"www.instagram.com/psicoagenda "),e.k0s()()()()(),e.j41(71,"ion-alert",34),e.bIt("didDismiss",function(){return t.setOpen(!1)}),e.k0s(),e.j41(72,"ion-alert",35),e.bIt("didDismiss",function(){return t.setOpen2(!1)}),e.k0s(),e.j41(73,"ion-alert",36),e.bIt("didDismiss",function(){return t.setOpen4(!1)}),e.k0s(),e.j41(74,"ion-alert",37),e.bIt("didDismiss",function(){return t.setOpen5(!1)})("click",function(){return t.goHome()}),e.k0s(),e.j41(75,"ion-alert",38),e.bIt("didDismiss",function(){return t.setOpen(!1)})("click",function(){return t.goHome()}),e.k0s()()),2&n&&(e.R7$(15),e.Y8G("ngIf",t.showOptions),e.R7$(9),e.R50("ngModel",t.mdl_rut),e.R7$(2),e.R50("ngModel",t.mdl_calle),e.R7$(2),e.R50("ngModel",t.mdl_numero),e.R7$(3),e.R50("ngModel",t.idComuna),e.R7$(),e.Y8G("ngForOf",t.lista_comunas),e.R7$(2),e.R50("ngModel",t.mdl_primerNombre),e.R7$(2),e.R50("ngModel",t.mdl_segundoNombre),e.R7$(3),e.R50("ngModel",t.mdl_apellidoPaterno),e.R7$(2),e.R50("ngModel",t.mdl_apellidoMaterno),e.R7$(2),e.R50("ngModel",t.mdl_telefono),e.R7$(3),e.R50("ngModel",t.mdl_fechaNacimiento),e.R7$(2),e.R50("ngModel",t.mdl_correo),e.R7$(2),e.R50("ngModel",t.mdl_contrasena),e.R7$(21),e.Y8G("isOpen",t.isAlertOpen)("buttons",t.alertButtons),e.R7$(),e.Y8G("isOpen",t.isAlertOpen2)("buttons",t.alertButtons),e.R7$(),e.Y8G("isOpen",t.isAlertOpen4)("buttons",t.alertButtons),e.R7$(),e.Y8G("isOpen",t.isAlertOpen5)("buttons",t.alertButtons),e.R7$(),e.Y8G("isOpen",t.isAlertOpen3)("buttons",t.alertButtons))},dependencies:[b.Sq,b.bT,P.qT,P.BC,P.cb,P.tU,P.vS,P.cV,u.Zy,u.Jm,u.QW,u.hU,u.W9,u.M0,u.lO,u.eU,u.iq,u.$w,u.nf,u.MC,u.ln,u.Nm,u.Ip,u.BC,u.ai,u.su,u.Je,u.Gw,u.N7,u.T6,u.jL,f.Wk],styles:['@charset "UTF-8";[_ngcontent-%COMP%]:root{--ion-color-primary: #4a90e2;--ion-background-color: #f5f5f5}.main-banner[_ngcontent-%COMP%]{background-color:#009688;color:#000;padding:5rem;text-align:center}.main-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:2.2rem;font-weight:700}.main-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2rem;font-size:1rem}ion-form[_ngcontent-%COMP%]{background-color:var(--ion-background-color);padding:20px;border-radius:10px}ion-item[_ngcontent-%COMP%]{--border-color: #fff;--background: #fff;--color: var(--ion-color-primary);--placeholder-color: var(--ion-color-primary);--placeholder-opacity: .8;margin-bottom:10px;border-radius:8px;border:1px solid #ccc}ion-input[_ngcontent-%COMP%]{--border-color: #fff;--padding-start: 10px;--padding-end: 10px;--placeholder-color: var(--ion-input-placeholder-color)}.ion-button-registar[_ngcontent-%COMP%]{--background: #009688;color:#fff}.ion-button-registar[_ngcontent-%COMP%]:hover{--background: #004d40}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:800px;margin:20px auto;padding:20px;box-sizing:border-box;background-color:#fff;box-shadow:0 2px 5px #0000001a;border-radius:10px}ion-icon[_ngcontent-%COMP%]{font-size:2em;margin-right:8px;color:#009688}.options-list[_ngcontent-%COMP%]{flex-direction:column;width:100%;margin-top:5px}ion-title[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.titulo-formulario[_ngcontent-%COMP%]{margin-bottom:30px;font-size:28px}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;--background: #333;color:#fff;padding:1.5rem;font-size:.8rem;text-align:center}ion-footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{display:flexbox;justify-content:space-between;align-items:center;width:100%}ion-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]{flex:1;text-align:center;display:flex;flex-direction:column;justify-content:center}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]{text-align:right;position:absolute}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-text-color);text-decoration:none}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{--color: var(--ion-text-color)}ion-input[_ngcontent-%COMP%]{margin-bottom:15px;margin-right:10px}ion-select[_ngcontent-%COMP%]{margin-bottom:15px;margin-right:10px}']}),l})()}];let M=(()=>{var r;class l{}return(r=l).\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[f.iI.forChild(C),f.iI]}),l})(),a=(()=>{var r;class l{}return(r=l).\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[b.MD,P.YN,P.X1,u.bv,M]}),l})()},3366:(I,c,d)=>{d.d(c,{G:()=>u});var b=d(4438),P=d(1626);let u=(()=>{var f;class R{constructor(i){this.http=i,this.ruta="https://psicoagenda-api.azurewebsites.net/usuarios/login/",this.ruta_ps="https://psicoagenda-api.azurewebsites.net/psicologos/get_psicologos/",this.ruta_busqueda_ps="https://psicoagenda-api.azurewebsites.net/psicologos/datos_psicologo/",this.ruta_prestadores="https://prestadores.azurewebsites.net/profesionales/get_profesionales/",this.ruta_horas="https://psicoagenda-api.azurewebsites.net/psicologos/horas_psicologo/",this.ruta_detalles_citas="https://psicoagenda-api.azurewebsites.net/usuarios/get_citas_by_id",this.ruta_proxima_cita="https://psicoagenda-api.azurewebsites.net/usuarios/get_proxima_cita_by_id",this.ruta_citas_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_citas_psicologo",this.ruta_atenciones_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_atenciones_psicologo",this.ruta_historial_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_historial_psicologo",this.rutaId="https://psicoagenda-api.azurewebsites.net/usuarios/obtener_id/",this.rutaCita="https://psicoagenda-api.azurewebsites.net/paciente/agendarCita/",this.rutaRegistroPsicologo="https://psicoagenda-api.azurewebsites.net/usuarios/registro_psicologo/",this.rutaRecuperacion="https://psicoagenda-api.azurewebsites.net/usuarios/cambiar_contrasena/",this.rutaToken="https://psicoagenda-api.azurewebsites.net/usuarios/guadarToken/",this.rutaInsertarPaciente="https://psicoagenda-api.azurewebsites.net/usuarios/insertar_paciente/",this.rutaMantenedorCita="https://psicoagenda-api.azurewebsites.net/admin/buscarCita/",this.rutaBuscarUsuario="https://psicoagenda-api.azurewebsites.net/admin/buscarUsuario/",this.rutaBuscarComuna="https://psicoagenda-api.azurewebsites.net/usuarios/comuna/",this.rutaBuscarEspecialidad="https://psicoagenda-api.azurewebsites.net/psicologos/especialidad/",this.rutaEspecialidades="https://psicoagenda-api.azurewebsites.net/psicologos/allEspecialidades/",this.rutaBuscarPsicologos="https://psicoagenda-api.azurewebsites.net/psicologos/buscar_psicologos/",this.rutaComunas="https://psicoagenda-api.azurewebsites.net/usuarios/todasLasComunas/",this.rutaAsignadas="https://psicoagenda-api.azurewebsites.net/usuarios/citas_asignadas/",this.rutaPersona="https://psicoagenda-api.azurewebsites.net/usuarios/datosPaciente/",this.rutaFinalizarCita="https://psicoagenda-api.azurewebsites.net/paciente/finalizarCita/",this.rutaInsertarCitas="https://psicoagenda-api.azurewebsites.net/paciente/insertarCitas/",this.rutaBorraCita="https://psicoagenda-api.azurewebsites.net/paciente/borrarCita/"}sendEmail(i,e,g,m){return this.http.post("https://psicoagenda-api.azurewebsites.net/api/v1/email/send",{to:i,subject:e,text:g,html:m})}insertarCitas(i,e){return this.http.get(this.rutaInsertarCitas+"?fechaInicio="+i+"&fechaFin="+e).pipe()}adminCita(i,e){return this.http.get(this.rutaMantenedorCita+"?Criterio="+i+"&Dato="+e).pipe()}buscarPsicologos(i,e,g){return this.http.get(this.rutaBuscarPsicologos+"?Criterio="+i+"&Dato="+e+"&Dato2="+g).pipe()}buscarUsuario(i,e){return this.http.get(this.rutaBuscarUsuario+"?Criterio="+i+"&Dato="+e).pipe()}buscarComuna(i){return this.http.get(this.rutaBuscarComuna+"?NombreComuna="+i).pipe()}buscarEspecilidad(i){return this.http.get(this.rutaBuscarEspecialidad+"?NombreEspecialidad="+i).pipe()}citasAsignadas(i){return this.http.get(this.rutaAsignadas+"?IdPaciente="+i).pipe()}especilidades(){return this.http.get(this.rutaEspecialidades)}borrarCita(i){return this.http.get(this.rutaBorraCita+"?IdCita="+i)}obtenerComunas(){return this.http.get(this.rutaComunas)}updatePaciente(i,e,g,m,h,_,C,M,a,r){return this.http.post("https://psicoagenda-api.azurewebsites.net/usuarios/patch_paciente/",{IdPersona:i,IdDireccion:e,Calle:g,Numero:m,IdComuna:h,Telefono:_,PrimerNombre:C,SegundoNombre:M,ApellidoPaterno:a,ApellidoMaterno:r})}updatePsicologo(i,e,g,m,h,_,C,M,a,r,l,p,n,t){return this.http.post("https://psicoagenda-api.azurewebsites.net/psicologos/patch_psicologo/",{IdUsuario:i,IdPersona:e,IdDireccion:g,Calle:m,Numero:h,IdComuna:_,ValorSesion:C,Telefono:M,Descripcion:a,IdEspecialidad:r,PrimerNombre:l,SegundoNombre:p,ApellidoPaterno:n,ApellidoMaterno:t})}recuperacionClave(i,e){return this.http.get(this.rutaRecuperacion+"?CorreoElectronico="+i+"&NuevaContrasena="+e).pipe()}obtenerUsuario(i,e){return this.http.get(this.ruta+"?CorreoElectronico="+i+"&Contrasena="+e).pipe()}obtenerHoras(i,e){return this.http.get(this.ruta_horas+"?IdPsicologo="+i+"&FechaCita="+e).pipe()}listaPsicologos(){return this.http.get(this.ruta_ps).pipe()}datosPsicologo(i){return this.http.get(this.ruta_busqueda_ps+"?IdPsicologo="+i).pipe()}validarPrestadores(i){return this.http.get(this.ruta_prestadores+"?Rut="+i).pipe()}obtenerDetallesCitas(i){return this.http.get(this.ruta_detalles_citas+"?IdPaciente="+i).pipe()}datosPersona(i){return this.http.get(this.rutaPersona+"?IdPersona="+i).pipe()}obtenerProximaCita(i){return this.http.get(this.ruta_proxima_cita+"?IdPaciente="+i).pipe()}obtenerCitaPsicologo(i){return this.http.get(this.ruta_citas_psicologo+"?IdPsicologo="+i).pipe()}obtenerHistorialPsicologo(i){return this.http.get(this.ruta_historial_psicologo+"?IdPsicologo="+i).pipe()}obtenerAtencionesPsicologo(i){return this.http.get(this.ruta_atenciones_psicologo+"?IdPsicologo="+i).pipe()}createTransaction(i,e,g,m){return this.http.post("https://psicoagenda-api.azurewebsites.net/api/v1/transbank/transaction/create",{buy_order:i,session_id:e,amount:g,return_url:m})}commitTransaction(i){return this.http.put(`https://psicoagenda-api.azurewebsites.net/api/v1/transbank/transaction/commit/${i}`,{token:i})}getId(i,e){return this.http.get(this.rutaId+"?IdTipoUsuario="+i+"&IdUsuario="+e).pipe()}confirmarCita(i,e,g){return this.http.get(this.rutaCita+"?IdPaciente="+i+"&IdEstadoCita="+e+"&IdCita="+g).pipe()}finalizarCita(i,e,g){return this.http.get(this.rutaFinalizarCita+"?Tratamiento="+i+"&Diagnostico="+e+"&IdCita="+g).pipe()}registrarPsicologo(i,e,g,m,h,_,C,M,a,r,l,p,n,t,s){return this.http.post(this.rutaRegistroPsicologo,{Calle:i,Numero:e,IdComuna:g,PrimerNombre:m,SegundoNombre:h,ApellidoPaterno:_,ApellidoMaterno:C,Telefono:M,FechaNacimiento:a,CorreoElectronico:r,Contrasena:l,IdTipoUsuario:p,Rut:n,ValorSesion:t,IdEspecialidad:s})}guardarToken(i,e){return this.http.get(this.rutaToken+"?Token="+i+"&CorreoElectronico="+e).pipe()}registrarPaciente(i,e,g,m,h,_,C,M,a,r,l,p,n){return this.http.post(this.rutaInsertarPaciente,{Calle:i,Numero:e,IdComuna:g,PrimerNombre:m,SegundoNombre:h,ApellidoPaterno:_,ApellidoMaterno:C,Telefono:M,FechaNacimiento:a,CorreoElectronico:r,Contrasena:l,IdTipoUsuario:p,Rut:n})}}return(f=R).\u0275fac=function(i){return new(i||f)(b.KVO(P.Qq))},f.\u0275prov=b.jDH({token:f,factory:f.\u0275fac,providedIn:"root"}),R})()}}]);