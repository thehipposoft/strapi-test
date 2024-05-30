"use strict";(self.webpackChunkstrapi_test=self.webpackChunkstrapi_test||[]).push([[6049],{16049:(x,D,s)=>{s.d(D,{ProtectedSSO:()=>V});var t=s(92132),g=s(42455),R=s(38413),L=s(55356),h=s(85963),m=s(4198),A=s(83997),v=s(30893),M=s(90151),E=s(68074),C=s(7441),I=s(43739),c=s(95336),O=s(56654),o=s(2129),B=s(54514),K=s(61535),j=s(54894),d=s(12083),r=s(84811),y=s(19983),q=s(15126),ss=s(63299),ts=s(67014),as=s(59080),os=s(79275),_s=s(14718),ns=s(21272),ls=s(82437),es=s(5790),Es=s(35223),is=s(5409),ds=s(74930),rs=s(2600),Ms=s(48940),Os=s(41286),Ps=s(56336),Ds=s(13426),gs=s(84624),Rs=s(77965),Ls=s(54257),hs=s(71210),ms=s(51187),As=s(39404),vs=s(58692),Cs=s(501),Is=s(57646),cs=s(23120),Bs=s(44414),Ks=s(25962),Ws=s(14664),Ts=s(42588),fs=s(90325),Us=s(62785),us=s(87443),xs=s(41032),js=s(22957),ys=s(93179),Ss=s(73055),ps=s(15747),Vs=s(85306),zs=s(26509),Fs=s(32058),Ns=s(81185),Xs=s(82261);const S=d.Ik().shape({autoRegister:d.lc().required(o.iW.required),defaultRole:d.gl().when("autoRegister",(a,_)=>a?_.required(o.iW.required):_.nullable()),ssoLockedRoles:d.YO().nullable().of(d.gl().when("ssoLockedRoles",(a,_)=>a?_.required(o.iW.required):_.nullable()))}),p=()=>{(0,o.L4)();const{formatMessage:a}=(0,j.A)(),_=(0,r.j)(e=>e.admin_app.permissions),{lockApp:z,unlockApp:F}=(0,o.MA)(),W=(0,o.hN)(),{_unstableFormatAPIError:N,_unstableFormatValidationErrors:X}=(0,o.wq)(),{isLoading:H,data:Q}=(0,r.W)(),[Y,{isLoading:$}]=(0,r.X)(),{isLoading:G,allowedActions:{canUpdate:T,canReadRoles:J}}=(0,o.ec)({..._.settings?.sso,readRoles:_.settings?.roles.read??[]}),{roles:U,isLoading:Z}=(0,y.u)(void 0,{skip:!J}),k=async(e,P)=>{z();try{const n=await Y(e);if("error"in n){(0,r.x)(n.error)&&n.error.name==="ValidationError"?P.setErrors(X(n.error)):W({type:"warning",message:N(n.error)});return}W({type:"success",message:{id:"notification.success.saved"}})}catch{W({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred, please try again."}})}finally{F()}},u=Z||G||H;return(0,t.jsxs)(g.P,{children:[(0,t.jsx)(o.x7,{name:"SSO"}),(0,t.jsx)(R.g,{"aria-busy":$||u,tabIndex:-1,children:(0,t.jsx)(K.l1,{onSubmit:k,initialValues:Q||{autoRegister:!1,defaultRole:null,ssoLockedRoles:null},validationSchema:S,validateOnChange:!1,enableReinitialize:!0,children:({handleChange:e,isSubmitting:P,values:n,setFieldValue:b,dirty:w,errors:i})=>(0,t.jsxs)(o.lV,{children:[(0,t.jsx)(L.Q,{primaryAction:(0,t.jsx)(h.$,{disabled:!w,loading:P,startIcon:(0,t.jsx)(B.A,{}),type:"submit",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),(0,t.jsx)(m.s,{children:P||u?(0,t.jsx)(o.Bl,{}):(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[(0,t.jsx)(v.o,{variant:"delta",as:"h2",children:a({id:"global.settings",defaultMessage:"Settings"})}),(0,t.jsxs)(M.x,{gap:4,children:[(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(C.l,{disabled:!T,checked:n.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:e})}),(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(I.l,{disabled:!T,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:i.defaultRole?a({id:i.defaultRole,defaultMessage:i.defaultRole}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:l=>e({target:{name:"defaultRole",value:l}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:n.defaultRole,children:U.map(({id:l,name:f})=>(0,t.jsx)(c.c,{value:l.toString(),children:f},l))})}),(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(O.KF,{disabled:!T,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:i.ssoLockedRoles?a({id:i.ssoLockedRoles,defaultMessage:i.ssoLockedRoles}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:l=>e({target:{value:l,name:"ssoLockedRoles"}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>b("ssoLockedRoles",[]),value:n.ssoLockedRoles||[],withTags:!0,children:U.map(({id:l,name:f})=>(0,t.jsx)(O.fe,{value:l.toString(),children:f},l))})})]})]})})]})})})]})},V=()=>{const a=(0,r.j)(_=>_.admin_app.permissions.settings?.sso?.main);return(0,t.jsx)(o.kz,{permissions:a,children:(0,t.jsx)(p,{})})}},19983:(x,D,s)=>{s.d(D,{u:()=>h});var t=s(21272),g=s(2129),R=s(54894),L=s(84811);const h=(m={},A)=>{const{locale:v}=(0,R.A)(),M=(0,g.QM)(v,{sensitivity:"base"}),{data:E,error:C,isError:I,isLoading:c,refetch:O}=(0,L.z)(m,A);return{roles:t.useMemo(()=>[...E??[]].sort((B,K)=>M.compare(B.name,K.name)),[E,M]),error:C,isError:I,isLoading:c,refetch:O}}}}]);
