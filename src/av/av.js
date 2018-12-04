{
    var APP_ID = 'O5abMcB59Md188PVvsIF7pzz-gzGzoHsz';
    var APP_KEY = 'YfinGoxTVINFc03Knxaojeka';

    AV.init({
    appId: APP_ID,
    appKey: APP_KEY
    });
 
    /********** 
    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    testObject.save({
    words: 'Hello World!'
    }).then(function(object) {
    alert('LeanCloud Rocks!');
    })
    */
}