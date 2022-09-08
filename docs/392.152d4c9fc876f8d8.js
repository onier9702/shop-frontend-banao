"use strict";(self.webpackChunkshopApp=self.webpackChunkshopApp||[]).push([[392],{4392:(W,f,p)=>{p.r(f),p.d(f,{UsersModule:()=>V});var s=p(6895),u=p(7932),i=p(433),h=p(5226),l=p.n(h),t=p(1571),_=p(6518),m=p(2013);function C(o,a){1&o&&(t.TgZ(0,"span",12),t._uU(1," Nombre Incorrecto "),t.qZA())}function x(o,a){1&o&&(t.TgZ(0,"span",12),t._uU(1," Formato Celular Incorrecto "),t.qZA())}function P(o,a){1&o&&(t.TgZ(0,"span",12),t._uU(1," Contrasena debe tener al menos 6 caracteres "),t.qZA())}let b=(()=>{class o{constructor(e,n,r,c){this.fb=e,this.router=n,this.authService=r,this.prodServ=c,this.myform=this.fb.group({name:["",[i.kI.required]],mobile:["",[i.kI.required]],password:["",[i.kI.required,i.kI.minLength(6)]]})}validField(e){return this.myform.controls[e].touched&&this.myform.controls[e].invalid}update(){console.log(this.myform.value);const{name:e,mobile:n,password:r}=this.myform.value;let c={};e.length>0&&(c.name=e),n.length>0&&(c.mobile=n),r.length>0&&(c.password=r),c.mobile||c.name||c.password?this.authService.updateUser(c).subscribe(d=>{d.uid?this.router.navigateByUrl("/user/"):l().fire("Error",d,"warning")}):l().fire("Atentamente","Debe editar o actualizar algun campo antes de enviar","info")}comeBack(){this.router.navigateByUrl("/user/")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(u.F0),t.Y36(_.e),t.Y36(m.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-profile"]],decls:25,vars:4,consts:[[1,"iconBack"],[1,"bi","bi-arrow-left",3,"click"],[1,"contenedor","animate__animated","animate__fadeIn","animate__faster"],[1,"text","text-info"],[3,"formGroup","ngSubmit"],[1,"field"],["type","text","formControlName","name","placeholder","Tu Nombre",1,"form-control"],["class","text-info text-danger",4,"ngIf"],["type","tel","formControlName","mobile","placeholder","Celular",1,"form-control"],["type","password","formControlName","password","placeholder","Contrasena",1,"form-control"],[1,"divBtn"],["type","submit",1,"btn","btn-primary"],[1,"text-info","text-danger"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"i",1),t.NdJ("click",function(){return n.comeBack()}),t.qZA()(),t.TgZ(2,"div",2)(3,"h1",3),t._uU(4,"Editar/Actualizar mi Perfil"),t.qZA(),t._UZ(5,"hr"),t.TgZ(6,"form",4),t.NdJ("ngSubmit",function(){return n.update()}),t.TgZ(7,"div",5)(8,"label"),t._uU(9,"Nombre"),t.qZA(),t._UZ(10,"input",6),t.YNc(11,C,2,0,"span",7),t.qZA(),t.TgZ(12,"div",5)(13,"label"),t._uU(14,"Celular"),t.qZA(),t._UZ(15,"input",8),t.YNc(16,x,2,0,"span",7),t.qZA(),t.TgZ(17,"div",5)(18,"label"),t._uU(19,"Contrasena"),t.qZA(),t._UZ(20,"input",9),t.YNc(21,P,2,0,"span",7),t.qZA(),t.TgZ(22,"div",10)(23,"button",11),t._uU(24," Enviar "),t.qZA()()()()),2&e&&(t.xp6(6),t.Q6J("formGroup",n.myform),t.xp6(5),t.Q6J("ngIf",n.validField("name")),t.xp6(5),t.Q6J("ngIf",n.validField("mobile")),t.xp6(5),t.Q6J("ngIf",n.validField("password")))},dependencies:[s.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".iconBack[_ngcontent-%COMP%]{margin:15px 0 0 10px}.iconBack[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer;color:#03045e;font-size:25px}.contenedor[_ngcontent-%COMP%]{margin-top:15px;padding-left:20px;padding-right:10px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}label[_ngcontent-%COMP%]{color:#023e8a;margin-bottom:5px}input[_ngcontent-%COMP%]{width:100%}.field[_ngcontent-%COMP%]{margin-bottom:20px}.divBtn[_ngcontent-%COMP%]{display:flex;justify-content:center}button[_ngcontent-%COMP%]{margin-top:10px;width:75%}"]}),o})();var g=p(4953);const Z=["inputFile"],y=function(){return{display:"none"}};function v(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"h4"),t._uU(3,"Actualizar "),t.TgZ(4,"span"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",14)(8,"i",15),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.clickIcon())}),t.qZA(),t.TgZ(9,"input",16,17),t.NdJ("change",function(r){t.CHM(e);const c=t.oxw(2);return t.KtG(c.addPhotos(r))}),t.qZA()()()}if(2&o){const e=t.oxw(2);t.xp6(5),t.Oqu(t.lcZ(6,2,e.nameProductToUpdate)),t.xp6(4),t.Q6J("ngStyle",t.DdM(4,y))}}function T(o,a){1&o&&(t.TgZ(0,"span",18),t._uU(1," Debe rellenar algun campo antes de actualizar "),t.qZA())}function M(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"form",3,4),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.updateProd())}),t.YNc(2,v,11,5,"div",5),t.TgZ(3,"label"),t._uU(4,"Nombre"),t.qZA(),t._UZ(5,"input",6),t.TgZ(6,"label"),t._uU(7,"Precio"),t.qZA(),t._UZ(8,"input",7),t.TgZ(9,"label"),t._uU(10,"Descripcion"),t.qZA(),t._UZ(11,"textarea",8),t.TgZ(12,"label"),t._uU(13,"Cantidad"),t.qZA(),t._UZ(14,"input",9),t.YNc(15,T,2,0,"span",10),t.TgZ(16,"button",11),t._uU(17,"Actualizar"),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.updateForm),t.xp6(2),t.Q6J("ngIf",e.wantToUpdate),t.xp6(13),t.Q6J("ngIf",e.message),t.xp6(1),t.Q6J("disabled",e.updateForm.invalid)}}function U(o,a){if(1&o&&(t.TgZ(0,"span",24),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("Tienes ",e.amountImg," imagen/es para subir ")}}const A=function(){return{"margin-left":"20px"}};function O(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",19),t.YNc(1,U,2,1,"span",20),t.TgZ(2,"div",21)(3,"button",22),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.uploadImg())}),t._uU(4,"Subir IMG"),t.qZA(),t.TgZ(5,"button",23),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.cancel())}),t._uU(6,"Cancelar"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.amountImg>0),t.xp6(4),t.Q6J("ngStyle",t.DdM(2,A))}}let F=(()=>{class o{constructor(e,n,r){this.prodServ=e,this.elem=n,this.fb=r,this.amountImg=0,this.showForm=!0,this.closeForm=new t.vpe,this.updatedData=new t.vpe,this.message=!1,this.updateForm=this.fb.group({name:["",[]],price:["",[]],desc:["",[]],amount:["",[i.kI.min(1)]]}),this.inputFile=n}ngOnInit(){}updateProd(){const{name:e,price:n,desc:r,amount:c}=this.updateForm.value;let d={};if(e&&(d.name=e),n&&(d.price=n),r&&(d.desc=r),c&&(d.amount=c),!(d.name||d.price||d.amount||d.desc))return this.message=!this.message,void setTimeout(()=>{this.message=!this.message},1500);this.updatedData.emit(d),this.updateForm.reset()}clickIcon(){this.inputFile.nativeElement.click()}addPhotos(e){console.log("heree");const n=e.target.files;n&&(this.amountImg=n.length,this.files=n),this.showForm=!this.showForm}cancel(){this.showForm=!this.showForm}uploadImg(){this.prodServ.uploadImages(this.id,this.files).subscribe(e=>{e.model?(this.closeForm.emit(),l().fire("Subida Exitosa","La/las fotos fueron subidas correctamente","success")):l().fire("Error",e.toString(),"error")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.s),t.Y36(t.SBq),t.Y36(i.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-update-product"]],viewQuery:function(e,n){if(1&e&&t.Gf(Z,5),2&e){let r;t.iGM(r=t.CRH())&&(n.inputFile=r.first)}},inputs:{wantToUpdate:"wantToUpdate",id:"id",nameProductToUpdate:"nameProductToUpdate"},outputs:{closeForm:"closeForm",updatedData:"updatedData"},decls:3,vars:2,consts:[[1,"contenedorUpdate","animate__animated","animate__fadeIn"],["autocomplete","off",3,"formGroup","ngSubmit",4,"ngIf"],["class","divUpload",4,"ngIf"],["autocomplete","off",3,"formGroup","ngSubmit"],["updatedData",""],["class","header",4,"ngIf"],["type","name","formControlName","name","placeholder","Nombre"],["type","text","formControlName","price","placeholder","Precio"],["type","text","rows","3","formControlName","desc","placeholder","Descripcion"],["type","number","formControlName","amount","placeholder","Existen"],["class","text text-danger",4,"ngIf"],[1,"btn","btn-primary","prod",3,"disabled"],[1,"header"],[1,"h1Sub"],[1,"uploadImgIcon"],[1,"bi","bi-camera-fill",3,"click"],["type","file","multiple","",3,"ngStyle","change"],["inputFile",""],[1,"text","text-danger"],[1,"divUpload"],["class","text text-info",4,"ngIf"],[1,"divBtn"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"ngStyle","click"],[1,"text","text-info"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,M,18,4,"form",1),t.YNc(2,O,7,3,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.showForm),t.xp6(1),t.Q6J("ngIf",!n.showForm))},dependencies:[s.O5,s.PC,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,s.rS],styles:[".contenedorUpdate[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 30px 0 0}.header[_ngcontent-%COMP%]   .uploadImgIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer;color:#0077b6;font-size:35px}.header[_ngcontent-%COMP%]   .uploadImgIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#369ed5}h2[_ngcontent-%COMP%]{color:#0077b6}label[_ngcontent-%COMP%]{margin:8px 0}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 20px 20px;width:75%}@media (max-width: 530px){form[_ngcontent-%COMP%]{width:100%}}.enun[_ngcontent-%COMP%]{display:flex;justify-content:center}input[_ngcontent-%COMP%]{color:#000;margin-bottom:7px}.divBtn[_ngcontent-%COMP%]{margin:10px}.h1Sub[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .h1Sub[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:22px}.h1Sub[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b07d62}.h1Sub[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#774936}"]}),o})();function w(o,a){1&o&&(t.TgZ(0,"span",6),t._uU(1,"debe establecer un nombre"),t.qZA())}let q=(()=>{class o{constructor(e){this.fb=e,this.bodyForm=new t.vpe,this.myform=this.fb.group({name:["",[i.kI.required]]})}ngOnInit(){}validField(e){return this.myform.controls[e].touched&&this.myform.controls[e].invalid}passBody(){this.bodyForm.emit(this.myform.value)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-category"]],outputs:{bodyForm:"bodyForm"},decls:9,vars:3,consts:[[1,"contenedor","animate__animated","animate__fadeIn","animate__faster"],["autocomplete","off",3,"formGroup","ngSubmit"],["bodyForm",""],["type","name","formControlName","name","placeholder","Nombre Categoria"],["class","form-text text-danger",4,"ngIf"],[1,"btn","btn-primary","prod",3,"disabled"],[1,"form-text","text-danger"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"form",1,2),t.NdJ("ngSubmit",function(){return n.passBody()}),t.TgZ(3,"label"),t._uU(4,"Nombre"),t.qZA(),t._UZ(5,"input",3),t.YNc(6,w,2,0,"span",4),t.TgZ(7,"button",5),t._uU(8,"Agregar Categoria"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.myform),t.xp6(5),t.Q6J("ngIf",n.validField("name")),t.xp6(1),t.Q6J("disabled",n.myform.invalid))},dependencies:[s.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".contenedor[_ngcontent-%COMP%]{margin-top:15px;padding-left:20px;padding-right:10px}h2[_ngcontent-%COMP%]{color:#0077b6}label[_ngcontent-%COMP%]{margin:8px 0}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:20px;width:75%}@media (max-width: 530px){form[_ngcontent-%COMP%]{width:100%}}.enun[_ngcontent-%COMP%]{display:flex;justify-content:center}input[_ngcontent-%COMP%]{color:#000;margin-bottom:7px}.btn[_ngcontent-%COMP%]{font-weight:bolder;font-size:17px;margin-top:15px;margin-bottom:20px;letter-spacing:3px}"]}),o})();function I(o,a){1&o&&(t.TgZ(0,"h2"),t._uU(1,"Actualizar"),t.qZA())}function J(o,a){1&o&&(t.TgZ(0,"h4"),t._uU(1,"Seleccione Producto"),t.qZA())}function N(o,a){if(1&o&&(t.TgZ(0,"option",21),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(t.lcZ(2,2,e.name))}}function S(o,a){if(1&o&&(t.TgZ(0,"select",18)(1,"option",19),t._uU(2,"-- Seleccione Producto a Actualizar --"),t.qZA(),t.YNc(3,N,3,4,"option",20),t.qZA()),2&o){const e=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",e.products)}}function Y(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"app-update-product",22),t.NdJ("updatedData",function(r){t.CHM(e);const c=t.oxw(2);return t.KtG(c.getBodyFromChild(r))})("closeForm",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.closeForm())}),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("id",e.idProduct)("wantToUpdate",e.wantToUpdate)("nameProductToUpdate",e.nameProduct)}}function k(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",12),t.YNc(1,I,2,0,"h2",13),t.TgZ(2,"form",14),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.goToUpdate())}),t.YNc(3,J,2,0,"h4",13),t.YNc(4,S,4,1,"select",15),t.YNc(5,Y,1,3,"app-update-product",16),t.TgZ(6,"button",17),t._uU(7),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!e.wantToUpdate),t.xp6(1),t.Q6J("formGroup",e.selectForm),t.xp6(1),t.Q6J("ngIf",!e.wantToUpdate),t.xp6(1),t.Q6J("ngIf",!e.wantToUpdate),t.xp6(1),t.Q6J("ngIf",e.wantToUpdate),t.xp6(1),t.Q6J("disabled",e.selectForm.invalid),t.xp6(1),t.hij(" ",e.wantToUpdate?"Ocultar":"Mostrar"," Formulario ")}}function Q(o,a){if(1&o&&(t.TgZ(0,"option",21),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(t.lcZ(2,2,e.name))}}function E(o,a){1&o&&(t.TgZ(0,"span",2),t._uU(1," Borrado correctamente "),t.qZA())}function B(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",23)(1,"div",3)(2,"form",14),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.deleteProduct())}),t.TgZ(3,"h4",24),t._uU(4,"Borrar Producto"),t.qZA(),t.TgZ(5,"select",25)(6,"option",19),t._uU(7,"-- Seleccione Producto a Eliminar --"),t.qZA(),t.YNc(8,Q,3,4,"option",20),t.qZA(),t.YNc(9,E,2,0,"span",26),t.TgZ(10,"button",27),t._uU(11," Borrar "),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("formGroup",e.myform),t.xp6(6),t.Q6J("ngForOf",e.products),t.xp6(1),t.Q6J("ngIf",e.validDeletion),t.xp6(1),t.Q6J("disabled",e.myform.invalid)}}function G(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"app-add-category",30),t.NdJ("bodyForm",function(r){t.CHM(e);const c=t.oxw(2);return t.KtG(c.addCate(r))}),t.qZA()}}function D(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",12)(1,"h2"),t._uU(2,"Agregar Categoria"),t.qZA(),t.YNc(3,G,1,0,"app-add-category",28),t.TgZ(4,"button",29),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.setFormCate())}),t._uU(5," Mostrar/Ocultar Formulario "),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",e.showHideFormAddCate)}}function z(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",31)(1,"button",32),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addProd())}),t._uU(2,"Agregar Producto"),t.qZA(),t.TgZ(3,"span",2),t._uU(4,"Solo Admin puede agregar productos"),t.qZA()()}}function H(o,a){1&o&&(t.TgZ(0,"span",15),t._uU(1,"debe establecer un nombre"),t.qZA())}function j(o,a){1&o&&(t.TgZ(0,"span",15),t._uU(1,"debe establecer un precio"),t.qZA())}function K(o,a){if(1&o&&(t.TgZ(0,"option",16),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(t.lcZ(2,2,e.name))}}const R=[{path:"",children:[{path:"profile",component:(()=>{class o{constructor(e,n,r,c,d){this.authService=e,this.router=n,this.prodServ=r,this.cateService=c,this.fb=d,this.products=[],this.validDeletion=!1,this.wantToUpdate=!1,this.idProduct="",this.nameProduct="",this.showHideFormAddCate=!1,this.myform=this.fb.group({product:["",[i.kI.required]]}),this.selectForm=this.fb.group({selectedProduc:["",[i.kI.required]]})}ngOnInit(){const e=this.cateService.getCategories;e.length?this.allCategories=e:this.cateService.initCategories().subscribe(r=>{r.total&&(this.allCategories=r.categories)}),this.userAuthenticated=this.authService.userProps,this.prodServ.products.forEach(r=>{this.products.push(r)})}editProfile(){this.router.navigateByUrl("/user/editProfile")}addProd(){this.router.navigateByUrl("/user/addProd")}setFormCate(){this.showHideFormAddCate=!this.showHideFormAddCate}addCate(e){const n=e;let r=!0;this.allCategories.forEach(c=>{c.name.toLocaleLowerCase()===n.name.toLocaleLowerCase()&&(r=!1,l().fire("Info",`Ya ha agregado una categoria con nombre ${n.name}`,"info"))}),r&&this.cateService.addCategory(n).subscribe(c=>{c.category?(this.setFormCate(),l().fire("Satisfactorio","Categoria creada","success")):l().fire("Error",c.toString(),"error")})}goToUpdate(){console.log("click");const{selectedProduc:e}=this.selectForm.value;this.idProduct=e,this.wantToUpdate=!this.wantToUpdate;const n=this.products.find(r=>r.id===e);this.nameProduct=n?.name}getBodyFromChild(e){console.log("Receiving body"),this.wantToUpdate=!this.wantToUpdate,this.selectForm.reset(),console.log("ID: ",this.idProduct),console.log("Body: ",e),this.prodServ.updateProduct(this.idProduct,e).subscribe(n=>{n.product?(this.products=this.products.filter(r=>r.id!==this.idProduct),this.products.push(n.product),l().fire("Correcto",`${n.product.name} actualizado`,"success")):l().fire("Error",n.toString(),"error")})}closeForm(){this.wantToUpdate=!this.wantToUpdate,this.selectForm.reset()}deleteProduct(){const{product:e}=this.myform.value;!e||(this.prodServ.deleteProduct(e).subscribe(n=>{n.product?this.products=this.products.filter(r=>r.id!==e):l().fire("Error",n.toString(),"error")}),this.myform.get("product")?.reset(""),this.validDeletion=!0,setTimeout(()=>{this.validDeletion=!1},2800))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.e),t.Y36(u.F0),t.Y36(m.s),t.Y36(g.G),t.Y36(i.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-my-profile"]],inputs:{updateBody:"updateBody"},decls:45,vars:8,consts:[[1,"contenedor"],[1,"userInfo"],[1,"text","text-info"],[1,"info"],[1,"header"],[1,"bi","bi-pencil-fill","edit",3,"click"],[1,"bi","bi-check2","select"],[1,"subtitle"],[1,"favorites","info"],["class","update info",4,"ngIf"],["class","delete",4,"ngIf"],["class","divAddProd",4,"ngIf"],[1,"update","info"],[4,"ngIf"],[3,"formGroup","ngSubmit"],["name","","id","","class","form-control","formControlName","selectedProduc",4,"ngIf"],[3,"id","wantToUpdate","nameProductToUpdate","updatedData","closeForm",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],["name","","id","","formControlName","selectedProduc",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"id","wantToUpdate","nameProductToUpdate","updatedData","closeForm"],[1,"delete"],[1,"h2Delete"],["name","","id","","formControlName","product",1,"form-control"],["class","text text-info",4,"ngIf"],["type","submit",1,"btn","btn-info","btn-danger",3,"disabled"],[3,"bodyForm",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],[3,"bodyForm"],[1,"divAddProd"],[1,"btn","btn-primary","prod",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3,"Mi Perfil"),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"div",3)(6,"div",4)(7,"h2"),t._uU(8,"Informacion:"),t.qZA(),t.TgZ(9,"i",5),t.NdJ("click",function(){return n.editProfile()}),t.qZA()(),t.TgZ(10,"h6")(11,"span"),t._UZ(12,"i",6),t.qZA(),t.TgZ(13,"span",7),t._uU(14," Nombre: "),t.qZA(),t.TgZ(15,"span"),t._uU(16),t.qZA()(),t.TgZ(17,"h6")(18,"span"),t._UZ(19,"i",6),t.qZA(),t.TgZ(20,"span",7),t._uU(21," Correo: "),t.qZA(),t.TgZ(22,"span"),t._uU(23),t.qZA()(),t.TgZ(24,"h6")(25,"span"),t._UZ(26,"i",6),t.qZA(),t.TgZ(27,"span",7),t._uU(28," Celular: "),t.qZA(),t.TgZ(29,"span"),t._uU(30),t.qZA()(),t.TgZ(31,"h6")(32,"span"),t._UZ(33,"i",6),t.qZA(),t.TgZ(34,"span",7),t._uU(35," Role: "),t.qZA(),t.TgZ(36,"span"),t._uU(37),t.qZA()()()(),t.TgZ(38,"div",8)(39,"h2"),t._uU(40,"Favoritos:"),t.qZA()(),t.YNc(41,k,8,7,"div",9),t.YNc(42,B,12,4,"div",10),t.YNc(43,D,6,1,"div",9),t.YNc(44,z,5,0,"div",11),t.qZA()),2&e&&(t.xp6(16),t.Oqu(n.userAuthenticated.name),t.xp6(7),t.Oqu(n.userAuthenticated.email),t.xp6(7),t.Oqu(n.userAuthenticated.mobile),t.xp6(7),t.Oqu(n.userAuthenticated.role),t.xp6(4),t.Q6J("ngIf","ADMIN_ROLE"===n.userAuthenticated.role),t.xp6(1),t.Q6J("ngIf","ADMIN_ROLE"===n.userAuthenticated.role),t.xp6(1),t.Q6J("ngIf","ADMIN_ROLE"===n.userAuthenticated.role),t.xp6(1),t.Q6J("ngIf","ADMIN_ROLE"===n.userAuthenticated.role))},dependencies:[s.sg,s.O5,i._Y,i.YN,i.Kr,i.EJ,i.JJ,i.JL,i.sg,i.u,F,q,s.rS],styles:[".contenedor[_ngcontent-%COMP%]{margin-top:15px;padding-left:20px;padding-right:20px}.userInfo[_ngcontent-%COMP%]{margin-bottom:15px}.edit[_ngcontent-%COMP%]{color:#023047;cursor:pointer;font-size:24px}.select[_ngcontent-%COMP%]{color:#0ead69}i[_ngcontent-%COMP%]{font-size:25px}h2[_ngcontent-%COMP%]{color:#219ebc}span[_ngcontent-%COMP%]{font-size:18px}.info[_ngcontent-%COMP%]{border:1px solid #969a9a;border-radius:5px;padding:15px}.info[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.subtitle[_ngcontent-%COMP%]{color:#457b9d}.favorites[_ngcontent-%COMP%]{margin-bottom:40px}.divAddProd[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding-bottom:25px}.divAddProd[_ngcontent-%COMP%]   .prod[_ngcontent-%COMP%]{margin-bottom:12px;width:75%}.update[_ngcontent-%COMP%]{margin-bottom:25px}.update[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 5px}.delete[_ngcontent-%COMP%]{margin-bottom:25px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   .h2Delete[_ngcontent-%COMP%]{color:#e94c4c}form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-bottom:16px}form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-bottom:8px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:250px}"]}),o})()},{path:"editProfile",component:b},{path:"addProd",component:(()=>{class o{constructor(e,n,r,c){this.fb=e,this.router=n,this.cateServ=r,this.prodServ=c,this.categories=[],this.myform=this.fb.group({name:["",[i.kI.required]],price:["",[i.kI.required]],category:["",[i.kI.required]],desc:["",[]],amount:["1",[i.kI.min(1)]]})}ngOnInit(){this.categories=this.cateServ.getCategories}validField(e){return this.myform.controls[e].touched&&this.myform.controls[e].invalid}addProduct(){if(this.myform.invalid)return;const e=this.myform.value;console.log(e),this.prodServ.createProduct(e).subscribe(n=>{n.product?this.router.navigateByUrl("/user/"):l().fire("Error",n.toString(),"warning")})}comeBack(){this.router.navigateByUrl("/user/")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(u.F0),t.Y36(g.G),t.Y36(m.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-product"]],decls:29,vars:5,consts:[[1,"iconBack"],[1,"bi","bi-arrow-left",3,"click"],[1,"contenedor"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"text","text-info"],[1,"allFieldsForms"],["type","name","formControlName","name","placeholder","Nombre"],["class","form-text text-danger",4,"ngIf"],["type","text","formControlName","price","placeholder","Precio"],["name","","id","","formControlName","category",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","text","rows","3","formControlName","desc","placeholder","Descripcion"],["type","number","formControlName","amount","placeholder","Existen"],[1,"btn","btn-primary","prod",3,"disabled"],[1,"form-text","text-danger"],[3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"i",1),t.NdJ("click",function(){return n.comeBack()}),t.qZA()(),t.TgZ(2,"div",2)(3,"form",3),t.NdJ("ngSubmit",function(){return n.addProduct()}),t.TgZ(4,"h1",4),t._uU(5,"Agregar Producto"),t.qZA(),t.TgZ(6,"div",5)(7,"h5"),t._uU(8,"Nombre"),t.qZA(),t._UZ(9,"input",6),t.YNc(10,H,2,0,"span",7),t.TgZ(11,"h5"),t._uU(12,"Precio"),t.qZA(),t._UZ(13,"input",8),t.YNc(14,j,2,0,"span",7),t.TgZ(15,"h5"),t._uU(16,"Categoria"),t.qZA(),t.TgZ(17,"select",9)(18,"option",10),t._uU(19,"-- Select Category --"),t.qZA(),t.YNc(20,K,3,4,"option",11),t.qZA(),t.TgZ(21,"h5"),t._uU(22,"Descripcion"),t.qZA(),t._UZ(23,"textarea",12),t.TgZ(24,"h5"),t._uU(25,"Cantidad"),t.qZA(),t._UZ(26,"input",13),t.TgZ(27,"button",14),t._uU(28,"Agregar Producto"),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.myform),t.xp6(7),t.Q6J("ngIf",n.validField("name")),t.xp6(4),t.Q6J("ngIf",n.validField("price")),t.xp6(6),t.Q6J("ngForOf",n.categories),t.xp6(7),t.Q6J("disabled",n.myform.invalid))},dependencies:[s.sg,s.O5,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.sg,i.u,s.rS],styles:[".iconBack[_ngcontent-%COMP%]{margin:15px 0 0 10px}.iconBack[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer;color:#03045e;font-size:25px}.contenedor[_ngcontent-%COMP%]{margin-top:15px;padding-left:20px;padding-right:10px}h2[_ngcontent-%COMP%]{color:#0077b6}h5[_ngcontent-%COMP%]{margin:8px 0}form[_ngcontent-%COMP%]{width:75%}@media (max-width: 768px){form[_ngcontent-%COMP%]{width:100%}}.allFieldsForms[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px 20px 20px}@media (max-width: 530px){.allFieldsForms[_ngcontent-%COMP%]{width:100%}}.allFieldsForms[_ngcontent-%COMP%]{padding-left:15px}.enun[_ngcontent-%COMP%]{display:flex;justify-content:center}input[_ngcontent-%COMP%]{color:#000;margin-bottom:7px}.btn[_ngcontent-%COMP%]{font-weight:bolder;font-size:17px;margin-top:15px;margin-bottom:20px;letter-spacing:3px}"]}),o})()},{path:"**",redirectTo:"profile"}]}];let X=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(R),u.Bz]}),o})();var $=p(2825);let V=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,i.UX,X,$.DashboardModule]}),o})()}}]);