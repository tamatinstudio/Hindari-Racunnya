!function t(e,r,n){function o(i,u){if(!r[i]){if(!e[i]){var s="function"==typeof require&&require;if(!u&&s)return s(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[i]={exports:{}};e[i][0].call(l.exports,function(t){var r=e[i][1][t];return o(r?r:t)},l,l.exports,t,e,r,n)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(t,e,r){for(var n=!0;n;){var o=t,a=e,i=r;n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;if(void 0===s)return;return s.call(i)}var c=Object.getPrototypeOf(o);if(null===c)return;t=c,e=a,r=i,n=!0,u=c=void 0}},u=function(t){function e(t,r,o,a,u){n(this,e),i(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,r,o,a,u),this.anchor.set(.5),this.idle=this.animations.add("idle",[0]),this.waiting=this.animations.add("waiting",[1]),this.eating=this.animations.add("eating",[2,0,2,0,2,0,2,0,2,0]),this.eating.speed=5,this.happy=this.animations.add("happy",[3]),this.happy.speed=1,this.sad=this.animations.add("sad",[4]),this.sad.speed=1,this.idle.play()}return o(e,t),a(e,[{key:"happyTween",value:function(){var t=this.position.y;return this.game.add.tween(this.position).to({y:t-10},200).to({y:t+10},200).to({y:t-10},200).to({y:t+10},200).to({y:t-10},200).to({y:t+10},200).start()}},{key:"sadTween",value:function(){var t=this.position.x;return this.game.add.tween(this.position).to({x:t-10},200).to({x:t+20},200).to({x:t-20},200).to({x:t+20},200).to({x:t-20},200).to({x:t+10},200).start()}}]),e}(Phaser.Sprite);r["default"]=u,e.exports=r["default"]},{}],2:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(t,e,r){for(var n=!0;n;){var o=t,a=e,i=r;n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;if(void 0===s)return;return s.call(i)}var c=Object.getPrototypeOf(o);if(null===c)return;t=c,e=a,r=i,n=!0,u=c=void 0}},u=t("EdibleObjectsData"),s=n(u),c=function(t){function e(t,r,n,a,u){var c=this;o(this,e),i(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,r,n,a,u+".png"),this.edible=s["default"][u],this.anchor.set(.5),this.inputEnabled=!0,this.input.useHandCursor=!0,this.input.enableDrag(!1,!0),this.events.onDragStart.add(function(){c.tween&&c.tween.stop(),c.game.currentState.character.waiting.play()},this),this.events.onDragStop.add(function(t,e){var o=c.game.currentState.character;o.getBounds().contains(e.x,e.y)?(c.game.add.tween(c.scale).to({x:0,y:0},500,Phaser.Easing.Back.In,!0).onComplete.add(function(){o.eating.play().onComplete.add(function(){var t=function(){return c.game.state.start("GameState",!0,!1)};c.edible?(o.happy.play(),o.happyTween().onComplete.add(t)):(o.sad.play().onComplete,o.sadTween().onComplete.add(t))},c)},c),c.game.currentState.permen.inputEnabled=!1,c.game.currentState.racun.inputEnabled=!1):(c.tween=c.game.add.tween(c).to({x:r,y:n},500,Phaser.Easing.Back.Out,!0),c.game.currentState.character.idle.play())},this)}return a(e,t),e}(Phaser.Image);r["default"]=c,e.exports=r["default"]},{EdibleObjectsData:3}],3:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={permen:!0,permen1:!0,permen2:!0,racun:!1,racun1:!1,racun2:!1};for(var o in n)n[o]?(n.Edibles||(n.Edibles=[]),n.Edibles.push(o)):(n.Inedibles||(n.Inedibles=[]),n.Inedibles.push(o));console.log(n.Edibles,n.Inedibles),r["default"]=n,e.exports=r["default"]},{}],4:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=function(t,e,r){for(var n=!0;n;){var o=t,a=e,i=r;n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;if(void 0===s)return;return s.call(i)}var c=Object.getPrototypeOf(o);if(null===c)return;t=c,e=a,r=i,n=!0,u=c=void 0}},s=t("EdibleObject"),c=n(s),l=t("Character"),f=n(l),p=t("EdibleObjectsData"),d=n(p),h=function(t){function e(){o(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return a(e,t),i(e,[{key:"preload",value:function(){this.game.currentState=this,this.game.stage.backgroundColor="#ffffff",this.game.load.atlas("edibleObjects","assets/edibleobjects.png","assets/edibleobjects.json"),this.game.load.spritesheet("character","assets/character.png",285,200)}},{key:"create",value:function(){var t={x:this.game.width/2,y:this.game.height/2},e=this.game.add.text(t.x,50,"Hindari Racunnya",{fontSize:"60px"});e.anchor.set(.5);var r=this.game.add.group(),n=Math.random();n=n>.5?-1:1;var o=d["default"].Edibles[Math.floor(Math.random()*d["default"].Edibles.length)],a=d["default"].Inedibles[Math.floor(Math.random()*d["default"].Inedibles.length)];console.log(o,a),this.permen=new c["default"](this.game,t.x-100*n,200,"edibleObjects",o),r.addChild(this.permen),this.racun=new c["default"](this.game,t.x+100*n,200,"edibleObjects",a),r.addChild(this.racun),this.character=new f["default"](this.game,t.x,t.y+100,"character"),r.addChild(this.character)}}]),e}(Phaser.State);r["default"]=h,e.exports=r["default"]},{Character:1,EdibleObject:2,EdibleObjectsData:3}],5:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(t,e,r){for(var n=!0;n;){var o=t,a=e,i=r;n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;if(void 0===s)return;return s.call(i)}var c=Object.getPrototypeOf(o);if(null===c)return;t=c,e=a,r=i,n=!0,u=c=void 0}},u=function(t){function e(){n(this,e),i(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return o(e,t),a(e,[{key:"preload",value:function(){this.game.stage.backgroundColor="#ffffff"}},{key:"create",value:function(){var t={x:this.game.width/2,y:this.game.height/2},e=this.game.add.text(t.x,50,"Menu State",{fontSize:"60px"});e.anchor.set(.5)}}]),e}(Phaser.State);r["default"]=u,e.exports=r["default"]},{}],6:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(t,e,r){for(var n=!0;n;){var o=t,a=e,i=r;n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;if(void 0===s)return;return s.call(i)}var c=Object.getPrototypeOf(o);if(null===c)return;t=c,e=a,r=i,n=!0,u=c=void 0}},u=t("MenuState"),s=n(u),c=t("GameState"),l=n(c),f=function(t){function e(){o(this,e),i(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,window.innerWidth,window.innerHeight,Phaser.AUTO,"content",null),this.state.add("MenuState",s["default"],!1),this.state.add("GameState",l["default"],!1),this.state.start("GameState")}return a(e,t),e}(Phaser.Game);new f},{GameState:4,MenuState:5}]},{},[6]);