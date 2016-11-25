hideElements: function (iphone, duration){
   iphone.actionManager = new BABYLON.ActionManager(this.scene);
   iphone.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger, iphone, "scaling", new BABYLON.Vector3(1.0, 0.18, 1.8), 150));
   iphone.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger, iphone, "scaling", new BABYLON.Vector3(1.0, 0.18, 1.8), 150));
   iphone.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (){
     var positionAnimation = new BABYLON.Animation("MoveElement", "position", 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
     var keys =  [{frame:0,  value: this.scene.getMeshByName("api").position},   {frame:duration, value: this.scene.getMeshByName("api").position.add(new BABYLON.Vector3(0, 19.5, 0))}];
     positionAnimation.setKeys(keys);
     this.scene.getMeshByName("api").animations.push(positionAnimation);
     this.scene.beginAnimation(this.scene.getMeshByName("api"), 0, duration, false);
   }.bind(this))).then(
     new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (){
     var positionAnimation = new BABYLON.Animation("MoveElement", "position", 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
     var keys =  [{frame:0,  value: this.scene.getMeshByName("api").position},   {frame:duration, value: this.scene.getMeshByName("api").position.add(new BABYLON.Vector3(0, -19.5, 0))}];
     positionAnimation.setKeys(keys);
     this.scene.getMeshByName("api").animations.push(positionAnimation);
     this.scene.beginAnimation(this.scene.getMeshByName("api"), 0, duration, false);
   }.bind(this)));
  return iphone;
},
