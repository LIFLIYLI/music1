{
    let view={
        el:"#audio",
        template:`
        <div class="songName" id="songName">{{songName}}</div>
        <audio autoplay controls src="{{url}}"></audio>
        `,
        render(data){
            //let newdata=(data)
            //console.log(data)
            let dom=this.template.replace('{{songName}}',data.name)
            .replace('{{url}}',data.id)
            $(this.el).append(dom)
        }
    }
    let model={
        data:{}
    }
    let controller={
        init(view,model){
            
            this.view=view
            this.model=model
            this.bindevents()
            this.getSongContent()
            this.view.render(this.model.data)           
            window.eventHub.on('audioChange',()=>{
                this.audioChange()
            })
            this.audioplay(this.model.data.id)
        },

        audioplay(){
            let audio=$(this.view.el).find('audio').get(0)
            audio.ontimeupdate = ()=>{window.eventHub.emit('lyricChange',audio.currentTime)}       
        },

        bindevents(){
           
        },
        audioChange(){
            if(this.model.data.status){
                $(this.view.el).find('audio')[0].play()
                this.model.data.status=undefined
                
            }else{
                $(this.view.el).find('audio')[0].pause()
                this.model.data.status=undefined=true
            }
            
        },
        getSongContent(){
            let search=window.location.search //获取网址查询参数
            if(search.indexOf('?')===0){ //判断参数是否有问号
                search=search.substring(1) //去掉问号
            }
            let array=search.split('&').filter((v=>v)) //去掉and号，得到一个数组
                for(let i=0;i<array.length;i++){
                    let KV=array[i].split('=')//2次去掉2个数组的等于号，分别得到2个新数组
                    let key=KV[0]
                    let value=KV[1]
                    this.model.data[key]=value
                }
        },
        
    }
    controller.init(view,model)
}