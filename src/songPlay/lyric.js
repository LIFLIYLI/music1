{
    let view = {
        el:'#lyric',
        render(lyric){
            lyric.split('\n').map((string)=>{
                let p=document.createElement('p')
                
                let regex=/\[([\d:.]+)\](.+)/     //正则匹配,有数字有冒号有点
                let matches=string.match(regex)              
                if(matches){
                    p.textContent=matches[2]
                    let time=matches[1]
                    let parts=time.split(':')
                    let minutes=parts[0]
                    let seconds=parts[1]
                    //先拿到时间里的字符串，然后把表示分钟的字符串变成数字，
                    //把秒数的字符串也变成数字，但秒数有小数点，所以用parseFloat
                    let newTime=parseInt(minutes,10)*60 + parseFloat(seconds,10)
                    p.setAttribute('data-time',newTime)
                }else{
                    p.textContent=string
                }
                $(this.el).append(p)
            })
        }
    }
    let model={
        data:{}
    }
    let controller={
        init(){
            this.view=view
            this.model=model
            this.findLyric()           
        },
        findLyric(){
            var query = new AV.Query('Song');
            query.find().then((todo)=> {
              // 成功获得实例
              todo.map((item)=>{
                  // this.model.data.push(item)
                this.model.data=Object.assign(item.attributes)
                this.view.render(this.model.data.lyric)            
              })
              // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
            }, function (error) {
            });
        }
    }
    controller.init(view,model)
}