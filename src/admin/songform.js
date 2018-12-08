{
    let view={
        el:'#songform',
        init(){
            this.$el=$(this.el)
        },
        template:`
        <h2>新建歌曲</h2>
        <div>
            <label for="">歌名</label>
            <input type="text" name="name" value="__name__">
        </div>
        <div>
            <label for="">歌手</label>
            <input type="text" name="singer" value="__singer__">
        </div>
        <div>
            <label for="">外链</label>
            <input type="text" name="url" value="__url__">
        </div>
        <button type="submit" id="button">保存歌曲</button>
        `,
        render(data={}){
            let place=['name','singer','url']
            html=this.template
            place.map((item)=>{
                html=html.replace(`__${item}__`,data[item]||'')
            })
            this.$el.html(html)
        }
    }
    let model={
        data:{},
        saveData(){
            let Song = AV.Object.extend('Song');
            // 新建对象
            let song = new Song();
            // 设置名称
            song.set('name',this.data.name);
            // 设置优先级
            song.set('singer',this.data.singer);
            song.set('url',this.data.url);
            song.save().then((todo)=> {
                let{id,attributes}=todo
                Object.assign(this.data,{id,...attributes})
              console.log('objectId is ' + todo.id);
            }, function (error) {
              console.error(error);
            });
        },
        upData(){
            var todo = AV.Object.createWithoutData('Song', '5745557f71cfe40068c6abe0');
            // 修改属性
            todo.set('content', '每周工程师会议，本周改为周三下午3点半。');
            // 保存到云端
            todo.save(); 
        }
    }
    let controller={
        init(view,model){
            this.view=view
            this.view.init()
            this.model=model
            this.bindEvents()
            this.view.render()
            window.eventHub.on('new',(data)=>{              
                this.view.render(data)
            })
        },
        bindEvents(){
            this.view.$el.on('click','button',(e)=>{
                e.preventDefault()
                this.getText()  
                this.view.render()                
            })
        },
        getText(){
            let data=[]
            let needs=['name','singer','url',]
            let string=needs.map((item)=>{
                data[item]=this.view.$el.find(`[name="${item}"]`).val()          
            })
            this.model.data=data
            console.log('_____')
            console.log(this.model.data)
            this.model.saveData()
            window.eventHub.emit('songlist',this.model.data)   //这里给列表渲染的参数  
        },
    }
    controller.init(view,model)
}