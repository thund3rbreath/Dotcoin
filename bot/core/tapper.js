const a0_0x50af0d=a0_0x6c4b;(function(_0x4e057b,_0x1d6832){const _0x3d47a6=a0_0x6c4b,_0x3220f6=_0x4e057b();while(!![]){try{const _0x5c4d3e=parseInt(_0x3d47a6(0x1f5))/0x1+-parseInt(_0x3d47a6(0x1e4))/0x2*(parseInt(_0x3d47a6(0x1b9))/0x3)+parseInt(_0x3d47a6(0x1e0))/0x4+-parseInt(_0x3d47a6(0x1a7))/0x5+parseInt(_0x3d47a6(0x1f1))/0x6+-parseInt(_0x3d47a6(0x1e3))/0x7+-parseInt(_0x3d47a6(0x1ec))/0x8*(-parseInt(_0x3d47a6(0x1cc))/0x9);if(_0x5c4d3e===_0x1d6832)break;else _0x3220f6['push'](_0x3220f6['shift']());}catch(_0x1a8143){_0x3220f6['push'](_0x3220f6['shift']());}}}(a0_0xb19e,0xb6859));const {default:axios}=require(a0_0x50af0d(0x1fc)),logger=require('../utils/logger'),headers=require(a0_0x50af0d(0x1ea)),{Api}=require(a0_0x50af0d(0x1b4)),{SocksProxyAgent}=require(a0_0x50af0d(0x20d)),settings=require('../config/config'),app=require(a0_0x50af0d(0x213)),user_agents=require(a0_0x50af0d(0x1e2)),fs=require('fs'),sleep=require(a0_0x50af0d(0x1ab)),ApiRequest=require('./api'),{UpgradableBoostType,FreeBoostType}=require(a0_0x50af0d(0x1e9));var _=require(a0_0x50af0d(0x1c1));const parser=require(a0_0x50af0d(0x1a2));class Tapper{constructor(_0x4e2d43){const _0x33e9ad=a0_0x50af0d;this[_0x33e9ad(0x1ed)]=_0x4e2d43['session_name'],this[_0x33e9ad(0x1de)]=_0x4e2d43[_0x33e9ad(0x1de)],this['API_URL']=app[_0x33e9ad(0x1fb)],this[_0x33e9ad(0x1c8)]=this.#load_session_data(),this[_0x33e9ad(0x1ad)]={...headers,'user-agent':this.#get_user_agent()},this[_0x33e9ad(0x1cd)]=new ApiRequest(this[_0x33e9ad(0x1ed)]),this[_0x33e9ad(0x200)]='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqdm5tb3luY21jZXdudXlreWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3MDE5ODIsImV4cCI6MjAyNDI3Nzk4Mn0.oZh_ECA6fA2NlwoUamf1TqF45lrMC0uIdJXvVitDbZ8',this['STARTING_COIN_PRICE']=0x7d0;}#load_session_data(){const _0x5b4657=a0_0x50af0d;try{const _0x3408b5=fs['readFileSync'](_0x5b4657(0x1fd),_0x5b4657(0x212));return JSON[_0x5b4657(0x1b5)](_0x3408b5);}catch(_0x121cf4){if(_0x121cf4[_0x5b4657(0x206)]==='ENOENT')return{};else throw _0x121cf4;}}#clean_tg_web_data(_0x48571e){const _0x44cf0c=a0_0x50af0d;let _0x228b38=_0x48571e[_0x44cf0c(0x1bf)](/^tgWebAppData=/,'');return _0x228b38=_0x228b38[_0x44cf0c(0x1bf)](/&tgWebAppVersion=7\.4&tgWebAppPlatform=ios$/,'')[_0x44cf0c(0x1bf)](/&tgWebAppVersion=7\.4&tgWebAppPlatform=android$/,''),_0x228b38;}#get_random_user_agent(){const _0x1070c7=a0_0x50af0d,_0x56c84a=Math[_0x1070c7(0x1b6)](Math['random']()*user_agents[_0x1070c7(0x1f2)]);return user_agents[_0x56c84a];}#get_user_agent(){const _0x1360ae=a0_0x50af0d;if(this['session_user_agents'][this[_0x1360ae(0x1ed)]])return this[_0x1360ae(0x1c8)][this[_0x1360ae(0x1ed)]];logger[_0x1360ae(0x1e8)](this[_0x1360ae(0x1ed)]+_0x1360ae(0x1b7));const _0x34f01a=this.#get_random_user_agent();return this[_0x1360ae(0x1c8)][this[_0x1360ae(0x1ed)]]=_0x34f01a,this.#save_session_data(this[_0x1360ae(0x1c8)]),_0x34f01a;}#save_session_data(_0x34e45e){const _0x144b7c=a0_0x50af0d;fs[_0x144b7c(0x1cb)](_0x144b7c(0x1fd),JSON['stringify'](_0x34e45e,null,0x2));}#get_platform(_0x497430){const _0x2332e8=a0_0x50af0d,_0x573d4d=[{'pattern':/iPhone/i,'platform':'ios'},{'pattern':/Android/i,'platform':_0x2332e8(0x1e7)},{'pattern':/iPad/i,'platform':_0x2332e8(0x1ca)}];for(const {pattern:_0x1d69b5,platform:_0x5c66b9}of _0x573d4d){if(_0x1d69b5['test'](_0x497430))return _0x5c66b9;}return _0x2332e8(0x214);}#proxy_agent(_0x35f4ff){const _0x5a4e48=a0_0x50af0d;if(!_0x35f4ff)return null;let _0x15bd64;return!_0x35f4ff['password']&&!_0x35f4ff[_0x5a4e48(0x210)]?_0x15bd64=_0x5a4e48(0x1cf)+_0x35f4ff['socksType']+_0x5a4e48(0x1c0)+_0x35f4ff['ip']+':'+_0x35f4ff[_0x5a4e48(0x20f)]:_0x15bd64='socks'+_0x35f4ff[_0x5a4e48(0x1ba)]+'://'+_0x35f4ff[_0x5a4e48(0x210)]+':'+_0x35f4ff[_0x5a4e48(0x1dc)]+'@'+_0x35f4ff['ip']+':'+_0x35f4ff['port'],new SocksProxyAgent(_0x15bd64);}async #get_tg_web_data(){const _0x53ed21=a0_0x50af0d;try{await this[_0x53ed21(0x1de)]['start']();const _0x4ef522=this.#get_platform(this.#get_user_agent()),_0x56f755=await this[_0x53ed21(0x1de)][_0x53ed21(0x20c)](new Api[(_0x53ed21(0x1da))][(_0x53ed21(0x205))]({'peer':'freddy_bot','limit':0x1})),_0x193a49=await this['tg_client'][_0x53ed21(0x20c)](new Api['messages']['GetHistory']({'peer':await this[_0x53ed21(0x1de)][_0x53ed21(0x1b8)](app['bot']),'limit':0x1}));_0x56f755[_0x53ed21(0x1da)][_0x53ed21(0x1f2)]<0x1&&await this[_0x53ed21(0x1de)][_0x53ed21(0x20c)](new Api[(_0x53ed21(0x1e1))][(_0x53ed21(0x1a4))]({'channel':_0x53ed21(0x1c5)}));_0x193a49[_0x53ed21(0x1da)][_0x53ed21(0x1f2)]<0x1&&await this[_0x53ed21(0x1de)]['invoke'](new Api[(_0x53ed21(0x1da))]['SendMessage']({'peer':await this[_0x53ed21(0x1de)][_0x53ed21(0x1b8)](app[_0x53ed21(0x1b2)]),'message':_0x53ed21(0x1f7),'noWebpage':!![],'noforwards':!![],'silent':!![]}));const _0x1f16a1=await this[_0x53ed21(0x1de)][_0x53ed21(0x20c)](new Api['messages'][(_0x53ed21(0x1bd))]({'peer':await this[_0x53ed21(0x1de)][_0x53ed21(0x1b8)](app['peer']),'bot':await this['tg_client'][_0x53ed21(0x1b8)](app[_0x53ed21(0x1fa)]),'platform':_0x4ef522,'from_bot_menu':![],'url':app[_0x53ed21(0x216)]})),_0x231e67=_0x1f16a1['url'],_0x128ba6=_0x231e67[_0x53ed21(0x204)]('#',0x2)[0x1],_0x131358=parser[_0x53ed21(0x1b3)](decodeURIComponent(this.#clean_tg_web_data(_0x128ba6))),_0x1bd91a={'initData':''+parser[_0x53ed21(0x1b0)](_0x131358)};return _0x1bd91a;}catch(_0x3b66cc){logger[_0x53ed21(0x202)](this[_0x53ed21(0x1ed)]+_0x53ed21(0x20e)+_0x3b66cc);throw _0x3b66cc;}finally{await sleep(0x1),logger['info'](this[_0x53ed21(0x1ed)]+_0x53ed21(0x1dd));}}async #get_access_token(_0x397ba3,_0x3627b6){const _0x1c73e9=a0_0x50af0d;try{_0x3627b6[_0x1c73e9(0x1d6)]['headers'][_0x1c73e9(0x1f4)]=_0x1c73e9(0x1a6)+this[_0x1c73e9(0x200)];const _0x267129=await _0x3627b6['post'](this[_0x1c73e9(0x1ee)]+'/functions/v1/getToken',JSON[_0x1c73e9(0x1ef)](_0x397ba3));return _0x267129[_0x1c73e9(0x1d0)];}catch(_0x36509f){logger[_0x1c73e9(0x202)](this[_0x1c73e9(0x1ed)]+_0x1c73e9(0x20b)+_0x36509f),await sleep(0x3);}}async #check_proxy(_0x22cfe1,_0x41624e){const _0x2896aa=a0_0x50af0d;try{_0x22cfe1[_0x2896aa(0x1d6)][_0x2896aa(0x1ad)][_0x2896aa(0x1e5)]='httpbin.org';const _0x541ac3=await _0x22cfe1[_0x2896aa(0x1c7)](_0x2896aa(0x1d5)),_0x4df91a=_0x541ac3['data'][_0x2896aa(0x1c3)];logger['info'](this['session_name']+'\x20|\x20Proxy\x20IP:\x20'+_0x4df91a);}catch(_0x1664cf){return _0x1664cf[_0x2896aa(0x208)][_0x2896aa(0x209)](_0x2896aa(0x19f))||_0x1664cf[_0x2896aa(0x208)][_0x2896aa(0x209)]('getaddrinfo')||_0x1664cf[_0x2896aa(0x208)]['includes'](_0x2896aa(0x1f8))?(logger[_0x2896aa(0x202)](this[_0x2896aa(0x1ed)]+'\x20|\x20Error:\x20Unable\x20to\x20resolve\x20the\x20proxy\x20address.\x20The\x20proxy\x20server\x20at\x20'+_0x41624e['ip']+':'+_0x41624e[_0x2896aa(0x20f)]+'\x20could\x20not\x20be\x20found.\x20Please\x20check\x20the\x20proxy\x20address\x20and\x20your\x20network\x20connection.'),logger['error'](this[_0x2896aa(0x1ed)]+_0x2896aa(0x1f0))):logger[_0x2896aa(0x202)](this[_0x2896aa(0x1ed)]+'\x20|\x20Proxy:\x20'+_0x41624e['ip']+':'+_0x41624e['port']+_0x2896aa(0x1f6)+_0x1664cf[_0x2896aa(0x208)]),![];}}async[a0_0x50af0d(0x1c2)](_0x52267b){const _0xfa1623=a0_0x50af0d;let _0x4b243e,_0x77f084=0x0,_0x5a99d5,_0x340507=![];if(settings[_0xfa1623(0x1f9)]&&_0x52267b){_0x4b243e=axios['create']({'httpsAgent':this.#proxy_agent(_0x52267b),'headers':this[_0xfa1623(0x1ad)],'withCredentials':!![]});const _0x5f1599=await this.#check_proxy(_0x4b243e,_0x52267b);!_0x5f1599&&(_0x4b243e=axios['create']({'headers':this['headers'],'withCredentials':!![]}));}else _0x4b243e=axios[_0xfa1623(0x1d3)]({'headers':this[_0xfa1623(0x1ad)],'withCredentials':!![]});while(!![]){try{const _0x50db93=Date[_0xfa1623(0x201)]()/0x3e8;if(_0x50db93-_0x77f084>=0xe10){_0x4b243e[_0xfa1623(0x1d6)][_0xfa1623(0x1ad)][_0xfa1623(0x1e5)]=app[_0xfa1623(0x1e5)];const _0x2bafcb=await this.#get_tg_web_data(),_0x150f27=await this.#get_access_token(_0x2bafcb,_0x4b243e);_0x4b243e['defaults'][_0xfa1623(0x1ad)][_0xfa1623(0x1f4)]=_0xfa1623(0x1a6)+_0x150f27?.[_0xfa1623(0x1c9)],_0x4b243e['defaults']['headers']['Apikey']=this[_0xfa1623(0x200)],_0x77f084=_0x50db93,await sleep(0x2);}_0x5a99d5=await this[_0xfa1623(0x1cd)][_0xfa1623(0x1ce)](_0x4b243e);if(!_0x5a99d5)continue;if(_0x5a99d5?.[_0xfa1623(0x211)]>0x0){_0x340507=![];settings['RANDOM_TAPS_COUNT'][0x0]>settings[_0xfa1623(0x20a)][0x1]&&(logger[_0xfa1623(0x202)](this[_0xfa1623(0x1ed)]+_0xfa1623(0x1fe)),process[_0xfa1623(0x1a0)](0x1));(settings['RANDOM_TAPS_COUNT'][0x0]>0x4e20||settings[_0xfa1623(0x20a)][0x1]>0x4e20)&&(logger['error'](this[_0xfa1623(0x1ed)]+'\x20|\x20❗️Invalid\x20Random\x20Taps\x20Count.\x20RANDOM_TAPS_COUNT\x20MAX\x20must\x20be\x20less\x20than\x20or\x20equal\x20to\x2020000.\x20Example:\x20RANDOM_TAPS_COUNT:\x20[10,\x2020000]'),process[_0xfa1623(0x1a0)](0x1));const _0x19badb=_['random'](settings[_0xfa1623(0x20a)][0x0],settings['RANDOM_TAPS_COUNT'][0x1]),_0x4c56a2=await this['api'][_0xfa1623(0x1aa)](_0x4b243e,_0x19badb);_0x4c56a2?.[_0xfa1623(0x1bb)]?(_0x5a99d5=await this[_0xfa1623(0x1cd)][_0xfa1623(0x1ce)](_0x4b243e),logger[_0xfa1623(0x1bb)](this[_0xfa1623(0x1ed)]+_0xfa1623(0x207)+_0x19badb+_0xfa1623(0x1a9)+_0x5a99d5?.[_0xfa1623(0x211)]+_0xfa1623(0x1e6)+_0x5a99d5?.[_0xfa1623(0x1bc)])):logger[_0xfa1623(0x202)](this[_0xfa1623(0x1ed)]+'\x20|\x20❗️Failed\x20to\x20send\x20taps');}if(_0x5a99d5?.[_0xfa1623(0x1df)]>0x0&&settings[_0xfa1623(0x1c6)]){logger[_0xfa1623(0x1e8)](this[_0xfa1623(0x1ed)]+'\x20|\x20Trying\x20your\x20luck\x20with\x20coin\x20doubling');const _0x3532ff=_0x5a99d5?.[_0xfa1623(0x1eb)]-0.25,_0x1d084d=Math[_0xfa1623(0x1b6)](_0x5a99d5?.[_0xfa1623(0x1bc)]*_0x3532ff),_0x574efe=await this[_0xfa1623(0x1cd)]['try_your_luck'](_0x4b243e,_0x1d084d);_0x5a99d5=await this[_0xfa1623(0x1cd)][_0xfa1623(0x1ce)](_0x4b243e),_0x574efe?.[_0xfa1623(0x1bb)]?logger[_0xfa1623(0x1bb)](this[_0xfa1623(0x1ed)]+_0xfa1623(0x1af)+_0x1d084d*0x2+_0xfa1623(0x1b1)+_0x5a99d5?.['balance']):logger['info'](this[_0xfa1623(0x1ed)]+_0xfa1623(0x1ff));}await sleep(0x5);if(settings['AUTO_UPGRADE_ATTEMPTS']&&_0x5a99d5?.[_0xfa1623(0x1a1)]<settings[_0xfa1623(0x1f3)]){const _0x38b071=_0x5a99d5?.[_0xfa1623(0x1a1)]-0xa,_0x358939=_0x38b071+0x1,_0x1ceda6=this[_0xfa1623(0x1d4)]*_0x358939;if(_0x5a99d5?.[_0xfa1623(0x1bc)]>=_0x1ceda6){const _0x95da21={'lvl':_0x358939},_0x1cb4ee=await this[_0xfa1623(0x1cd)][_0xfa1623(0x1ae)](_0x4b243e,UpgradableBoostType['ATTEMPTS'],_0x95da21);_0x5a99d5=await this[_0xfa1623(0x1cd)][_0xfa1623(0x1ce)](_0x4b243e),_0x1cb4ee?.[_0xfa1623(0x1bb)]&&logger['info'](this[_0xfa1623(0x1ed)]+_0xfa1623(0x1c4)+_0x5a99d5?.[_0xfa1623(0x1a1)]+_0xfa1623(0x1db));}}await sleep(0x3);if(settings[_0xfa1623(0x1d8)]&&_0x5a99d5?.[_0xfa1623(0x215)]<settings[_0xfa1623(0x1d9)]){const _0x11992d=this[_0xfa1623(0x1d4)]*_0x5a99d5?.[_0xfa1623(0x215)];if(_0x5a99d5?.[_0xfa1623(0x1bc)]>=_0x11992d){const _0x43b2fd={'lvl':_0x5a99d5?.[_0xfa1623(0x215)]},_0x190255=await this['api']['upgrade_boost'](_0x4b243e,UpgradableBoostType[_0xfa1623(0x1a5)],_0x43b2fd);_0x5a99d5=await this[_0xfa1623(0x1cd)][_0xfa1623(0x1ce)](_0x4b243e),_0x190255?.[_0xfa1623(0x1bb)]&&logger[_0xfa1623(0x1e8)](this['session_name']+_0xfa1623(0x1a3)+_0x5a99d5?.[_0xfa1623(0x215)]+_0xfa1623(0x1db));}}_0x5a99d5?.[_0xfa1623(0x211)]<0x1&&(_0x340507=!![]);}catch(_0x41231f){logger[_0xfa1623(0x202)](this[_0xfa1623(0x1ed)]+_0xfa1623(0x1d2)+_0x41231f);}finally{let _0x72125b,_0x26596d='';_0x340507?(_0x72125b=0x4b0,_0x26596d=_0xfa1623(0x1d7)):_0x72125b=settings[_0xfa1623(0x203)],logger[_0xfa1623(0x1e8)](this[_0xfa1623(0x1ed)]+_0xfa1623(0x1ac)+_0x26596d+_0xfa1623(0x1d1)+_0x72125b+_0xfa1623(0x1be)),await sleep(_0x72125b);}}}}function a0_0xb19e(){const _0x3d01dc=['replace','://','lodash','run','origin','\x20|\x20Daily\x20attempts\x20upgraded\x20to\x20<lb>','freddy_bots','AUTO_LUCKY_DOUBLING_COINS','get','session_user_agents','token','ios','writeFileSync','9yHrdmW','api','get_user_data','socks','data','sleeping\x20for\x20','\x20|\x20❗️Unknown\x20error:\x20','create','STARTING_COIN_PRICE','https://httpbin.org/ip','defaults','No\x20daily\x20attempts\x20left,\x20','AUTO_UPGRADE_MULTITAP','MAX_MULTITAP_LEVEL','messages','</lb>','password','\x20|\x20🚀\x20Starting\x20session...','tg_client','gamex2_times','3489404HaXtot','channels','../config/userAgents','7374206YGzUXe','2786AzEMFZ','host','\x20|\x20💰Total\x20Balance:\x20','android','info','../utils/boost','./header','gamex2_probability','20291312cHuort','session_name','API_URL','stringify','\x20|\x20No\x20proxy\x20will\x20be\x20used.','85050tgrLQD','length','MAX_ATTEMPTS','authorization','259099LvTBzJ','\x20|\x20Error:\x20','/start\x20r_1167045062','ECONNREFUSED','USE_PROXY_FROM_FILE','bot','apiUrl','axios','session_user_agents.json','\x20|\x20❗️Invalid\x20Random\x20Taps\x20Count.\x20RANDOM_TAPS_COUNT\x20MIN\x20must\x20be\x20less\x20than\x20RANDOM_TAPS_COUNT\x20MAX.\x20Example:\x20RANDOM_TAPS_COUNT:\x20[10,\x2020]','\x20|\x20😞\x20You\x20weren\x27t\x20lucky\x20today,\x20we\x20will\x20try\x20again\x20tomorrow','XXY_ZZY','now','error','SLEEP_BETWEEN_TAP','split','GetHistory','code','\x20|\x20✅\x20Successfully\x20sent\x20taps\x20|\x20(<gr>+','message','includes','RANDOM_TAPS_COUNT','\x20|\x20❗️Unknown\x20error\x20while\x20getting\x20Access\x20Token:\x20','invoke','socks-proxy-agent','\x20|\x20❗️Unknown\x20error\x20during\x20Authorization:\x20','port','username','daily_attempts','utf8','../config/app','Unknown','multiple_clicks','webviewUrl','ENOTFOUND','exit','limit_attempts','../utils/parser','\x20|\x20Multitap\x20upgraded\x20to\x20level\x20<lb>','JoinChannel','MULTITAPS','Bearer\x20','2697565YIYtmw','exports','</gr>)\x20|⚡Remaining\x20Energy:\x20','send_taps','../utils/sleep','\x20|\x20😴\x20','headers','upgrade_boost','\x20|\x20🎉\x20You\x20were\x20lucky\x20and\x20got\x20(<gr>+','toQueryString','</gr>)\x20|\x20💰Total\x20Balance:\x20','peer','toJson','telegram','parse','floor','\x20|\x20Generating\x20new\x20user\x20agent...','getInputEntity','2889mcAZCF','socksType','success','balance','RequestWebView','\x20seconds...'];a0_0xb19e=function(){return _0x3d01dc;};return a0_0xb19e();}function a0_0x6c4b(_0xf43e94,_0x2d1cf2){const _0xb19e56=a0_0xb19e();return a0_0x6c4b=function(_0x6c4bc8,_0x49c6a2){_0x6c4bc8=_0x6c4bc8-0x19f;let _0x42a8a7=_0xb19e56[_0x6c4bc8];return _0x42a8a7;},a0_0x6c4b(_0xf43e94,_0x2d1cf2);}module[a0_0x50af0d(0x1a8)]=Tapper;