"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5363],{5363:(F,_,u)=>{u.r(_),u.d(_,{ClientePageModule:()=>g});var f=u(177),I=u(4341),r=u(1075),h=u(9860),v=u(467),M=u(3207),t=u(4438),o=u(3366);const l=[{path:"",component:(()=>{var a;class s{constructor(e,i){this.router=e,this.apiService=i,this.login=!1,this.idTipo=0,this.idUsuario=0,this.idPersona=0,this.lista_respuesta=[],this.idPaciente=0,this.correo=""}redirectTo(e){this.router.navigate([e])}ngOnInit(){var e=this;return(0,v.A)(function*(){let i=e.router.getCurrentNavigation();if(null!=i&&i.extras.state&&(e.idTipo=null==i?void 0:i.extras.state.idTipoUsuario,e.idPaciente=null==i?void 0:i.extras.state.idPaciente,e.idUsuario=null==i?void 0:i.extras.state.idUsuario,e.login=null==i?void 0:i.extras.state.login,e.correo=null==i?void 0:i.extras.state.correo,e.idPersona=null==i?void 0:i.extras.state.idPersona),e.login){let c=e.apiService.getId(e.idTipo,e.idUsuario),P=yield(0,M.s)(c),C=JSON.stringify(P),b=JSON.parse(C);for(let m=0;m<b.length;m++)e.lista_respuesta.push(b[m]),e.idPaciente=e.lista_respuesta[m].IdPaciente,console.log(e.idPaciente)}else e.router.navigate(["home"])})()}buscar(){this.login=!0,this.router.navigate(["busqueda"],{state:{login:this.login,idPaciente:this.idPaciente,correo:this.correo,idUsuario:this.idUsuario,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}goHistorial(){console.log("Login: ",this.login),this.router.navigate(["atencionespaciente"],{state:{login:this.login,idPaciente:this.idPaciente,correo:this.correo,idUsuario:this.idUsuario,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}goHome(){this.login?this.router.navigate(["cliente"],{state:{login:this.login,idPaciente:this.idPaciente,correo:this.correo,idUsuario:this.idUsuario,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0}):this.router.navigate(["home"],{replaceUrl:!0})}goEditar(){this.router.navigate(["editarpaciente"],{state:{login:this.login,idPaciente:this.idPaciente,correo:this.correo,idUsuario:this.idUsuario,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}goSoporte(){this.router.navigate(["soportepaciente"],{state:{login:this.login,idPaciente:this.idPaciente,correo:this.correo,idUsuario:this.idUsuario,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}logout(){this.login=!1,this.router.navigate(["home"],{state:{login:this.login},replaceUrl:!0})}}return(a=s).\u0275fac=function(e){return new(e||a)(t.rXU(h.Ix),t.rXU(o.G))},a.\u0275cmp=t.VBU({type:a,selectors:[["app-cliente"]],decls:59,vars:0,consts:[[1,"toolbarheader"],["slot","start"],["slot","end"],[3,"click"],[1,"header-title"],[1,"logo-link",2,"color","#000000",3,"click"],["src","../../assets/icon/psicoagendalogo.png","alt","Logo",1,"header-logo"],[1,"ioncard",2,"margin-top","2.3rem"],[1,"button-agenda",3,"click"],[1,"ioncard",2,"margin-top","1.5rem"],[1,"footer-content"],[1,"footer-left"],[1,"footer-center"],[1,"footer-right"],[1,"logo-link"],["name","call-outline",1,"header-logo"],["name","logo-instagram",1,"header-logo"]],template:function(e,i){1&e&&(t.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t.nrm(3,"ion-menu-button"),t.k0s(),t.j41(4,"ion-buttons",2)(5,"ion-button",3),t.bIt("click",function(){return i.goEditar()}),t.EFF(6,"Editar datos"),t.k0s(),t.j41(7,"ion-button",3),t.bIt("click",function(){return i.goHistorial()}),t.EFF(8,"Historial de atenciones"),t.k0s(),t.j41(9,"ion-button",3),t.bIt("click",function(){return i.logout()}),t.EFF(10,"Cerrar sesi\xf3n"),t.k0s()(),t.j41(11,"ion-title",4)(12,"a",5),t.bIt("click",function(){return i.goHome()}),t.nrm(13,"img",6),t.EFF(14," PsicoAgenda "),t.k0s()()()(),t.j41(15,"ion-content")(16,"ion-card",7)(17,"ion-card-header")(18,"ion-card-title"),t.EFF(19,"Agendar cita un Psicologo"),t.k0s()(),t.j41(20,"ion-card-content")(21,"ion-card-content"),t.EFF(22," Aqui podras encontrar ayuda de diferentes psicologos "),t.k0s(),t.j41(23,"ion-button",8),t.bIt("click",function(){return i.buscar()}),t.EFF(24,"Agenda tu hora"),t.k0s()()(),t.j41(25,"ion-card",9)(26,"ion-card-header")(27,"ion-card-title"),t.EFF(28,"Soporte"),t.k0s()(),t.j41(29,"ion-card-content")(30,"ion-card-content"),t.EFF(31," Realiza consultas, cancela o reagenda tus horas "),t.k0s(),t.j41(32,"ion-button",8),t.bIt("click",function(){return i.goSoporte()}),t.EFF(33,"Ir a Soporte"),t.k0s()()(),t.j41(34,"ion-card",9)(35,"ion-card-header")(36,"ion-card-title"),t.EFF(37,"Historial"),t.k0s()(),t.j41(38,"ion-card-content")(39,"ion-card-content"),t.EFF(40," Aqui puedes revisar tu historial de atenciones "),t.k0s(),t.j41(41,"ion-button",8),t.bIt("click",function(){return i.goHistorial()}),t.EFF(42,"Ir a tu Historial"),t.k0s()()()(),t.j41(43,"ion-footer")(44,"ion-toolbar")(45,"div",10)(46,"div",11)(47,"p"),t.EFF(48,"\xa92024 - PsicoAgenda APP"),t.k0s(),t.j41(49,"p"),t.EFF(50,"Todos los Derechos Reservados"),t.k0s()(),t.nrm(51,"div",12),t.j41(52,"div",13)(53,"p",14),t.nrm(54,"ion-icon",15),t.EFF(55,"Tel\xe9fono Contacto: 920256865 "),t.k0s(),t.j41(56,"p",14),t.nrm(57,"ion-icon",16),t.EFF(58,"www.instagram.com/psicoagenda"),t.k0s()()()()())},dependencies:[r.Jm,r.QW,r.b_,r.I9,r.ME,r.tN,r.W9,r.M0,r.eU,r.iq,r.MC,r.BC,r.ai],styles:['@charset "UTF-8";[_ngcontent-%COMP%]:root{--ion-color-primary: #4a90e2;--ion-background-color: #f5f5f5}.main-banner[_ngcontent-%COMP%]{background-color:#009688;color:#000;padding:5rem;text-align:center}.main-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:2.2rem;font-weight:700}.main-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2rem;font-size:1rem}.imagen[_ngcontent-%COMP%]{max-width:80%;height:auto;width:100%;margin-left:200px}.options-list[_ngcontent-%COMP%]{flex-direction:column;width:100%;margin-top:5px}ion-title[_ngcontent-%COMP%]{text-decoration:none;color:inherit}ion-card[_ngcontent-%COMP%]{text-align:left;width:40%;margin-left:auto;margin-right:auto;background-color:#f4efef;padding:0}ion-card-title[_ngcontent-%COMP%]{color:#000;font-size:1.2em;padding:0}ion-card-content[_ngcontent-%COMP%]{padding-top:0;margin-left:auto;margin-right:auto}.button-agenda[_ngcontent-%COMP%]{font-size:.7em;width:200px;background-color:#009688}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;--background: #333;color:#fff;padding:1.5rem;font-size:.8rem;text-align:center}ion-footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{display:flexbox;justify-content:space-between;align-items:center;width:100%}ion-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]{flex:1;text-align:center;display:flex;flex-direction:column;justify-content:center}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]{text-align:right;position:absolute}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-text-color);text-decoration:none}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{--color: var(--ion-text-color)}ion-icon[_ngcontent-%COMP%]{font-size:2em;color:#009688;width:24px;height:24px}ion-toolbar[_ngcontent-%COMP%]{--padding-start: 16px;--padding-end: 16px;--background: #32E0C4}']}),s})()}];let d=(()=>{var a;class s{}return(a=s).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[h.iI.forChild(l),h.iI]}),s})(),g=(()=>{var a;class s{}return(a=s).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[f.MD,I.YN,r.bv,d]}),s})()},3366:(F,_,u)=>{u.d(_,{G:()=>r});var f=u(4438),I=u(1626);let r=(()=>{var h;class v{constructor(t){this.http=t,this.ruta="https://psicoagenda-api.azurewebsites.net/usuarios/login/",this.ruta_ps="https://psicoagenda-api.azurewebsites.net/psicologos/get_psicologos/",this.ruta_busqueda_ps="https://psicoagenda-api.azurewebsites.net/psicologos/datos_psicologo/",this.ruta_prestadores="https://prestadores.azurewebsites.net/profesionales/get_profesionales/",this.ruta_horas="https://psicoagenda-api.azurewebsites.net/psicologos/horas_psicologo/",this.ruta_detalles_citas="https://psicoagenda-api.azurewebsites.net/usuarios/get_citas_by_id",this.ruta_proxima_cita="https://psicoagenda-api.azurewebsites.net/usuarios/get_proxima_cita_by_id",this.ruta_citas_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_citas_psicologo",this.ruta_atenciones_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_atenciones_psicologo",this.ruta_historial_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_historial_psicologo",this.rutaId="https://psicoagenda-api.azurewebsites.net/usuarios/obtener_id/",this.rutaCita="https://psicoagenda-api.azurewebsites.net/paciente/agendarCita/",this.rutaRegistroPsicologo="https://psicoagenda-api.azurewebsites.net/usuarios/registro_psicologo/",this.rutaRecuperacion="https://psicoagenda-api.azurewebsites.net/usuarios/cambiar_contrasena/",this.rutaToken="https://psicoagenda-api.azurewebsites.net/usuarios/guadarToken/",this.rutaInsertarPaciente="https://psicoagenda-api.azurewebsites.net/usuarios/insertar_paciente/",this.rutaMantenedorCita="https://psicoagenda-api.azurewebsites.net/admin/buscarCita/",this.rutaBuscarUsuario="https://psicoagenda-api.azurewebsites.net/admin/buscarUsuario/",this.rutaBuscarComuna="https://psicoagenda-api.azurewebsites.net/usuarios/comuna/",this.rutaBuscarEspecialidad="https://psicoagenda-api.azurewebsites.net/psicologos/especialidad/",this.rutaEspecialidades="https://psicoagenda-api.azurewebsites.net/psicologos/allEspecialidades/",this.rutaBuscarPsicologos="https://psicoagenda-api.azurewebsites.net/psicologos/buscar_psicologos/",this.rutaComunas="https://psicoagenda-api.azurewebsites.net/usuarios/todasLasComunas/",this.rutaAsignadas="https://psicoagenda-api.azurewebsites.net/usuarios/citas_asignadas/",this.rutaPersona="https://psicoagenda-api.azurewebsites.net/usuarios/datosPaciente/",this.rutaFinalizarCita="https://psicoagenda-api.azurewebsites.net/paciente/finalizarCita/",this.rutaInsertarCitas="https://psicoagenda-api.azurewebsites.net/paciente/insertarCitas/",this.rutaBorraCita="https://psicoagenda-api.azurewebsites.net/paciente/borrarCita/"}sendEmail(t,o,n,l){return this.http.post("https://psicoagenda-api.azurewebsites.net/api/v1/email/send",{to:t,subject:o,text:n,html:l})}insertarCitas(t,o){return this.http.get(this.rutaInsertarCitas+"?fechaInicio="+t+"&fechaFin="+o).pipe()}adminCita(t,o){return this.http.get(this.rutaMantenedorCita+"?Criterio="+t+"&Dato="+o).pipe()}buscarPsicologos(t,o,n){return this.http.get(this.rutaBuscarPsicologos+"?Criterio="+t+"&Dato="+o+"&Dato2="+n).pipe()}buscarUsuario(t,o){return this.http.get(this.rutaBuscarUsuario+"?Criterio="+t+"&Dato="+o).pipe()}buscarComuna(t){return this.http.get(this.rutaBuscarComuna+"?NombreComuna="+t).pipe()}buscarEspecilidad(t){return this.http.get(this.rutaBuscarEspecialidad+"?NombreEspecialidad="+t).pipe()}citasAsignadas(t){return this.http.get(this.rutaAsignadas+"?IdPaciente="+t).pipe()}especilidades(){return this.http.get(this.rutaEspecialidades)}borrarCita(t){return this.http.get(this.rutaBorraCita+"?IdCita="+t)}obtenerComunas(){return this.http.get(this.rutaComunas)}updatePaciente(t,o,n,l,d,g,a,s,p,e){return this.http.post("https://psicoagenda-api.azurewebsites.net/usuarios/patch_paciente/",{IdPersona:t,IdDireccion:o,Calle:n,Numero:l,IdComuna:d,Telefono:g,PrimerNombre:a,SegundoNombre:s,ApellidoPaterno:p,ApellidoMaterno:e})}updatePsicologo(t,o,n,l,d,g,a,s,p,e,i,c,P,C){return this.http.post("https://psicoagenda-api.azurewebsites.net/psicologos/patch_psicologo/",{IdUsuario:t,IdPersona:o,IdDireccion:n,Calle:l,Numero:d,IdComuna:g,ValorSesion:a,Telefono:s,Descripcion:p,IdEspecialidad:e,PrimerNombre:i,SegundoNombre:c,ApellidoPaterno:P,ApellidoMaterno:C})}recuperacionClave(t,o){return this.http.get(this.rutaRecuperacion+"?CorreoElectronico="+t+"&NuevaContrasena="+o).pipe()}obtenerUsuario(t,o){return this.http.get(this.ruta+"?CorreoElectronico="+t+"&Contrasena="+o).pipe()}obtenerHoras(t,o){return this.http.get(this.ruta_horas+"?IdPsicologo="+t+"&FechaCita="+o).pipe()}listaPsicologos(){return this.http.get(this.ruta_ps).pipe()}datosPsicologo(t){return this.http.get(this.ruta_busqueda_ps+"?IdPsicologo="+t).pipe()}validarPrestadores(t){return this.http.get(this.ruta_prestadores+"?Rut="+t).pipe()}obtenerDetallesCitas(t){return this.http.get(this.ruta_detalles_citas+"?IdPaciente="+t).pipe()}datosPersona(t){return this.http.get(this.rutaPersona+"?IdPersona="+t).pipe()}obtenerProximaCita(t){return this.http.get(this.ruta_proxima_cita+"?IdPaciente="+t).pipe()}obtenerCitaPsicologo(t){return this.http.get(this.ruta_citas_psicologo+"?IdPsicologo="+t).pipe()}obtenerHistorialPsicologo(t){return this.http.get(this.ruta_historial_psicologo+"?IdPsicologo="+t).pipe()}obtenerAtencionesPsicologo(t){return this.http.get(this.ruta_atenciones_psicologo+"?IdPsicologo="+t).pipe()}createTransaction(t,o,n,l){return this.http.post("https://psicoagenda-api.azurewebsites.net/api/v1/transbank/transaction/create",{buy_order:t,session_id:o,amount:n,return_url:l})}commitTransaction(t){return this.http.put(`https://psicoagenda-api.azurewebsites.net/api/v1/transbank/transaction/commit/${t}`,{token:t})}getId(t,o){return this.http.get(this.rutaId+"?IdTipoUsuario="+t+"&IdUsuario="+o).pipe()}confirmarCita(t,o,n){return this.http.get(this.rutaCita+"?IdPaciente="+t+"&IdEstadoCita="+o+"&IdCita="+n).pipe()}finalizarCita(t,o,n){return this.http.get(this.rutaFinalizarCita+"?Tratamiento="+t+"&Diagnostico="+o+"&IdCita="+n).pipe()}registrarPsicologo(t,o,n,l,d,g,a,s,p,e,i,c,P,C,b){return this.http.post(this.rutaRegistroPsicologo,{Calle:t,Numero:o,IdComuna:n,PrimerNombre:l,SegundoNombre:d,ApellidoPaterno:g,ApellidoMaterno:a,Telefono:s,FechaNacimiento:p,CorreoElectronico:e,Contrasena:i,IdTipoUsuario:c,Rut:P,ValorSesion:C,IdEspecialidad:b})}guardarToken(t,o){return this.http.get(this.rutaToken+"?Token="+t+"&CorreoElectronico="+o).pipe()}registrarPaciente(t,o,n,l,d,g,a,s,p,e,i,c,P){return this.http.post(this.rutaInsertarPaciente,{Calle:t,Numero:o,IdComuna:n,PrimerNombre:l,SegundoNombre:d,ApellidoPaterno:g,ApellidoMaterno:a,Telefono:s,FechaNacimiento:p,CorreoElectronico:e,Contrasena:i,IdTipoUsuario:c,Rut:P})}}return(h=v).\u0275fac=function(t){return new(t||h)(f.KVO(I.Qq))},h.\u0275prov=f.jDH({token:h,factory:h.\u0275fac,providedIn:"root"}),v})()}}]);