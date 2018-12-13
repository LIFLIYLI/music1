{
    let view={
        el:'#songform',
        init(){
            this.$el=$(this.el)
        },
        getName(){
            $(`${this.$el} `)
        },
        template:`
        <h2>新建歌曲</h2>
        <div>
            <label for="">歌名</label>
            <input type="text" data-id="__id__" name="name" value="__name__">
        </div>
        <div>
            <label for="">歌手</label>
            <input type="text" name="singer" value="__singer__">
        </div>
        <div>
            <label for="">外链</label>
            <input type="text" name="url" value="__url__">
        </div>
        <div class="lyric">
            <label for="">歌词</label>
            <textarea cols=100 rows=10 name="lyric">__lyric__</textarea>
        </div>
        <button type="submit" id="button">保存歌曲</button>
        `,
        render(data={}){
            let place=['id','name','singer','url','lyric']
            html=this.template
            place.map((item)=>{
                html=html.replace(`__${item}__`,data[item]||'')
            })
            this.$el.html(html)
        }
    }
    let model={
        data:[],
        saveData(){
            let Song = AV.Object.extend('Song');
            // 新建对象
            let song = new Song();
            // 设置名称
            song.set('name',this.data.name);
            // 设置优先级
            song.set('singer',this.data.singer);
            song.set('url',this.data.url);
            song.set('lyric',this.data.lyric);
            song.save().then((todo)=> {
                let{id,attributes}=todo
                Object.assign(this.data,{id,...attributes})
            }, function (error) {
              console.error(error);
            });
        },
        update(){
            var todo = AV.Object.createWithoutData('Song',this.data.id);
            // 修改属性
            ['name','singer','url','lyric'].map((item)=>{
                todo.set(item,this.data[item])
            })
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
              this.model.data=data
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
            ['name','singer','url','lyric'].map((item)=>{
                    this.model.data[item]=this.view.$el.find(`[name="${item}"]`).val()          
            })
            // 判断当前歌曲ID是否纯在
            let data=this.model.data
            if(data.id){
                this.model.update()
            }else{
                this.model.saveData()
            }
            window.eventHub.emit('songlist',this.model.data)   //这里给列表渲染的参数  
        },
    }
    controller.init(view,model)
}