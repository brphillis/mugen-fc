var e = {
    533: (e) => {
      //SECTION: PLAYER ANIMATIONS
      e.exports =
        'AIRLoader=function(){"use strict";function t(){this.initialize.apply(this,arguments)}t.prototype={constructor:t,initialize:function(t){this._actions={},this._list=[],this._parse(t)},_parse:function(t){var o=this._actions,u=this._list;t.replace(/^(?:;(.+)\\r\\n)?\\[Begin +Action +(-?\\d+)\\]([\\s\\S]+?)((?=^(;.+\\r\\n)?\\[.+\\])|(?![\\s\\S]))/gim,function(t,e,n,i){n=Number(n),o[n]||(t=new r(n,i,e,t),u.push(t),o[n]=t)})},getCount:function(){return this.list.length},getAction:function(t){return void 0!==t?this._actions[t]:this._actions},getList:function(){return this._list.concat()},getDescription:function(t){return e[t]}};class r{constructor(t,e,n,i){this.number=t,this.comment=n,this.raw=Function("str","return () => str")(i),this._elements=[],this._elementMap=new Map,this._getByTicksRepository=new Map,this.index=0,this.elementCount=0,this.loopIndex=0,this.frames=0,this.end=!1,this.mugenComputedAllFrames=[],this.mugenComputedElementCount=0,this.mugenComputedLoopElementIndex=0,this.mugenComputedLoopStartFrame=0,this.mugenComputedTotalTicks=0,this.mugenComputedFiniteAction=!1,this.mugenComputedFreezedAction=!1,this.mugenComputedLastElement=null,this.mugenComputedInvalidAction=!1,this._parse(e)}_parse(t){var w,A=this._elements,k=this._elementMap,T={1:null,2:null},_={1:null,2:null},b=null,v=0,y=0,F=!1,H=null,D=0,E=0,I=0,R=0;for(w of t.matchAll(/^\\s*Clsn([12]|)(?:(Default)?[^\\S\\n]*:[^\\S\\n]*(\\d+)|\\[(\\d+)\\][^\\S\\n]*=[^\\S\\n]*([-\\d]+)[^\\S\\n]*,[^\\S\\n]*([-\\d]+)[^\\S\\n]*,[^\\S\\n]*([-\\d]+)[^\\S\\n]*,[^\\S\\n]*([-\\d]+))|^[^\\S\\n]*(Loopstart)|^[^\\S\\n]*Interpolate[^\\S\\n]+(Offset|Blend|Scale|Angle)(?:$|\\s|;)|^\\s*(-?\\d+)[^\\n,]*,[^\\S\\n]*(-?\\d+)[^\\n,]*,[^\\S\\n]*([-+]?[^\\S\\n]*\\d+)[^\\n,]*,[^\\S\\n]*([-+]?[^\\S\\n]*\\d+)[^\\n,]*,[^\\S\\n]*([-+]?[^\\S\\n]*\\d+)(?:[^\\S\\n]*,[^\\S\\n]*([VH ]*)(?:[^\\S\\n]*,[^\\S\\n]*([ASD\\d ]*)(?:[^\\S\\n]*,[^\\S\\n]*([\\.\\d ]*)(?:[^\\S\\n]*,[^\\S\\n]*([\\.\\d ]*)(?:[^\\S\\n]*,[^\\S\\n]*([\\-\\.\\d ]*))?)?)?)?)? *(?:;.*)?$/gim)){let[,t,e,n,i,o,u,r,s,m,a,d,l,h,p,g,c="",C="",S="",f="",L=""]=w;if(n)n=Number(n),v=t||v,e?T[v]=b=new Array(n):_[v]=b=new Array(n);else if(i)try{b[i]=[Number(o),Number(u),Number(r),Number(s)]}catch(t){}else if(m)this.loopIndex||(this.loopIndex=A.length+1),this.mugenComputedLoopElementIndex||(this.mugenComputedLoopElementIndex=this._elementMap.size+1);else if(a)a=a.toLowerCase(),(H=H||{})[a]=!0;else{var x=0<=c.indexOf("V"),N=0<=c.indexOf("H");C=C&&(/^\\s*S\\s*$/i.test(C)?[-1]:/^\\s*A\\s*$/i.test(C)?[256,256]:/^\\s*A1\\s*$/i.test(C)?[256,128]:(V=/^\\s*AS(\\d)+D(\\d+)\\s*/i.exec(C))?[Number(V[1])||0,Number(V[2])||0]:null);var B=Number(S)||1,M=Number(f)||1,z=Number(L)||0,G=0|Number(g.replace(/\\s/g,""));-1==G?D=-1:D+=G;let t=G;var J=I;0<(R+=G)&&0<G?(t=R,I+=t,R=0):t=-1;var $,O=_[1]||T[1],V=_[2]||T[2];for($ of[O,V])if($)for(let t=$.length;t--;)$[t]instanceof Array||$.splice(t,1);z={number:A.length+1,clsn1:O,clsn2:V,group:Number(d),index:Number(l),x:Number(h.replace(/\\s/g,"")),y:Number(p.replace(/\\s/g,"")),ticks:G,tickSum:y,mugenComputedTicks:t,mugenComputedLoopStartIndicatedTick:E,mugenComputedActualStartTick:J,flipV:x,flipH:N,blend:C,scaleX:B,scaleY:M,angle:z,interpolate:H,isLast:!1};A.push(z),k.set(z.number,z),E+=G,F||(this.elementCount++,G<0?(y+=1,F=!0):y+=G),_[1]=b=null,H=_[2]=null}}this.elementCount&&(A[this.elementCount-1].isLast=!0),this.loopIndex=this.loopIndex||1,this.totalTicks=y,this.notLoop=F,this.mugenComputedElementCount=k.size,this.mugenComputedLoopStartElementIndex=this.mugenComputedLoopElementIndex||1,this.mugenComputedLoopStartElement=k.get(this.mugenComputedLoopElementIndex),this.mugenComputedLoopStartFrame=(this.mugenComputedLoopStartElement||{}).mugenComputedLoopStartIndicatedTick||0,this.mugenComputedTotalTicks=D,this.mugenComputedFiniteAction=-1===D,this.mugenComputedFreezedAction=D<=-2,this.mugenComputedLastElement=k.get(k.size),this.mugenComputedLastStartFrame=(this.mugenComputedLastElement||{}).mugenComputedActualStartTick||0,this.mugenComputedLoopTicks=0<this.mugenComputedTotalTicks?this.mugenComputedTotalTicks-this.mugenComputedLoopStartFrame:0,this.mugenComputedInvalidAction=0===D,this.mugenComputedInvalidAction&&this.mugenComputedElementCount,this.mugenComputedAllFrames=this._createMugenComputedFrames()}_createMugenComputedFrames(){if(1e5<Math.max(this.mugenComputedTotalTicks,this.mugenComputedLastStartFrame))return this.mugenComputedAllFrameCount=0<this.mugenComputedTotalTicks?this.mugenComputedTotalTicks:this.mugenComputedLastStartFrame+1,null;var t,n,i=[];for([t,n]of this._elementMap){let e=n.mugenComputedTicks;if(-1===e&&n===this.mugenComputedLastElement&&(e=1),!(e<=0))for(let t=0;t<e;t++)i.push(n)}return this.mugenComputedAllFrameCount=i.length,i}getElement(t){return void 0===t?this._elements:this._elementMap.get(t)}getElementByTicks(t){if(this._getByTicksRepository.has(t))return this._getByTicksRepository.get(t);if(0===t)return this._elements[0];for(var e of this._elements)if(e.tickSum<t&&(t<=e.tickSum+e.ticks||e.isLast))return this._getByTicksRepository.set(t,e),e;return null}getMugenComputedElementByTicks(t){var e=this.mugenComputedLastElement,n=e.mugenComputedActualStartTick;if(n<=t){if(this.mugenComputedFiniteAction||this.mugenComputedInvalidAction)return e;n=t-(n+e.ticks);if(n<0)return e;n%=this.mugenComputedLoopTicks,t=this.mugenComputedLoopStartFrame+n}return this.mugenComputedAllFrames?this.mugenComputedAllFrames[t]||e:this._findMugenComputedElement(t)}get description(){return e[this.number]||""}_findMugenComputedElement(t){if(this._getByTicksRepository.has(t))return this._getByTicksRepository.get(t);for(var[e,n]of this._elementMap)if(!(n.mugenComputedTicks<=0)&&n.mugenComputedActualStartTick<=t&&t<=n.mugenComputedActualStartTick+n.mugenComputedTicks)return this._getByTicksRepository.set(t,n),n;return null}}const e={0:"Standing",5:"Stand turning",6:"Crouch turning",10:"Stand to crouch",11:"Crouching",12:"Crouch to stand",20:"Walking forwards",21:"Walking backwards",40:"Jump start (on ground)",41:"Jump neutral (upwards)",42:"Jump forwards (upwards)",43:"Jump back (upwards)",44:"Jump neutral (downwards)",45:"Jump fwd (downwards)",46:"Jump back (downwards)",47:"Jump landing",100:"Run fwd/hop forward",105:"Hop back",120:"Start guarding (stand)",121:"Start guarding (crouch)",122:"Start guarding (air)",130:"Guard (stand)",131:"Guard (crouch)",132:"Guard (air)",140:"Stop guarding (stand)",141:"Stop guarding (crouch)",142:"Stop guarding (air)",150:"Guarding a hit (stand)",151:"Guarding a hit (crouch)",152:"Guarding a hit (air)",170:"Lose",175:"Time Over drawgame",180:"Win",190:"Intro",195:"Taunt",5e3:"Stand/Air Hit high (light)",5001:"Stand/Air Hit high (medium)",5002:"Stand/Air Hit high (hard)",5005:"Stand Recover high (light)",5006:"Stand Recover high (medium)",5007:"Stand Recover high (hard)",5010:"Stand/Air Hit low (light)",5011:"Stand/Air Hit low (medium)",5012:"Stand/Air Hit low (hard)",5015:"Stand Recover low (light)",5016:"Stand Recover low (medium)",5017:"Stand Recover low (hard)",5020:"Crouch Hit (light)",5021:"Crouch Hit (medium)",5022:"Crouch Hit (hard)",5025:"Crouch Recover (light)",5026:"Crouch Recover (medium)",5027:"Crouch Recover (hard)",5030:"Stand/Air Hit back",5035:"Stand/Air Hit transition",5040:"Air Recover",5050:"Air Fall",5060:"Air Fall (coming down)",5070:"Tripped",5080:"LieDown Hit (stay down)",5090:"LieDown Hit (hit up into air)",5100:"Hitting ground from fall",5160:"Bounce into air",5170:"Hit ground from bounce",5110:"LieDown",5120:"Get up from LieDown",5140:"LieDead (first rounds)",5150:"LieDead (final round)",5200:"Fall-recovery near ground",5210:"Fall-recovery in mid-air",5300:"Dizzy",5500:\'"Continue?" screen\',5510:\'"Yes" to "Continue"\',5520:\'"No" to "Continue"\',5051:"Air fall -- hit up",5061:"Coming down from hit up",5081:"LieDown Hit (stay down)",5101:"Bounce from ground into air",5161:"Bounce into air",5171:"Hit ground from bounce",5111:"LieDown",5121:"Get up from LieDown",5151:"LieDead (first rounds)",5156:"LieDead (final round)",5052:"Air fall -- hit up",5062:"Coming down from hit up",5082:"LieDown Hit (stay down)",5102:"Bounce from ground into air",5162:"Bounce into air",5172:"Hit ground from bounce",5112:"LieDown",5122:"Get up from LieDown",5152:"LieDead (first rounds)",5157:"LieDead (final round)"};return t}();';
    },
    339: (e) => {
      e.exports =
        'CMDLoader=function(){"use strict";const g={F:"B",UF:"UB",DF:"DB",B:"F",UB:"UF",DB:"DF",U:"U",D:"D"},K={B:["B","UB","DB"],F:["F","UF","DF"],D:["D","DB","DF"],U:["U","UB","UF"],DF:["DF","D","F"],DB:["DB","D","B"],UF:["UF","U","F"],UB:["UB","U","B"]},a={U:["ArrowUp"],D:["ArrowDown"],B:["ArrowLeft"],F:["ArrowRight"],a:["KeyZ"],b:["KeyX"],c:["KeyC"],x:["KeyA"],y:["KeyS"],z:["KeyD"],s:["Digit1","Enter"]};class i{constructor(e,s,{time:t,buffertime:r}){if(this.name=e.replace(/^"|"$/g,""),this.string=s,this.time=Number(t)||15,this.buffertime=Number(r)||1,this.phases=this._parseCommand(s),0===this.phases.length)throw new Error(`could not find command string: "${s}"`)}_parseCommand(d){var h,l=[],m=null;for(h of d.matchAll(/(>)?(?:(~)(\\d*)|(\\/))?(\\$)?(?:(B|DB|D|DF|F|UF|U|UB)|([abcxyzs\\+ ]+))[^\\S\\n]*(?:,|\\n|$)[^\\S\\n]*|(.+)?/g)){let[,s,t,r,a,i,n,o,e]=h;if(e)throw new Error(`unknown command string:"${e}" of "${d}"`);if(o=o&&o.match(/[abcxyzs]/g)||null,n||o){let e={exclusive:Boolean(s),release:Boolean(t),releaseTicks:Number(r)||0,hold:Boolean(a),threeway:Boolean(i),direction:n||"",buttons:o};e.direction&&m&&e.direction===m.direction&&(e.release||m.release||(l.push(Object.assign({},m,{exclusive:!0,release:!0})),e.exclusive=!0)),l.push(e),m=e}}return l}test(e={},i,t,n,o=!1){var{success:d=!1,phase:h=0,ticks:l=0,waitSimulButtonTicks:m=0,succeededSimulButtons:c=null}=e,u=this.phases[h],f=!1,_=!1;e:if(++l>this.time)f=!0;else{var y=u.direction;let s=u.buttons,r=s||u.threeway&&K[y]||[y],a=!1;if(u.hold)a=s?r.every(e=>i.has(o&&g[e]||e)):r.some(e=>i.has(o&&g[e]||e));else if(u.release){let e=0;if(y){for(var p of r)if(t.has(o&&g[p]||p)){a=!0,e=t.get(o&&g[p]||p)||0;break}}else s&&(a=s.every(e=>t.has(o&&g[e]||e)),e=s.map(e=>t.get(o&&g[e]||e)).reduce((e,s)=>Math.min(e||0,s||0)));if(a&&e<u.releaseTicks){f=!0;break e}}else if(s)m+=n.size,c=c||new Set,r.forEach(e=>{i.has(e)&&(c.has(e)||n.has(e)&&c.add(e))}),a=m<=0&&r.length===c.size,a||0<m--&&(_=!0,l--);else{y=this.phases[h-1]||{};let t=y.direction&&y.release;a=r.some(e=>{e=o&&g[e]||e;var s=i.get(e);if(s&&!(s.holdtime>(t?1:0)))return i.has(e)})}if(a)_=!0,m=0,c=null,this.phases[++h]||(d=!0);else if(u.exclusive)for(let[s,e]of i)if(s=o&&g[s]||s,r.some(e=>e!==s)){f=!0;break e}}return f||!_&&!h?null:{updated:_,success:d,waitSimulButtonTicks:m,succeededSimulButtons:c,phase:h,ticks:l}}}class t{constructor(e,s,t){this._loader=e,this._observer=s,this._keyMap=this.createNewKeyMap(),this._rawPressedKeys=new Set,this._pressdByOutside=new Set,this._pressedKeys=new Map,this._releasedKeys=new Map,this._freshPressedKeys=new Set,this._ongoingCommands=new Map,this._successfulCommands=new Map,this._cancelledCommands_=[]}check(e,s){this._rawPressedKeys.clear(),this._releasedKeys.clear(),this._freshPressedKeys.clear(),this._cancelledCommands_.length=0;for(var[t,r]of this._successfulCommands)--r<=0?this._successfulCommands.delete(t):this._successfulCommands.set(t,r);var a,i,n,o,d,h,l,m,c=this._rawPressedKeys,u=new Set;for([a,i]of this._keyMap){let e=!1;for(var f of i)if(e=this._observer.isPressing(f),e){c.add(a);break}e||u.add(a)}for(n of["U","D"])for(var _ of["F","B"])c.has(n)&&c.has(_)?(c.add(n+_),u.add(n),u.add(_)):u.add(n+_);for(o of u)this._pressdByOutside.has(o)||(0<(d=(this._pressedKeys.get(o)||{}).starttime)&&this._releasedKeys.set(o,e-d),this._pressedKeys.delete(o));for(h of[...c,...this._pressdByOutside])u.has(h)&&!this._pressdByOutside.has(h)||(this._pressedKeys.has(h)?(l=this._pressedKeys.get(h).starttime,this._pressedKeys.set(h,{starttime:l,holdtime:e-l})):(this._pressedKeys.set(h,{starttime:e,holdtime:0}),this._freshPressedKeys.add(h)));for(m of this._loader.getCommands()){var y=this._ongoingCommands.get(m),p=m.test(y,this._pressedKeys,this._releasedKeys,this._freshPressedKeys,-1===s);if(p){if(!p.success){this._ongoingCommands.set(m,p);continue}this.setSuccessfulCommand(m.name,m.buffertime)}else y&&this._cancelledCommands_.push(m);this._ongoingCommands.delete(m)}}setSuccessfulCommand(e,s){this._successfulCommands.set(e,s||2)}pressKeys(e=[]){for(var s of e)this._pressdByOutside.add(s)}releaseKeys(e=[]){for(var s of e)this._pressdByOutside.delete(s)}isActiveCommand(e){return this._successfulCommands.has(e)}isActiveKey(e){return this._pressedKeys.has(e)}isPressed(e){return this._rawPressedKeys.has(e)}createNewKeyMap(e){var s,t=new Map;for(s in a){var r=e&&e[s]||a[s];t.set(s,new Set(r instanceof Array?r:[r])),this._observer.observeKeycode(r)}return t}clearKeyMap(){for(var e of this._keyMap)e.clear()}setKeyMap(t){var r,e,a=this._keyMap;for([r,e]of t){let s=a.get(r);if(s){s.clear();let e=t.get(r);e&&e.forEach(e=>s.add(e))}}}addKeyMap(s){var t,r,a=this._keyMap;for(t in s){let e=a.get(t);e&&((r=s[t])&&e.add(r))}}getPressedKeys_(){return[...this._pressedKeys.keys()]}getReleasedKeys_(){return[...this._releasedKeys.keys()]}getUpdatedCommands_(e){var s,t,r=[];for([s,t]of this._ongoingCommands)(e||t.updated)&&r.push(`${s.name}[${t.phase}]`);return r}getCancelledCommands_(){var e,s=[];for(e of this._cancelledCommands_)s.push(e.name);return s}getSuccessfulCommands_(){return this._successfulCommands}refreshObserver(){this._observer.reloadGamePads()}}return class{constructor(e){this._commands=new Set,this._parse(e),this.raw=Function("str","return () => str")(e)}_parse(e){for(var s of e.matchAll(/^[^\\S\\n]*\\[Command\\b[^\\]\\n]*\\][^\\S\\n]*(?:;([^\\n]*))?\\n([\\s\\S]+?)((?=^[^\\S\\n]*\\[.+)|(?![\\s\\S]))/gim)){let[,,e]=s,t={};for(var r of e.matchAll(/^[^\\S\\n]*(name|command|time|buffer\\.time)[^\\S\\n]*=[^\\S\\n]*([^;\\n]*?)\\s*(;.*)?$/gim)){let[,e,s]=r;t[e.toLowerCase().replace(/\\./,"")]=s}try{var a=new i(t.name,t.command,t);this._commands.add(a)}catch(e){}}}getCommands(){return this._commands}createController(e,s){return new t(this,e,s)}}}();';
    },
    143: (e) => {
      e.exports =
        'CNSLoader=function(){"use strict";var r=function(t){this.raw=Function("str","return () => str")(t),this._data={data:Object.create(r.ConstPrototypes.data),size:Object.create(r.ConstPrototypes.size),velocity:Object.create(r.ConstPrototypes.velocity),movement:Object.create(r.ConstPrototypes.movement),quotes:Object.create(r.ConstPrototypes.quotes)},this._parse(t)};return r.prototype={_parse(t){for(var e of t.matchAll(/^[^\\S\\n]*\\[([^\\]\\r\\n]+)\\][^\\S\\n]*(?:;[\\S\\r]*)?\\n([\\s\\S]+?)((?=^[^\\S\\n]*\\[.+)|(?![\\s\\S]))/gim)){let[,r,t]=e;r=r.toLowerCase();let o=this._data[r];if(o)for(var a of t.matchAll(/^[^\\S\\n]*([\\w\\.]+)[^\\S\\n]*=[^\\S\\n]*([^;]*?)[^\\S\\n]*(;.*)?$/gim)){let[,t,e=""]=a;t=t.toLowerCase(),e=e.replace(/^\\s+|\\s+$/g,""),t in o!=!1&&("velocity"===r||o[t]instanceof Array?o[t]=e.replace(/\\s/g,"").split(",").map(t=>Number(t)):/^[\\-\\d\\.\\s]+$/.test(e)?o[t]=Number(e):o[t]=e)}}},get:function(t,e){if(t=t.toLowerCase(),e=e.toLowerCase(),!this._data[t])throw new Error(`the section "[${t}]" doesn\'t exists.`);return this._data[t][e]},set:function(t,e,r){t=t.toLowerCase(),e=e.toLowerCase(),this._data[t]=this._data[t]||{},this._data[t][e]=r},clone:function(){var t,e=new r("");for(t in this._data)Object.assign(e._data[t],this._data[t]);return e},getStates:function(){}},r.ConstPrototypes={data:{life:1e3,power:3e3,attack:100,defence:100,"fall.defence_up":50,"liedown.time":60,airjuggle:15,sparkno:2,"guard.sparkno":40,"KO.echo":0,volume:0,IntPersistIndex:60,FloatPersistIndex:40},size:{xscale:1,yscale:1,"ground.back":15,"ground.front":16,"air.back":12,"air.front":12,height:60,"attack.dist":160,"proj.attack.dist":90,"proj.doscale":0,"head.pos":[-5,-90],"mid.pos":[-5,-60],shadowoffset:0,"draw.offset":[0,0]},velocity:{"walk.fwd":2.4,"walk.back":-2.2,"run.fwd":[4.6,0],"run.back":[-4.5,-3.8],"jump.neu":[0,-8.4],"jump.back":-2.55,"jump.fwd":2.5,"runjump.back":[-2.55,-8.1],"runjump.fwd":[4,-8.1],"airjump.neu":[0,-8.1],"airjump.back":-2.55,"airjump.fwd":2.5,"air.gethit.groundrecover":[-.15,-3.5],"air.gethit.airrecover.mul":[.5,.2],"air.gethit.airrecover.add":[0,-4.5],"air.gethit.airrecover.back":-1,"air.gethit.airrecover.fwd":0,"air.gethit.airrecover.up":-2,"air.gethit.airrecover.down":1.5},movement:{"airjump.num":1,"airjump.height":35,yaccel:.44,"stand.friction":.85,"crouch.friction":.82,"stand.friction.threshold":2,"crouch.friction.threshold":.05,"jump.changeanim.threshold":0,"air.gethit.groundlevel":25,"air.gethit.groundrecover.ground.threshold":-20,"air.gethit.groundrecover.groundlevel":10,"air.gethit.airrecover.threshold":-1,"air.gethit.airrecover.yaccel":.35,"air.gethit.trip.groundlevel":15,"down.bounce.offset":[0,20],"down.bounce.yaccel":.4,"down.bounce.groundlevel":12,"down.friction.threshold":.05},quotes:{victory1:"You must defeat Tu Shou to stand a chance.",victory2:"You need a lot of training. Come back in ten years.",victory3:"You look familiar. Did I see you on TV?",victory4:"Your moves are too predictable. You want to learn Kung Fu Palm? It\'s not for novices.",victory5:"That was a good workout.",victory6:"I want to challenge more skilled fighters.",victory7:"What do you mean my girlfriend is in another temple?"},"ja.quotes":{victory1:"�J���t�[�˂����j��ʌ���A���O�ɏ����ڂ͂Ȃ��I",victory2:"��N�����񂾂�",victory3:"���O�͌��o��������ȁB�e���r�ɂł��c�H",victory4:"���O�̓����͌��j��₷������B�@�ȂɁA�J���t�[�˂��肪�o�������񂾂ƁH�@�f�l�ɂ͖�������",victory5:"�Ӂ[�B�@������������",victory6:"�����Ƌ�������ɒ��킵����",victory7:"�Ȃ񂾂ƁI�ޏ��͂����ɂ����Ȃ��ƁH"}},r}();';
    },
    638: (e) => {
      e.exports = "";
    },
    845: (e) => {
      e.exports =
        '!function(){"use strict";var a=this;function e(e,t){var n,r=e.split("."),i=a;r[0]in i||!i.execScript||i.execScript("var "+r[0]);for(;r.length&&(n=r.shift());)r.length||void 0===t?i=i[n]||(i[n]={}):i[n]=t}var f={c:function(e,t,n){return f.update(e,0,t,n)},update:function(e,t,n,r){var i=f.a,a="number"==typeof n?n:n=0,r="number"==typeof r?r:e.length;for(t^=4294967295,a=7&r;a--;++n)t=t>>>8^i[255&(t^e[n])];for(a=r>>3;a--;n+=8)t=(t=(t=(t=(t=(t=(t=(t=t>>>8^i[255&(t^e[n])])>>>8^i[255&(t^e[n+1])])>>>8^i[255&(t^e[n+2])])>>>8^i[255&(t^e[n+3])])>>>8^i[255&(t^e[n+4])])>>>8^i[255&(t^e[n+5])])>>>8^i[255&(t^e[n+6])])>>>8^i[255&(t^e[n+7])];return(4294967295^t)>>>0},d:function(e,t){return(f.a[255&(e^t)]^e>>>8)>>>0},b:[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]};f.a="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array&&"undefined"!=typeof DataView?new Uint32Array(f.b):f.b,e("Zlib.CRC32",f),e("Zlib.CRC32.calc",f.c),e("Zlib.CRC32.update",f.update)}.call(this);';
    },
    50: (e) => {
      e.exports =
        'var DEFLoader=function(){"use strict";function t(t){this.raw=Function("str","return () => str")(t),this._init(),this._parse(t)}return t.prototype={_init:function(){this._data={info:{},files:{},"palette keymap":{},arcade:{}}},_parse:function(t){var a=[],r=[],n=this._data;t.replace(/^\\s*\\[(.+)\\]([\\s\\S]+?)(?:(?=^\\s*\\[.+\\])|(?![\\s\\S]))/gim,function(t,e,s){e=e.toLowerCase();var i=n[e]={};s.replace(/^\\s*([\\w.\\-]+)[^\\S\\n]*=[^\\S\\n]*(.+?)[^\\S\\n]*(;.*)?$/gim,function(t,e,s){var n;(s=s.replace(/\\s*;.*$|\\s+$/g,""))&&(/^(-?\\d?\\.?\\d+)( *, *-?\\d?\\.?\\d+)*$/.test(s)&&1===(s=s.split(",").map(t=>Number(t))).length&&(s=s[0]),/^".+"$/.test(s)&&(s=s.replace(/^"|"$/g,"")),i[e.toLowerCase()]=s,(n=/pal(\\d+)/i.exec(e))&&(a[n[1]]=s),(n=/st(\\d+)/i.exec(e))&&(r[n[1]]=s))})}),this._palettes=a,r.unshift(n.files.st),r.push(n.files.cmd),r.push(n.files.stcommon),this._states=r;t=null;n.info.hasOwnProperty("localcoord")&&((t=!((t=Number(n.info.localcoord))instanceof Array)?n.info.localcoord=[t]:t)[0]&&0<t[0]||(t=null)),t||(n.info.localcoord=[320,240])},getData:function(){return this._data},getSection:function(t){return this._data[t]},get:function(t,e){return t=t.toLowerCase(),e=e.toLowerCase(),this._data[t][e]},put:function(t,e,s){t=t.toLowerCase(),e=e.toLowerCase(),this._data[t]=this._data[t]||{},this._data[t][e]=s},getSFF:function(){return this._data.files.sprite},getAIR:function(){return this._data.files.anim},getSND:function(){return this._data.files.sound},getCNS:function(){return this._data.files.cns},getState:function(t){return 0<arguments.length?("number"==typeof t?this._states:this._data.files)[t]:this._states},getCMD:function(){return this._data.files.cmd},getACT:function(t){return 0===arguments.length?this._palettes:this._palettes[t]}},t}();';
    },
    171: (e) => {
      e.exports =
        'var _jsmugen=_jsmugen||{};_jsmugen.Expression=function(){"use strict";class a{static parseCommaSeparatedExpressions(e){for(var t=[];e;){var r=new a(e,{multi:!0});t.push(r),e=r.nextExpression}return t}static generateBottom(e,t){return 0}constructor(e="",{multi:t}={}){e=String(e),this._exptext=e,this.evaluatedText="",this.nodes=null,this._index=-1,this.currentToken="",this.currentTokenType=NaN,this._buildTokens(e),this.nodes=e?this.buildExpNodes():0;e=this.vomit();if(this.evaluatedText=this._tokens.slice(0,this._index+1).join(""),e)if(/^\\s*(;|$)/.test(e))this.comment=e.slice(1).replace(/^\\s+|\\s+$/g,"");else{if(!t||","!==this.moveToNextToken())throw new Error(\'syntax error: "\'+e+\'"\');this.comment="",this.nextExpression=this.vomit()}else this.comment=""}isPrimitive(){var e=typeof this.nodes;return/string|number/.test(e)&&e}toPrimitive(){return this.isPrimitive()?this.nodes:this}_buildTokens(e){var t,r=[],i=[];for(t of(e=e.replace(/^\\s+/,"")).matchAll(/((?:[a-z][a-z\\d_]*\\.)+[a-z][a-z\\d_]*)|([a-z]+(?:[\\d]+[a-z]+)*)|((?:\\d*\\.\\d+|\\d+\\.\\d*|\\d+))|(~|\\-|\\*{2}|\\*|\\/|%|\\+|>=|>|<=|<|&{2}|&|\\^{2}|\\^|\\|{2}|\\||!=|:=|=|!)|(\\[)|(\\])|(")|(\\()|(\\))|(,)|(;)|(\\.)|(\\s+)|(.+?)/gi)){r.push(t[0]);var s=t.findIndex((e,t)=>t&&e);i.push(s)}this._tokens=r,this._tokenTypes=i}buildExpNodes(e=0){for(var t,r=o["="]===e,i=this.getFactor(r);t=this.lookNextToken();){var s=o[t];if(void 0===s)break;if(":="===t){if(!/^(var|fvar)$/i.test(i.triggerName))throw new Error(\'left-term of assignment operator ":=" must be one of "var","fvar" triggers\');if(s<e)break}else if(s<=e)break;if("!"!==t){this.moveToNextToken();let e=new u(t);e.left=i,e.right=this.buildExpNodes(s),i=e}else{this.moveToNextToken();let e=new u("unary");e.unaryOperator=t,e.child=i,i=e}}return i}getFactor(t){var r=this.moveToNextToken();switch(this.currentTokenType){case 8:var i=this.buildExpNodes(),s=this.lookNextToken();if(")"!==s){if(!t)throw new Error(\'it needs to be ")": "\'+s+\'"\');i=this._getIntervalExpressions("(",i)}else this.moveToNextToken();break;case 5:if(!t)throw new Error(\'interval operators must follow "=" or "!="\');i=this.buildExpNodes(),i=this._getIntervalExpressions("[",i);break;case 3:i=Number(r);break;case 7:let e=this.consumedSpaces;for(;\'"\'!==this.moveToNextToken(!0);){if(0===this.currentTokenType)throw new Error(\'double quotes (") not terminated before end of expression\');e+=this.currentToken}this.consumeSpaces(),i=e;break;case 2:i=this._parseFunctionTypeTrigger(r);break;default:if(/!|~|-/.test(r)){if("-"===r&&3===this.lookNextTokenType())return-this.getFactor();(i=new u("unary")).unaryOperator=r,i.child=this.getFactor();break}throw new Error(\'unexpected token: "\'+r+\'" type:\'+this.currentTokenType)}return i}_getIntervalExpressions(e,t){var r=this.moveToNextToken();if(","!==r)throw new Error(\'expected "," with the interval operator:\'+r);var i=this.buildExpNodes(),r=this.moveToNextToken();if(!/^(\\]|\\))$/.test(r))throw new Error(\'expected ")" or "]" with the interval operator\');let s=new u(e+r);return s.left=t,s.right=i,s}_parseFunctionTypeTrigger(e){e=e.toLowerCase();var t=this._parseTriggerDirection(e);if(t){if(e=this.moveToNextToken(),2!==this.currentTokenType)throw new Error("expected a function-type trigger after trigger-direction: "+e);e=e.toLowerCase()}if(!a.FunctionTypeTriggers[e])throw new Error(\'unknown function-type trigger name: "\'+e+\'"\\n\'+this._exptext);e=e.toLowerCase();var r=a.FunctionTypeTriggers[e],i=new u("trigger");switch(i.triggerName=r.name,i.triggerType=r.type,r.type){case"var":i.args=[];break;case"varXY":i.args=this._parseXYVariableTrigger(r);break;case"old":i.args=this._parseOldTrigger(r),i.old=!0;break;default:if(r.type&&"standard"!==r.type)throw new Error("unknown trigger type: "+r.type);i.args=this._parseStandardTrigger(r),i.triggerType="standard"}return i.direction=t,i}_parseTriggerDirection(e){if(!i[e])return null;var t=new u("direction"),r=0;if(t.dirname=e,!/^(parent|root|partner)$/.test(e))if("("===this.lookNextToken()){this.moveToNextToken();r=this.buildExpNodes();if(")"!==this.moveToNextToken())throw new Error(\'expcted ")"\')}else if("playerid"===e)throw new Error(\'Trigger direction "playerID" needs an argument\');t.argument=r;r=this.moveToNextToken();if(","!==r)throw new Error(\'expected "," after trigger direction(\'+e+\'): "\'+r+\'"\');return t}_parseStandardTrigger(e){var t=[],r=e.args||1;if("("!==this.lookNextToken()){if(e.optargs)return t;throw new Error("trigger "+e.name+\' expected "("\')}if(this.moveToNextToken(),/^(const|gethitvar)$/.test(e.name))t.push(this._parseConstParameter(e));else for(;r--;)if(t.push(this.buildExpNodes()),r){var i=this.moveToNextToken();if(","!==i)throw new Error(\'expected "," between trigger arguments: "\'+i+\'"\')}if(")"!==this.moveToNextToken())throw new Error("trigger "+e.name+\' expected ")": \'+this._exptext);return t}_parseXYVariableTrigger(e){var t=this.moveToNextToken();if(!/^[XY]$/i.test(t))throw new Error(\'varXY type trigger needs "X" or "Y" parameter: \'+this.currentToken);return[t.toLowerCase()]}_parseConstParameter(e){var t=this.moveToNextToken();if(1!==this.currentTokenType&&("gethitvar"!==e.name||2!==this.currentTokenType))throw new Error("unexpected parameter for "+e.fname+" trigger: "+this.currentToken);return t.toLowerCase()}_parseOldTrigger(r){var i=[],s=new u;switch(r.name){case"animelem":{if("="!==this.moveToNextToken()&&!/=/.test(this.currentToken))throw new Error(r.fname+\' trigger must be followed by "="\');var t=this.getFactor(!0);let e=0;if("number"!=typeof t)throw new Error(r.fname+" trigger recognizes only number: "+t);s.type="=";e:{var a=this.lookNextToken();if(","===a)this.moveToNextToken();else if(-1===r.operators.indexOf(a)||!/\\s*[!=><]+\\s*\\d+\\s*($|;)/.test(this.vomit()))break e;a=this._getAllowableOperator(r,!0);if(e=this.getFactor(!0),"number"!=typeof e)throw new Error(r.fname+" trigger recognizes only number: "+e);s.type=a||"="}i.push(s,t,e);break}case"authorname":case"command":case"name":case"p1name":case"p2name":case"p3name":case"p4name":case"stagevar":{let e;if("stagevar"===r.name){if("("!==this.moveToNextToken())throw new Error(\'expected "("\');if(e=this.moveToNextToken(),!/^(info\\.name|info\\.displayname|info\\.author)/i.test(e))throw new Error(\'expected one of the parameter "info.name, info.displayname, info.author": \'+e);if(")"!==this.moveToNextToken())throw new Error(\'expected ")"\');e=e.toLowerCase().split(".")[1]}var o=this._getAllowableOperator(r),t=this.getFactor(!0);if("string"!=typeof t)throw new Error("the argument for "+r.fname+\' trigger must be "string"\');s.type=o,s.right=t,i.push(s,e);break}case"hitdefattr":{var n=this._getAllowableOperator(r);let e=this.lookNextToken();if(","===e)e="";else{if(!/^[SCA]+$/i.test(e))throw new Error("the 1st argument for "+r.fname+\' trigger is recognized only "S,C,A" characters: \'+e);this.moveToNextToken()}for(i.push(n,e.toUpperCase());","===this.lookNextToken();){this.moveToNextToken();let e=this.moveToNextToken();if(!/^[NSHA][ATP]$/i.test(e))throw new Error("the arguments in the second or later for "+r.fname+" triggers are recognized only /[NSH][AT]/i character format: "+e);i.push(e.toUpperCase())}if(i.length<=2)throw new Error(r.fname+" needs more than 2 arguments:"+i);break}case"movetype":case"p2movetype":case"statetype":case"p2statetype":var n=this._getAllowableOperator(r),h=this.moveToNextToken().toUpperCase();if(-1===r.component.indexOf(h))throw new Error("argument for "+r.fname+\' trigger is recognized only one of "\'+r.component+\'" characters: \'+h);s.type=n,s.right=h,i.push(s);break;case"projcontact":case"projguarded":case"projhit":{let e=this.moveToNextToken(),t=0;h="("===e;if(h&&(e=this.moveToNextToken()),/^\\d+$/.test(e)&&(t=Number(e),e=this.moveToNextToken()),h){if(")"!==e)throw new Error(\'expected ")"\');e=this.moveToNextToken()}if("="!==e&&!/=/.test(e))throw new Error(r.fname+\' trigger must be followed by "="\');h=this.moveToNextToken();if(!/^[01]$/.test(h))throw new Error("the 1st argument for "+r.fname+\' trigger is recognized only one of "0,1" boolean value: \'+h);if(","===this.lookNextToken()){this.moveToNextToken();var g=this._getAllowableOperator(r,!0),l=this.getFactor(!0);if("number"!=typeof l)throw new Error(r.fname+" trigger recognizes only number: "+l);s.type=g||"=",s.right=l}else s.type="=",s.right=0;i.push(s,t);break}case"teammode":{var c=this._getAllowableOperator(r);let e=this.moveToNextToken();if(!/^(single|simul|turns)$/i.test(e))throw new Error("argument for "+r.fname+\' trigger is recognized only one of "single,simul,turns" words: \'+e);s.type=c,s.right=e.toUpperCase(),i.push(s);break}case"timemod":g=this._getAllowableOperator(r),l=this.moveToNextToken();if(!/^\\d+$/.test(l))throw new Error("argument for "+r.fname+" trigger must be positive number: "+l);if(","!==this.moveToNextToken())throw new Error(\'expected ",": \'+this.currentToken);c=this.moveToNextToken();if(3!==this.currentTokenType)throw new Error(\'expected a number instead of "\'+c+\'"\');s.type=g,s.right=Number(c),i.push(s,Number(l))}return i}_getAllowableOperator(e,t){var r=e.operators,i=this.lookNextToken();if(-1!==r.indexOf(i))return this.moveToNextToken(),i;if(t)return!1;throw new Error(e.fname+\' trigger expects only one of "\'+r+\'" operators: \'+i+" :"+this._exptext)}consumeSpaces(){for(this.consumedSpaces="";13===this._tokenTypes[this._index+1];)this._index++,this.consumedSpaces+=this._tokens[this._index]}lookNextToken(){return this._tokens[this._index+1]||""}lookNextTokenType(){return this._tokenTypes[this._index+1]||0}moveToNextToken(e){return this._index+1<=this._tokenTypes.length&&(this.currentTokenType=this._tokenTypes[++this._index]||0,this.currentToken=this._tokens[this._index]||"",e||this.consumeSpaces()),this.currentToken}vomit(e){return this._tokens.slice(e?0:this._index+1).join("")}calculate(e){return this.nodes.valueOf(e)}toString(){return this.evaluatedText}}a.prototype.valueOf=a.prototype.evaluate=a.prototype.calculate;const o={"||":10,"^^":20,"&&":30,"|":40,"^":50,"&":60,":=":70,"=":80,"!=":80,"<":100,">":100,"<=":100,">=":100,"+":110,"-":110,"*":120,"/":120,"%":120,"**":130,"!":140},i={parent:function(){},root:function(){},partner:function(){},helper:function(){},target:function(){},enemy:function(){},enemynear:function(){},playerid:function(){}};a.BOTTOM=new Number(0),a.BOTTOM.toString=()=>"BOTTOM",a.isBottom=e=>a.BOTTOM===e;class u{constructor(e,t,r){this.type=e,this.value,this.left=t,this.right=r}valueOf(t){switch(this.type){case"||":r=this.left.valueOf(t)||this.right.valueOf(t)?1:0;break;case"^^":r=this.left.valueOf(t)^this.right.valueOf(t)?1:0;break;case"&&":r=this.left.valueOf(t)&&this.right.valueOf(t)?1:0;break;case"|":r=this.left.valueOf(t)|this.right.valueOf(t);break;case"^":r=this.left.valueOf(t)^this.right.valueOf(t);break;case"&":r=this.left.valueOf(t)&this.right.valueOf(t);break;case"=":case"!=":r=this._checkIntervalOperator(this.type,t);break;case">":r=this.left.valueOf(t)>this.right.valueOf(t)?1:0;break;case">=":r=this.left.valueOf(t)>=this.right.valueOf(t)?1:0;break;case"<":r=this.left.valueOf(t)<this.right.valueOf(t)?1:0;break;case"<=":r=this.left.valueOf(t)<=this.right.valueOf(t)?1:0;break;case"+":r=this.left.valueOf(t)+this.right.valueOf(t);break;case"-":r=this.left.valueOf(t)-this.right.valueOf(t);break;case"*":r=this.left.valueOf(t)*this.right.valueOf(t);break;case"/":var e=this.right.valueOf(t),r=0===e?a.generateBottom("divided by 0",this):this.left.valueOf(t)/e;break;case"%":var i=this.right.valueOf(t);r=0===i?a.generateBottom("divided by 0",this):this.left.valueOf(t)%i;break;case"**":i=this.left.valueOf(t);r=i<0?a.generateBottom("evaluated the square root of a negative number",this):Math.pow(i,this.right.valueOf(t));break;case"unary":switch(this.unaryOperator){case"-":r=-this.child.valueOf(t);break;case"~":r=~this.child.valueOf(t);break;case"!":r=this.child.valueOf(t)?0:1}break;case":=":{r=this.right.valueOf(t);var s=this.left.args[0].valueOf(t);let e=this.left._getTriggerRedirection(t);switch(this.left.triggerName){case"var":e.var[s]=r;break;case"fvar":e.fvar[s]=r;break;case"sysvar":e.sysvar[s]=r;break;case"sysfvar":e.fsysvar[s]=r;break;default:throw new Error("unknown variable trigger: "+this.left.name)}break}case"string":r=this.value;break;case"trigger":r=this._calculateTrigger(t);break;default:throw new Error("unexpected ExpNode type: "+this.type)}return r}_checkIntervalOperator(e,t){var r,i=this.right.type,s=this.left.valueOf(t);switch(i){case"()":r=this.right.left.valueOf(t)<s&&s<this.right.right.valueOf(t);break;case"(]":r=this.right.left.valueOf(t)<s&&s<=this.right.right.valueOf(t);break;case"[]":r=this.right.left.valueOf(t)<=s&&s<=this.right.right.valueOf(t);break;case"[)":r=this.right.left.valueOf(t)<=s&&s<this.right.right.valueOf(t);break;default:r=s===this.right.valueOf(t)}return("!="===e?!r:r)?1:0}_calculateTrigger(e){var t=e;if(!(e=this._getTriggerRedirection(e)))return a.generateBottom("nonexistent trigger redirection",this);var r=this.args,i=[];if("cond"===this.triggerName||this.old)i=r.concat([t]);else for(var s of r)i.push(s.valueOf(t));return a.FunctionTypeTriggers[this.triggerName].calc.apply(e||game.emptyPlayer,i)}_getTriggerRedirection(e){var t=this.direction;if(!t)return e;if(t)switch(t.dirname){case"parent":e=e.parent;break;case"root":e=e.root;break;case"partner":e=e.partner;break;case"helper":e=e.helpersRoot.getFirstValue(t.argument?t.argument.valueOf(e):null);break;case"target":e=e.targets.getFirstValue(t.argument?t.argument.valueOf(e):null);break;case"enemy":e=e.game.getEnemy(e);break;case"enemynear":e=e.game.getEnemyNear(e);break;case"playerid":e=e.game.players.get(t.argument.valueOf(e));break;default:throw new Error("unknown trigger-redirection:"+t.dirname)}return e}toString(){var e="";switch(this.type){case"||":case"^^":case"&&":case"|":case"^":case"&":case">":case">=":case"<":case"<=":case"+":case"!=":case"-":case"*":case"/":case"%":case"**":case":=":e="("+this.left.toString()+this.type+this.right.toString()+")";break;case"unary":e=this.unaryOperator+"("+this.child.toString()+")";break;case"string":e=\'"\'+this.value+\'"\';break;case"trigger":var t=this.triggerName,r=this.direction&&this.direction.dirname+","||"",i=a.FunctionTypeTriggers[t].type,s=a.FunctionTypeTriggers[t].fname;switch(i){case"var":e=s;break;case"varXY":e="("+s+" "+this.args[0].toString()+")";break;case"old":e=s+"(*old*)";break;default:e=s+"("+this.args[0].toString()+")"}e=r+e}return e}}return a}();';
    },
    100: (e) => {
      e.exports =
        '!function(t){"use strict";t.FunctionTypeTriggers={abs:{name:"abs",fname:"Abs",type:"standard",args:1,calc:function(e){return Math.abs(e)}},acos:{name:"acos",fname:"Acos",args:1,calc:function(e){return Math.acos(e)}},ailevel:{name:"ailevel",fname:"AILevel",type:"var",calc:function(){return 0}},alive:{name:"alive",fname:"Alive",type:"var",calc:function(){return 1}},anim:{name:"anim",fname:"Anim",type:"var",calc:function(){return this.action?this.action.number:-1}},animelem:{name:"animelem",fname:"AnimElem",type:"old",operators:["=","!=","<",">","<=",">="],calc:function(e,t,a=0){if(!this.action)return 0;t=this.action.getElement(t);if(!t)return 0;t=t?t.mugenComputedActualStartTick:0;return e.left=this.animTick,e.right=t+a,e.valueOf()}},animelemno:{name:"animelemno",fname:"AnimElemNo",args:1,calc:function(e){return this.action?this.action.getMugenComputedElementByTicks(this.animTick+e).number:0}},animelemtime:{name:"animelemtime",fname:"AnimElemTime",args:1,calc:function(e){if(!this.action)return 0;e=this.action.getElement(e);if(!e)return 0;e=e.mugenComputedActualStartTick;return this.animTick-e}},animexist:{name:"animexist",fname:"AnimExist",args:1,calc:function(e){return this.AIR.getAction(e)?1:0}},animtime:{name:"animtime",fname:"AnimTime",type:"var",calc:function(){return this.action?this.animTick-this.action.mugenComputedTotalTicks:0}},asin:{name:"asin",fname:"Asin",calc:function(e){return Math.asin(e)}},atan:{name:"atan",fname:"Atan",calc:function(e){return Math.atan(e)}},authorname:{name:"authorname",fname:"AuthorName",type:"old",operators:["=","!="],calc:function(e,t){return e.left=this.authorName,e.valueOf(t)}},backedge:{name:"backedge",fname:"BackEdge",type:"var",calc:function(){return-this.facing*this.game.stage.width/2}},backedgebodydist:{name:"backedgebodydist",fname:"BackEdgeBodyDist",type:"var",calc:function(){return(-this.facing*this.game.stage.width/2-this.x)*-this.facing}},backedgedist:{name:"backedgedist",fname:"BackEdgeDist",type:"var",calc:function(){return(-this.facing*this.game.stage.width/2-this.x)*-this.facing}},bottomedge:{name:"bottomedge",fname:"BottomEdge",type:"var",calc:function(){return this.root.game.stage.height-(this.root.game.stage.baseline+this.y)}},camerapos:{name:"camerapos",fname:"CameraPos",type:"varXY",calc:function(e){return this.game.stage["camera"+e.toUpperCase()]}},camerazoom:{name:"camerazoom",fname:"CameraZoom",type:"var",calc:function(){return this.game.stage.cameraZoom}},canrecover:{name:"canrecover",fname:"CanRecover",type:"var",calc:function(){return 1}},ceil:{name:"ceil",fname:"Ceil",type:"standard",args:1,calc:function(e){return Math.ceil(e)}},command:{name:"command",fname:"Command",type:"old",operators:["=","!="],calc:function(e){return(this.controller.isActiveCommand(e.right)?"="===e.type:"!="===e.type)?1:0}},cond:{name:"cond",fname:"Cond",type:"standard",args:3,calc:function(e,t,a,n){return(e.valueOf(this)?t:a).valueOf(this)}},const:{name:"const",fname:"Const",args:1,calc:function(e){var t,a=this,n=(e=e.split(".")).shift();let r=e.join("."),i=a.CNS.get(n,r);return void 0===i&&(t=e.pop(),r=e.join("."),i="x"===t?(i=a.CNS.get(n,r),i instanceof Array?i[0]:i||0):"y"===t?("jump"===r?r="jump.neu":"airjump"===r&&(r="airjump.neu"),i=a.CNS.get(n,r),i instanceof Array?i[1]:i||0):0),i}},const240p:{name:"const240p",fname:"Const240p",args:1,calc:function(e){return e*(this.DEF.get("info","localcoord")[0]/320)}},const480p:{name:"const480p",fname:"Const480p",args:1,calc:function(e){return e*(this.DEF.get("info","localcoord")[0]/640)}},const720p:{name:"const720p",fname:"Const720p",args:1,calc:function(e){return e*(this.DEF.get("info","localcoord")[0]/1280)}},cos:{name:"cos",fname:"Cos",calc:function(e){return Math.cos(e)}},ctrl:{name:"ctrl",fname:"Ctrl",type:"var",calc:function(){return this.ctrl}},drawgame:{name:"drawgame",fname:"DrawGame",type:"var",calc:function(){return 0}},e:{name:"e",fname:"E",type:"var",calc:function(){return Math.E}},exp:{name:"exp",fname:"Exp",calc:function(e){return Math.pow(Math.E,e)}},facing:{name:"facing",fname:"Facing",type:"var",calc:function(){return this.facing}},floor:{name:"floor",fname:"Floor",calc:function(e){return Math.floor(e)}},frontedge:{name:"frontedge",fname:"FrontEdge",type:"var",calc:function(){return this.facing*this.game.stage.width/2}},frontedgebodydist:{name:"frontedgebodydist",fname:"FrontEdgeBodyDist",type:"var",calc:function(){return(this.facing*this.game.stage.width/2-this.x)*this.facing}},frontedgedist:{name:"frontedgedist",fname:"FrontEdgeDist",type:"var",calc:function(){return(this.facing*this.game.stage.width/2-this.x)*this.facing}},fvar:{name:"fvar",fname:"FVar",calc:function(e){return this.fvar[e]}},gameheight:{name:"gameheight",fname:"GameHeight",type:"var",calc:function(){return this.root.game.stage.height}},gametime:{name:"gametime",fname:"GameTime",type:"var",calc:function(){return this.game.gameTime}},gamewidth:{name:"gamewidth",fname:"GameWidth",type:"var",calc:function(){return this.root.game.stage.width}},gethitvar:{name:"gethitvar",fname:"GetHitVar",args:1,calc:function(e){var t=this.receivedHit;if(!t)return 0;let a=t.hitdef,n=0;switch(e){case"yaccel":n=this.CNS.get("movement","air.gethit.airrecover.yaccel");break;case"type":var r=a["ground.type"]||"H";n={N:0,H:1,L:2,T:3}[r];break;case"animtype":r=(a.animtype||"L").substring(0,1);n={L:0,M:1,H:2,B:3,U:4,D:5}[r];break;case"groundtype":n=a["ground.type"]||"H";break;case"airtype":n=a["air.type"]||a["ground.type"]||"H";break;case"fall":n=0<this.vy;break;case"xveladd":case"yveladd":n=0;break;case"hitcount":n=1;break;case"fallcount":n=0;break;case"hitshaketime":n=t.hitshaketime;break;case"hittime":n=t.hittime;break;case"slidetime":n=t.slidetime;break;case"ctrltime":n=t.ctrltime;break;case"recovertime":n=t.recovertime;break;case"xoff":case"yoff":n=0;break;case"xvel":n=a["ground.velocity"][0];break;case"yvel":n=a["ground.velocity"][1];break;case"chainid":n=0;break;case"guarded":n=t.guarded;break;case"isbound":n=t.isbound;break;case"damage":n=t.damage}return n}},hitcount:{name:"hitcount",fname:"HitCount",type:"var",calc:function(){return 0}},hitdefattr:{name:"hitdefattr",fname:"HitDefAttr",type:"old",operators:["=","!="],calc:function(e,t,a){var n=this.stateLimitedData.set("HitDef");if(!n)return 0;n.attr;return 0}},hitfall:{name:"hitfall",fname:"HitFall",type:"var",calc:function(){return 0}},hitover:{name:"hitover",fname:"HitOver",type:"var",calc:function(){return this.hitTime?0:1}},hitpausetime:{name:"hitpausetime",fname:"HitPauseTime",type:"var",calc:function(){return this.pauseTime||0}},hitshakeover:{name:"hitshakeover",fname:"HitShakeOver",type:"var",calc:function(){return 1}},hitvel:{name:"hitvel",fname:"HitVel",type:"varXY",calc:function(e){return 0}},id:{name:"id",fname:"ID",type:"var",calc:function(){return this.id}},ifelse:{name:"ifelse",fname:"IfElse",args:3,calc:function(e,t,a){return e?t:a}},inguarddist:{name:"inguarddist",fname:"InGuardDist",type:"var",calc:function(){return this.isInGuardDist()?1:0}},ishelper:{name:"ishelper",fname:"IsHelper",args:1,optargs:1,calc:function(e){return!this.parent||arguments.length&&this.helperId!==e?0:1}},ishometeam:{name:"ishometeam",fname:"IsHomeTeam",type:"var",calc:function(){return 1}},leftedge:{name:"leftedge",fname:"LeftEdge",type:"var",calc:function(){return-this.root.game.stage.width/2}},life:{name:"life",fname:"Life",type:"var",calc:function(){return this.life}},lifemax:{name:"lifemax",fname:"LifeMax",type:"var",calc:function(){return this.CNS.get("data","life")}},ln:{name:"ln",fname:"Ln",calc:function(e){return Math.log(e)}},log:{name:"log",fname:"Log",args:2,calc:function(e,t){return Math.log(t)/Math.log(e)}},lose:{name:"lose",fname:"Lose",type:"var",calc:function(){return 0}},loseko:{name:"lose",fname:"LoseKO",type:"var",calc:function(){return 0}},losetime:{name:"losetime",fname:"LoseTime",type:"var",calc:function(){return 0}},matchno:{name:"matchno",fname:"MatchNo",type:"var",calc:function(){return 1}},matchover:{name:"matchover",fname:"MatchOver",type:"var",calc:function(){return 0}},movecontact:{name:"movecontact",fname:"MoveContact",type:"var",calc:function(){return this.stateLimitedData.get("MoveContact")?1:0}},moveguarded:{name:"moveguarded",fname:"MoveGuarded",type:"var",calc:function(){return this.stateLimitedData.get("MoveGuarded")?1:0}},movehit:{name:"movehit",fname:"MoveHit",type:"var",calc:function(){return this.stateLimitedData.get("MoveHit")?1:0}},movetype:{name:"movetype",fname:"MoveType",type:"old",operators:["=","!="],component:["A","I","H"],calc:function(e){return e.left=this.movetype,e.valueOf()}},movereversed:{name:"movereversed",fname:"MoveReversed",type:"var",calc:function(){return this.stateLimitedData.get("MoveReversed")?1:0}},name:{name:"name",fname:"Name",type:"old",operators:["=","!="],calc:function(e){return e.left=this.name,e.valueOf()}},numenemy:{name:"numenemy",fname:"NumEnemy",type:"var",calc:function(){return 1}},numexplod:{name:"numexplod",fname:"NumExplod",args:1,optargs:1,calc:function(e){return arguments.length?(this.explods.getById(e)||{}).size||0:this.explods.size}},numhelper:{name:"numhelper",fname:"NumHelper",args:1,optargs:1,calc:function(...e){return this.root.getNumHelper(e[0])}},numpartner:{name:"numpartner",fname:"NumPartner",type:"var",calc:function(){return 0}},numproj:{name:"numproj",fname:"NumProj",type:"var",calc:function(){return this.isHelper?0:this.projectiles.size}},numprojid:{name:"numprojid",fname:"NumProjID",args:1,calc:function(e){return this.isHelper?0:this.projectiles.sizeById(e)}},numtarget:{name:"numtarget",fname:"NumTarget",args:1,optargs:1,calc:function(){return 0}},p1name:{name:"p1name",fname:"P1Name",type:"old",operators:["=","!="],calc:function(e){return t.FunctionTypeTriggers.name.calc.apply(this,arguments)}},p2bodydist:{name:"p2bodydist",fname:"P2BodyDist",type:"varXY",calc:function(e){return(this.game.getRelativePlayer(2,this)[e]-this[e])*("y"===e?1:this.facing)}},p2dist:{name:"p2dist",fname:"P2Dist",type:"varXY",calc:function(e){return(this.game.getRelativePlayer(2,this)[e]-this[e])*("y"===e?1:this.facing)}},p2life:{name:"p2life",fname:"P2Life",type:"var",calc:function(){return this.game.getRelativePlayer(2,this).life}},p2movetype:{name:"p2movetype",fname:"P2MoveType",type:"old",operators:["=","!="],component:["A","I","H"],calc:function(e,t){var a=this.game.getRelativePlayer(2,this);return e.left=a.movetype,e.valueOf(t)}},p2name:{name:"p2name",fname:"P2Name",type:"old",operators:["=","!="],calc:function(e,t){var a=this.game.getRelativePlayer(2,this);return e.left=a.name||"",e.valueOf(t)}},p2stateno:{name:"p2stateno",fname:"P2StateNo",type:"var",calc:function(){return this.game.getRelativePlayer(2,this).stateNo}},p2statetype:{name:"p2statetype",fname:"P2StateType",type:"old",operators:["=","!="],component:["S","C","A","L"],calc:function(e,t){var a=this.game.getRelativePlayer(2,this);return e.left=a.type||"",e.valueOf(t)}},p3name:{name:"p3name",fname:"P3Name",type:"old",operators:["=","!="],calc:function(e,t){var a=this.game.getRelativePlayer(2,this);return e.left=a.name||"",e.valueOf(t)}},p4name:{name:"p4name",fname:"P4Name",type:"old",operators:["=","!="],calc:function(e,t){var a=this.game.getRelativePlayer(2,this);return e.left=a.name||"",e.valueOf(t)}},palno:{name:"palno",fname:"PalNo",type:"var",calc:function(){return 1}},parentdist:{name:"parentdist",fname:"ParentDist",type:"varXY",calc:function(e){var t=this.parent;return t?(t[e]-this[e])*("y"===e?1:this.facing):0}},pi:{name:"pi",fname:"Pi",type:"var",calc:function(){return Math.PI}},pos:{name:"pos",fname:"Pos",type:"varXY",calc:function(e){return"x"===e?this.x:this.y}},power:{name:"power",fname:"Power",type:"var",calc:function(){return this.power}},powermax:{name:"powermax",fname:"PowerMax",type:"var",calc:function(){return this.CNS.get("data","power")}},playeridexist:{name:"playeridexist",fname:"PlayerIDExist",args:1,calc:function(e){for(var[t]of this.root.game.players)if(t.id==e)return 1;return 0}},prevstateno:{name:"prevstateno",fname:"PrevStateNo",type:"var",calc:function(){return this.prevStateNo}},projcanceltime:{name:"projcanceltime",fname:"ProjCancelTime",args:1,calc:function(e){return-1}},projcontact:{name:"projcontact",fname:"ProjContact",type:"old",operators:["=","!=","<",">","<=",">="],calc:function(e,t){return 0}},projcontacttime:{name:"projcontacttime",fname:"ProjContactTime",args:1,calc:function(e){return-1}},projguarded:{name:"projguarded",fname:"ProjGuarded",type:"old",operators:["=","!=","<",">","<=",">="],calc:function(e,t){return 0}},projguardedtime:{name:"projguardedtime",fname:"ProjGuardedTime",args:1,calc:function(e){return-1}},projhit:{name:"projhit",fname:"ProjHit",type:"old",operators:["=","!=","<",">","<=",">="],calc:function(e,t){return 0}},projhittime:{name:"projhittime",fname:"ProjHitTime",args:1,calc:function(e){return-1}},random:{name:"random",fname:"Random",type:"var",calc:function(){return 1e3*Math.random()|0}},rightedge:{name:"rightedge",fname:"RightEdge",type:"var",calc:function(){return this.root.game.stage.width/2}},rootdist:{name:"rootdist",fname:"RootDist",type:"varXY",calc:function(e){return this.parent?(this.root[e]-this[e])*("y"===e?1:this.facing):0}},roundno:{name:"roundno",fname:"RoundNo",type:"var",calc:function(){return this.game.roundNumber}},roundsexisted:{name:"roundsexisted",fname:"RoundsExisted",type:"var",calc:function(){return this.game.roundNumber-1}},roundstate:{name:"roundstate",fname:"RoundState",type:"var",calc:function(){return this.root.game.roundState}},screenpos:{name:"screenpos",fname:"ScreenPos",type:"varXY",calc:function(e){return"x"===e?this.x+this.game.stage.centerAxis:this.y+this.game.stage.baseline}},screenheight:{name:"screenheight",fname:"ScreenHeight",type:"var",calc:function(){return this.root.game.stage.height}},screenwidth:{name:"screenwidth",fname:"ScreenWidth",type:"var",calc:function(){return this.root.game.stage.width}},selfanimexist:{name:"selfanimexist",fname:"SelfAnimExist",args:1,calc:function(e){return this.originalAIR.getAction(e)?1:0}},sin:{name:"sin",fname:"Sin",args:1,calc:function(e){return Math.sin(e)}},stateno:{name:"stateno",fname:"StateNo",type:"var",calc:function(){return this.state.number}},statetype:{name:"statetype",fname:"StateType",type:"old",operators:["=","!="],component:["S","C","A","L"],calc:function(e){return e.left=this.type,e.valueOf()}},stagevar:{name:"stagevar",fname:"StageVar",type:"old",operators:["=","!="],calc:function(e,t,a){return e.left=this.game.stage.DEF.get("info",t),e.valueOf()}},sysfvar:{name:"sysfvar",fname:"SysFVar",args:1,calc:function(e){return this.sysfvar[e]}},sysvar:{name:"sysvar",fname:"SysVar",calc:function(e){return this.sysvar[e]}},tan:{name:"tan",fname:"Tan",calc:function(e){return Math.tan(e)}},teammode:{name:"teammode",fname:"TeamMode",type:"old",operators:["=","!="],calc:function(e){return e.left=this.root.game.teamMode,e.valueOf()}},teamside:{name:"teamside",fname:"TeamSide",type:"var",calc:function(){return 1}},tickspersecond:{name:"tickspersecond",fname:"TicksPerSecond",type:"var",calc:function(){return 60}},time:{name:"time",fname:"Time",type:"var",calc:function(){return this.stateTime}},timemod:{name:"timemod",fname:"TimeMod",type:"old",operators:["=","!=","<",">","<=",">="],calc:function(e,t){return e.left=this.stateTime%t,e.valueOf()}},topedge:{name:"topedge",fname:"TopEdge",type:"var",calc:function(){return this.root.game.stage.baseline+this.y}},uniqhitcount:{name:"uniqhitcount",fname:"UniqHitCount",type:"var",calc:function(){return 0}},var:{name:"var",fname:"Var",calc:function(e){return this.var[e]}},vel:{name:"vel",fname:"Vel",type:"varXY",calc:function(e){return"x"===e?this.vx*this.facing:this.vy}},win:{name:"winko",fname:"WinKO",type:"var",calc:function(){return 0}},winko:{name:"win",fname:"Win",type:"var",calc:function(){return 0}},wintime:{name:"wintime",fname:"WinTime",type:"var",calc:function(){return 0}},winperfect:{name:"winperfect",fname:"WinPerfect",type:"var",calc:function(){return 0}}},t.FunctionTypeTriggers.statetime=t.FunctionTypeTriggers.time}(_jsmugen.Expression);';
    },
    503: (e) => {
      //SECTION: GAME RENDERER
      e.exports = JSON.stringify(
        (Game = (() => {
          class i {
            constructor(e) {
              (this._chain = []),
                (this._counter = 0),
                "function" == typeof e ? this.wake(e) : this.sleep(e || 0);
            }
            tick() {
              if (!this._chain.length) return !0;
              if (--this._sleepTicks <= 0) {
                let e = this._chain[0];
                if ("number" == typeof e)
                  return (this._sleepTicks = e), void this._chain.shift();
                let t;
                var i = e((e) => {
                  t = Number(e) || 0;
                }, this._prevVal);
                "number" == typeof t
                  ? (this._sleepTicks = t)
                  : (this._chain.shift(), (this._prevVal = i));
              }
            }
            wake(e) {
              if ("function" != typeof e)
                throw new Error("the value must be a function");
              return this._chain.push(e), this;
            }
            sleep(e) {
              if ("number" != typeof e)
                throw new Error("the value must be a number");
              return this._chain.push(e), this;
            }
            clear() {
              return (this._chain.length = 0), (this._sleepTicks = 0), this;
            }
            isSleeping() {
              return !!this._chain.length;
            }
          }
          class t extends Set {
            constructor(e) {
              super(), (this._idName = e || "id"), (this._idMap = new Map());
            }
            add(e) {
              var t = null;
              if (this._idName in e) {
                var i = e[this._idName];
                if ("number" != typeof i)
                  throw new Error("id must be a number: " + i);
                (t = this._idMap.get(i)) ||
                  ((t = new Set()), this._idMap.set(i, t)),
                  t.add(e);
              }
              super.add(e);
            }
            delete(t) {
              if ("number" == typeof t) {
                let e = this.getById(t);
                e &&
                  (e.forEach((e) => super.delete(e)),
                  e.clear(),
                  this._idMap.delete(t));
              } else if (t) {
                let e = this.getById(t[this._idName]);
                e && e.delete(t), super.delete(t);
              }
            }
            clear() {
              this._idMap.clear(), super.clear();
            }
            sizeById(e) {
              if ("number" != typeof e)
                throw new Error("id must be a number: " + e);
              e = this._idMap.get(e);
              return e ? e.size : 0;
            }
            getFirstValue(e) {
              var t;
              if ("number" == typeof e)
                for (t of this.getById(e) || []) return t;
              else for (var i of this) return i;
            }
            getById(e) {
              return this._idMap.get(e);
            }
          }
          return (
            (t.prototype.set = t.prototype.add),
            class {
              main() {}
              constructor(e, t) {
                (this.debug = !0),
                  (this.keyObserver = null),
                  (this.container = e),
                  (this.canvas = t || document.createElement("canvas")),
                  (this.ctx = this.canvas.getContext("2d")),
                  this.ctx.beginPath(),
                  (this.AILevel = 0),
                  (this.gameTime = 0),
                  (this.roundState = 0),
                  (this.roundNumber = 1),
                  (this.playerIdCount = 0),
                  (this.players = new Map()),
                  (this.characterTeam = new Map()),
                  (this.characterSlot = []),
                  (this.emptyCharacterSlotNumbers = new Set()),
                  (this.basePlayerOrder = new Map()),
                  (this.explods = new Set()),
                  (this.sndPlayer = null),
                  (this.spriteStack = []),
                  (this.spritesOnTop = []),
                  (this.teamMode = "SINGLE"),
                  (this.specialFlags = {}),
                  (this._scheduledSleep = new i(0)),
                  (this.drawCharacterClipboard = !0),
                  (this.drawCTRL = !0),
                  (this.drawclbox = !1),
                  (this.frame = 0),
                  (this.fps = 1),
                  (this.progVal = 0),
                  (this.progTotal = 0);
              }
              initialize(e, t) {
                (this.resources = e),
                  (this.sndPlayer = e.sndPlayer),
                  (this.keyObserver = t),
                  this._hookListeners(),
                  this.main();
              }
              _hookListeners() {}

              getCurrentPlayerNumber() {
                return window.currentPlayerNumber === 1 ? 1 : 2;
              }

              getOpponentPlayerNumber() {
                return window.currentPlayerNumber === 1 ? 2 : 1;
              }

              getCurrentPlayerSlot() {
                return window.currentPlayerNumber === 1 ? 0 : 1;
              }

              getOpponentPlayerSlot() {
                return window.currentPlayerNumber === 1 ? 1 : 0;
              }

              declareWinner(data) {
                const round = data.gameState.round;
                const winnerNumber = data.gameState.winners[round - 1];

                if (winnerNumber === 1) {
                  this.characterSlot?.[0].changeState(180);
                  this.characterSlot?.[1].changeState(170);
                } else if (winnerNumber === 2) {
                  this.characterSlot?.[0].changeState(170);
                  this.characterSlot?.[1].changeState(180);
                } else {
                  this.characterSlot?.[0].changeState(170);
                  this.characterSlot?.[1].changeState(170);
                }
              }

              sendServerDataToClient(data) {
                if (data?.playerOneState) {
                  window.playerOneState = data.playerOneState;
                }

                if (data?.playerTwoState) {
                  window.playerTwoState = data.playerTwoState;
                }

                if (data?.gameState) {
                  window.gameState = data.gameState;
                }
              }

              tick() {
                this.gameTime++, this._scheduledSleep.tick();

                let t = this.checkPause();
                var e,
                  i = (this.spriteStack = []),
                  s = this.characterSlot;
                let r = [];

                if (window?.gameState?.initiated) {
                  if (
                    this.characterSlot?.[this.getOpponentPlayerSlot()].life > 0
                  ) {
                    this.sendPlayerStateToServer();
                  }
                }

                s.forEach((e) => {
                  (!t ||
                    (e === t.player && t.moveTime >= t.ticks) ||
                    e.supermovetime >= t.ticks ||
                    !e.image) &&
                    (e.tick(), e.projectiles && r.push(...e.projectiles)),
                    e.removed || i.push(e);
                });

                for (e of (s = r))
                  e.removed,
                    (t && !(e.supermovetime >= t.ticks) && e.image) || e.tick(),
                    i.push(e);
                var a,
                  h = (this.spritesOnTop = []);
                for (a of (s = this.explods))
                  a.removed
                    ? s.delete(a)
                    : ((t && !(a.supermovetime >= t.ticks) && a.image) ||
                        a.tick(),
                      (a.ontop ? h : i).push(a));
                this.checkHit(), this.checkCollision();
              }

              render(e) {
                var t = this.spriteStack,
                  i = this.spritesOnTop;
                t.sort((e, t) => (e.sprpriority > t.sprpriority ? 1 : -1)),
                  t.forEach((e) => {
                    let t = e.getAfterImages();
                    t.forEach((e) => this.renderSprite(e)),
                      this.renderSprite(e);
                  }),
                  i.forEach((e) => {
                    this.renderSprite(e);
                  }),
                  t.forEach((e) => {
                    this.drawCollisionBox(this.ctx, e, e.element);
                  }),
                  this.specialFlags.superPause &&
                    this.specialFlags.superPause.param.darken &&
                    (e.save(),
                    e.beginPath(),
                    (e.fillStyle = "rgba(" + [1, 1, 1, 0.5] + ")"),
                    e.fillRect(0, 0, this.stage.width, this.stage.height),
                    this.renderSprite(this.specialFlags.superPause.player),
                    this.specialFlags.superPause.explod.tick(),
                    this.renderSprite(this.specialFlags.superPause.explod),
                    e.restore()),
                  this.renderBG();
              }

              renderBG() {
                let ctx = this.ctx;

                // Load background image
                let bgImage = new Image();
                bgImage.src = "/stages/deathhallows.jpg";

                // Draw background image when it's loaded
                bgImage.onload = () => {
                  ctx.drawImage(
                    bgImage,
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height
                  );
                };
              }

              renderSprite(e) {
                var t,
                  i,
                  s,
                  r = e.image;
                r &&
                  e.element &&
                  ((t = (s = e.element).flipH ? -1 : 1),
                  (i = s.flipV ? -1 : 1),
                  (s = e.alpha),
                  this.ctx.save(),
                  this.ctx.scale(e.facing * t, i),
                  (s || e.isAfterImage) &&
                    (this.ctx.globalCompositeOperation = "lighter"),
                  1 !== e.scaleX || 1 !== e.scaleY
                    ? this.ctx.drawImage(
                        r.img,
                        e.drawX,
                        e.drawY,
                        e.image.w * e.drawScaleX,
                        e.image.h * e.drawScaleY
                      )
                    : this.ctx.drawImage(r.img, e.drawX, e.drawY),
                  this.ctx.restore());
              }

              drawCollisionBox(t, i, s) {
                if (
                  this.drawclbox &&
                  i.getAnimeFrame &&
                  i.getAnimeFrame() &&
                  s
                ) {
                  s.clsn1, s.clsn2;
                  var r = i.drawScaleX,
                    a = i.drawScaleY;
                  t.save(), t.beginPath();
                  s.flipH, s.flipV;
                  t.moveTo(i.spx, i.spy),
                    t.lineTo(i.spx, i.spy - i.image.h),
                    (t.strokeStyle = "green"),
                    (t.lineWidth = 1),
                    t.stroke();
                  var h = ["red", "blue"];
                  for (let e = 2; 1 <= e; e--) {
                    var l = s["clsn" + e];
                    if (l)
                      for (var o of l)
                        try {
                          t.beginPath(),
                            t.moveTo(
                              i.spx + o[0] * i.facing * r,
                              i.spy + o[1] * a
                            ),
                            t.lineTo(
                              i.spx + o[2] * i.facing * r,
                              i.spy + o[1] * a
                            ),
                            t.lineTo(
                              i.spx + o[2] * i.facing * r,
                              i.spy + o[3] * a
                            ),
                            t.lineTo(
                              i.spx + o[0] * i.facing * r,
                              i.spy + o[3] * a
                            ),
                            t.lineTo(
                              i.spx + o[0] * i.facing * r,
                              i.spy + o[1] * a
                            ),
                            (t.strokeStyle = h[e - 1]),
                            t.stroke();
                        } catch (e) {}
                  }
                  t.restore();
                }
              }

              createPlayer(e, { slot: t = -1, team: i = 0 }) {
                var s = e instanceof Player ? e : new Player(e, this),
                  e = this.characterTeam.get(i);
                return (
                  e || ((e = new Set()), this.characterTeam.set(i, e)),
                  e.add(s),
                  (s.team = i),
                  (s.slotNumber = this.requestCharacterSlot(s, t)),
                  this.setPlayerNumber(s, s.slotNumber + 1),
                  s
                );
              }

              getPlayer(e) {
                return this.characterSlot[e];
              }

              getRelativePlayer(e = 1, t) {
                var i = (t = t || this.characterSlot[0]).slotNumber + 1,
                  s = 1 === i || 3 === i,
                  r = 3 === i || 4 === i ? -2 : 0,
                  a = -1;
                switch (e) {
                  case 1:
                    return t;
                  case 2:
                    a = this.basePlayerOrder.get(s ? 2 : 1);
                    break;
                  case 3:
                    a = this.basePlayerOrder.get((s ? 3 : 4) + r);
                    break;
                  case 4:
                    a = this.basePlayerOrder.get(s ? 4 : 3);
                }
                return a;
              }

              getEnemy(e) {
                for (var t of this.characterSlot)
                  if (!t.parent && t.team !== e.team) return t;
                return null;
              }

              getEnemyNear(e) {
                var t, i;
                for (t of this.characterSlot)
                  t &&
                    (t.parent ||
                      (t.team !== e.team && (Math.abs(t.x - e.x), (i = t))));
                return i;
              }

              getEnemies(e) {
                var t,
                  i,
                  s = e.team,
                  r = [];
                for ([t, i] of this.characterTeam) s !== t && r.push(...i);
                return r;
              }

              removePlayer(e) {
                this.players.delete(e.id);
                var t = e.slotNumber;
                this.characterSlot.length - 1 === t
                  ? (this.characterSlot.length = t)
                  : delete this.characterSlot[t],
                  this.characterTeam.get(e.team).delete(e),
                  this.emptyCharacterSlotNumbers.add(t);
              }

              requestPlayerID(e) {
                return (
                  this.players.set(this.playerIdCount, e), this.playerIdCount++
                );
              }

              requestCharacterSlot(e, t) {
                e: if (0 <= t) {
                  if (this.characterSlot[t])
                    throw new Error(
                      `requested slot number "${t}" is occupied by another Player. must be removed in advance.`,
                      this.characterSlot[t]
                    );
                } else {
                  for (t of this.emptyCharacterSlotNumbers) break e;
                  t = Math.max(this.characterSlot.length, 4);
                }
                return (
                  this.emptyCharacterSlotNumbers.delete(t),
                  (this.characterSlot[t] = e),
                  t
                );
              }
              setPlayerNumber(e, t = 1) {
                if ("number" != typeof t)
                  throw new Error("player number must be number: " + t);
                this.basePlayerOrder.set(t, e);
              }

              createStage(e) {
                this.stage = e;
              }

              checkCollision() {
                var t = new Set(this.characterSlot),
                  i = new Set();
                for (let e = 3; e--; ) {
                  for (var s of t)
                    if (s && s.hasCollision) {
                      var r, a, h, l;
                      s.facing;
                      for (r of this.characterSlot)
                        r &&
                          s !== r &&
                          r.hasCollision &&
                          s.getCollidedWidth(r) &&
                          ((l = s.prevX > r.prevX ? 1 : -1),
                          (a =
                            s.CNS.get(
                              "size",
                              ("A" === s.type ? "air" : "ground") +
                                "." +
                                (0 < s.facing * l ? "front" : "back")
                            ) * -l),
                          (h =
                            r.CNS.get(
                              "size",
                              ("A" === r.type ? "air" : "ground") +
                                "." +
                                (0 < r.facing * -l ? "front" : "back")
                            ) * l),
                          (l = (s.x + a - (r.x + h)) * l),
                          (s.x += l < 0 ? -l / 2 : 0),
                          (r.x += l < 0 ? l / 2 : 0));
                    }
                  if (!i.size) break;
                  t = i;
                }
              }
              checkHit() {
                new Set(), new Set();
                var t,
                  i,
                  s,
                  r = new Map();
                for (t of this.characterSlot)
                  if (t) {
                    t.checkGuard();
                    var a = t.stateLimitedData.get("HitDef");
                    let e = Array.from(t.projectiles || []).map(
                      (e) => e.hitdef
                    );
                    a = e.concat(a ? [a] : []);
                    if (a.length) {
                      var h,
                        l = this.getEnemies(t);
                      for (h of a) {
                        var o = h.hitflag;
                        let e = (!h.projectile && t) || h.projectile;
                        if (!e.removed) {
                          var n,
                            c = h._reversal;
                          for (n of l)
                            if (
                              e.getCollidedWidth(n, 1, c ? 1 : 0) &&
                              n.checkHitFlag(o) &&
                              !n.notHitBy
                            ) {
                              let e = r.get(t);
                              e || r.set(t, (e = new Map())), e.set(n, h);
                            }
                        }
                      }
                    }
                  }
                for ([i, s] of r)
                  for (var [p, d] of s) {
                    let e = r.get(p);
                    e && (e.get(i), e.delete(i)),
                      d._reversal ||
                        (i.stateLimitedData.delete("HitDef"),
                        s.delete(p),
                        this.makeHit(d, i, p));

                    // D = Damage
                    // I = Attacking player
                    // P = Receiving player
                    const playerReceivingDamage = p.team;
                    const playerSendingDamage = i.team;
                    const damageReceived = d.damage[0];

                    if (
                      this.getCurrentPlayerNumber() === playerSendingDamage &&
                      window?.gameState?.initiated
                    ) {
                      this.sendPlayerDamageToServer(
                        playerReceivingDamage,
                        damageReceived
                      );
                    }
                  }
              }

              makeHit(e, t, i) {
                var s,
                  r,
                  a = e.hitsound;
                a &&
                  ((s = a[0]),
                  (r = a[1]),
                  "S" === a[2] ? t.speak([s, r]) : this.sndPlayer.play([s, r])),
                  e.pausetime && (e.pausetime[0], e.pausetime[1]),
                  (t.attackedHit = { def: e, pauseTime: e.pausetime[0] }),
                  t.stateLimitedData.set("MoveContact", 1),
                  t.stateLimitedData.set("MoveHit", 1),
                  (t.pauseTime = e.pausetime[0]),
                  (i.pauseTime = e.pausetime[1]),
                  0 <= e.p1stateno && t.changeState(e.p1stateno),
                  0 <= e.p2stateno
                    ? i.changeState(e.p2stateno)
                    : i.getHit(e, t.facing);
                e = e.projectile;
                e && --e.hits <= 0 && e.remove("hit");
              }

              _debugMouseClick(e) {
                var t = e.offsetX,
                  e = e.offsetY;
                this.getSprites_(t, e).length && this.animate(!1);
              }

              setProgressBar(e, t) {
                (this.progVal = e), (this.progTotal = t);
              }

              getSprites_(r, a) {
                var e,
                  t = [];
                for (e of this.players.values())
                  t.push(e),
                    t.push(...(e.projectiles || [])),
                    t.push(...e.getAfterImages());
                t.push(...this.explods);
                var h,
                  l = [];
                for (h of t)
                  if (h.image && h.element) {
                    let e = h.drawX * h.facing,
                      t = h.drawY * h.vfacing,
                      i = e + h.image.w * h.drawScaleX * h.facing,
                      s = t + h.image.h * h.drawScaleY * h.vfacing;
                    -1 === h.facing && ([e, i] = [i, e]),
                      -1 === h.vfacing && ([t, s] = [s, t]),
                      r >= e && a >= t && r <= i && a <= s && l.push(h);
                  }
                return l;
              }

              normalPause(e, t) {
                this.specialFlags.normalPause = {
                  ticks: 0,
                  player: e,
                  pauseTime: t.time,
                  moveTime: t.movetime,
                  endcmdbuftime: t.endcmdbuftime,
                  pausebg: t.pausebg,
                };
              }

              superPause(e, t, i) {
                (this.specialFlags.superPause = {
                  ticks: 0,
                  player: e,
                  param: i,
                  moveTime: i.movetime,
                  pauseTime: i.time,
                  endcmdbuftime: i.endcmdbuftime,
                  pausebg: i.pausebg,
                  explod: t,
                }),
                  0 <= i.sound[0] &&
                    (i._useCommonSnd ? this : e).sndPlayer.play([
                      i.sound[0],
                      i.sound[1],
                    ]);
              }

              checkPause() {
                var e = this.specialFlags.superPause;
                return (
                  (e =
                    e && ++e.ticks > e.pauseTime
                      ? (this.specialFlags.superPause = null)
                      : e) ||
                    ((e = this.specialFlags.normalPause) &&
                      ++e.ticks > e.pauseTime &&
                      (e = this.specialFlags.normalPause = null)),
                  e
                );
              }

              clear() {
                (this.roundState = 0),
                  (this.playerIdCount = 0),
                  this.players.clear(),
                  (this.characterSlot = []),
                  this.emptyCharacterSlotNumbers.clear(),
                  this.explods.clear();
              }
              reset() {
                clearTimeout(this.roundTimeoutID);
                clearInterval(this.roundTimeoutID);

                // remove artifacts
                this.spriteStack = [];
                this.p1?.removeExplods();
                this.p2?.removeExplods();

                // reset characters
                this.initCharacter();
                this.animate(!0);
              }
              async initCharacter() {
                (this.p1 = this.getPlayer(0)),
                  (this.p2 = this.getPlayer(1)),
                  (this.p1.x = this.stage.DEF.get("playerinfo", "p1startx")),
                  (this.p1.y = 0),
                  (this.p1.facing = 1),
                  (this.p1.ctrl = 0),
                  this.p1.changeState(5900),
                  (this.p2.x = this.stage.DEF.get("playerinfo", "p2startx")),
                  (this.p2.y = 0),
                  (this.p2.facing = -1),
                  (this.p2.ctrl = 0),
                  this.p2.changeState(5900),
                  (this.p1.power = 3e3),
                  (this.p2.power = 3e3);

                if (this.getCurrentPlayerNumber() === 1) {
                  const keyMap = this.p1.controller.createNewKeyMap(
                    this.returnControls()
                  );
                  this.p1.controller.setKeyMap(keyMap);
                }

                if (this.getCurrentPlayerNumber() === 2) {
                  const keyMap = this.p2.controller.createNewKeyMap(
                    this.returnControls()
                  );
                  this.p2.controller.setKeyMap(keyMap);
                }

                this.sendPlayerStateToServer(true);
              }

              returnControls() {
                return {
                  B: ["ArrowLeft"],
                  F: ["ArrowRight"],
                  D: ["ArrowDown"],
                  U: ["ArrowUp"],
                  a: ["KeyB"],
                  b: ["KeyN"],
                  c: ["KeyM"],
                  x: ["KeyG"],
                  y: ["KeyH"],
                  z: ["KeyJ"],
                  s: ["NumpadEnter"],
                };
              }

              roundstart(e) {
                this.initCharacter(),
                  e
                    ? (this.roundNumber = Number(e) || 1)
                    : 3 < ++this.roundNumber && (this.roundNumber = 1),
                  (this.roundState = 0),
                  this._scheduledSleep
                    .clear()
                    .sleep(60)
                    .wake(() => {
                      this.roundState = 1;
                    })
                    .sleep(60)
                    .wake((e) => {
                      this.p1.frameLimitedData.has("INTRO") ||
                      this.p2.frameLimitedData.has("INTRO")
                        ? e(1)
                        : ((this.roundState = 2),
                          this.p1.changeState(0),
                          (this.p1.ctrl = 1),
                          this.p2.changeState(0),
                          (this.p2.ctrl = 1));
                      this.sendPlayerStateToServer(true);
                    });
              }

              animate(e) {
                cancelAnimationFrame(this.aniId),
                  clearTimeout(this.aniId),
                  e && this.updateFrame();
              }

              updateFrame(e) {
                if (this.p1) {
                  if (-1 !== e && ++this.frame % this.fps)
                    return (
                      (this.aniId = requestAnimationFrame((e) =>
                        this.updateFrame(e)
                      )),
                      void (this.now = performance.now())
                    );
                  for (
                    var t = Math.min(e - this.now, 1e3);
                    this.tick(), 16.6 < (t -= 1e3 / 60);

                  );
                  this.render(this.ctx),
                    -1 !== e &&
                      ((this.aniId = requestAnimationFrame((e) =>
                        this.updateFrame(e)
                      )),
                      (this.now = performance.now()));
                }
              }

              playSound(e, t) {
                this.sndPlayer.play(e, t);
              }

              stopSound(e) {
                this.sndPlayer.stop(e);
              }

              createIDManagedList(e) {
                return new t(e);
              }
            }
          );
        })())
      );
    },
    41: (e) => {
      e.exports =
        'AniMakeGIF=function(){"use strict";function n(t){if(t=Object.assign({width:0,height:0,bgColor:0,globalPalette:null,comment:"",loop:0},t||{}),this.width=t.width,this.height=t.height,this.largestWidth=0,this.largestHeight=0,this.bgColor=t.bgColor,t.globalPalette){if(!(t.globalPalette instanceof Array))throw new Error("globalPalette must be an instance of Array");if(Math.log(t.globalPalette.length/3)/Math.LN2%1)throw new Error(\'the length of "globalPalette" % 3 must be power-of-two:\'+t.globalPalette.length);this.globalPalette=t.globalPalette}this.loop=t.loop,t.comment&&(this.comment=this._createCommentExtension(t.comment)),this.frames=[]}n.prototype={_createGIFHeader:function(t,e,r){var a=(r=Object.assign({palette:null,bgColor:0},r||{})).bgColor,n=r.palette,r=0;n&&(r=Math.log(n.length/3)/Math.LN2-1);var i=[];i.push(71,73,70),i.push(56,57,97),i.push(255&t,t>>8),i.push(255&e,e>>8);e=0,e=0|(n?1:0)<<7;if(e|=112,i.push(e|=n?r:0),i.push(255&a),i.push(0),n)for(var s=0;s<n.length;s++)i.push(n[s]||0);return i},_createAppExtension:function(t){var e=[];return e.push(33),e.push(255),e.push(11),e.push(78,69,84,83,67,65,80,69,50,46,48),e.push(3),e.push(1),e.push(255&t,t>>8),e.push(0),e},_createGraphCtrlExt:function(t){var e=(t=Object.assign({delay:0,disposal:0,transparent:void 0},t||{})).delay;if(!(0<=e&&e<=65535))throw new Error("argument delay must be between 0 to 65535");var r=t.transparent,a=t.disposal,n=[];n.push(33),n.push(249),n.push(4);t=0,t=0|(7&a)<<2;return t|=0,n.push(t|=void 0!==r?1:0),n.push(255&e,e>>8),n.push(r||0),n.push(0),n},_createCommentExtension:function(t){var e=[];if(e.push(33),e.push(254),"string"!=typeof(t=t||"AniMakeGIF.js"))throw new Error(\'an argument "comment" must be String\');return(t.match(/[\\s\\S]{1,255}/g)||[]).forEach(function(t){e.push(t.length),t.split("").forEach(function(t){e.push(255&t.charCodeAt(0))})}),e.push(0),e},reduceColors:function(t,e){var r=t,a=[],n={},i=[];e&&a.push([0,0,0]);for(var s=0;s<r.length;s+=4)if(0!==r[s+3]){var h=[r[s]-r[s]%42,r[s+1]-r[s+1]%42,r[s+2]-r[s+2]%42];if(!n[h]){if(256<=a.length){i.push(0);continue}a.push(h),n[h]=a.length-1}i.push(n[h]||0)}else a[0]=[r[s],r[s+1],r[s+2]],i.push(0);for(a=[].concat.apply([],a),s=768;s--&&!a[s];)a[s]=0;return{depth:8,colors:256,data:i,palette:a}},_DEF_disposal:{0:0,1:1,save:1,leave:1,remain:1,none:1,undefined:1,2:2,clear:2,erase:2,3:3,restore:3,revert:3,prev:3,back:3},addFrame:function(t,e){"number"==typeof e&&(e={delay:e}),e=Object.assign({delay:1e3,disposal:"background",left:0,top:0,transparent:void 0},e||{});var r=this._DEF_disposal[e.disposal||1];if(void 0===r)throw new Error(\'the value of disposal "\'+e.disposal+\'" is unknown.\');var a=e.transparent,n=e.delay/10|0,a=this._createGraphCtrlExt({delay:n,disposal:r,transparent:a}),e=new i(t,{left:e.left,top:e.top});!this.globalPalette&&this.useGlobalPalette&&(this.globalPalette=e.palette),this.largestWidth<t.width&&(this.largestWidth=t.width),this.largestHeight<t.height&&(this.largestHeight=t.height),this.frames.push(a.concat(e.getData()))},generate:function(t){var e=this._createGIFHeader(this.width||this.largestWidth,this.height||this.largestHeight,{bgColor:this.bgColor,palette:this.globalPalette}),r=this._createAppExtension(this.loop),r=e.concat(r,this.comment||[]);return(r=r.concat.apply(r,this.frames)).push(59),r=new Uint8Array(r),t?"data:image/gif;base64,"+window.btoa(String.fromCharCode.apply(null,r)):(r=new Blob([r],{type:"image/gif"}),(window.URL||window.webkitURL).createObjectURL(r))}};var i=function(t,e){e=Object.assign({palette:null,globalPalette:null,depth:0,left:0,top:0},e||{}),this.sourceImg=t.data,this.width=t.width,this.height=t.height,this.left=e.left,this.top=e.top,this.depth=e.depth||8,this._parseColor(this.sourceImg);var r=n.prototype.reduceColors(this.sourceImg),a=r.data;this.palette=r.palette;t=this._createImageHeader(this.width,this.height,this.left,this.left,this.depth,r.palette),e=(new Date).getTime(),r=this._asmCompress(this.depth,a),a=(new Date).getTime(),(new Date).getTime();0;r=this._finalizeData(t,r);this._data=r};return i.prototype={getData:function(){return this._data},_createImageHeader:function(t,e,r,a,n,i){var s=[];s.push(44),s.push(255&r,r>>8),s.push(255&a,a>>8),s.push(255&t,t>>8),s.push(255&e,e>>8);e=0,e=0|(i?128:0);return e|=i?(i.length/3).toString(2).length-2:0,s.push(e),(s=i?s.concat(i):s).push(n),s},_parseColor:function(e){for(var r=[],a=[],n=0;n<e.length;n+=4){var i=e[n]<<16|e[n+1]<<8|e[n+2];let t=r[i];t||(t=r[i]=new Uint32Array([0,i]),a.push(t)),t[0]++}return{colors:a,lib:r}},_compress:function(t,e){for(var r=e,a=new Uint16Array(2*e.length),n=Math.pow(2,t),e=n+1,i=n+2,s=2*n,h=i,o=t+1,l={},p=0;p<n;p++)l[String.fromCharCode(p)]=p;function u(){}u.prototype=l;var g=new u,f=String.fromCharCode.apply(null,r),c=((new Date).getTime(),0);a[c++]=o,a[c++]=n,a[c++]=o;for(var d=f[0],v="",m="",p=1;p<f.length;p++)d=(m=d+(v=f[p]))in g?m:(a[c++]=g[d],a[c++]=o,g[m]=h++,h===s&&(4096<=s?(a[c++]=n,a[c++]=o=t+1,g=new u,h=i,s=2*n):(s<<=1,o++)),v);return a[c++]=d===m?g[m]:g[v],a[c++]=o,a[c++]=e,this.compLen=c,a},_buildBitData:function(a){var n=[],i=this.compLen,s=new Uint8Array(1),h=8;for(let t=0;t<i;t++){let e=a[t++],r=a[t];for(;0<e;){if(0<h){var o=8-h,l=r<<o&255;s[0]|=l;let t=e+o-8;t<0&&(t=0),r>>=e-t,h-=e,e=t}if(0<h&&t+1<i)break;n.push(s[0]),s[0]=0,h=8}}return n},_asmCompress:function(t,e){var r=e,e=i.prototype.heap=i.prototype.heap||new Uint8Array(16777216);e.set(r,32768);t=(i.prototype.comp=i.prototype.comp||function(t,e){"use asm";var m=new t.Uint32Array(e);var w=new t.Uint8Array(e);var r=new t.Uint8Array(e);var b=0x7FFC;var F=8192;var y=4096;var C=0;var _=0;var A=0;var E=0;function P(t,e){t=t|0;e=e|0;var r=0;var a=0;var n=0;var i=0;var s=0;var h=0;var o=0;var l=0;var p=0;var u=0;var g=0;var f=0;var c=0;var d=0;var v=0;n=1<<t;i=n+1|0;s=n+2|0;h=n<<1;o=s;l=t+1|0;C=F<<2;a=C+e|0;_=a;e=e+C|0;x();A=n;E=l;p=w[C]|0;C=C+1|0;while((C|0)<(e|0)){u=w[C]|0;C=C+1|0;g=p<<8|u;v=-1;f=(g>>12-2^g)&b;c=m[f>>2]>>>0;while(c>>>0!=0xFFFFFFFF){d=c>>>12;if((d|0)==(g|0)){v=c&0xFFF;break}f=f+4&b;c=m[f>>2]>>>0}if((v|0)>=0)p=v;else{A=A|p<<E;E=E+l|0;if((E|0)>=8)D(0);t:{if((o|0)==(h|0)){if((h|0)>=(y|0)){A=A|n<<E;E=E+l|0;x();l=t+1|0;o=s;h=n<<1;break t}h=h<<1;l=l+1|0}m[f>>2]=g<<12|o;o=o+1|0}p=u}}if((p|0)==(v|0)){A=A|v<<E;E=E+l|0}else{A=A|u<<E;E=E+l|0}if((E|0)>=8)D(0);A=A|i<<E;E=E+l|0;D(1);return _-a|0}function x(){var t=0;var e=0;e=F<<2;for(;(t|0)<(e|0);t=t+4|0)m[t>>2]=0xFFFFFFFF}function D(t){t=t|0;var e=0;if((t|0)==1)if((E&0x7)!=0)E=(E&0xFFFFFFF8)+8|0;while((E|0)>=8){e=A&0xFF;r[_]=e;_=_+1|0;A=A>>8;E=E-8|0}}return{run:P}}(self,e.buffer).run)(t,r.length),(new Date).getTime(),r=32768+r.length;return e.subarray(r,r+t)},_finalizeData:function(t,r){var a=new Uint8Array(t.length+r.length+(r.length/255|0)+(r.length%255?1:0)+1);a.set(t);var n=t.length;for(let t=0,e=r.length;t<e;t+=255){var i=r.slice(t,t+255);a.set([i.length],n++),a.set(i,n),n+=i.length}return a[a.length-1]=0,Array.from(a)}},n}();';
    },
    431: (e) => {
      e.exports = JSON.stringify(
        (KeyObserver = class {
          constructor({
            timeLimit: e = 3e3,
            deleteAfterReading: t = !0,
            omitRepeat: s = !0,
            preventDefault: i = !1,
          } = {}) {
            (this._timeLimit = e),
              (this._deleteAfterReading = t),
              (this._omitRepeat = s),
              (this._preventDefault = i),
              (this._history = new Map()),
              (this._lastTimeStamp = 0),
              (this._observingKeys = new Set()),
              (this._pressedKeys = new Map()),
              (this._gamepads = null),
              (this._gamdpadIds = new Set()),
              (this._hookedListeners = new Set()),
              this._hookKeyEventListeners(),
              this.reloadGamePads();
          }
          isPressing(e) {
            const playerControlKeys = [
              "ArrowLeft",
              "ArrowRight",
              "ArrowDown",
              "ArrowUp",
              "KeyB",
              "KeyN",
              "KeyM",
              "KeyG",
              "KeyH",
              "KeyJ",
              "NumpadEnter",
            ];

            if (this._pressedKeys.has(e) && playerControlKeys.includes(e)) {
              return this._pressedKeys.has(e);
            } else return false;
          }
          set deleteAfterReading(e) {
            this._deleteAfterReading = Boolean(e);
          }
          get deleteAfterReading() {
            return this._deleteAfterReading;
          }
          set timeLimit(e) {
            this._timeLimit = Number(e) || 0;
          }
          get timeLimit() {
            return this._timeLimit;
          }
          get lastTimeStamp() {
            return this._lastTimeStamp;
          }
          get preventDefault() {
            return this._preventDefault;
          }
          set preventDefault(e) {
            this._preventDefault = Boolean(e);
          }
          observeKeycode(e) {
            for (var t of (e = "string" == typeof e ? [e] : e))
              this._observingKeys.add(t);
          }
          removeObservingKeycode(e) {
            for (var t of (e = "string" == typeof e ? [e] : e))
              this._observingKeys.delete(t);
          }
          reloadGamePads() {
            return (this._gamepads = navigator.getGamepads()), this._gamepads;
          }
          *getKeyRecord(e = 0) {
            var t,
              s,
              i = performance.now();
            for ([t, s] of this._history)
              i - t > this._timeLimit
                ? this._history.delete(s)
                : e > t ||
                  (this._deleteAfterReading && this._history.delete(s),
                  yield s);
          }
          addListener(e, t, s = document) {
            if (
              !/^(click|mousedown|mouseup|wheel|touchstart|touchend)$/i.test(e)
            )
              throw new Error(`unexpected event type: "${e}"`);
            if (
              !(
                s instanceof HTMLElement ||
                s instanceof HTMLDocument ||
                s === window
              )
            )
              throw new Error("target must be a HTMLElement");
            if (!(t instanceof Function))
              throw new Error("callback must be a Function");
            this._hookedListeners.add({ type: e, target: s, callback: t });
          }
          _hookKeyEventListeners() {
            var e = window;
            window.addEventListener("blur", (e) => this._onWindowBlur(e)),
              window.addEventListener("contextmenu", (e) =>
                this._onWindowBlur(e)
              ),
              document.addEventListener("focusin", (e) =>
                this._onWindowBlur(e)
              ),
              e.addEventListener("keydown", (e) => this._onKeyInput(e)),
              e.addEventListener("keyup", (e) => this._onKeyInput(e)),
              e.addEventListener("mousedown", (e) => this._onMouseInput(e)),
              e.addEventListener("mouseup", (e) => this._onMouseInput(e)),
              e.addEventListener("touchstart", (e) => this._onMouseInput(e)),
              e.addEventListener("touchend", (e) => this._onMouseInput(e));
          }
          _onKeyInput(e) {
            if (this._observingKeys.has(e.code)) {
              var t = e.target.nodeName;
              /\\b(SELECT|OPTION|TEXTAREA)\\b/.test(t) ||
                ("INPUT" === t && /\\b(text|password)\\b/.test(e.target.type)),
                this._preventDefault && e.preventDefault();
              var s = e.timeStamp,
                i = e.code;
              switch (e.type) {
                case "keydown":
                  if (e.repeat) {
                    if (this._omitRepeat) return;
                  } else this._pressedKeys.set(i, s);
                  break;
                case "keyup":
                  this._pressedKeys.has(i) && this._pressedKeys.delete(i);
                  break;
                default:
                  return;
              }
              this._lastTimeStamp = s;
            }
          }
          _onMouseInput(e) {
            var t,
              s = e.timeStamp;
            for (t of this._hookedListeners)
              if (e.type === t.type) {
                var i = t.callback(e);
                if (i)
                  switch (t.type) {
                    case "mousedown":
                    case "touchstart":
                      for (var n of i) this._pressedKeys.set(n, s);
                      break;
                    case "mouseup":
                    case "touchend":
                      for (var r of i) this._pressedKeys.delete(r, s);
                  }
              }
            this._preventDefault && e.preventDefault();
          }
          _onWindowBlur(e) {
            this._pressedKeys.clear();
          }
        })
      );
    },
    764: (e) => {
      e.exports = JSON.stringify(
        (Player = (function () {
          "use strict";
          class t {
            constructor(t, e) {
              (this.SFF = t),
                (this.AIR = e),
                (this.sprpriority = 0),
                (this.x = 0),
                (this.y = 0),
                (this.vx = 0),
                (this.vy = 0),
                (this.yaccel = 0),
                (this.scaleX = 1),
                (this.scaleY = 1),
                (this.offsetX = 0),
                (this.offsetY = 0),
                (this.facing = 1),
                (this.vfacing = 1),
                (this.supermovetime = 0),
                (this.pausemovetime = 0),
                (this.action = null),
                (this.anim = -1),
                (this.tickTime = 0),
                (this.animTick = 0),
                (this.element = null),
                (this.elemNumber = 0),
                (this.afterImages = new Map()),
                (this.invisible = !1),
                (this._removed = !1),
                (this._onAnimationEnd = new Set());
            }
            changeAction(t, e) {
              if ("number" != typeof t)
                throw new Error(`num must be a number: ${t}`);
              (this.anim = t), (this.elemNumber = "number" == typeof e ? e : 1);
              t = this.AIR.getAction(t);
              if (!(this.action = t))
                return (this.element = null), void (this.animTick = 0);
              t = t.getElement(this.elemNumber);
              (this.element = t)
                ? ((this.image = this.getAnimeFrame()),
                  (this.animTick = this.element.mugenComputedActualStartTick))
                : (this.animTick = 0);
            }
            updateMugenComputedAnimation() {
              if (
                (this.tickTime++,
                this.action && this.action.mugenComputedElementCount)
              ) {
                if (this.animTick >= this.action.mugenComputedAllFrameCount) {
                  for (var t of this._onAnimationEnd)
                    t.call(this, this.animTick, this.action);
                  this.action.mugenComputedFiniteAction ||
                    (this.animTick = this.action.mugenComputedLoopStartFrame);
                }
                (this.element = this.action.getMugenComputedElementByTicks(
                  this.animTick
                )),
                  (this.elemNumber = this.element.number),
                  (this.image = this.getAnimeFrame()),
                  this.animTick++;
              }
            }
            addListenerOnAnimationEnd(t) {
              this._onAnimationEnd.add(t);
            }
            getAnimeFrame() {
              return this.invisible || !this.element || this.element.group < 0
                ? null
                : this.SFF.getAsImageData(
                    this.element.group,
                    this.element.index
                  );
            }
            getSprite() {
              return this.invisible || !this.element || this.element.group < 0
                ? null
                : this.SFF.getAsImageData(
                    this.element.group,
                    this.element.index
                  ).img;
            }
            createAfterImage() {
              if (!this.element || !this.image)
                return {
                  emptyAfterImage: 1,
                  anim: this.anim,
                  stateNo: this.stateNo,
                };
              var {
                SFF: t,
                AIR: e,
                element: i,
                drawX: s,
                drawY: a,
                spx: h,
                spy: r,
                drawScaleX: n,
                drawScaleY: o,
                scaleX: c,
                scaleY: m,
                image: l,
                facing: p,
                vfacing: g,
                alpha: d,
              } = this;
              return {
                isAfterImage: !0,
                SFF: t,
                AIR: e,
                element: i,
                drawX: s,
                drawY: a,
                spx: h,
                spy: r,
                drawScaleX: n,
                drawScaleY: o,
                scaleX: c,
                scaleY: m,
                image: l,
                facing: p,
                vfacing: g,
                alpha: d,
              };
            }
            getAfterImages() {
              return [];
            }
            setAfterImage({ time: t, length: e, timegap: i, framegap: s }) {
              this.afterImages.clear(),
                0 < t && t++,
                (this.afterImageData = {
                  time: t,
                  timegap: i,
                  framegap: s,
                  length: e,
                  ticks: 0,
                  currentIndex: 0,
                });
            }
            updateAfterImage() {
              var t,
                e = this.afterImageData;
              e &&
                (0 < e.time && e.time--,
                e.ticks++ % e.timegap ||
                  ((t = ++e.currentIndex - e.length),
                  this.afterImages.has(t) && this.afterImages.delete(t),
                  e.time &&
                    this.afterImages.set(
                      e.currentIndex,
                      this.createAfterImage()
                    ),
                  0 === e.time &&
                    0 === this.afterImages.size &&
                    (this.afterImageData = null)));
            }
            getAfterImages() {
              var t = this.afterImageData,
                e = [];
              if (!t) return e;
              var i,
                s,
                a = t.currentIndex + 1,
                h = t.length;
              for ([i, s] of this.afterImages) {
                var r = a - i;
                r === h || r % t.framegap || e.push(s);
              }
              return e;
            }
            get removed() {
              return this._removed;
            }
            get spx() {
              return (
                this.x +
                this.offsetX * this.facing +
                this.player.game.stage.centerAxis
              );
            }
            get spy() {
              return this.y + this.offsetY + this.player.game.stage.baseline;
            }
            get drawX() {
              return (
                this.facing * (this.element.flipH ? -1 : 1) * this.spx +
                this.element.x *
                  this.drawScaleX *
                  (this.element.flipH ? -1 : 1) -
                this.image.axisX * this.drawScaleX
              );
            }
            get drawY() {
              return (
                (this.vfacing || 1) * (this.element.flipV ? -1 : 1) * this.spy +
                this.element.y *
                  this.drawScaleY *
                  (this.element.flipV ? -1 : 1) -
                this.image.axisY * this.drawScaleY
              );
            }
            get drawScaleX() {
              return this.element.scaleX * this.scaleX;
            }
            get drawScaleY() {
              return this.element.scaleY * this.scaleY;
            }
            get alpha() {
              return (
                (this.frameLimitedData && this.frameLimitedData.get("trans")) ||
                this.trans ||
                this.element.blend
              );
            }
            get hasCollision() {
              var t = this,
                e = t.frameLimitedData.get("PlayerPush");
              return (
                !(t.isHelper && !t.playerTypeHelper && !e) &&
                !("boolean" == typeof e && !e)
              );
            }
            getCollidedWidth(t, e = 0, i = 0) {
              var e = (this.element || {})["clsn" + (2 - (e && 1))],
                s = (t.element || {})["clsn" + (2 - (i && 1))];
              if (!e || !s) return 0;
              var o,
                c = this.x,
                m = this.y,
                l = this.scaleX,
                p = this.scaleY,
                g = this.facing,
                d = t.x,
                y = t.y,
                u = t.scaleX,
                v = t.scaleY,
                f = t.facing,
                x = 0;
              for (o of e) {
                let a = c + o[0] * g * l,
                  h = m + +o[1] * p,
                  r = c + o[2] * g * l,
                  n = m + +o[3] * p;
                a > r && ([a, r] = [r, a]), h > n && ([h, n] = [n, h]);
                for (var b of s) {
                  let t = d + b[0] * f * u,
                    e = y + +b[1] * v,
                    i = d + b[2] * f * u,
                    s = y + +b[3] * v;
                  t > i && ([t, i] = [i, t]),
                    e > s && ([e, s] = [s, e]),
                    h > s ||
                      e > n ||
                      a > i ||
                      t > r ||
                      ((b = a <= t ? r - t : a - i),
                      Math.abs(b) > Math.abs(x) && (x = b));
                }
              }
              return x;
            }
          }
          class e extends t {
            constructor(t, e, i = null) {
              var {
                def: s,
                state: a,
                cns: h,
                sff: r,
                air: n,
                snd: o,
                cmd: c,
              } = t;
              super(r, n),
                (this.id = e.requestPlayerID(this)),
                (this.team = -1),
                ((this.player = this).root = i ? i.root : this),
                (this.isHelper = Boolean(i)),
                (this.resources = t),
                (this.DEF = s),
                (this.ST = a),
                (this.CNS = h),
                (this.originalAIR = this.AIR),
                (this.SND = o),
                (this.CMD = c),
                (this.game = e),
                (this.var = new Int32Array(60)),
                (this.fvar = new Float32Array(40)),
                (this.sysvar = new Int32Array(5)),
                (this.sysfvar = new Float32Array(5)),
                (this.helpers = e.createIDManagedList("helperId")),
                (this.helpersRoot = i
                  ? i.root.helpers
                  : e.createIDManagedList("helperId")),
                (this.explods = e.createIDManagedList("explodId")),
                (this.projectiles = i ? null : e.createIDManagedList("projId")),
                (this.enemies = e.createIDManagedList()),
                (this.enemiesNear = e.createIDManagedList()),
                (this.targets = e.createIDManagedList("targetId")),
                (this.stateLimitedData = new Map()),
                (this.frameLimitedData = new Map()),
                (this.controller = i
                  ? i.controller
                  : this.CMD.createController(e.keyObserver)),
                (this.sndPlayer = this.SND.createSndPlayer(16)),
                this.initialize();
            }
            initialize() {
              (this.name = this.DEF.get("info", "name")),
                (this.authorName = this.DEF.get("info", "author")),
                (this.displayName = this.DEF.get("info", "displayname")),
                (this.type = "S"),
                (this.movetype = "I"),
                (this.physics = "S"),
                (this.sprpriority = 0),
                (this.ctrl = 1),
                (this.x = 0),
                (this.y = 0),
                (this.vx = 0),
                (this.vy = 0),
                (this.prevX = 0),
                (this.prevY = 0),
                (this.yaccel = this.CNS.get("movement", "yaccel")),
                (this.facing = 1),
                (this.offsetX = 0),
                (this.offsetY = 0),
                (this.bindtime = 0),
                (this.bindplayer = null),
                (this.state = 0),
                (this.stateTime = 0),
                (this.prevStateNo = 0),
                (this._statePersistentRecord = new Map()),
                (this._originalST = this.ST),
                (this.gettingHit = null),
                (this.hitTime = 0),
                (this.lieDownTime = 0),
                (this.attackedHit = null),
                (this.receivedHit = null),
                (this.life = this.CNS.get("data", "life")),
                (this.powerMax = this.CNS.get("data", "power") || 3e3),
                (this.power = this.powerMax),
                (this.scaleX = this.CNS.get("size", "xscale")),
                (this.scaleY = this.CNS.get("size", "yscale")),
                this.changeAction(0),
                this.changeState(0),
                this.constructor,
                e;
            }
            canCtrl() {
              const currentlyPlaying = this.game.getCurrentPlayerNumber();

              return (
                this.team === currentlyPlaying &&
                this.ctrl &&
                (!this.isHelper || this.keyCtrlHelper) &&
                !this.hitTime &&
                !this.pauseTime
              );
            }
            changeState(
              newStateNumber,
              { anim: animation, ctrl: control } = {},
              someVariable,
              anotherVariable
            ) {
              this.game.debug;
              this.prevStateNo = this.state.number || 0;
              this._statePersistentRecord.clear();

              var newState = this.ST.get(newStateNumber);
              if (!newState) {
                try {
                  throw new Error(
                    `State number ${newStateNumber} doesn't exist!`
                  );
                } catch (error) {
                  return;
                }
              }

              this.state = newState;
              this.stateTime = 0;
              this.stateNo = newState.number;
              this.stateLimitedData.clear();
              this.loadCurrentStateParameter({
                anim: animation,
                ctrl: control,
              });
            }

            checkStatePersistency(t) {
              if (!t.hasParam("persistent")) return !0;
              var e = t.getParam("persistent");
              if (1 === e) return !0;
              var i = this._statePersistentRecord.get(t) || 0;
              return 0 === e
                ? !i && (this._statePersistentRecord.set(t, 1), !0)
                : 1 < e && i % e == 0
                ? (this._statePersistentRecord.set(t, 1), !0)
                : (this._statePersistentRecord.set(t, ++i), !1);
            }
            tick() {
              this.frameLimitedData.clear(),
                (this.offsetX = 0),
                (this.offsetY = 0),
                (this.prevX = this.x),
                (this.prevY = this.y),
                this.notHitBy &&
                  this.notHitBy.time-- <= 0 &&
                  (this.notHitBy = null),
                this.notHitBy &&
                  isNaN(this.notHitBy.time) &&
                  (this.notHitBy = null),
                (this.parent && !this.playerTypeHelper) ||
                  (this.ST.get(-3) && this.ST.get(-3).checkAllStates(this),
                  this.ST.get(-2) && this.ST.get(-2).checkAllStates(this)),
                this.isHelper ||
                  this.controller.check(this.game.gameTime, this.facing),
                (this.isHelper && !this.keyCtrlHelper) ||
                  this.ST.get(-1).checkAllStates(this),
                this.applyBasicState(),
                this._processCurrentState(),
                this.bindToPlayer(),
                this.pauseTime || (this.applyVelocity(), this.applyPhysics()),
                this.parent ||
                  this.frameLimitedData.has("INTRO") ||
                  this.frameLimitedData.set("screenBounded", !0),
                this.bindToScreen(),
                this.autoTurn(),
                (this.invisible = this.frameLimitedData.get("INVISIBLE")),
                this.stateTime++,
                this.pauseTime
                  ? this.pauseTime--
                  : (this.updateMugenComputedAnimation(),
                    this.updateAfterImage(),
                    0 < this.hitTime && (this.hitTime--, this.hitTime));
            }
            activateAllFiredStates(t) {
              if (t)
                for (var e of t.getFiredStates(this))
                  this.checkStatePersistency(e) && e.activate(this);
            }
            _processCurrentState() {
              if (this.state) {
                var t = 2500,
                  e = [this.state.number];
                for (
                  this.state.getFiredStates(this);
                  this.state.checkAllStates(this) && !(--t <= 0);

                )
                  e.push(this.state.number);
              }
            }
            loadCurrentStateParameter({ anim: t, ctrl: e }) {
              var i,
                s,
                a,
                h,
                r = this.state.getCalculatedParameter(this);
              for (h in r) {
                var n,
                  o = r[h];
                switch (h) {
                  case "type":
                    i = o;
                    break;
                  case "movetype":
                    s = o;
                    break;
                  case "physics":
                    a = o;
                    break;
                  case "anim":
                    void 0 === t && (t = o);
                    break;
                  case "ctrl":
                    void 0 === e && (e = o);
                    break;
                  case "velset":
                    (this.vx = o[0] * this.facing), (this.vy = o[1]);
                    break;
                  case "poweradd":
                    this.power += o;
                    break;
                  case "facep2":
                    !o ||
                      ((((n = this.game.getRelativePlayer(2, this)).x - this.x <
                        0 &&
                        0 < this.facing) ||
                        (0 < n.x - this.x && this.facing < 0)) &&
                        this.turn());
                    break;
                  case "hitdefpersist":
                  case "movehitpersist":
                  case "hitcountpersist":
                  case "juggle":
                    break;
                  case "sprpriority":
                    this.sprpriority = o;
                }
              }
              "U" !== i && (this.type = i || "S"),
                "U" !== s && (this.movetype = s || "I"),
                "U" !== a && (this.physics = a || "N"),
                "number" == typeof t && this.changeAction(t),
                "number" == typeof e && (this.ctrl = e);
            }
            applyBasicState() {
              if (
                (5110 === this.stateNo &&
                  (("H" === this.movetype && 1 !== this.stateTime) ||
                    (this.lieDownTime = this.CNS.get("data", "liedown.time")),
                  this.lieDownTime-- <= 0 && this.changeState(5120)),
                this.canCtrl())
              ) {
                if (
                  140 === this.stateNo &&
                  this.stateTime >=
                    ((this.action && this.action.mugenComputedAllFrameCount) ||
                      0)
                )
                  switch (this.type) {
                    case "S":
                      this.changeState(0);
                      break;
                    case "C":
                      this.changeState(11);
                      break;
                    case "A":
                      this.changeState(51);
                      break;
                    case "L":
                      this.changeState(140);
                  }
                switch (this.type) {
                  case "S":
                    if (
                      this.controller.isActiveCommand("holdup") &&
                      (0 === this.state.number || 20 === this.state.number)
                    ) {
                      this.changeState(40);
                      break;
                    }
                    if (
                      this.controller.isActiveCommand("holddown") &&
                      (0 === this.state.number || 20 === this.state.number)
                    ) {
                      this.changeState(10);
                      break;
                    }
                    if (
                      this.controller.isActiveCommand("holdfwd") ||
                      this.controller.isActiveCommand("holdback")
                    ) {
                      if (0 === this.state.number) {
                        this.changeState(20);
                        break;
                      }
                    } else if (20 === this.state.number) {
                      this.changeState(0);
                      break;
                    }
                    break;
                  case "C":
                    if (this.controller.isActiveCommand("holddown")) break;
                    this.changeState(12);
                }
              }
            }
            applyVelocity() {
              this.frameLimitedData.has("posFreeze") ||
                ((this.x += this.vx), (this.y += this.vy));
            }
            applyPhysics() {
              switch (this.physics) {
                case "A":
                  if (0 <= this.y && 0 <= this.vy)
                    return (
                      this.changeState(52), void this._processCurrentState()
                    );
                  this.vy += this.yaccel;
                  break;
                case "S":
                  this.vx &&
                    ((this.vx *= this.CNS.get("movement", "stand.friction")),
                    Math.abs(this.vx) <=
                      this.CNS.get("movement", "stand.friction.threshold") &&
                      (this.vx = 0));
                  break;
                case "C":
                  this.vx &&
                    ((this.vx *= this.CNS.get("movement", "crouch.friction")),
                    Math.abs(this.vx) <=
                      this.CNS.get("movement", "crouch.friction.threshold") &&
                      (this.vx = 0));
              }
            }
            turn(t) {
              (this.facing *= -1),
                (this.vx *= -1),
                t ||
                  (0 === this.stateNo
                    ? this.AIR.getAction(5) && this.changeAction(5)
                    : 11 === this.stateNo &&
                      this.AIR.getAction(6) &&
                      this.changeAction(6));
            }
            autoTurn() {
              if (!this._noAutoTurn) {
                if (
                  (0 !== this.state.number && 11 !== this.state.number) ||
                  this.parent ||
                  !/[SC]/.test(this.type) ||
                  this.frameLimitedData.has("NoAutoTurn")
                )
                  return !1;
                var t = this.game.getRelativePlayer(2, this);
                ((t.x - this.x < 0 && 0 < this.facing) ||
                  (0 < t.x - this.x && this.facing < 0)) &&
                  ((0 !== this.stateNo && 11 !== this.stateNo) || this.turn());
              }
            }
            replaceST(t) {
              (this._originalST = this.ST), (this.ST = t);
            }
            restoreST() {
              this.ST = this._originalST;
            }
            remove() {
              this.game.removePlayer(this),
                (this._removed = !0),
                this.parent &&
                  (this.parent.helpers.delete(this),
                  this.parent.root.helpersRoot.delete(this)),
                this.helpers.forEach((t) => {
                  this.destroyHelper(t, { removeexplods: !0, recursive: !0 });
                }),
                this.removeExplods();
            }
            createHelper(t) {
              t = new i(this, t);
              this.helpers.set(t),
                this.root.helpersRoot.set(t),
                this.game.createPlayer(t, { team: this.team });
            }
            destroyHelper(e, i) {
              i.removeexplods && e.removeExplods(),
                i.recursive && e.helpers.forEach((t) => e.destroyHelper(t, i)),
                e.remove();
            }
            getNumHelper(t) {
              return "number" == typeof t
                ? this.helpersRoot.sizeById(t)
                : this.helpersRoot.size;
            }
            createExplod(t, e, i = {}) {
              try {
                var s = new a(t, e, this, i);
                this.explods.add(s), this.game.explods.add(s);
              } catch (t) {}
            }
            modifyExplod(t) {
              var e = t.id,
                e = -1 === e ? this.explods : this.explods.getById(e);
              if (e) for (var i of e) i.modify(t);
            }
            removeAnExplod(t) {
              this.explods.delete(t), this.game.explods.delete(t);
            }
            removeExplods(t) {
              (void 0 !== t
                ? this.explods.getById(t) || []
                : this.explods
              ).forEach((t) => t.remove());
            }
            createProjectile(e = {}) {
              try {
                var i = new r(this, e);
                let t = this.root.projectiles;
                t.add(i);
              } catch (t) {}
            }
            bindToPlayer() {
              this.bindplayer &&
                this.checkBindTime() &&
                ((this.x = this.bindplayer.x + this.px),
                (this.y = this.bindplayer.y + this.py));
            }
            bindToScreen() {
              this.frameLimitedData.has("screenBounded") &&
                (this.x > this.game.stage.width / 2
                  ? (this.x = this.game.stage.width / 2)
                  : this.x < -this.game.stage.width / 2 &&
                    (this.x = -this.game.stage.width / 2));
            }
            checkBindTime() {
              return this.bindtime
                ? (0 < this.bindtime && this.bindtime--, !0)
                : ((this.bindplayer = null), !1);
            }
            setBind(t, e, i, s, { facing: a }) {
              (this.bindplayer = t),
                (this.px = e * t.facing),
                (this.py = i),
                (this.bindtime = s),
                (this.facing = a ? t.facing * a : this.facing);
            }
            speak(t, e) {
              this.sndPlayer.play(t, e);
            }
            shutUp(t) {
              this.sndPlayer.stop(t);
            }
            async waitForAudioReady() {
              for (
                var t;
                await (t = this.audioPromise), t !== this.audioPromise;

              );
            }
            setPause(t) {}
            setSuperPause(t) {
              var e = new a(t.anim, t._useFightfx, this, {
                facing: 1,
                pos: t.pos,
                removetime: t.time,
                supermovetime: t.time,
              });
              this.game.superPause(this, e, t);
            }
            getAllSprites() {
              var t,
                e,
                i = [];
              for (t of this.helpers)
                var s = t.getAllSprites(), i = i.concat(s);
              for (e of this.explods) i.push(e);
              return i;
            }
            checkHitFlag(t) {
              return !0;
            }
            getHit(t, e = 1) {
              e = this.facing;
              var i = (this.receivedHit = { hitdef: t });
              t: if ("L" !== this.type || 0 !== this.y) {
                if (/H|L/i.test(t["ground.type"])) {
                  this.isInGuardState();
                  var s = t["ground.velocity"];
                  switch (this.type) {
                    case "C":
                      (i.type = "ground"),
                        this.changeState(5010),
                        (this.vx = s[0] * e),
                        (this.vy = s[1]),
                        (this.hitTime = t["ground.hittime"] || 0);
                      break t;
                    case "S":
                      (i.type = "ground"),
                        this.changeState(5e3),
                        (this.vx = s[0] * e),
                        (this.vy = s[1]),
                        (this.hitTime = t["ground.hittime"] || 0);
                      break t;
                    case "L":
                      (i.type = "ground"),
                        this.changeState(5070),
                        (this.hitTime = t["ground.hittime"] || 0);
                      break t;
                  }
                }
                if (/H|L/i.test(t["air.type"]) && "A" === this.type) {
                  i.type = "air";
                  var a = t["air.velocity"];
                  (e = this.facing),
                    this.changeState(5020),
                    (this.vx = a[0] * e),
                    (this.vy = a[1]),
                    (this.hitTime = t["air.hittime"] || 0);
                } else {
                  if (!/T/i.test(t["ground.type"] + t["air.type"])) return !1;
                  i.type = "ground";
                  a = t["ground.velocity"];
                  (e = this.facing),
                    this.changeState(5070),
                    (this.vx = a[0] * e),
                    (this.vy = a[1]);
                }
              } else
                (this.hitTime = t["down.hittime"] || 0),
                  (i.type = "down"),
                  this.changeState(5080);
              return (i.damage = t.damage || 0), !0;
            }
            getReversalDef() {
              return {};
            }
            checkGuard() {
              if (!this.canCtrl() || this.isInGuardState()) return !0;
              var t = this.controller.isActiveCommand("holdback");
              if (
                t &&
                "L" !== this.type &&
                "I" === this.movetype &&
                this.isInGuardDist()
              ) {
                let t = this.frameLimitedData;
                if (
                  !t.get("UNGUARDABLE") &&
                  !(
                    (t.get("NOSTANDGUARD") && "S" === this.type) ||
                    (t.get("NOCROUCHGUARD") && "C" === this.type) ||
                    (t.get("NOAIRGUARD") && "A" === this.type)
                  )
                )
                  return this.changeState(120), !0;
              }
            }
            isInGuardState() {
              return /^(120|130|131|132|140|150|151|152|153|154|155)$/.test(
                this.stateNo
              );
            }
            isInGuardDist() {
              var e;
              for (e of this.game.getEnemies(this)) {
                var i = e.stateLimitedData.get("HitDef");
                let t = i ? [i] : [];
                if ((t.push(...(e.projectiles || [])), t.length))
                  for (var s of t) {
                    var a = s instanceof r,
                      h = a ? s : e,
                      a =
                        s.guarddist || a
                          ? e.CNS.get("size", "proj.attack.dist")
                          : e.CNS.get("size", "attack.dist");
                    if (Math.abs(this.x - h.x) <= a) return !0;
                  }
              }
              return !1;
            }
            isInGuardState() {}
            setNotHit(t) {
              this.notHitBy = t;
            }
            getClipboard() {
              return this.frameLimitedData.get("clipboardText") || "";
            }
            _exp(t) {
              return new _jsmugen.Expression(t).calculate(this);
            }
          }
          class i extends e {
            constructor(t, e) {
              super(t.resources, t.game, t),
                (this.parent = t),
                (this.root = t.root),
                (this.helpersRoot = this.root.helpersRoot),
                this.initializeHelper(e);
            }
            initializeHelper(t) {
              var { helpertype: e, name: i, id: s } = t;
              (this.playerTypeHelper = "PLAYER" === e),
                (this.name = i || this.parent.name + "'s helper"),
                0 <= s && (this.helperId = s);
              var { stateno: a = 0, keyctrl: e = 0 } = t;
              (this.stateNo = a), (this.keyCtrlHelper = e);
              var { pos: i = [0, 0], postype: s, facing: a = 1 } = t;
              (this.facing = this.parent.facing * a),
                (this.px = i[0] * this.facing),
                (this.py = i[1]),
                (this.postype = s);
              var {
                ownpal: e = 0,
                remappal: a = [-1, 0],
                supermovetime: i = 0,
                pausemovetime: s = 0,
              } = t;
              (this.ownpal = e),
                (this.remappal = a),
                (this.supermovetime = i),
                (this.pausemovetime = s);
              var h,
                r = new Map();
              for (h of [
                "xscale",
                "yscale",
                "ground.back",
                "ground.front",
                "air.back",
                "air.front",
                "height",
                "proj.doscale",
                "head.pos",
                "mid.pos",
                "shadowoffset",
              ])
                "size." + h in t && r.set(h, t["size." + h]);
              if (r.size) {
                let i = this.CNS.clone();
                r.forEach((t, e) => i.set("size", e, t)), (this.CNS = i);
              }
              (this.scaleX = this.CNS.get("size", "xscale")),
                (this.scaleY = this.CNS.get("size", "yscale")),
                (this.getNumHelper = null),
                this.bindToPostypePosition(
                  this.postype,
                  this.parent,
                  this.px,
                  this.py
                ),
                this.changeState(this.stateNo);
            }
            bindToPostypePosition(t, e, i = 0, s = 0) {
              switch (t) {
                case "P2":
                  break;
                case "FRONT":
                  (this.x = i + (e.game.stage.width / 2) * this.facing),
                    (this.y = s);
                  break;
                case "BACK":
                  (this.x = i + (e.game.stage.width / 2) * -this.facing),
                    (this.y = s);
                  break;
                case "LEFT":
                  (this.x = i - e.game.stage.width / 2), (this.y = s);
                  break;
                case "RIGHT":
                  (this.x = e.root.game.stage.width / 2 + i), (this.y = s);
                  break;
                default:
                  (this.x = e.x + i), (this.y = e.y + s);
              }
            }
          }
          class a extends t {
            constructor(t, e, i, s = {}) {
              super(
                (e ? i.root.game.resources : i).SFF,
                (e ? i.root.game.resources : i).AIR,
                s
              ),
                (this.anim = t),
                (this.player = i);
              var {
                id: a,
                space: h,
                pos: r = [0, 0],
                accel: n = [0, 0],
                vel: o,
                velocity: c,
                facing: m = 1,
                vfacing: l,
                bindid: p,
                bindtime: g,
                removetime: d = -2,
                supermovetime: y = 0,
                pausemovetime: u = 0,
                ontop: v = 0,
                shadow: f = 0,
                ownpal: x,
                remappal: b,
                ignorehitpause: S,
                trans: e,
              } = s;
              "id" in s && (this.explodId = a), (this.removeTime = d || -2);
              var { postype: i = "", random: a, supermove: d } = s;
              (this.postype = i),
                (this.random = a || null),
                (this.supermove = d),
                (this.baseFacing = m),
                (this.facing = m),
                (o = o || c || [0, 0]),
                (this.vfacing = l || 1),
                (this.px = r[0] || 0),
                (this.py = r[1] || 0),
                (this.vx = o[0] || 0),
                (this.vy = o[1] || 0),
                (this.accelX = (n[0] || 0) * this.facing),
                (this.accelY = n[1] || 0);
              var {
                scale: l = [1, 1],
                yangle: r = 0,
                xangle: o = 0,
                sprpriority: n = 0,
              } = s;
              (this.scaleX = l[0]),
                (this.scaleY = l[1]),
                (this.yangle = r),
                (this.xangle = o),
                (this.sprpriority = n),
                (this.bindID = "number" == typeof p ? p : -2),
                (this.bindtime = g || 1),
                (this.space = h || "stage"),
                (this.ontop = v || 0),
                (this.ownpal = x || 0),
                (this.remappal = b || [-1, 0]),
                (this.shadow = f || 0),
                (this.trans = e),
                (this.supermovetime = y || 0),
                (this.pausemovetime = u || 0),
                (this.ignorehitpause = void 0 === S ? 1 : S);
              var { _type: S, _spacing: s } = s;
              S &&
                ((this._type = S),
                "number" == typeof s && (this._spacing = spacing)),
                this.setFirstPosition(),
                this.changeAction(t);
            }
            setFirstPosition() {
              var t, e;
              this.bindPosition(),
                this.random &&
                  ((t = this.random[0] || 0),
                  (e = this.random[1] || 0),
                  (this.x -= t / 2),
                  (this.y -= e / 2),
                  (this.x += Math.random() * this.rx),
                  (this.y += Math.random() * this.ry));
            }
            bindPosition() {
              if (-1 <= this.bindID) {
                let t;
                (t =
                  -1 === this.bindID
                    ? Array.from(this.player.game.players.values()).shift()
                    : this.player.game.players.get(this.bindID)),
                  t &&
                    ((this.x = t.x + this.px * this.facing),
                    (this.y = t.y + this.py * this.vfacing));
              } else
                this.bindExplodToPostypePosition(
                  this.postype,
                  this.player,
                  this.px,
                  this.py
                );
            }
            bindExplodToPostypePosition(t, e, i = 0, s = 0) {
              switch (t) {
                case "P2":
                  var a = this.player.game.getRelativePlayer(2, this.player);
                  this.facing = (a.facing || 1) * this.baseFacing;
                  break;
                case "FRONT":
                  (this.facing = this.player.facing * this.baseFacing),
                    (this.x =
                      i * this.facing + (e.game.stage.width / 2) * this.facing),
                    (this.y = s - e.root.game.stage.baseline);
                  break;
                case "BACK":
                  (this.facing = this.player.facing * this.baseFacing),
                    (this.x =
                      i * this.facing - (e.game.stage.width / 2) * this.facing),
                    (this.y = s - e.root.game.stage.baseline);
                  break;
                case "LEFT":
                  (this.x = i - e.game.stage.width / 2),
                    (this.y = s - e.game.stage.baseline);
                  break;
                case "RIGHT":
                  (this.x = e.root.game.stage.width / 2 + i),
                    (this.y = s - e.root.game.stage.baseline);
                  break;
                case "NONE":
                  (this.x = i), (this.y = s - e.root.game.stage.baseline);
                  break;
                default:
                  (this.facing = this.player.facing * this.baseFacing),
                    (this.x = e.x + i * this.facing),
                    (this.y = e.y + s * this.vfacing);
              }
            }
            applyVelocity() {
              (this.vx += this.accelX),
                (this.vy += this.accelY),
                (this.x += this.vx),
                (this.y += this.vy);
            }
            checkRemoveTime() {
              return (
                -1 !== this.removeTime &&
                (-2 !== this.removeTime ||
                  !this.action ||
                  this.animTick - this.action.mugenComputedTotalTicks == 0) &&
                !(0 <= this.removeTime && 0 < this.removeTime - this.tickTime)
              );
            }
            remove() {
              this.player.removeAnExplod(this), (this._removed = !0);
            }
            modify(t) {
              for (var e in t) {
                var i = t[e];
                switch (e) {
                  case "space":
                  case "postype":
                  case "supermove":
                  case "sprpriority":
                  case "vfacing":
                  case "yangle":
                  case "xangle":
                  case "bindtime":
                  case "removetime":
                  case "supermovetime":
                  case "pausemovetime":
                  case "ontop":
                  case "random":
                  case "ownpal":
                  case "remappal":
                  case "shadow":
                  case "ignorehitpause":
                    this[e] = i;
                    break;
                  case "facing":
                    (this.facing = i), (this.baseFacing = i);
                    break;
                  case "trans":
                    this.trans = i;
                    break;
                  case "bindid":
                    this.bindID = i;
                    break;
                  case "pos":
                    (this.px = i[0]), (this.py = i[1]);
                    break;
                  case "vel":
                    (this.vx = i[0] || 0), (this.vy = i[1] || 0);
                    break;
                  case "accel":
                    (this.accelX = i[0] || 0), (this.accelY = i[1] || 0);
                    break;
                  case "scale":
                    (this.scaleX = i[0] || 1), (this.scaleY = i[1] || 1);
                }
              }
            }
            tick() {
              this.checkRemoveTime()
                ? this.remove()
                : (1 < this._spacing &&
                    (this.invisible = this.tickTime % this._spacing != 0),
                  this.checkBindTime() && this.bindPosition(),
                  this.applyVelocity(),
                  this.updateMugenComputedAnimation());
            }
          }
          a.prototype.checkBindTime = e.prototype.checkBindTime;
          class r extends t {
            constructor(t, e = {}) {
              super(t.SFF, t.AIR, e);
              var i = (this.player = t).facing;
              this.facing = i;
              var {
                  projid: s,
                  projanim: a = 0,
                  projhitanim: h = -1,
                  projremanim: r,
                  projcancelanim: n = -1,
                  projremove: o = 1,
                  projremovetime: c = -1,
                  projhits: m = 1,
                  projmisstime: l = 0,
                  projpriority: p = 1,
                  projsprpriority: g = 3,
                } = e,
                { supermovetime: d = 0, pausemovetime: y = 0 } = e;
              0 <= s && (this.projId = s),
                (this.anim = a),
                (this.hitAnim = h),
                (this.remAnim = r || h),
                (this.cancelAnim = n || h),
                (this.autoRemove = o),
                (this.removeTime = c),
                (this.hits = m),
                (this.missTime = l),
                (this.projPriority = p),
                (this.sprpriority = g || 0),
                (this.supermovetime = d),
                (this.pausemovetime = y);
              var {
                projscale: m = [1, 1],
                offset: l = [0, 0],
                velocity: p = [0, 0],
                accel: g = [0, 0],
                remvelocity: d = [0, 0],
                velmul: y = [1, 1],
              } = e;
              (this.x = 0),
                (this.y = 0),
                (this.scaleX = m[0]),
                (this.scaleY = m[1]),
                (this.px = l[0] * i),
                (this.py = l[1]),
                (this.vx = p[0] * i),
                (this.vy = p[1]),
                (this.vxaccel = g[0] * i),
                (this.vyaccel = g[1]),
                (this.vmx = y[0]),
                (this.vmy = y[1]),
                (this.remvx = d[0] || 0),
                (this.remvy = d[1] || 0);
              var {
                projedgebound: i = 40,
                projstagebound: g = 40,
                projheightbound: y = 240,
                postype: d,
              } = e;
              (this.postype = d),
                (this.edgeBound = i),
                (this.stageBound = g),
                (this.heightBound = y);
              var { hitdef: e } = e;
              (this.hitdef = e),
                ((this.hitdef.projectile = this).facing = t.facing),
                this.bindToPostypePosition(this.postype, t, this.px, this.py),
                this.changeAction(this.anim);
            }
            applyVelocity() {
              (this.vx += this.vxaccel),
                (this.vy += this.vyaccel),
                (this.vx *= this.vmy),
                (this.vy *= this.vmy),
                (this.x += this.vx),
                (this.y += this.vy),
                (this.facing =
                  0 < this.vx ? 1 : this.vx < 0 ? -1 : this.facing);
            }
            checkRemoveTime() {
              return (
                (0 < this.vx &&
                  this.x > this.player.game.stage.width / 2 + this.edgeBound) ||
                (this.vx < 0 &&
                  this.x <
                    -this.player.game.stage.width / 2 - this.edgeBound) ||
                (-1 !== this.removeTime && this.removeTime - this.tickTime <= 0)
              );
            }
            remove(t) {
              var e = -1;
              switch (t) {
                case "hit":
                  0 <= this.hitAnim && (e = this.hitAnim), (this._removed = !0);
                  break;
                case "remove":
                  0 <= this.remAnim && (e = this.remAnim);
                  break;
                case "cancel":
                  0 <= this.cancelAnim && (e = this.cancelAnim),
                    (this._removed = !0);
                  break;
                default:
                  this._removed = !0;
              }
              (this.vx = this.remvx),
                (this.vy = this.remvy),
                0 <= e
                  ? (this.changeAction(e),
                    this.addListenerOnAnimationEnd(() => this.deleteFromList()))
                  : this.deleteFromList();
            }
            deleteFromList() {
              (this._removed = !0), this.player.root.projectiles.delete(this);
            }
            tick() {
              this.checkRemoveTime()
                ? this.remove()
                : (this.applyVelocity(), this.updateMugenComputedAnimation());
            }
          }
          r.prototype.bindToPostypePosition = i.prototype.bindToPostypePosition;
          return e;
        })())
      );
    },
    566: (e) => {
      e.exports =
        'var ResLoader={async getAsBuffer(e,a=!1){var r;if("string"==typeof e)r=await fetch(e).then(e=>e[a?"text":"arrayBuffer"]());else if(e instanceof Blob){let t=new FileReader;t[a?"readAsText":"readAsArrayBuffer"](e),r=await new Promise((e,a)=>t.onload=e).then(()=>t.result)}else r=e;return r},async loadDEF(e){return new DEFLoader(await this.getAsBuffer(e,!0))},async loadSFF(e){return new SFFLoader(await this.getAsBuffer(e))},async loadAIR(e){return new AIRLoader(await this.getAsBuffer(e,!0))},async loadCMD(e){return new CMDLoader(await this.getAsBuffer(e,!0))},loadACT(e){},async loadSND(e){return new SNDLoader(await this.getAsBuffer(e))},async loadCNS(e){return new CNSLoader(await this.getAsBuffer(e,!0))},async loadST(e){return new _jsmugen.StateController(await this.getAsBuffer(e,!0))},async loadStates(e){},async loadFightFX(e=""){var a={},t=new DEFLoader(await this.getAsBuffer(e+"fight.def",!0));return a.SND=await this.loadSND(e+t.get("files","common.snd")),a.sndPlayer=a.SND.createSndPlayer(100),a.SFF=await this.loadSFF(e+t.get("files","fightfx.sff")),a.AIR=await this.loadAIR(e+t.get("files","fightfx.air")),a}};';
    },
    681: (e) => {
      e.exports =
        'SFFLoader=function(){"use strict";function t(){this.initialize.apply(this,arguments)}t.prototype={constructor:t,initialize:function(t){if(!t)return this;this.defPalette=null,this.backupDefPalette=null,this.groups={},this.ACTs={},this._loadBuffer(t),this._parseHeader(),this.version<2?this._parseSubfiles():(this._currentV2PaletteIndex=-1,this.palettesV2={},this.palettesV2List=[],this._getPalletesV2(),this._parseSubfilesV2())},_loadBuffer:function(t){this.dataView=new DataView(t),this.data8=new Uint8Array(t)},_parseHeader:function(){var t=this.dataView,e=this.data8;if("ElecbyteSpr\\0"!==String.fromCharCode.apply(null,e.subarray(0,12)))throw new Error("it\'s not a sff file.");this.version=[].slice.call(e.subarray(12,16).reverse()),this.version.splice(1,0,"."),this.version=this.version.join(""),2<=this.version?this._parseHeaderV2():(this.groupCount=t.getUint32(16,!0),this.imgCount=t.getUint32(20,!0),this.subfilePosition=t.getUint32(24,!0),this.subheaderSize=t.getUint32(28,!0),this.paletteType=t.getUint8(32),this.comments=String.fromCharCode.apply(null,e.subarray(36,512)).replace(/\\0+/g,""))},_parseHeaderV2:function(){var t=this.dataView,e=this.data8;this.compatVer=[].slice.call(e.subarray(24,28).reverse()),this.compatVer.splice(1,0,"."),this.compatVer=this.compatVer.join(""),this.firstSpriteOffset=t.getUint32(36,!0),this.imgCount=t.getUint32(40,!0),this.firstPaletteOffset=t.getUint32(44,!0),this.paletteCount=t.getUint32(48,!0),this.ldataOffset=t.getUint32(52,!0),this.ldataLength=t.getUint32(56,!0),this.tdataOffset=t.getUint32(60,!0),this.tdataLength=t.getUint32(64,!0),this.comments=String.fromCharCode.apply(null,e.subarray(76,512)).replace(/\\0+/g,""),this.subfilePosition=void 0,this.groupCount=void 0,this.subheaderSize=void 0,this.paletteType=void 0},_parseSubfiles:function(){this.paletteOwners={};this.dataView,this.data8;for(var t=[],e=this.subfilePosition,i=[],a=i,s=this.imgCount,n=0;n<s;n++){var r,h=new l(this,n,e,a);if(!h)break;t.push(h),e=h.nextAddress,this.groups[h.group]=this.groups[h.group]||[],9e3===(this.groups[h.group][h.imgNumber]=h).group&&this.defPalette||(0===h.group&&0===h.imgNumber&&this.defPalette?(h.setPaletteReference(this.defPalette),a=this.defPalette):(r=h.getPaletteReference(),0===h.index&&h.sharedPalette&&(h.setPaletteReference(r=i),a=null,h.sharedPalette=!1),a!==r&&(this.defPalette||(this.defPalette=r,this.backupDefPalette=r.concat()),a=r,this.paletteOwners[h.index]=r)))}return this.subfiles=t,this.defPalette||(this.subfiles[0].setPaletteReference(i),this.subfiles[0].sharedPalette=!1,this.defPalette=i,this.paletteOwners[0]=i),t},_parseSubfilesV2:function(){for(var t=[],e=this.imgCount,i=this.firstSpriteOffset,a=0;a<e;a++){var s=new n(this,i,a);t.push(s),i+=28,this.groups[s.group]=this.groups[s.group]||[],this.groups[s.group][s.imgNumber]=s}return this.subfiles=t},_getPalletesV2:function(){this.dataView;for(var t=this.paletteCount,e=this.firstPaletteOffset,i=0;i<t;i++){var a=new s(this,e,this.palettesV2List.length);this.palettesV2[a.group]=this.palettesV2[a.group]||{},this.palettesV2[a.group][a.itemNo]=a,this.palettesV2List.push(a),e+=16}},getPaletteV2ByIndex:function(t){return arguments.length?this.palettesV2List[t]:this.palettesV2List.concat()},getPaletteV2ByGroup:function(t,e){return arguments.length?this.palettesV2[t][e]:Object.create(this.palettesV2)},setV2Palette:function(t){this._currentV2PaletteIndex=t||-1,this.clearAllLoadedFlags()},putACT:function(t,e){var i=this.defPalette,a=new Uint8Array(t);e&&(this.ACTs[e]=a);for(var s=0;s<256;s++)i[s]=[a[767-3*s-2],a[767-3*s-1],a[767-3*s]];return this.clearAllLoadedFlags(),i},removeACT:function(){for(var t=this.backupDefPalette,e=0;e<768;e++)this.defPalette[e]=t[e]},clearAllLoadedFlags:function(){for(var t=this.subfiles.length;t--;)this.subfiles[t].loaded=!1},findPaletteOwner:function(t){var e,i=this.paletteOwners;for(e in i)if(i[e]===t)return this.subfiles[e]},getSubfileByIndex:function(t){return arguments.length?this.subfiles[t]:this.subfiles.concat()},getSubfileByGroup:function(t,e){return arguments.length?this.groups[t]&&this.groups[t][e]:Object.create(this.groups)},getAsImageData:function(t,e){var i;if(!(i=2===arguments.length?this.getSubfileByGroup(t,e):this.subfiles[t]))return null;var a=i.load();return a?(a instanceof ImageData&&(e=a,(t=document.createElement("canvas")).width=e.width,t.height=e.height,t.getContext("2d").putImageData(e,0,0),i.loaded=a=t),{img:a.nodeName?a:null,imageData:a instanceof window.ImageData?a:null,src:"string"==typeof a?a:null,axisX:i.axisX,axisY:i.axisY,w:i.width||a.width||0,h:i.height||a.height||0}):null}};var l=function(t,e,i,a){this.parent=t,this.index=e,this._palette=a,this._parse(i)};l.prototype={_parse:function(t){var e=this.parent,i=e.dataView;e.data8;this._address=t,this.nextAddress=i.getUint32(t+0,!0),this.dataLength=i.getUint32(t+4,!0),this.axisX=i.getInt16(t+8,!0),this.axisY=i.getInt16(t+10,!0),this.group=i.getUint16(t+12,!0),this.imgNumber=i.getInt16(t+14,!0),this.linkedTo=i.getUint16(t+16,!0),this.sharedPalette=i.getInt8(t+18,!0),this.sharedPalette||(this._palette=[]),t+32+this.dataLength>i.byteLength&&(this.dataLength=i.byteLength-(t+32)),this._pcxDataView=new DataView(i.buffer,t+32,this.dataLength)},load:function(t){if(9e3===this.group&&(t=null),0!==this.dataLength)return this.linkedTo,this.loaded&&!t||(t||this._checkPalette(),this.pcx=new PCXLoader(this._pcxDataView,t||this._palette),this.loaded=this.pcx.createImageData()),this.loaded;var e=this.parent.getSubfileByIndex(this.linkedTo),t=e.load(t);return this.sharedPalette||this.loaded||e.getPaletteReference().forEach(function(t,e){this[e]=t},this._palette),this.loaded=t},loadByCanvas:function(t){},unload:function(){this.loaded&&(this.loaded=!1)},_checkPalette:function(){this.sharedPalette&&0===this._palette.length&&this.parent.findPaletteOwner(this._palette).getPcxPalette()},setPaletteReference:function(t){this._palette=t},getPaletteReference:function(){return this._palette},getPcxPalette:function(){return this.load(),this.getPaletteReference()}};var i={0:"RAW",1:"LINKED",2:"RLE8",3:"RLE5",4:"LZ5",10:"PNG8",11:"PNG24",12:"PNG32"},n=function(t,e,i){this.parent=t,this.index=i,this._parseHeader(e)};n.prototype={version:2,_parseHeader:function(t,e){t=new DataView(this.parent.dataView.buffer,t);this.group=t.getInt16(0,!0),this.imgNumber=t.getInt16(2,!0),this.width=t.getInt16(4,!0),this.height=t.getInt16(6,!0),this.axisX=t.getInt16(8,!0),this.axisY=t.getInt16(10,!0),this.linkedTo=t.getInt16(12,!0),this.format=t.getUint8(14,!0),this.formatType=i[this.format],this.colorDepth=t.getUint8(15,!0),this.dataAddress=t.getInt32(16,!0),this.dataLength=t.getInt32(20,!0),this.paletteIndex=t.getInt16(24,!0),this.flags=t.getInt16(26,!0),this.dataAddress+=this.flags?this.parent.tdataOffset:this.parent.ldataOffset},load:function(){if(this.loaded)return this.loaded;if(this.linkedTo||"LINKED"===this.formatType)var t=this.parent.getSubfileByIndex(this.linkedTo).load();else{(e=this.parent.dataView).getInt32(this.dataAddress,!0);var e=new DataView(e.buffer,this.dataAddress+4);switch(this.formatType){case"RAW":break;case"LINKED":this.linkedTo&&(t=this.parent.getSubfileByIndex(this.linkedTo).load());break;case"RLE8":t=this._decodeRLE8(e);break;case"RLE5":t=this._decodeRLE5(e);break;case"LZ5":t=this._decodeLZ5(e);break;case"PNG8":t=this._loadPNG8(e);break;case"PNG24":case"PNG32":t=this._loadPNG32(e);break;default:throw new Error("unknown format: "+this.format)}}return this.loaded=t},_decodeRLE8:function(t){for(var e=new ImageData(this.width,this.height),i=e.data,a=(a=this.getCurrentPalette()).getPalette(),s=i.length/4,n=0,r=0;r<s;){var h,l=t.getUint8(n++);for(64==(192&l)?(h=63&l,l=t.getUint8(n++)):h=1;0<=--h;)i[4*r+0]=a[3*l],i[4*r+1]=a[3*l+1],i[4*r+2]=a[3*l+2],i[4*r+3]=l?255:0,r++}return e},_decodeRLE5:function(t,e){var i=new ImageData(this.width,this.height),a=i.data;e=(e=this.getCurrentPalette()).getPalette();var s=a.length/4,n=0,r=0;do{for(var h=t.getUint8(n++),l=127&t.getUint8(n),d=t.getUint8(n++)>>7!=0?t.getUint8(n++):0;a[4*r+0]=e[3*d],a[4*r+1]=e[3*d+1],a[4*r+2]=e[3*d+2],a[4*r+3]=d?255:0,r++,0<=--h;);for(;l--;)for(d=31&t.getUint8(n),h=t.getUint8(n++)>>5;h--;)a[4*r+0]=e[3*d],a[4*r+1]=e[3*d+1],a[4*r+2]=e[3*d+2],a[4*r+3]=d?255:0,r++}while(r<s);return i},_decodeLZ5:function(t,e){e=(e=this.getCurrentPalette()).getPalette();var i=new ImageData(this.width,this.height),a=new Uint8Array(this.width*this.height),s=a.length,n=0,r=0,h=t.getUint8(n++),l=1,d=0,o=0;do{var u=0,g=t.getUint8(n++);if(0!=(h&l)){var f=0;for(0==(63&g)?(f=1+(g<<2|t.getUint8(n++)),u=t.getUint8(n++)+3):(d|=(192&g)>>o,u=1+(63&g),(o+=2)<8?f=t.getUint8(n++)+1:(f=d+1,d=o=0));0<u--;)a[r]=a[r-f],r++}else for(var p=31&g,u=0==(224&g)?t.getUint8(n++)+8:g>>>5;0<u--;)a[r++]=p}while(128<(l<<=1)&&(l=1,h=t.getUint8(n++)),r<s);for(var c=i.data,P=0;P<a.length;P++)c[4*P+0]=e[3*a[P]],c[4*P+1]=e[3*a[P]+1],c[4*P+2]=e[3*a[P]+2],c[4*P+3]=a[P]?255:0;return i},_loadPNG8:function(t){var e=this.getCurrentPalette();return new PNGLoader(t,this.dataLength-4,e).getImgElement(e.getPalette(),e.getAlphaPalette())},_loadPNG32:function(t){return new PNGLoader(t,this.dataLength-4).getImgElement()},getCurrentPalette:function(){return 0<=this.parent._currentV2PaletteIndex?this.parent.getPaletteV2ByIndex(this.parent._currentV2PaletteIndex):this.parent.getPaletteV2ByIndex(this.paletteIndex)}};var s=function(t,e,i){this.parent=t,this.index=i,this._parseHeader(e),this.load()};return s.prototype={_rgb:null,_alpha:null,_parseHeader:function(t){t=new DataView(this.parent.dataView.buffer,t);this.group=t.getInt16(0,!0),this.itemNo=t.getInt16(2,!0),this.colorNo=t.getInt16(4,!0),this.linkedIndex=t.getInt16(6,!0),this.dataAddress=t.getInt32(8,!0)+this.parent.ldataOffset,this.dataLength=t.getInt32(12,!0)},load:function(){for(var t=new DataView(this.parent.dataView.buffer,this.dataAddress),e=this.colorNo,i=new Uint8Array(3*e),a=new Uint8Array(e),s=[],n=0;n<e;n++)s.push(t.getUint8(4*n),t.getUint8(4*n+1),t.getUint8(4*n+2)),a[n]=t.getUint8(4*n+3);i.set(s),this._rgb=i,this._alpha=a},getPalette:function(){return this._rgb},getAlphaPalette:function(){return this._alpha}},t}(),PCXLoader=function(){function t(){this.initialize.apply(this,arguments)}var p,c;return t.prototype={constructor:t,loaded:!1,initialize:function(t,e){this._dataView=t,this._palette=e,this._parseHeader()},_parseHeader:function(){var t=this._dataView;this.manufacturer=t.getInt8(0),this.version=t.getUint8(1),this.scheme=t.getUint8(2),this.bitsPerPixel=t.getUint8(3),this.xStart=t.getInt16(4,!0),this.yStart=t.getInt16(6,!0),this.xEnd=t.getInt16(8,!0),this.yEnd=t.getInt16(10,!0),this.width=t.getInt16(12,!0),this.height=t.getInt16(14,!0),this.numBitPlanes=t.getUint8(65),this.bytesPerLine=t.getUint16(66,!0),this.colorTableType=t.getUint8(68)},getPalette:function(){if(this._palette&&this._palette.length)return this._palette;for(var t=this._dataView,e=new Uint8Array(t.buffer,t.byteOffset,t.byteLength),i=this._palette||[],a=e.length,s=a-768;s<a;s+=3)i.push(e.subarray(s,s+3));return this._palette=i},createImageData:function(){if(this._imgdata)return this._imgdata;var e=this.xEnd-this.xStart+1,i=this.yEnd-this.yStart+1,t=this.getPalette();try{a=p?c.createImageData(e,i):new ImageData(e,i)}catch(t){p=!0;try{var a=(c=document.createElement("canvas").getContext("2d")).createImageData(e,i)}catch(t){(a={}).data=new Array(e*i*4),a.width=e,a.height=i}}var s=a.data,n=this._dataView,r=this.bytesPerLine,h=128,l=0,d=0,o=0,u=0;do{for(var g=n.getUint8(h++),f=t[u=192<=(192&g)?(o=63&g,n.getUint8(h++)):(o=1,g)];e<(d=r<++d?1:d)||(s[l++]=f[0],s[l++]=f[1],s[l++]=f[2],s[l++]=u?255:0),--o;);}while(l<s.length&&h<n.byteLength-1);return this._imgdata=a}},t}(),PNGLoader=function(){function t(t,e,i,a){this.data=new Uint8Array(t.buffer,t.byteOffset,e);var s=this.data.subarray(0,8),n=[];if(s.map(function(t){n.push(t.toString(16))}),"89,50,4E,47,D,A,1A,A"!==n.join().toUpperCase())throw new Error("it`s not a png");this.dv=t,this.pal=i,this.length=e,this._parseChunks()}return t.prototype={_addressChunkPLTE:0,_addressChunkFirstIDATA:0,_addressChunkTRNS:0,_parseChunks:function(){for(var t=this.dv,e=8,i=this.length;e<i;){var a=t.getUint32(e);switch(String.fromCharCode.apply(null,new Uint8Array(t.buffer,t.byteOffset+e+4,4))){case"IHDR":break;case"PLTE":this._addressChunkPLTE=e+4+4;break;case"tRNS":this._addressChunkTRNS=e;break;case"IDAT":this._addressChunkFirstIDATA||(this._addressChunkFirstIDATA=e)}t.getUint32(e+4+4+a);e+=a+4+4+4}},_createChunk_tRNS:function(t){var e=t.length,i=new Uint8Array(8+e+4),a=new DataView(i.buffer),s="tRNS".split("").map(function(t){return t.charCodeAt(0)});a.setUint32(0,e,!1),i.set(s,4),i.set(t,8);s=Zlib.CRC32.calc(s),s=Zlib.CRC32.update(t,s);return a.setUint32(8+e,s,!1),i},insertChunk:function(t,e){var i=this.data.subarray(0,e),a=this.data.subarray(e),s=new Uint8Array(this.data.length+t.length);return s.set(i,0),s.set(t,e),s.set(a,e+t.length),this.data=s},getImgElement:function(t,e){var i,a;t&&(this.data.set(t,this._addressChunkPLTE),i=[],"PLTE".split("").map(function(t){i.push(t.charCodeAt(0))}),a=Zlib.CRC32.calc(i),a=Zlib.CRC32.update(t,a),this.data.set(a=[(4278190080&a)>>>24,(16711680&a)>>16,(65280&a)>>8,255&a],this._addressChunkPLTE+t.length),e&&(s=this._createChunk_tRNS(e),this._addressChunkTRNS?this.data.set(s,this._addressChunkTRNS):(this._addressChunkTRNS=this._addressChunkFirstIDATA,this.insertChunk(s,this._addressChunkTRNS),this._addressChunkFirstIDATA=this._addressChunkFirstIDATA+s.length)));var e=document.createElement("img"),s=new Blob([this.data],{type:"image/png"}),s=(window.URL||window.webkitURL).createObjectURL(s);return e.src=s,e},_readIHDR:function(t){var e=this.dv;t.ihdrLength=e.getUint32(0,!1),t.ihdrType=e.getUint32(4,!1),t.width=e.getUint32(8,!1),t.height=e.getUint32(12,!1),t.bitDepth=e.getUint8(16,!1),t.colorType=e.getUint8(17,!1),t.compType=e.getUint8(18,!1),t.filterType=e.getUint8(19,!1),t.interlace=e.getUint8(20,!1),t.ihdrCRC=e.getUint32(21,!1)},testCRC:function(t,e){var i=[];t.split("").map(function(t){i.push(t.charCodeAt(0))});t=Zlib.CRC32.calc(i);return t=Zlib.CRC32.update(e,t)}},t}();';
    },
    530: (e) => {
      e.exports =
        'SNDLoader=function(){"use strict";function e(e){if(this.groups={},!e)return this;this._loadBuffer(e),this._parseHeader(),this._parseSubfiles()}e.prototype={constructor:SFFLoader,version:0,numSounds:0,subfileOffset:0,comments:"",_loadBuffer:function(e){this.dataView=new DataView(e)},_parseHeader:function(){var e=this.dataView,t=new Uint8Array(e.buffer);if("ElecbyteSnd\\0"!==String.fromCharCode.apply(null,t.subarray(0,12)))throw new Error("it\'s not a SND file.");this.version=[].slice.call(t.subarray(12,16).reverse()),this.version.splice(1,0,"."),this.version=this.version.join(""),this.numSounds=e.getUint32(16,!0),this.subfileOffset=e.getUint32(20,!0),this.comments=String.fromCharCode.apply(null,t.subarray(24,512)).replace(/\\0+/g,"")},_parseSubfiles:function(){this.dataView;for(var e=[],t=[],s=this.subfileOffset,n=this.numSounds,i=0;i<n;i++){var a=new r(this,e.length,s);if(!a)break;s=a.nextAddress,this.groups[a.group]=this.groups[a.group]||{},this.groups[a.group][a.soundNumber]?t.push({g:a.group,i:a.soundNumber,file:a}):(e.push(a),this.groups[a.group][a.soundNumber]=a)}return this.subfiles=e,this.overlappedFiles=t,e},getSoundData:function(e,t){return(e=2===arguments.length?this.getSubfileByGroup(e,t):this.subfiles[e])?e.load():null},getSound:function(e,t){t=this.getSoundData(e,t);return t||null},clearAllLoadedFlags:function(){for(var e=this.subfiles.length;e--;)this.subfiles[e].loaded=!1},getSubfileByIndex:function(e){return arguments.length?this.subfiles[e]:this.subfiles.concat()},getSubfileByGroup:function(e,t){return arguments.length?this.groups[e]&&this.groups[e][t]:this.groups},createSndPlayer:function(e){return new t(this,e)}},e.setBaseVolume=e=>{t.baseVolume=e},e.getBaseVolume=()=>t.baseVolume;var r=function(e,t,s){this.parent=e,this.index=t,this._parse(s)};r.prototype={parent:null,index:0,_address:0,nextAddress:0,dataLength:0,group:0,soundNumber:0,_ui8Data:null,_parse:function(e){var t=this.parent.dataView;this._address=e,this.nextAddress=t.getUint32(e+0,!0),this.dataLength=t.getUint32(e+4,!0),this.group=t.getInt32(e+8,!0),this.soundNumber=t.getInt32(e+12,!0)},load:function(){var e;return this.loaded||(e=new Uint8Array(this.parent.dataView.buffer,this._address+16,this.dataLength),e=new Blob([e]),e=window.URL.createObjectURL(e),this._bloburl=e,this.loaded=!0),this._bloburl},unload:function(){this.loaded&&(this.loaded=!1)}};let i=1;const a=new Set;class t{constructor(e,t){this._SND=e,this._activeCount=0,this._channelMax=t||100,this._channels=new Map,this._channelsUnnamed=new Set,a.add(this)}static get baseVolume(){return i}static set baseVolume(e){var t,s=Number(e);if(!(0<=s&&s<=1))throw new Error("volume must be from 0.0 to 1.0: "+e);i=s;for(t of a)for(var n of[...t._channels.values(),...t._channelsUnnamed])n.syncBaseVolume()}static get getPlayerCount(){return a.size}get activeCount(){return this._activeCount}get channelMax(){return this._channelMax}play(e,t={}){var{channel:s=-1,lowpriority:n}=t,i=s,s=null;if(e instanceof Array&&(e=this._SND.getSound(e[0],e[1])),!(s=0<=i?this._channels.get(i):s)){if(!(s=this._createChannel(i)))return!1;0<=i?this._channels.set(i,s):this._channelsUnnamed.add(s)}if(n&&s.isActive)return!1;s.load(e,t),s.play()}stop(e){if("number"==typeof e){e=this._channels.get(e);if(!e)return!1;e.pause()}else{for(var[t,s]of this._channels)s.pause();for(var n of this._channelsUnnamed)n.pause();this._activeCount=0}}_createChannel(e){if(this._activeCount>=this._channelMax)return null;e=new s(this,e);return this._activeCount++,e}_removeUnnamedChannel(e){this._channelsUnnamed.delete(e)}informStopped(e){this._activeCount--,e.channelNumber<0&&this._removeUnnamedChannel(e)}dispose(){a.delete(this);for(var e of[...this._channels.values(),...this._channelsUnnamed])e.pause();this._channels.clear(),this._channelsUnnamed.clear()}}class s{constructor(e,t,s){if("number"!=typeof t)throw new Error(`chnannel number must be number: "${t}"`);this._player=e,this._audio=null,this._src="",this._active=!1,this._prevPromise=null,this.channelNumber=t,this._stamp=0,this._volume=s||1}get isActive(){return this._active}load(e,t={}){this.pause(),this._audio=new Audio(e),this.setOptions(t),this.syncBaseVolume(),this._audio.loop||this._setEndedEvent(this._audio,++this._stamp)}setOptions({lowpriority:e,volume:t,loop:s,freqmul:n,pan:i,abspan:a}){var r,o={lowpriority:e,volume:t,loop:s,freqmul:n,pan:i,abspan:a};const u=this._audio;for(r in o){var h=o[r];void 0!==h&&("volume"===r&&(this._volume=h),u[r]=h)}}play(){const e=this._audio;this._prevPromise=this._audio.play().then(()=>e),this._active=!0}pause(){this._audio&&this._active&&this._prevPromise&&(this._audio=null,this._active=!1,this._player.informStopped(this),this._prevPromise.then(e=>e.pause()))}syncBaseVolume(){const e=this._audio;e&&(e.volume=i*this._volume)}_setEndedEvent(t,s){t.onended=e=>{this._active&&(t.onended=null,t=null,s===this._stamp&&(this._active=!1,this._player.informStopped(this)))}}}return e}();';
    },
    241: (e) => {
      e.exports =
        '!function(e){function a(e){e=(e=e.replace(/\\\\n/g,"\\n")).replace(/\\\\t/g,"\\t");for(var t=/(%%)|%([-+ 0]+)?(\\d+)?(?:\\.(\\d+))?([difge])|([\\s\\S])/gi,a="",i=[];p=t.exec(e);){var[,r,s,n,o,l,p]=p;r?a+="%":p?a+=p:(a&&(i.push(a),a=""),i.push({adjustLeft:/-/.test(s),fillZeros:/0/.test(s),addSign:/\\+/.test(s),addSpace:/ /.test(s),width:Number(n)||0,precision:Number(void 0===o?6:0),float:/fge/i.test(l)}))}return a&&i.push(a),i}function i(e,i){var r=0;return(e=e.map(e=>{if("string"==typeof e)return e;let t=i.length>r?i[r]:"-";var a=e.addSign?0<=t?"+":"-":e.addSpace&&0<=t?" ":"";return"number"==typeof t&&(e.float?t=t.toFixed(e.precision):t|=0),t=String(t),t.length<e.width&&(t=e.adjustLeft?(t+Array(e.width+1).join(" ")).substring(0,e.width):(Array(e.width+1).join(e.fillZeros?"0":" ")+t).slice(-e.width)),r++,a+t})).join("")}e.StringParameterDefinitions=new Map,e.AssertSpecialFlags=/^(int|inv|r|noba|noBG|noFG|nost|noc|noai|noau|noj|nokosn|nokosl|noko|nosh|g|nom|now|t|u)\\w*\\b/i,e.StringParameterDefinitions.set(e.AssertSpecialFlags,{INT:"INTRO",INV:"INVISIBLE",R:"ROUNDNOTOVER",NOBA:"NOBARDISPLAY",NOBG:"NOBG",NOFG:"NOFG",NOST:"NOSTANDGUARD",NOC:"NOCROUCHGUARD",NOAI:"NOAIRGUARD",NOAU:"NOAUTOTURN",NOJ:"NOJUGGLECHECK",NOKO:"NOKO",NOKOSN:"NOKOSND",NOKOSL:"NOKOSLOW",NOSH:"NOSHADOW",G:"GLOBALNOSHADOW",NOM:"NOMUSIC",NOW:"NOWALK",T:"TIMERFREEZE",U:"UNGUARDABLE"}),e.TransTypes=/^(d|n|adda|s|add1|add)\\w*\\b/i,e.StringParameterDefinitions.set(e.TransTypes,{D:"DEFAULT",N:"NONE",ADD:"ADD",S:"SUB",ADDA:"ADDALPHA",ADD1:"ADD1"}),e.AfterImageTransTypes=/^(n|add1|add|s)\\w*\\b/i,e.StringParameterDefinitions.set(e.AfterImageTransTypes,{N:"NONE",ADD:"ADD",ADD1:"ADD1",S:"SUB"}),e.HitAttr=/^([SCA]*)\\s*((?:\\s*,\\s*[NSHA][ATP])+)?\\s*$/i,e.HitFlags=/^([HLAMFDE\\+\\-P]+)\\b/i,e.SoundNumber=/^(S|F)?(.+)/i,e.SparkNumber=/^(S|F)?(.+)/i,e.AnimNumber=/^(F|S)?(.+)/i,e.AnimeTypes=/^(l|m|h|b|u|d)\\w*\\b/i,e.StringParameterDefinitions.set(e.AnimeTypes,{L:"LIGHT",M:"MEDIUM",H:"HARD",B:"BACK",U:"UP",D:"DIAGUP"}),e.HitTypes=/^(d|h|m)\\w*\\b|/i,e.StringParameterDefinitions.set(e.HitTypes,{D:"DODGE",H:"HIT",M:"MISS"}),e.AttackTypes=/^(h|l|t|n)\\w*\\b/i,e.StringParameterDefinitions.set(e.AttackTypes,{H:"HIGH",L:"LOW",T:"TRIP",N:"NONE"}),e.PosTypes=/^(p1|p2|f|b|l|r|n)\\w*\\b/i,e.StringParameterDefinitions.set(e.PosTypes,{P1:"P1",P2:"P2",F:"FRONT",B:"BACK",L:"LEFT",R:"RIGHT",N:"NONE"}),e.BindPosTypes=/^(f|m|h)\\w*\\b|^$/i,e.StringParameterDefinitions.set(e.BindPosTypes,{F:"FOOT",M:"MID",H:"HEAD"}),e.ExplodSpaceTypes=/^(sc|st)\\w*\\b/i,e.StringParameterDefinitions.set(e.ExplodSpaceTypes,{SC:"SCREEN",ST:"STAGE"}),e.WaveFormTypes=/^(sines|sq|sine|o)\\w*\\b/i,e.StringParameterDefinitions.set(e.WaveFormTypes,{SINE:"SINE",SQ:"SQUARE",SINES:"SINESQUARE",O:"OFF"}),e.HelperTypes=/^(n|p)\\w*\\b/i,e.StringParameterDefinitions.set(e.HelperTypes,{N:"NORMAL",P:"PLAYER"}),e.AffectTeamTypes=/^([BEF])\\b/i,e.StateTypes={afterimage:{opt:{time:1,length:1,timegap:1,framegap:1,palcolor:1,palinvertall:1,palbright:3,palcontrast:3,palpostbright:3,paladd:3,palmul:3,trans:e.AfterImageTransTypes},act(e){var{time:t=1,length:a=20,timegap:i=1,framegap:e=4}=e;this.setAfterImage({time:t,length:a,timegap:i,framegap:e})}},afterimagetime:{req:{time:1},alt:{time:"value"},act({time:e=0,value:t=0}){this.afterImageData&&(this.afterImageData.time=e||t)}},allpalfx:{opt:{time:1,add:3,mul:3,sinadd:4,invertall:1,color:1},act(){}},angleadd:{req:{value:1},act(){}},angledraw:{opt:{value:1,scale:2},act(){}},anglemul:{req:{value:1},act(){}},angleset:{req:{value:1},act(){}},appendtoclipboard:{req:{text:"string"},opt:{params:6},prep(e){var t=a(e.get("text"));e.set("_clipboardTextStack",t)},act(e){var t;this.game.debug&&(t=e._clipboardTextStack,e=e.params,this.frameLimitedData.set("clipboardText",(this.frameLimitedData.get("clipboardText")||"")+i(t,e)))}},assertspecial:{req:{flag:e.AssertSpecialFlags},opt:{flag2:e.AssertSpecialFlags,flag3:e.AssertSpecialFlags},act(e){for(var t in e)/^flag[23]?$/.test(t)&&this.frameLimitedData.set(e[t],!0)}},attackdist:{req:{value:1},act(){}},attackmulset:{req:{value:1},act(){}},bgpalfx:{opt:{time:1,add:3,mul:3,sinadd:4,invertall:1,color:1},act(){}},bindtoparent:{opt:{time:1,facing:1,pos:2},act(e){var t,a,i;this.parent&&(t=(i=e.pos||[0,0])[0],a=i[1],i=e.time||1,e=e.facing||0,this.setBind(this.parent,t,a,i,{facing:e}))}},bindtoroot:{opt:{time:1,facing:1,pos:2},act(e){var t,a,i;this.parent&&(t=(i=e.pos||[0,0])[0],a=i[1],i=e.time||1,e=e.facing||0,this.setBind(this.parent.root,t,a,i,{facing:e}))}},bindtotarget:{opt:{time:1,id:1,pos:[1,1,e.BindPosTypes]},act(e){var t=e.pos||[0,0],a=t[0],i=t[1],r=e.time||1,t=e.pos[2]||"FOOT",e=this.targets.getFirstValue(e.id);e&&this.setBind(e,a,i,r,{bindpostype:t})}},changeanim:{req:{value:1},opt:{elem:1},act(e){this.changeAction(e.value,e.elem)}},changeanim2:{req:{value:1},opt:{elem:1},act(e){this.changeAction(e.value,e.elem)}},changestate:{req:{value:1},opt:{ctrl:1,anim:1},act(e,t,a){this.changeState(e.value,e,t,a)}},clearclipboard:{act(){this.game.debug&&this.frameLimitedData.set("clipboardText","")}},ctrlset:{req:{value:1},act(e){this.ctrl=e.value}},defencemulset:{req:{value:1},act(){}},destroyself:{opt:{recursive:1,removeexplods:1},act(e,t,a){this.parent&&this.parent.destroyHelper(this,e)}},displaytoclipboard:{req:{text:"string"},opt:{params:6},prep(e){var t=a(e.get("text"));e.set("_clipboardTextStack",t)},act(e){var t;this.game.debug&&(t=e._clipboardTextStack,e=e.params,this.frameLimitedData.set("clipboardText",i(t,e)))}},envcolor:{opt:{value:3,time:1,under:1},act(){}},envshake:{req:{time:1},opt:{freq:1,ampl:1,phase:1},act(){}},explod:{req:{anim:e.AnimNumber},opt:{id:1,space:e.ExplodSpaceTypes,pos:2,facing:1,vfacing:1,bindid:1,bindtime:1,vel:2,velocity:2,accel:2,removetime:1,supermovetime:1,pausemovetime:1,scale:2,angle:1,yangle:1,xangle:1,sprpriority:1,ontop:1,shadow:3,ownpal:1,remappal:2,removeongethit:1,ignorehitpause:1,trans:e.TransTypes,postype:/^(p1|p2|front|back|left|right|none)\\b/i,random:2,supermove:1},act(e,t){var a=e.anim[0],i="F"===e.anim[1];this.createExplod(a,i,e)}},explodbindtime:{opt:{id:1,time:1},alt:{time:"value"},act(e){this.modifyExplod({id:"id"in e?e.id:-1,bindtime:e.time||e.value||0})}},fallenvshake:{act(){}},forcefeedback:{opt:{waveform:e.WaveFormTypes,time:1,freq:4,ampl:4,self:1},act(){}},gamemakeanim:{opt:{value:1,under:1,pos:2,random:1},act(e){var t=e.value||0;this.createExplod(t,!0,{_type:"GameMakeAnim",removetime:1,pos:e.pos,random:[e.random||0,e.random||0],sprpriority:e.under?-1:1})}},gravity:{act(){this.vy+=this.yaccel}},helper:{opt:{helpertype:e.HelperTypes,name:"string",id:1,pos:2,postype:e.PosTypes,facing:1,stateno:1,keyctrl:1,ownpal:1,remappal:2,supermovetime:1,pausemovetime:1,"size.xscale":1,"size.yscale":1,"size.ground.back":1,"size.ground.front":1,"size.air.back":1,"size.air.front":1,"size.height":1,"size.proj.doscale":1,"size.head.pos":2,"size.mid.pos":2,"size.shadowoffset":1},act(e,t,a){this.createHelper(e)}},hitadd:{req:{value:1},act(){}},hitby:{req:{value:e.HitAttr},opt:{time:1},act(){}},hitdef:{req:{attr:e.HitAttr},opt:{hitflag:e.HitFlags,guardflag:e.HitFlags,affectteam:e.AffectTeamTypes,animtype:e.AnimeTypes,"air.animtype":e.AnimeTypes,"fall.animtype":e.AnimeTypes,priority:[1,e.HitTypes],damage:2,pausetime:2,"guard.pausetime":2,sparkno:e.SparkNumber,"guard.sparkno":e.SparkNumber,sparkxy:2,hitsound:e.SoundNumber,guardsound:e.SoundNumber,"ground.type":e.AttackTypes,"air.type":e.AttackTypes,"ground.slidetime":1,"guard.slidetime":1,"ground.hittime":1,"guard.hittime":1,"air.hittime":1,"guard.ctrltime":1,"guard.dist":1,yaccel:1,"ground.velocity":2,"guard.velocity":1,"air.velocity":2,"airguard.velocity":2,"ground.cornerpush.veloff":1,"air.cornerpush.veloff":1,"down.cornerpush.veloff":1,"guard.cornerpush.veloff":1,"airguard.cornerpush.veloff":1,"airguard.ctrltime":1,"air.juggle":1,mindist:2,maxdist:2,snap:2,p1sprpriority:1,p2sprpriority:1,p1facing:1,p1getp2facing:1,p2facing:1,p1stateno:1,p2stateno:1,p2getp1state:1,forcestand:1,fall:1,"fall.xvelocity":1,"fall.yvelocity":1,"fall.recover":1,"fall.recovertime":1,"fall.damage":1,"air.fall":1,forcenofall:1,"down.velocity":2,"down.hittime":1,"down.bounce":1,id:1,chainid:1,nochainid:2,hitonce:1,kill:1,"guard.kill":1,"fall.kill":1,numhits:1,getpower:2,givepower:2,"palfx.time":1,"palfx.mul":3,"palfx.add":3,"envshake.time":1,"envshake.freq":1,"envshake.ampl":1,"envshake.phase":1,"fall.envshake.time":1,"fall.envshake.freq":1,"fall.envshake.ampl":1,"fall.envshake.phase":1},act(e){var t=e.attr;let a=r(this,e);a.attr=t,this.stateLimitedData.set("HitDef",a)}},hitfalldamage:{act(){}},hitfallset:{opt:{value:1,xvel:1,yvel:1},act(){}},hitfallvel:{act(){}},hitoverride:{req:{attr:e.HitAttr,stateno:1},opt:{slot:1,time:1,forceair:1},act(){}},hitvelset:{opt:{x:1,y:1},act(e){var t=this.gettingHit;t&&(e.x&&(this.vx=t["ground.velocity"][0]),e.y&&(this.vy=t["ground.velocity"][1]))}},lifeadd:{req:{value:1},opt:{kill:1,absolute:1},act(){}},lifeset:{req:{value:1},act(){}},makedust:{opt:{pos:2,pos2:2,spacing:1},act(e){var t=e.spacing,a=e.pos2;this.createExplod(120,!0,{_type:"MakeDust",removetime:1,pos:e.pos}),a&&this.createExplod(120,!0,{_type:"MakeDust",removetime:1,pos:a,_spacing:t})}},modifyexplod:{opt:{anim:1,id:1,space:e.ExplodSpaceTypes,pos:2,facing:1,vfacing:1,bindid:1,bindtime:1,vel:2,accel:2,removetime:1,supermovetime:1,pausemovetime:1,scale:2,angle:1,yangle:1,xangle:1,sprpriority:1,ontop:1,shadow:3,ownpal:1,remappal:2,removeongethit:1,ignorehitpause:1,trans:e.TransTypes,postype:/^(p1|p2|front|back|left|right|none)\\b/i,random:1,supermove:1},prep(e){var t,a=e.get("postype");let i=[];for(t of["anim","ownpal","pos","facing","vfacing","vel","accel","random"])e.has(t)&&(!/anim|ownpal/i.test(t)&&a||(i.push(t),e.delete(t)));i.length},act(e){var t="id"in e?Number(e.id):-1;e.id=t,this.modifyExplod(e)}},movehitreset:{act(){}},nothitby:{req:{value:e.HitAttr,value2:e.HitAttr},alt:{value2:"value",value:"value2"},opt:{time:1},act(e){this.setNotHit(e)}},null:{act(){}},offset:{opt:{x:1,y:1},act(e){this.offsetX=e.x||0,this.offsetY=e.y||0}},palfx:{opt:{time:1,add:3,mul:3,sinadd:4,invertall:1,color:1},act(){}},parentvaradd:{req:{v:1,value:1},alt:{v:"fv"},vopt:!0,act(e){let t=this.parent;t&&("v"in e&&(t[e.sys?"sysvar":"var"][e.v]+=e.value),"fv"in e&&(t[e.sys?"sysfvar":"fvar"][e.fv]+=e.value))}},parentvarset:{req:{v:1,value:1},alt:{v:"fv"},vopt:!0,act(e){let t=this.parent;t&&("v"in e&&(t[e.sys?"sysvar":"var"][e.v]=e.value),"fv"in e&&(t[e.sys?"sysfvar":"fvar"][e.fv]=e.value))}},pause:{req:{time:1},opt:{endcmdbuftime:1,movetime:1,pausebg:1},act(e){e.time=e.time||0,e.endcmdbuftime=e.endcmdbuftime||0,e.movetime=e.movetime||0,e.pausebg=Boolean(e.pausebg),this.game.normalPause(this,e)}},playerpush:{req:{value:1},act({value:e}){this.frameLimitedData.set("PlayerPush",Boolean(e))}},playsnd:{req:{value:e.SoundNumber},opt:{volume:1,volumescale:1,channel:1,lowpriority:1,freqmul:1,loop:1,pan:1,abspan:1},act(e,t){var a="channel"in e?e.channel:-1;if("number"!=typeof a)throw new Error(`channel must be a number: "${a}"`);var i=e.lowpriority;let r=.5;"volumescale"in e?r=e.volumescale/100:"volume"in e&&(r=(Math.min(Math.max(-255,e.volume),255)+255)/510),r<0?r=0:1<r&&(r=1);var s=e.loop||0,n=e.freqmul||1,o=e.pan||0,l=e.abspan||0,p=e.value[0],m=e.value[1],m=("F"===e.value[2]?this.game.resources:this).SND.getSound(p,m);m&&this.speak(m,{channel:a,lowpriority:i,volume:r,loop:s,freqmul:n,pan:o,abspan:l})}},posadd:{opt:{x:1,y:1},act(e){"x"in e&&(this.x+=e.x*this.facing),"y"in e&&(this.y+=e.y)}},posfreeze:{opt:{value:1},act(e){e.value&&this.frameLimitedData.set("posFreeze",!0)}},posset:{opt:{x:1,y:1},act(e){"x"in e&&(this.x=e.x),"y"in e&&(this.y=e.y)}},poweradd:{req:{value:1},act(e){this.power+=e.value}},powerset:{req:{value:1},act(e){this.power=e.value}},projectile:{opt:{projid:1,projanim:1,projhitanim:1,projremanim:1,projcancelanim:1,projscale:2,projremove:1,projremovetime:1,velocity:2,remvelocity:2,accel:2,velmul:2,projhits:1,projmisstime:1,projpriority:1,projsprpriority:1,projedgebound:1,projstagebound:1,projheightbound:2,offset:2,postype:e.PosTypes,projshadow:3,supermovetime:1,pausemovetime:1,ownpal:1,remappal:2,"afterimage.time":1,"afterimage.length":1,"afterimage.palcolor":1,"afterimage.palinvertall":1,"afterimage.palbright":3,"afterimage.palcontrast":3,"afterimage.palpostbright":3,"afterimage.paladd":3,"afterimage.palmul":3,"afterimage.timegap":1,"afterimage.framegap":1,"afterimage.trans":e.AfterImageTransTypes,attr:e.HitAttr,hitflag:e.HitFlags,guardflag:e.HitFlags,affectteam:e.AffectTeamTypes,animtype:e.AnimeTypes,"air.animtype":e.AnimeTypes,"fall.animtype":e.AnimeTypes,priority:[1,e.HitTypes],damage:2,pausetime:2,"guard.pausetime":2,sparkno:e.SparkNumber,"guard.sparkno":e.SparkNumber,sparkxy:2,hitsound:e.SoundNumber,guardsound:e.SoundNumber,"ground.type":e.AttackTypes,"air.type":e.AttackTypes,"ground.slidetime":1,"guard.slidetime":1,"ground.hittime":1,"guard.hittime":1,"air.hittime":1,"guard.ctrltime":1,"guard.dist":1,yaccel:1,"ground.velocity":2,"guard.velocity":1,"air.velocity":2,"airguard.velocity":2,"ground.cornerpush.veloff":1,"air.cornerpush.veloff":1,"down.cornerpush.veloff":1,"guard.cornerpush.veloff":1,"airguard.cornerpush.veloff":1,"airguard.ctrltime":1,"air.juggle":1,mindist:2,maxdist:2,snap:2,p1sprpriority:1,p2sprpriority:1,p1facing:1,p1getp2facing:1,p2facing:1,p1stateno:1,p2stateno:1,p2getp1state:1,forcestand:1,fall:1,"fall.xvelocity":1,"fall.yvelocity":1,"fall.recover":1,"fall.recovertime":1,"fall.damage":1,"air.fall":1,forcenofall:1,"down.velocity":2,"down.hittime":1,"down.bounce":1,id:1,chainid:1,nochainid:2,hitonce:1,kill:1,"guard.kill":1,"fall.kill":1,numhits:1,getpower:2,givepower:2,"palfx.time":1,"palfx.mul":3,"palfx.add":3,"envshake.time":1,"envshake.freq":1,"envshake.ampl":1,"envshake.phase":1,"fall.envshake.time":1,"fall.envshake.freq":1,"fall.envshake.ampl":1,"fall.envshake.phase":1},act(e){var t=r(this,e);e.hitdef=t,this.createProjectile(e)}},remappal:{opt:{source:2,dest:2},act(){}},removeexplod:{opt:{id:1},act({id:e},t){this.removeExplods(e)}},reversaldef:{req:{"reversal.attr":e.HitAttr},opt:{pausetime:2,sparkno:e.SparkNumber,hitsound:e.SoundNumber,p1stateno:1,p2stateno:1},prep(e){e.set("_reversal",!0)},act(e){this.stateLimitedData.set("HitDef",e)}},screenbound:{opt:{value:1,movecamera:2},act(e){this.frameLimitedData.set("screenBounded",!!e.value&&(e.movecamera||[0,0]))}},selfstate:{req:{value:1},opt:{ctrl:1,anim:1},act(e,t,a){this.restoreST(),this.changeState(e.value,e.anim,t,a),void 0!==e.ctrl&&(this.ctrl=e.ctrl)}},sprpriority:{req:{value:1},act({value:e},t){this.sprpriority=e}},statetypeset:{opt:{statetype:/([ACSL])/i,value:/([ACSL])/i,movetype:/([IAH])/i,physics:/([ACSN])/i},act(e){"statetype"in e?this.type=e.statetype:"value"in e&&(this.type=e.value),"movetype"in e&&(this.movetype=e.movetype),"physics"in e&&(this.physics=e.physics)}},sndpan:{req:{channel:1,pan:1},alt:{pan:"abspan"},act(){}},stopsnd:{req:{channel:1},act({channel:e},t){this.shutUp(e)}},superpause:{opt:{time:1,anim:e.AnimNumber,sound:e.SoundNumber,pos:2,darken:1,p2defmul:1,poweradd:1,unhittable:1,endcmdbuftime:1,movetime:1,pausebg:1},prep(e){var t=e.get("anim")||[100,"F"];e.set("anim",t),e.set("_useFightfx","S"!==t[1]);t=e.get("sound")||[-1,-1,"F"];e.set("sound",t),e.set("_useCommonSnd","S"!==t[2]);t=e.get("pos")||[0,0];e.set("pos",t)},act(e){e.time=e.time||30,e.anim=e.anim[0],e.darken="darken"in e?e.darken:1,e.p2defmul=e.p2defmul||0,e.poweradd=e.poweradd||0,e.endcmdbuftime=e.endcmdbuftime||0,e.movetime=e.movetime||0,e.pausebg="pausebg"in e?e.pausebg:0,this.setSuperPause(e)}},targetbind:{opt:{time:1,id:1,pos:2},act(){}},targetdrop:{opt:{excludeid:1,keepone:1},act(){}},targetfacing:{req:{value:1},opt:{id:1},act(){}},targetlifeadd:{req:{value:1},opt:{id:1,kill:1,absolute:1},act(){}},targetpoweradd:{req:{value:1},opt:{id:1},act(){}},targetstate:{req:{value:1},opt:{id:1},act(){}},targetveladd:{opt:{x:1,y:1,id:1},act(){}},targetvelset:{opt:{x:1,y:1,id:1},act(){}},trans:{req:{trans:e.TransTypes},opt:{alpha:2},act(e){this.frameLimitedData.set("trans",{type:e.trans,alpha:e.alpha})}},turn:{act(){this.turn(!0)}},varadd:{req:{v:1,value:1},alt:{v:"fv"},vopt:!0,act(e){"v"in e&&(this[e.sys?"sysvar":"var"][e.v]+=e.value),"fv"in e&&(this[e.sys?"sysfvar":"fvar"][e.fv]+=e.value)}},varrandom:{req:{v:1},opt:{range:2},act(e){var t=e.range||[],a=t[0],t=t[1];this.var[e.v]="number"!=typeof t?Math.random()*(a+1)|0:a+Math.random()*(t-a+1)|0}},varrangeset:{req:{value:1},alt:{value:"fvalue"},opt:{first:1,last:1},act(e){var t="fvalue"in e?"fvar":"var",a="fvar"==t?e.fvalue:e.value,i="first"in e?e.first:0,r="last"in e?e.last:this[t].length-1;for(let e=i;e<r;e++)this[t][e]=a}},varset:{req:{v:1,value:1},alt:{v:"fv"},vopt:!0,act(e){"v"in e&&(this[e.sys?"sysvar":"var"][e.v]=e.value),"fv"in e&&(this[e.sys?"sysfvar":"fvar"][e.fv]=e.value)}},veladd:{opt:{x:1,y:1},act(e){"x"in e&&(this.vx+=e.x*this.facing),"y"in e&&(this.vy+=e.y)}},velmul:{opt:{x:1,y:1},act(e){"x"in e&&(this.vx*=e.x),"y"in e&&(this.vy*=e.y)}},velset:{opt:{x:1,y:1},act(e,t){"x"in e&&(this.vx=e.x*this.facing),"y"in e&&(this.vy=e.y)}},victoryquote:{opt:{value:1},act(){}},width:{opt:{edge:2,player:2,value:2},act(){}},zoom:{act(){}}};const s={hitflag:"MAF",guardflag:"",affectteam:"E",animtype:"LIGHT","air.animtype"(e){return e.animtype},"fall.animtype"(e){return"UP"===e["air.animtype"]?"UP":"BACK"},priority:[4,"HIT"],damage:[0,0],pausetime:[0,0],"guard.pausetime"(e){return e.pausetime},sparkno(){return this.CNS.get("data","sparkno")},"guard.sparkno"(){return this.CNS.get("data","guard.sparkno")},sparkxy:[0,0],hitsound:null,guardsound:null,"ground.type":"HIGH","air.type"(e){return e["ground.type"]},"ground.slidetime":0,"guard.slidetime"(e){return e["guard.hittime"]},"ground.hittime":0,"guard.hittime"(e){return e["ground.hittime"]},"air.hittime":20,"guard.ctrltime"(e){return e["guard.slidetime"]},"guard.dist"(){return this.CNS.get("size","attack.dist")},yaccel(){return.35},"ground.velocity":[0,0],"guard.velocity"(e){return e["ground.velocity"]},"air.velocity":[0,0],"airguard.velocity"(e){return[1.5*e["air.velocity"][0],e["air.velocity"][1]/2]},"ground.cornerpush.veloff"(e){return/A/.test(e.attr)?0:1.3*e["guard.velocity"]},"air.cornerpush.veloff"(e){return e["ground.cornerpush.veloff"]},"down.cornerpush.veloff"(e){return e["ground.cornerpush.veloff"]},"guard.cornerpush.veloff"(e){return e["ground.cornerpush.veloff"]},"airguard.cornerpush.veloff"(e){return e["ground.cornerpush.veloff"]},"airguard.ctrltime"(e){return e["guard.ctrltime"]},"air.juggle":0,mindist:null,maxdist:null,snap:null,p1sprpriority:1,p2sprpriority:0,p1facing:0,p1getp2facing:0,p2facing:0,p1stateno:-1,p2stateno:-1,p2getp1state:1,forcestand(e){return 0!==e["ground.velocity"][1]?1:0},fall:0,"fall.xvelocity":null,"fall.yvelocity"(){return-4.5},"fall.recover":1,"fall.recovertime":4,"fall.damage":0,"air.fall"(e){return e.fall},forcenofall:0,"down.velocity"(e){return e["air.velocity"]},"down.hittime"(e){return e["down.velocity"]},"down.bounce":0,id:0,chainid:-1,nochainid:[-1,-1],hitonce:0,kill:1,"guard.kill":1,"fall.kill":1,numhits:1,getpower(e){return[.7*e.damage,.7*e.damage/2]},givepower(e){return[.6*e.damage,.6*e.damage/2]},"palfx.time":0,"palfx.mul":null,"palfx.add":null,"envshake.time":0,"envshake.freq":60,"envshake.ampl"(e){return-4},"envshake.phase"(e){return 90<=e["envshake.freq"]?90:0},"fall.envshake.time":0,"fall.envshake.freq":60,"fall.envshake.ampl"(e){return-4},"fall.envshake.phase"(e){return 90<=e["fall.envshake.freq"]?90:0}};function r(t,e){var a,i,r={};for(a in s)r[a]=(a in e?e:s)[a];for(i in r){let e=r[i];"function"==typeof e&&(r[i]=e.call(t,r))}return r}}(_jsmugen.StateController.getStateConstructor());';
    },
    75: (e) => {
      e.exports =
        'var _jsmugen=_jsmugen||{};_jsmugen.StateController=function(h){class t{constructor(...t){this._stateDefs=new Map,this.load(...t),this.raw=Function("str","return () => str")(t.join("\\n"))}load(t,...e){var r,a=this._stateDefs;this._data;"boolean"!=typeof t&&(e.unshift(t),t=!1);for(r of e)if("string"==typeof r)for(var s of r.matchAll(/^\\s*(?:;(.+)\\s*?)?\\s*\\[Statedef[^\\S\\n]+(-?\\d+)[^\\]\\n]*\\][ \\t;]*(.+)?([\\s\\S]+?)((?=(^\\s*;.+\\r\\n)?^\\s*\\[Statedef\\s)|(?![\\s\\S]))/gim)){var[,i,n,g,s]=s,n=Number(n);!t&&a.has(n)||(i=new o(n,s,g,i),a.set(n,i))}}get(t){return this._stateDefs.get(t)}put(){}getList(){return this._stateDefs}static getStateConstructor(){return k}}class e{constructor(t,e,r){this.label1=(e||"").replace(/^[\\-=;:\\s]+$/,""),this.label2=(r||"").replace(/^[\\-=;:\\s]+$/,""),this.raw=Function("str","return () => str")(t),this._rawparam=new Map,this._param=new Map,this._parseParameterText(t)}_parseParameterText(t){var e,r=this._rawparam;for(e of t.matchAll(/^[^\\S\\n]*([\\w.\\-]+|(?:sys)?f?var\\(\\d+\\))[^\\S\\n]*:?=[^\\S\\n]*(.*)[^\\S\\n]*$/gim)){var a=e[1].toLowerCase(),s=/^trigger(\\d+|all)$/i.test(a);if(!r.has(a)||s){var i=e[2].replace(/\\s*;.*?$|\\s+$/g,"");if(s){let t=r.get(a)||r.set(a,[]).get(a);t.push(i)}else r.set(a,i)}}}_parseParamExpressions(){}hasParam(t){return this._param.has(t)}getParam(t,e){return this._param.get(t).valueOf(e)}getParamRaw(t){return this._rawparam.get(t)}getCalculatedParameter(e){var t,r,a={};for([t,r]of this._param)if(/^_/.test(t))a[t]=r;else{r=r instanceof Array!=!0?[r]:r.concat();for(let t=0;t<r.length;t++)r[t]=r[t].valueOf(e);a[t]=1===r.length&&"string"!=typeof r?r[0]:r}return a}_getParameter(r,a){var s=r instanceof Array,i=[];s||(r=[r]);for(let e=0;e<r.length;e++){var n=r[e];let t;switch(n.constructor){case String:t=this._parseStringParameter(a),a=a.substring(t.length);break;case Number:s?(t=new h(a,{multi:!0}),a=t.nextExpression||""):t=this._parseIntegerParameter(n,a);break;case RegExp:if(t=this._parseRegExpRuleParameter(n,a),a=t[0].substring(t[0].length),n===k.SparkNumber||n===k.SoundNumber){var g=t[1];t=this._getParameter(2,t[2]),t.push(g)}else if(n===k.AnimNumber){g=t[1];t=this._getParameter(1,t[2]),t=[t,g]}else{let e=k.StringParameterDefinitions.get(n);e&&(t=t.map(t=>e[t]||t)),t=1===t.length?t[0]:2===t.length?t[1]:t.slice(1)}break;default:throw new Error("unknown parameter rule.constructor:"+n.constructor)}i.push(t),e<r.length-1&&(a=a.replace(/^\\s+/,""),n.constructor!==Number&&(a=a.replace(/^,\\s*/,"")))}return s?i:i[0]}_parseIntegerParameter(e,r){if(-1===e)return h.parseCommaSeparatedExpressions(r);var a=[];for(let t=e;t--;){var s=new h(r,{multi:0<t});r=s.nextExpression,a.push(s)}return 1==a.length?a[0]:a}_parseStringParameter(t){var e=new h(t);if("string"!==e.isPrimitive())throw new Error("expected a string parameter: "+t);return e.calculate()}_parseRegExpRuleParameter(t,e){var r=t.exec(e);if(!r)throw new Error("the RegExp rule not matched "+t+\' : "\'+e+\'"\');return r.map(t=>(t||"").toUpperCase())}}class o extends e{constructor(t,e,r,a){var s,i=/^([\\S\\s]*?)(\\n\\s*\\[State[\\s\\S]+$|\\s+$)/i.exec(e),n="";i&&(s=i[1],n=i[2],super(s,r,a)),this.raw=Function("str","return () => str")(e),this.number=t,this.type="",this.value="",this._states=[],this._parseParamExpressions(),this._parseStateText(n)}_parseParamExpressions(){var e,r=this._rawparam,a=this._param;for(e in i)if(r.has(e)){let t=r.get(e);var s=i[e];try{"number"==typeof s?(a.set(e,this._parseIntegerParameter(s,t)),"velset"!==e||2<=a.get(e).length||a.set(e,a.get(e).concat([0,0]))):(t=this._parseRegExpRuleParameter(s,t)[1],a.set(e,t))}catch(t){a.set(e,NaN)}}}_parseStateText(t){var e,r=this._states;for(e of t.matchAll(/^\\[State +([^\\n\\]]*)\\][^\\r\\n]*(?:;(.+))?([\\s\\S]+?)(?:(?=^[^\\S\\n]*\\[State)|(?![\\s\\S]))/gim)){var[,a,s,i]=e,n=new k(this,i,a,s);if("null"===n.type)t:{let t=n.triggers.triggerall||[];if(!t.some(t=>/:=/.test(t))){for(let t=1,e;(e=n.triggers["trigger"+t])&&e.length;t++)if(e.some(t=>/:=/.test(t)))break t;continue}}r.push(n)}}checkAllStates(t){var e;for(e of this._states){var r=e.checkTriggers(t);if(r&&(t.checkStatePersistency(e)&&(e.activate(t,r),"changestate"===e.type||"selfstate"===e.type)))return!0}return!1}get description(){return r[this.number]||""}*getFiredStates(t){var e;for(e of this._states)e.checkTriggers(t)&&(yield e)}getState(t){return void 0===t?this._states:this._states[t]}getStatesByType(t){var e,r=[];for(e of this._states)e.type===t&&r.push(e);return r}}const i={type:/^([SCALU]+)$/i,movetype:/^([AIHU]+)$/i,physics:/^([SCANU]+)$/i,anim:1,velset:-1,ctrl:1,poweradd:1,juggle:1,facep2:1,hitdefpersist:1,movehitpersist:1,hitcountpersist:1,sprpriority:1};class k extends e{constructor(t,e,r,a){super(e,r,a),this.type=(this.getParamRaw("type")||"").toLowerCase(),this.def=t,this.triggers={triggerall:null,trigger1:[]},this._debug=!1,this._parseTriggerExpressions(this._rawparam),this._parseParamExpressions(this._rawparam,this._param),this._preprocess(this.type)}get debug(){return this._debug}set debug(t){return this._debug=Boolean(t)}_parseTriggerExpressions(t){for(var[e,r]of t)if(/^trigger(\\d+|all)$/i.test(e)){t.delete(e),e=e.replace(/trigger0+/,"trigger"),this.triggers[e]=this.triggers[e]||[];for(var a of r)try{this.triggers[e].push(new h(a))}catch(t){this.triggers[e].push(NaN)}}}_parseParamExpressions(t,a){if("null"!==this.type){var s=new Map(t),e=k.StateTypes[this.type];if(!e)throw new Error(\'unknown State type: "\'+this.type+\'"\');var i,r,n,g,h,o,u,l,p=e.req,t=e.opt,c=e.alt||{},f=e.vopt,d=p;for(i in d)if(!a.has(i)){let r=s.get(i);var m=d[i];t:if(!s.has(i)){var v=c[i];if(v){if(v in d&&(s.has(v)||a.has(v)))continue;if(s.has(v)){i=v,r=s.get(v);break t}}if(f){let t=Array.from(s.keys()),e;var _=t.find(t=>e=/^(sys)?(f?v)ar\\((\\d+)\\).*/i.exec(t));if(_&&(!e[1]||!/^parent/i.test(this.type))){if(e[1]&&a.set("sys",!0),i===e[2]){r=e[3];break t}if(v&&v===e[2]){i=v,r=e[3];break t}if("value"===i){r=s.get(_);break t}}}continue}try{a.set(i,this._getParameter(m,r))}catch(t){a.set(i,NaN)}s.delete(i)}for(r in d=t){var y=d[r];if(s.has(r)&&!a.has(r)){var w=s.get(r);if(s.delete(r),""!==w)try{a.set(r,this._getParameter(y,w))}catch(t){a.set(r,NaN)}}}for(n of["persistent","ignorehitpause"])s.has(n)&&(g=s.get(n),/\\D/.test(g)||(a.set(n,Number(g)),s.delete(n)));s.delete("type");for([h,o]of s)/^(sys)?f?var/i.test(h)||/supermovetime|pausemovetime|sprpriority/.test(h);for([u,l]of a)Number.isNaN(l)}}_preprocess(t){t=k.StateTypes[t].prep;t&&t.call(this,this._param,this)}getTriggerList__(){var r={};this.triggers.triggerall&&(r.all=this.triggers.triggerall);for(let t=1,e;(e=this.triggers["trigger"+t])&&e.length;t++)r["t"+t]=e.map(t=>t._exptext);return r}checkTriggers(r){if(!(this.triggers.triggerall||[]).every(t=>t.valueOf(r)))return null;for(let t=1,e;(e=this.triggers["trigger"+t])&&e.length;t++)if(e.every(t=>t.valueOf(r)))return e;return null}activate(t,e){this._debug;var r=this.getCalculatedParameter(t);return k.StateTypes[this.type].act.call(t,r,this,e)}}const r={0:"Stand",10:"Stand to crouch",11:"Crouching",12:"Crouch to stand",20:"Walk",40:"Jump start",45:"Air jump start",50:"Jump up",52:"Jump land",100:"Run forward",105:"Hop backwards",106:"Hop backwards (land)",120:"Guard (start)",130:"Stand guard (guarding)",131:"Crouch guard (guarding)",132:"Air guard (guarding)",140:"Guard (end)",150:"Stand guard hit (shaking)",151:"Stand guard hit (knocked back)",152:"Crouch guard hit (shaking)",153:"Crouch guard hit (knocked back)",154:"Air guard hit (shaking)",155:"Air guard hit (knocked away)",170:"Lose (time over)",175:"Draw game (time over)",190:"Pre-intro",191:"Intro (override this state to give character an intro)",5e3:"Stand get-hit (shaking)",5001:"Stand get-hit (knocked back)",5010:"Crouch get-hit (shaking)",5011:"Crouch get-hit (knocked back)",5020:"Air get-hit (shaking)",5030:"Air get-hit (knocked away)",5035:"Air get-hit (transition)",5040:"Air get-hit (recovering in air, not falling)",5050:"Air get-hit (falling)",5070:"Tripped get-hit (shaking)",5071:"Tripped get-hit (knocked away)",5080:"Downed get-hit (shaking)",5081:"Downed get-hit (knocked back)",5100:"Downed get-hit (hit ground from fall)",5101:"Downed get-hit (bounce off ground)",5110:"Downed get-hit (lying down)",5120:"Downed get-hit (getting up)",5150:"Downed get-hit (lying defeated)",5200:"Air get-hit (fall recovery on ground; still falling)",5201:"Air get-hit (fall recovery on ground)",5210:"Air get-hit (fall recovery in air)",5500:"Continue screen animation",5900:"Initialize (at the start of the round)"};return t.State=k,t}(_jsmugen.Expression);';
    },
    641: (e) => {
      //SECTION: DATA BUFFERING
      e.exports = JSON.stringify(
        !(function () {
          "use strict";
          var i,
            o,
            t = zip.Reader,
            e = zip.Writer;
          try {
            o = 0 === new Blob([new DataView(new ArrayBuffer(0))]).size;
          } catch (t) {}
          function s(o) {
            var s = this;
            function a(t, e) {
              var n;
              s.data
                ? t()
                : ((n = new XMLHttpRequest()).addEventListener(
                    "load",
                    function () {
                      s.size ||
                        (s.size =
                          Number(n.getResponseHeader("Content-Length")) ||
                          Number(n.response.byteLength)),
                        (s.data = new Uint8Array(n.response)),
                        t();
                    },
                    !1
                  ),
                  n.addEventListener("error", e, !1),
                  n.open("GET", o),
                  (n.responseType = "arraybuffer"),
                  n.send());
            }
            (s.size = 0),
              (s.init = function (t, e) {
                var n, r, i;
                (n = o),
                  ((r = document.createElement("a")).href = n),
                  "http:" === r.protocol || "https:" === r.protocol
                    ? ((i = new XMLHttpRequest()).addEventListener(
                        "load",
                        function () {
                          (s.size = Number(
                            i.getResponseHeader("Content-Length")
                          )),
                            s.size ? t() : a(t, e);
                        },
                        !1
                      ),
                      i.addEventListener("error", e, !1),
                      i.open("HEAD", o),
                      i.send())
                    : a(t, e);
              }),
              (s.readUint8Array = function (t, e, n, r) {
                a(function () {
                  n(new Uint8Array(s.data.subarray(t, t + e)));
                }, r);
              });
          }
          function a(s) {
            var r = this;
            (r.size = 0),
              (r.init = function (t, e) {
                var n = new XMLHttpRequest();
                n.addEventListener(
                  "load",
                  function () {
                    (r.size = Number(n.getResponseHeader("Content-Length"))),
                      "bytes" == n.getResponseHeader("Accept-Ranges")
                        ? t()
                        : e("HTTP Range not supported.");
                  },
                  !1
                ),
                  n.addEventListener("error", e, !1),
                  n.open("HEAD", s),
                  n.send();
              }),
              (r.readUint8Array = function (t, e, n, r) {
                var i, o;
                (t = t),
                  (e = e),
                  (i = function (t) {
                    n(new Uint8Array(t));
                  }),
                  (r = r),
                  (o = new XMLHttpRequest()).open("GET", s),
                  (o.responseType = "arraybuffer"),
                  o.setRequestHeader("Range", "bytes=" + t + "-" + (t + e - 1)),
                  o.addEventListener(
                    "load",
                    function () {
                      i(o.response);
                    },
                    !1
                  ),
                  o.addEventListener("error", r, !1),
                  o.send();
              });
          }
          function n(i) {
            var n = this;
            (n.size = 0),
              (n.init = function (t, e) {
                (n.size = i.byteLength), t();
              }),
              (n.readUint8Array = function (t, e, n, r) {
                n(new Uint8Array(i.slice(t, t + e)));
              });
          }
          function r() {
            var i;
            (this.init = function (t, e) {
              (i = new Uint8Array()), t();
            }),
              (this.writeUint8Array = function (t, e, n) {
                var r = new Uint8Array(i.length + t.length);
                r.set(i), r.set(t, i.length), (i = r), e();
              }),
              (this.getData = function (t) {
                t(i.buffer);
              });
          }
          function p(n, r) {
            var i;
            (this.init = function (e, t) {
              n.createWriter(function (t) {
                (i = t), e();
              }, t);
            }),
              (this.writeUint8Array = function (t, e, n) {
                (t = new Blob([o ? t : t.buffer], { type: r })),
                  (i.onwrite = function () {
                    (i.onwrite = null), e();
                  }),
                  (i.onerror = n),
                  i.write(t);
              }),
              (this.getData = function (t) {
                n.file(t);
              });
          }
          ((s.prototype = new t()).constructor = s),
            ((a.prototype = new t()).constructor = a),
            ((n.prototype = new t()).constructor = n),
            ((r.prototype = new e()).constructor = r),
            ((p.prototype = new e()).constructor = p),
            (zip.FileWriter = p),
            (zip.HttpReader = s),
            (zip.HttpRangeReader = a),
            (zip.ArrayBufferReader = n),
            (zip.ArrayBufferWriter = r),
            zip.fs &&
              (((i = zip.fs.ZipDirectoryEntry).prototype.addHttpContent =
                function (t, e, n) {
                  return (function (t, e, n, r) {
                    if (t.directory)
                      return new (r ? i : zip.fs.ZipFileEntry)(t.fs, e, n, t);
                    throw "Parent entry is not a directory.";
                  })(this, t, { data: e, Reader: n ? a : s });
                }),
              (i.prototype.importHttpContent = function (t, e, n, r) {
                this.importZip(new (e ? a : s)(t), n, r);
              }),
              (zip.fs.FS.prototype.importHttpContent = function (t, e, n, r) {
                (this.entries = []),
                  (this.root = new i(this)),
                  this.root.importHttpContent(t, e, n, r);
              }));
        })()
      );
    },
    690: (e) => {
      e.exports =
        '!function(z){"use strict";var o,b="File format is not recognized.",a="File contains encrypted entry.",s="File is using Zip64 (4gb+ file size).",w="Error while reading zip file.",i="Error while reading file data.",y=524288,c="text/plain";try{o=0===new Blob([new DataView(new ArrayBuffer(0))]).size}catch(e){}function r(){this.crc=-1}function l(){}function k(e,t){var r=new ArrayBuffer(e),e=new Uint8Array(r);return t&&e.set(t,0),{buffer:r,array:e,view:new DataView(r)}}function e(){}function t(n){var i,o=this;o.size=0,o.init=function(e,t){var r=new Blob([n],{type:c});(i=new f(r)).init(function(){o.size=i.size,e()},t)},o.readUint8Array=function(e,t,r,n){i.readUint8Array(e,t,r,n)}}function n(f){var u,r=this;r.size=0,r.init=function(e){for(var t=f.length;"="==f.charAt(t-1);)t--;u=f.indexOf(",")+1,r.size=Math.floor(.75*(t-u)),e()},r.readUint8Array=function(e,t,r){for(var n=k(t),i=4*Math.floor(e/3),o=4*Math.ceil((e+t)/3),a=z.atob(f.substring(i+u,o+u)),s=e-3*Math.floor(i/4),c=s;c<s+t;c++)n.array[c-s]=a.charCodeAt(c);r(n.array)}}function f(o){var t=this;t.size=0,t.init=function(e){t.size=o.size,e()},t.readUint8Array=function(e,t,r,n){var i=new FileReader;i.onload=function(e){r(new Uint8Array(e.target.result))},i.onerror=n;try{i.readAsArrayBuffer(function(e,t,r){if(t<0||r<0||t+r>e.size)throw new RangeError("offset:"+t+", length:"+r+", size:"+e.size);return e.slice?e.slice(t,t+r):e.webkitSlice?e.webkitSlice(t,t+r):e.mozSlice?e.mozSlice(t,t+r):e.msSlice?e.msSlice(t,t+r):void 0}(o,e,t))}catch(e){n(e)}}}function u(){}function h(n){var i;this.init=function(e){i=new Blob([],{type:c}),e()},this.writeUint8Array=function(e,t){i=new Blob([i,o?e:e.buffer],{type:c}),t()},this.getData=function(t,e){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=e,r.readAsText(i,n)}}function p(t){var o="",a="";this.init=function(e){o+="data:"+(t||"")+";base64,",e()},this.writeUint8Array=function(e,t){var r,n=a.length,i=a;for(a="",r=0;r<3*Math.floor((n+e.length)/3)-n;r++)i+=String.fromCharCode(e[r]);for(;r<e.length;r++)a+=String.fromCharCode(e[r]);2<i.length?o+=z.btoa(i):a=i,t()},this.getData=function(e){e(o+z.btoa(a))}}function v(r){var n;this.init=function(e){n=new Blob([],{type:r}),e()},this.writeUint8Array=function(e,t){n=new Blob([n,o?e:e.buffer],{type:r}),t()},this.getData=function(e){e(n)}}function A(n,r,e,i,t,o,a,s,c,f){var u,l,w,h=0,p=r.sn;function v(){n.removeEventListener("message",d,!1),s(l,w)}function d(e){var t=e.data,r=t.data,e=t.error;if(e)return e.toString=function(){return"Error: "+this.message},void c(e);if(t.sn===p)switch("number"==typeof t.codecTime&&(n.codecTime+=t.codecTime),"number"==typeof t.crcTime&&(n.crcTime+=t.crcTime),t.type){case"append":r?(l+=r.length,i.writeUint8Array(r,function(){g()},f)):g();break;case"flush":w=t.crc,r?(l+=r.length,i.writeUint8Array(r,function(){v()},f)):v();break;case"progress":a&&a(u+t.loaded,o)}}function g(){(u=h*y)<=o?e.readUint8Array(t+u,Math.min(y,o-u),function(e){a&&a(u,o);var t=0===u?r:{sn:p};t.type="append",t.data=e;try{n.postMessage(t,[e.buffer])}catch(e){n.postMessage(t)}h++},c):n.postMessage({sn:p,type:"flush"})}l=0,n.addEventListener("message",d,!1),g()}function S(n,t,i,o,a,e,s,c,f,u){var l,w=0,h=0,p="input"===e,v="output"===e,d=new r;!function r(){var e;if((l=w*y)<a)t.readUint8Array(o+l,Math.min(y,a-l),function(e){var t;try{t=n.append(e,function(e){s&&s(l+e,a)})}catch(e){return void f(e)}t?(h+=t.length,i.writeUint8Array(t,function(){w++,setTimeout(r,1)},u),v&&d.append(t)):(w++,setTimeout(r,1)),p&&d.append(e),s&&s(l,a)},f);else{try{e=n.flush()}catch(e){return void f(e)}e?(v&&d.append(e),h+=e.length,i.writeUint8Array(e,function(){c(h,d.get())},u)):c(h,d.get())}}()}function _(e,t,r,n,i,o,a,s,c,f,u){z.zip.useWebWorkers&&a?A(e,{sn:t,codecClass:"NOOP",crcType:"input"},r,n,i,o,c,s,f,u):S(new l,r,n,i,o,"input",c,s,f,u)}function d(e){for(var t,r="",n=["Ç","ü","é","â","ä","à","å","ç","ê","ë","è","ï","î","ì","Ä","Å","É","æ","Æ","ô","ö","ò","û","ù","ÿ","Ö","Ü","ø","£","Ø","×","ƒ","á","í","ó","ú","ñ","Ñ","ª","º","¿","®","¬","½","¼","¡","«","»","_","_","_","¦","¦","Á","Â","À","©","¦","¦","+","+","¢","¥","+","+","-","-","+","-","+","ã","Ã","+","+","-","-","¦","-","+","¤","ð","Ð","Ê","Ë","È","i","Í","Î","Ï","+","+","_","_","¦","Ì","_","Ó","ß","Ô","Ò","õ","Õ","µ","þ","Þ","Ú","Û","Ù","ý","Ý","¯","´","­","±","_","¾","¶","§","÷","¸","°","¨","·","¹","³","²","_"," "],i=0;i<e.length;i++)r+=127<(t=255&e.charCodeAt(i))?n[t-128]:String.fromCharCode(t);return r}function g(e){return decodeURIComponent(escape(e))}function D(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t}function L(e,t,r,n,i){e.version=t.view.getUint16(r,!0),e.bitFlag=t.view.getUint16(r+2,!0),e.compressionMethod=t.view.getUint16(r+4,!0),e.lastModDateRaw=t.view.getUint32(r+6,!0),e.lastModDate=function(e){var t=(4294901760&e)>>16,e=65535&e;try{return new Date(1980+((65024&t)>>9),((480&t)>>5)-1,31&t,(63488&e)>>11,(2016&e)>>5,2*(31&e),0)}catch(e){}}(e.lastModDateRaw),1!=(1&e.bitFlag)?(!n&&8==(8&e.bitFlag)||(e.crc32=t.view.getUint32(r+10,!0),e.compressedSize=t.view.getUint32(r+14,!0),e.uncompressedSize=t.view.getUint32(r+18,!0)),4294967295!==e.compressedSize&&4294967295!==e.uncompressedSize?(e.filenameLength=t.view.getUint16(r+22,!0),e.extraFieldLength=t.view.getUint16(r+24,!0)):i(s)):i(a)}function m(m,t,u){var U=0;function l(){}l.prototype.getData=function(w,n,h,p){var v=this;function d(e,t){var r;p&&(r=t,(t=k(4)).view.setUint32(0,r),v.crc32!=t.view.getUint32(0))?u("CRC failed."):w.getData(function(e){n(e)})}function g(e){u(e||i)}function y(e){u(e||"Error while writing file data.")}m.readUint8Array(v.offset,30,function(e){var l,e=k(e.length,e);1347093252==e.view.getUint32(0)?(L(v,e,4,!1,u),l=v.offset+30+v.filenameLength+v.extraFieldLength,w.init(function(){var e,t,r,n,i,o,a,s,c,f,u;0===v.compressionMethod?_(v._worker,U++,m,w,l,v.compressedSize,p,d,h,g,y):(e=v._worker,t=U++,r=m,n=w,i=l,o=v.compressedSize,s=d,c=h,f=g,u=y,a=(a=p)?"output":"none",z.zip.useWebWorkers?A(e,{sn:t,codecClass:"Inflater",crcType:a},r,n,i,o,c,s,f,u):S(new z.zip.Inflater,r,n,i,o,a,c,s,f,u))},y)):u(b)},g)};var r={getEntries:function(c){var n,e,i,f=this._worker;function t(e,r){m.readUint8Array(m.size-e,e,function(e){for(var t=e.length-i;0<=t;t--)if(80===e[t]&&75===e[t+1]&&5===e[t+2]&&6===e[t+3])return void n(new DataView(e.buffer,t,i));r()},function(){u(w)})}n=function(e){var t=e.getUint32(16,!0),s=e.getUint16(8,!0);t<0||t>=m.size?u(b):m.readUint8Array(t,m.size-t,function(e){for(var t,r,n=0,i=[],o=k(e.length,e),a=0;a<s;a++){if((t=new l)._worker=f,1347092738!=o.view.getUint32(n))return void u(b);L(t,o,n+6,!0,u),t.commentLength=o.view.getUint16(n+32,!0),t.directory=16==(16&o.view.getUint8(n+38)),t.offset=o.view.getUint32(n+42,!0),r=D(o.array.subarray(n+46,n+46+t.filenameLength)),t.filename=(2048==(2048&t.bitFlag)?g:d)(r),t.directory||"/"!=t.filename.charAt(t.filename.length-1)||(t.directory=!0),r=D(o.array.subarray(n+46+t.filenameLength+t.extraFieldLength,n+46+t.filenameLength+t.extraFieldLength+t.commentLength)),t.comment=(2048==(2048&t.bitFlag)?g:d)(r),i.push(t),n+=46+t.filenameLength+t.extraFieldLength+t.commentLength}c(i)},function(){u(w)})},i=22,m.size<i?u(b):(e=i+65536,t(i,function(){t(Math.min(e,m.size),function(){u(b)})}))},close:function(e){this._worker&&(this._worker.terminate(),this._worker=null),e&&e()},_worker:null};z.zip.useWebWorkers?E("inflater",function(e){r._worker=e,t(r)},function(e){u(e)}):t(r)}function M(e){return unescape(encodeURIComponent(e))}function C(e){for(var t=[],r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}function U(p,t,s,v){var c={},d=[],g=0,y=0;function m(e){s(e||"Error while writing zip file.")}function U(e){s(e||i)}var r={add:function(r,f,n,u,l){var i,o,a,w=this._worker;function h(e,t){var r=k(16);g+=e||0,r.view.setUint32(0,1347094280),void 0!==t&&(i.view.setUint32(10,t,!0),r.view.setUint32(4,t,!0)),f&&(r.view.setUint32(8,e,!0),i.view.setUint32(14,e,!0),r.view.setUint32(12,f.size,!0),i.view.setUint32(18,f.size,!0)),p.writeUint8Array(r.array,function(){g+=16,n()},m)}function e(){var e,t;l=l||{},r=r.trim(),l.directory&&"/"!=r.charAt(r.length-1)&&(r+="/"),c.hasOwnProperty(r)?s("File already exists."):(o=C(M(r)),d.push(r),e=function(){var e,t,r,n,i,o,a,s,c;f?v||0===l.level?_(w,y++,f,p,0,f.size,!0,h,u,U,m):(e=w,t=y++,r=f,n=p,i=l.level,o=h,a=u,s=U,c=m,z.zip.useWebWorkers?A(e,{sn:t,options:{level:i},codecClass:"Deflater",crcType:"input"},r,n,0,r.size,a,o,s,c):S(new z.zip.Deflater,r,n,0,r.size,"input",a,o,s,c)):h()},a=l.lastModDate||new Date,i=k(26),c[r]={headerArray:i.array,directory:l.directory,filename:o,offset:g,comment:C(M(l.comment||""))},i.view.setUint32(0,335546376),l.version&&i.view.setUint8(0,l.version),v||0===l.level||l.directory||i.view.setUint16(4,2048),i.view.setUint16(6,(a.getHours()<<6|a.getMinutes())<<5|a.getSeconds()/2,!0),i.view.setUint16(8,(a.getFullYear()-1980<<4|a.getMonth()+1)<<5|a.getDate(),!0),i.view.setUint16(22,o.length,!0),(t=k(30+o.length)).view.setUint32(0,1347093252),t.array.set(i.array,4),t.array.set(o,30),g+=t.array.length,p.writeUint8Array(t.array,e,m))}f?f.init(e,U):e()},close:function(e){this._worker&&(this._worker.terminate(),this._worker=null);for(var t,r,n=0,i=0,o=0;o<d.length;o++)n+=46+(r=c[d[o]]).filename.length+r.comment.length;for(t=k(n+22),o=0;o<d.length;o++)r=c[d[o]],t.view.setUint32(i,1347092738),t.view.setUint16(i+4,5120),t.array.set(r.headerArray,i+6),t.view.setUint16(i+32,r.comment.length,!0),r.directory&&t.view.setUint8(i+38,16),t.view.setUint32(i+42,r.offset,!0),t.array.set(r.filename,i+46),t.array.set(r.comment,i+46+r.filename.length),i+=46+r.filename.length+r.comment.length;t.view.setUint32(i,1347093766),t.view.setUint16(i+8,d.length,!0),t.view.setUint16(i+10,d.length,!0),t.view.setUint32(i+12,n,!0),t.view.setUint32(i+16,g,!0),p.writeUint8Array(t.array,function(){p.getData(e)},m)},_worker:null};z.zip.useWebWorkers?E("deflater",function(e){r._worker=e,t(r)},function(e){s(e)}):t(r)}r.prototype.append=function(e){for(var t=0|this.crc,r=this.table,n=0,i=0|e.length;n<i;n++)t=t>>>8^r[255&(t^e[n])];this.crc=t},r.prototype.get=function(){return~this.crc},r.prototype.table=function(){for(var e,t,r=[],n=0;n<256;n++){for(t=n,e=0;e<8;e++)1&t?t=t>>>1^3988292384:t>>>=1;r[n]=t}return r}(),l.prototype.append=function(e,t){return e},l.prototype.flush=function(){},(t.prototype=new e).constructor=t,(n.prototype=new e).constructor=n,(f.prototype=new e).constructor=f,u.prototype.getData=function(e){e(this.data)},(h.prototype=new u).constructor=h,(p.prototype=new u).constructor=p,v.prototype=new u;var W={deflater:["z-worker.js","deflate.js"],inflater:["z-worker.js","inflate.js"]};function E(e,r,n){if(null===z.zip.workerScripts||null===z.zip.workerScriptsPath){var t,i,o;if(z.zip.workerScripts){if(t=z.zip.workerScripts[e],!Array.isArray(t))return void n(new Error("zip.workerScripts."+e+" is not an array!"));i=t,o=document.createElement("a"),t=i.map(function(e){return o.href=e,o.href})}else(t=W[e].slice(0))[0]=(z.zip.workerScriptsPath||"")+t[0];var a=new Worker(t[0]);a.codecTime=a.crcTime=0,a.postMessage({type:"importScripts",scripts:t.slice(1)}),a.addEventListener("message",function e(t){t=t.data;if(t.error)return a.terminate(),void n(t.error);"importScripts"===t.type&&(a.removeEventListener("message",e),a.removeEventListener("error",s),r(a))}),a.addEventListener("error",s)}else n(new Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."));function s(e){a.terminate(),n(e)}}function F(e){}z.zip={Reader:e,Writer:u,BlobReader:f,Data64URIReader:n,TextReader:t,BlobWriter:v.prototype.constructor=v,Data64URIWriter:p,TextWriter:h,createReader:function(e,t,r){r=r||F,e.init(function(){m(e,t,r)},r)},createWriter:function(e,t,r,n){r=r||F,n=!!n,e.init(function(){U(e,t,r,n)},r)},useWebWorkers:!0,workerScriptsPath:null,workerScripts:null}}(this);';
    },
    685: (e) => {
      e.exports = function (e) {
        function t(e) {
          "undefined" != typeof console &&
            (console.error || console.log)("[Script Loader]", e);
        }
        try {
          "undefined" != typeof execScript &&
          "undefined" != typeof attachEvent &&
          "undefined" == typeof addEventListener
            ? execScript(e)
            : "undefined" != typeof eval
            ? eval.call(null, e)
            : t("EvalError: No eval function available");
        } catch (e) {
          t(e);
        }
      };
    },
    392: (e, t, i) => {
      i(685)(i(533));
    },
    51: (e, t, i) => {
      i(685)(i(339));
    },
    844: (e, t, i) => {
      i(685)(i(143));
    },
    239: (e, t, i) => {
      i(685)(i(638));
    },
    87: (e, t, i) => {
      i(685)(i(845));
    },
    797: (e, t, i) => {
      i(685)(i(50));
    },
    2: (e, t, i) => {
      i(685)(i(171));
    },
    883: (e, t, i) => {
      i(685)(i(100));
    },
    982: (e, t, i) => {
      i(685)(i(503));
    },
    773: (e, t, i) => {
      i(685)(i(41));
    },
    495: (e, t, i) => {
      i(685)(i(431));
    },
    224: (e, t, i) => {
      i(685)(i(764));
    },
    59: (e, t, i) => {
      i(685)(i(566));
    },
    400: (e, t, i) => {
      i(685)(i(681));
    },
    818: (e, t, i) => {
      i(685)(i(530));
    },
    712: (e, t, i) => {
      i(685)(i(241));
    },
    514: (e, t, i) => {
      i(685)(i(75));
    },
    433: (e, t, i) => {
      i(685)(i(641));
    },
    799: (e, t, i) => {
      i(685)(i(690));
    },
  },
  t = {};
function i(r) {
  var a = t[r];
  return (
    void 0 !== a || ((a = t[r] = { exports: {} }), e[r](a, a.exports, i)),
    a.exports
  );
}
(i.n = (e) => {
  var t = e && e.__esModule ? () => e.default : () => e;
  return i.d(t, { a: t }), t;
}),
  (i.d = (e, t) => {
    for (var r in t)
      i.o(t, r) &&
        !i.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
  (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
  (() => {
    "use strict";
    i(87),
      i(495),
      i(239),
      i(797),
      i(844),
      i(2),
      i(883),
      i(514),
      i(712),
      i(400),
      i(392),
      i(818),
      i(51),
      i(224),
      i(59),
      i(982),
      i(773),
      i(799),
      i(433);
    class e extends Game {
      constructor(e, t) {
        super(e, t);
      }
      async main(e, t) {
        window.gameLoaded = false;

        this.setSocketEvents();
        this.setDOMEvents();

        this.createStage({
          baseline: (0.9 * gamecanvas.height) | 0,
          centerAxis: 1024 / 2,
          width: 1024,
          height: gamecanvas.height,
          cameraX: 0,
          cameraY: 0,
          cameraZoom: 1,
          DEF: this.resources.stage.DEF,
        });

        await this.setChar(
          1,
          gameFiles.playerOneBase64,
          gameFiles.playerOneFileName
        );
        await this.setChar(
          2,
          gameFiles.playerTwoBase64,
          gameFiles.playerTwoFileName
        );

        this.reset();
        this.initControls();

        this.inGamePlayer();

        window.gameLoaded = true;
      }

      async setChar(playerNumber, playerBase64, fileName) {
        try {
          // Decode base64 string
          const binaryString = atob(playerBase64);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);

          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }

          // Create a Blob from the binary data
          const fileBlob = new Blob([bytes], { type: "application/zip" });

          // Create a File object from the Blob
          const file = new File([fileBlob], fileName, {
            type: "application/zip",
          });

          // Pass the File object to your function
          const result = await g(file);

          const newChar = this.createPlayer(result, {
            slot: playerNumber - 1,
            team: playerNumber,
            leader: !0,
          });
        } catch (error) {
          console.error("Error:", error);
        }
      }

      // OnlineFunctions
      sendPlayerStateToServer(positionOnly) {
        const characterState =
          this.characterSlot?.[this.getCurrentPlayerSlot()];

        if (
          characterState &&
          window.mugenSocket.readyState === WebSocket.OPEN
        ) {
          const characterStateData = {
            x: parseFloat(characterState.x),
            y: parseFloat(characterState.y),
            vy: parseFloat(characterState.vy),
            vx: parseFloat(characterState.vx),
          };

          if (!positionOnly) {
            characterStateData.stateNumber = characterState.state.number;
            characterStateData.actionNumber = characterState.action.number;
            // if (
            //   characterStateData?.action?.totalTicks &&
            //   characterStateData.animTick < characterStateData.action.totalTicks
            // ) {
            //   characterStateData.actionNumber = characterState.action.number;
            // //
          }

          const playerData = {
            Action: "game_state",
          };

          if (this.getCurrentPlayerNumber() == 1) {
            playerData.PlayerOneState = characterStateData;
          }

          if (this.getCurrentPlayerNumber() == 2) {
            playerData.PlayerTwoState = characterStateData;
          }

          window.mugenSocket.send(JSON.stringify(playerData));
        }
      }

      sendPlayerDamageToServer(receivingPlayerNumber, damage) {
        const gameData = {
          Action: "player_damage",
        };

        if (receivingPlayerNumber === 1) {
          gameData.PlayerOneState = {};
          gameData.PlayerOneState.Damage = damage;
        }

        if (receivingPlayerNumber === 2) {
          gameData.PlayerTwoState = {};
          gameData.PlayerTwoState.Damage = damage;
        }

        if (window.mugenSocket.readyState === WebSocket.OPEN) {
          window.mugenSocket.send(JSON.stringify(gameData));
        }
      }

      handleSyncOpponentPlayer(data) {
        const opponentPlayer =
          this.characterSlot?.[this.getOpponentPlayerSlot()];

        if (!opponentPlayer) {
          console.log("no opponent player");
          return;
        }

        const dynamicOpponentStateProp =
          this.getCurrentPlayerNumber() === 1
            ? "playerTwoState"
            : "playerOneState";

        const opponentState = data[dynamicOpponentStateProp];

        if (opponentState?.x) {
          if (opponentPlayer.x !== opponentState.x) {
            opponentPlayer.x = opponentState.x;
          }
        }

        if (opponentState?.y) {
          if (opponentPlayer.y !== opponentState.y) {
            opponentPlayer.y = opponentState.y;

            if (opponentPlayer.y > 0) {
              opponentPlayer.y = 0;
            }
          }
        } else {
          opponentPlayer.y = 0;
        }

        // State
        if (
          opponentState?.stateNumber &&
          opponentPlayer?.state?.number !== opponentState.stateNumber
        ) {
          opponentPlayer.changeState(opponentState.stateNumber);
        }

        // Actions
        if (
          opponentState.actionNumber &&
          opponentPlayer?.action?.number !== opponentState.actionNumber
        ) {
          opponentPlayer.AIR.getAction(opponentState.actionNumber) &&
            opponentPlayer.changeAction(opponentState.actionNumber);
        }

        // actions to track for manual activation and cancellation
        const actionNumbersToCheck = [20, 21];

        // manual cancelling of actions every 10 ticks
        if (
          this.gameTime % 10 === 0 &&
          actionNumbersToCheck.some((a) => a === opponentPlayer.action.number)
        ) {
          if (opponentPlayer.x === opponentPlayer.prevX) {
            opponentPlayer.changeAction(0);
          }
        }
      }

      initControls() {
        const opponentPlayer = this.characterSlot[this.getOpponentPlayerSlot()];

        opponentPlayer.controller._keyMap = new Set();

        opponentPlayer.controller._keyMap.get = function (value) {
          for (let item of this) {
            if (item === value) {
              return item;
            }
          }
          return undefined;
        };
      }

      inGamePlayer() {
        const playerData = {
          Action: "player_inGame",
        };

        const characterStateData = {
          inGame: true,
        };

        if (this.getCurrentPlayerNumber() === 1) {
          playerData.PlayerOneState = characterStateData;
        }

        if (this.getCurrentPlayerNumber() === 2) {
          playerData.PlayerTwoState = characterStateData;
        }

        window.mugenSocket.send(JSON.stringify(playerData));
      }

      readyPlayer() {
        const playerData = {
          Action: "player_ready",
        };

        const characterStateData = {
          ready: true,
        };

        if (this.getCurrentPlayerNumber() === 1) {
          playerData.PlayerOneState = characterStateData;
        }

        if (this.getCurrentPlayerNumber() === 2) {
          playerData.PlayerTwoState = characterStateData;
        }

        window.mugenSocket.send(JSON.stringify(playerData));
      }

      setSocketEvents() {
        const onWebSocketMessage = (event) => {
          const data = JSON.parse(event.data);

          const handleSyncGameState = (currentData) => {
            if (window?.gameState?.initiated) {
              this.handleSyncOpponentPlayer(currentData);
            }
            this.sendServerDataToClient(currentData);
          };

          if (data.action === "game_state") {
            handleSyncGameState(data);
          }

          if (data.action === "round_start") {
            this.p1.afterImages.clear();
            this.p2.afterImages.clear();
            this.reset();
            this.roundstart(e);
            handleSyncGameState(data);
          }

          if (data.action === "round_end") {
            this.declareWinner(data);

            handleSyncGameState(data);
          }

          if (data.action === "game_over") {
            window.gameOver = true;

            handleSyncGameState(data);
          }
        };

        const onWebSocketOpen = () => {
          window.disconnected = false;
          console.log("WebSocket connection established.");
          clearTimeout(reconnectTimeout);
          retryCount = 0;
        };

        const onWebSocketError = (error) => {
          console.error("WebSocket error:", error);
          reconnect();
        };

        const onWebSocketClose = () => {
          console.log("WebSocket connection closed.");
          reconnect();
        };

        window.mugenSocket = new WebSocket(window.mugenSocketUrl);
        window.mugenSocket.onopen = onWebSocketOpen;
        window.mugenSocket.onerror = onWebSocketError;
        window.mugenSocket.onclose = onWebSocketClose;
        window.mugenSocket.onmessage = onWebSocketMessage;

        let reconnectTimeout;
        let retryCount = 0;
        const maxRetries = 12;

        function reconnect() {
          if (window.disconnected) {
            console.log("connection is disconnected.");
            return;
          }

          if (retryCount >= maxRetries) {
            console.log(
              "maximum number of reconnection retries reached. connection failed."
            );
            window.disconnected = true;
            return;
          }

          retryCount++;
          reconnectTimeout = setTimeout(() => {
            window.mugenSocket = new WebSocket(window.mugenSocketUrl);
            window.mugenSocket.onopen = onWebSocketOpen;
            window.mugenSocket.onerror = onWebSocketError;
            window.mugenSocket.onclose = onWebSocketClose;
            window.mugenSocket.onmessage = onWebSocketMessage;
          }, 250);
        }
      }

      setDOMEvents() {
        //SECTION: MUGEN CONTROLS

        // (btcolor.onclick = btcolor.ontouchstart = (e) => this.changePalette()),
        //   (basevol.oninput = () => SNDLoader.setBaseVolume(basevol.value)),
        //   basevol.oninput();

        window.readyPlayer = () => {
          this.readyPlayer();
        };
      }
      changePalette() {
        let e,
          t = this.p1.SFF;
        t.version < 2
          ? ((e = c),
            (function (e, t) {
              var i = new FileReader();
              (i.onload = function () {
                let e = (t && t.SFF) || r;
                e && r.version < 2 && e.putACT(this.result);
              }),
                i.readAsArrayBuffer(e);
            })(e[f], this.p1))
          : ((e = t.getPaletteV2ByIndex()),
            e.sort(function (e, t) {
              return e.group > t.group ? 1 : -1;
            }),
            t.setV2Palette(f)),
          ++f >= e.length && (f = 0);
      }
      powerMax() {
        this.p1.power = this.p1.powerMax;
      }
    }

    var t,
      r,
      a,
      s,
      n,
      o,
      h,
      l = null,
      c = [],
      u = "./characters/kfm.zip",
      p = new KeyObserver({ preventDefault: !1 });

    window.onload = async function () {
      h = new e(
        document.getElementById("game"),
        document.getElementById("gamecanvas")
      );
      var t,
        i =
          ((t = { stage: {} }),
          await fetch("fight.def")
            .then((e) => e.text())
            .then((e) => ((e = new DEFLoader(e)), (t.DEF = e), t.DEF))
            .then(
              (e) => (
                (e = [
                  fetch(e.get("files", "common.snd"))
                    .then((e) => e.arrayBuffer())
                    .then((e) => {
                      (t.SND = new SNDLoader(e)),
                        (t.sndPlayer = t.SND.createSndPlayer(100));
                    }),
                  fetch(e.get("files", "fightfx.sff"))
                    .then((e) => e.arrayBuffer())
                    .then((e) => {
                      t.SFF = new SFFLoader(e);
                    }),
                  fetch(e.get("files", "fightfx.air"))
                    .then((e) => e.text())
                    .then((e) => {
                      t.AIR = new AIRLoader(e);
                    }),
                ]),
                Promise.all(e)
              )
            )
            .then(() => fetch("finaldestination.def"))
            .then((e) => e.text())
            .then((e) => {
              (e = new DEFLoader(e)), (t.stage.DEF = e);
            })
            .then(() => {}),
          await t);
      h.initialize(i, p);
    };
    var m,
      f = 0;
    function g(e) {
      var i = new (/^http/.test(e) ? zip.HttpReader : zip.BlobReader)(e),
        u = {};
      return new Promise((e, p) => {
        zip.createReader(
          i,
          function (i) {
            i.getEntries(function (i) {
              i.forEach(function (e) {
                var t = e.filename.toLowerCase();
                u[t] = e;
              });
              var h,
                d,
                g,
                w = [];
              for (h in u)
                /\.def$/i.test(h) &&
                  ((g = (d = h.replace(/[^/]+$/, "")).replace(
                    /^.*?([^/]+)\/$/,
                    "$1"
                  )),
                  0 <= h.indexOf(g + ".def") &&
                  (!w.length || w[0].dir.length >= d.length)
                    ? w.unshift({ name: h, dir: d })
                    : w.push({ name: h, dir: d }));
              var b = 0;
              !(function i() {
                b >= w.length
                  ? p(new Error("could not find MUGEN files"))
                  : ((d = w[b].dir),
                    (h = w[b].name),
                    u[h].getData(
                      new zip.TextWriter(),
                      function (h) {
                        let g = [];
                        if (!(t = new DEFLoader(h)).get("info", "name"))
                          return b++, void i();
                        var w =
                            d + t.getSFF().toLowerCase().replace(/\\/g, "/"),
                          k = d + t.getAIR().toLowerCase().replace(/\\/g, "/");
                        g.push(
                          new Promise((e, t) => {
                            u[w].getData(
                              new zip.BlobWriter(),
                              async function (t) {
                                (function (e) {
                                  return new Promise(function (t, i) {
                                    var a = new FileReader();
                                    (a.onload = function () {
                                      try {
                                        r = new SFFLoader(this.result);
                                      } catch (e) {
                                        throw e;
                                      }
                                      t(r);
                                    }),
                                      a.readAsArrayBuffer(e);
                                  });
                                })(t).then(function () {
                                  2 <= r.version &&
                                    r
                                      .getPaletteV2ByIndex()
                                      .sort(function (e, t) {
                                        return e.group > t.group ? 1 : -1;
                                      }),
                                    e();
                                });
                              },
                              v
                            );
                          }).then(
                            () =>
                              new Promise((e, t) => {
                                u[k].getData(
                                  new zip.BlobWriter(),
                                  function (t) {
                                    y(t).then(() => {
                                      (function (e, t) {
                                        for (
                                          var i = t.getList(),
                                            r = e.getSubfileByGroup(),
                                            a = e.getSubfileByIndex().concat(),
                                            s = {},
                                            n = a.length;
                                          n--;

                                        )
                                          s[a[n].index] = !0;
                                        for (n = 0; n < i.length; n++)
                                          for (
                                            var o = i[n].getElement(), h = 0;
                                            h < o.length;
                                            h++
                                          ) {
                                            var l = o[h].group,
                                              c = o[h].index;
                                            (c = (r[l] || {})[c]) &&
                                              s[c.index] &&
                                              delete s[c.index];
                                          }
                                      })(r, s),
                                        e();
                                    });
                                  },
                                  v
                                );
                              })
                          )
                        );
                        var S =
                          d + t.getCMD().toLowerCase().replace(/\\/g, "/");
                        g.push(
                          new Promise((e, t) => {
                            u[S].getData(
                              new zip.BlobWriter(),
                              function (t) {
                                (function (e) {
                                  new Promise((t) => {
                                    var i = new FileReader();
                                    (i.onload = function () {
                                      (n = new CMDLoader(this.result)), t();
                                    }),
                                      i.readAsText(e, "shift-jis");
                                  });
                                })(t),
                                  e();
                              },
                              v
                            );
                          })
                        );
                        var x, _, T;
                        h = t.getACT();
                        for (x of ((f = 0), (c = []), h))
                          x &&
                            ((_ =
                              d + String(x).toLowerCase().replace(/\\/g, "/")),
                            u[_] &&
                              u[_].getData(
                                new zip.BlobWriter(),
                                function (e) {
                                  c.push(e);
                                },
                                v
                              ));
                        t.getSND()
                          ? ((T =
                              d + t.getSND().toLowerCase().replace(/\\/g, "/")),
                            g.push(
                              new Promise((e, t) => {
                                u[T].getData(
                                  new zip.BlobWriter(),
                                  function (t) {
                                    (function (e) {
                                      return new Promise(function (t, i) {
                                        var r = new FileReader();
                                        (r.onload = function () {
                                          (m = new SNDLoader(this.result)),
                                            t(m);
                                        }),
                                          r.readAsArrayBuffer(e);
                                      });
                                    })(t).then(e);
                                  },
                                  v
                                );
                              })
                            ))
                          : (m = new SNDLoader());
                        h = t.getCNS();
                        var A = d + h.toLowerCase().replace(/\\/g, "/");
                        g.push(
                          new Promise((e, t) => {
                            u[A].getData(
                              new zip.TextWriter("shift_jis"),
                              function (t) {
                                (a = new CNSLoader(t)), e();
                              },
                              v
                            );
                          })
                        );
                        h = t.getState();
                        var C = [],
                          P = new Set();
                        for (let e of h)
                          e &&
                            P.add(
                              new Promise(function (t) {
                                var i = d + e.toLowerCase().replace(/\\/g, "/");
                                if (u[i] || "common1.cns" !== e.toLowerCase())
                                  try {
                                    u[i].getData(
                                      new zip.TextWriter("shift_jis"),
                                      function (e) {
                                        t(e);
                                      },
                                      v
                                    );
                                  } catch (i) {}
                                else
                                  fetch("common1.cns").then(function (e) {
                                    e.text().then((e) => {
                                      t(e);
                                    });
                                  });
                              })
                            );
                        g.push(
                          new Promise((e, t) => {
                            let i = Promise.resolve();
                            for (let e of P)
                              i = i.then((t) => (t && C.push(t), e));
                            i.then(function (t) {
                              t && C.push(t),
                                (o = new _jsmugen.StateController(...C)),
                                e();
                            });
                          })
                        ),
                          Promise.all(g)
                            .then(() => {
                              e(
                                (l = {
                                  def: t,
                                  state: o,
                                  cns: a,
                                  sff: r,
                                  air: s,
                                  snd: m,
                                  cmd: n,
                                })
                              );
                            })
                            .catch((e) => {
                              p(e);
                            });
                      },
                      v
                    ));
              })();
            });
          },
          function (e) {
            h.setProgressBar(-1, -1), alert(e);
          }
        );
      }).catch((e) => {
        h.setProgressBar(-1, -1);
      });
    }
    function v(e, t) {
      h.setProgressBar(e, t);
    }
    function y(e) {
      var t = new FileReader();
      return (
        clearTimeout(w),
        clearTimeout(b),
        new Promise((i) => {
          (t.onload = function () {
            (s = new AIRLoader(this.result)), i();
          }),
            t.readAsText(e, "shift-jis");
        })
      );
    }
    (document.ondragover = (e) => e.preventDefault()),
      (document.body.ondrop = async (e) => {
        for (var t of (e.preventDefault(), e.dataTransfer.files))
          (t = await g(t)) && k(t);
      });
    var w = 0,
      b = 0;
    function k(e, t = "P1") {
      cancelAnimationFrame(void 0), clearTimeout(void 0);
      let i = -1,
        r = 1;
      switch (t) {
        case "P1":
          h.p1.remove(), (i = 0), (r = 1);
          break;
        case "P2":
          h.p2.remove(), (i = 1), (r = 2);
          break;
        case "P3":
          p3 && p3.remove(), (i = 2), (r = 1);
          break;
        case "P4":
          p4 && p4.remove(), (i = 3), (r = 2);
          break;
        case "T1":
          r = 1;
          break;
        case "T2":
          r = 2;
          break;
        case "T3":
          r = 3;
      }
      let player = h.createPlayer(e, { slot: i, team: r, leader: true });

      if (i === 0 && this.getCurrentPlayerNumber() === 1) {
        h.p1 = player;
      } else if (i === 1 && this.getCurrentPlayerNumber() === 2) {
        h.p2 = player;
      } else if (i === 2) {
        p3 = player;
      } else if (i === 3) {
        p4 = player;
      } else {
        player.y = -300;
        player.physics = "A";
      }
    }
    performance.now();
  })();
