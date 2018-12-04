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
   let Song = AV.Object.extend('Song');
   // 新建对象
   let song = new Song();
   // 设置名称
   song.set('name','歌名');
   // 设置优先级
   song.set('singer','歌手');
   song.set('url','外链');
   song.save().then(function (todo) {
     console.log('objectId is ' + todo.id);
   }, function (error) {
     console.error(error);
   });
}