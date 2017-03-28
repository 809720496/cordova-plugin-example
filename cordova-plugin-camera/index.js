/**
* http://docs.wex5.com/cordova-plugin-file/
* http://docs.wex5.com/wex5-app-question-list-2007/
*/
define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!cordova-plugin-camera");

	var Model = function(){
		this.callParent();
	};

	/** 拍照 */
	Model.prototype.button1Click = function(event){
		this.getCamera(event);
	};
	
	/** 获取图片（拍照或者相册上传） */
	Model.prototype.getCamera = function(event) {
		var me = this;

		function onSuccess(imageData) {
			$(me.getElementByXid('image1')).attr("src", "data:image/jpeg;base64," + imageData);
		}
		
		function onFail(message) {
			justep.Util.hint("失败：" + message);
		}

		navigator.camera.getPicture(onSuccess, onFail, {
			quality : 50,
			destinationType: 0,
			sourceType : 1,
			allowEdit : true,
			targetWidth: 100,
			targetHeight: 100,
			cameraDirection: 0
		});
	};

	Model.prototype.modelLoad = function(event){
		document.addEventListener("deviceready", onDeviceReady, false);
	    function onDeviceReady() {
	        console.log(navigator.camera);
	    }
	};

	return Model;
});