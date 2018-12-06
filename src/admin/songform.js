{
    let view={
        el:'#songform',
        init(){
            this.$el=$(this.el)
        },
        template:`
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
        updata(){
            let Song = AV.Object.extend('Song');
            // 新建对象
            let song = new Song();
            // 设置名称
            song.set('name',this.data.name);
            // 设置优先级
            song.set('singer',this.data.singer);
            song.set('url',this.data.url);
            song.save().then(function (todo) {
              console.log('objectId is ' + todo.id);
            }, function (error) {
              console.error(error);
            });
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
            window.eventHub.on('setSong',(data)=>{
               this.model.updata()
              })
        },
        bindEvents(){
            this.view.$el.on('click','button',(e)=>{
                e.preventDefault()
                this.getText()                      
            })
        },
        getText(){
            let data=[]
            let needs=['name','singer','url']
            let string=needs.map((item)=>{
                data[item]=this.view.$el.find(`[name="${item}"]`).val()               
            })
            this.model.data=data
            window.eventHub.emit('setSong')
            //这里给列表渲染的参数
        },
    }
    controller.init(view,model)
}