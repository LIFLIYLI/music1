{
    let view={
        el:'#newsong',
        init(){
            this.$el=$(this.el)
        },
        template:`
        <h2>新建歌曲</h2>
        <ol>
        </ol>
        `,
        render(){
            this.$el.html(this.template)
        }
    }
    let model={
        data:[],
        
    }
    let controller={
        init(view,model){
            this.view=view
            this.view.init()
            this.model=model
            this.view.render()
            this.getsonglist()            
            window.eventHub.on('songlist',(name)=>{
                this.setlist(name)
            })
            this.bindevents()
        },
        bindevents(){
            $(this.view.el).find('ol').on('click','li',(item)=>{
                let targ=item.currentTarget.innerText
                let data=this.model.data
                data.map((item)=>{
                    if(item.name===targ){
                        window.eventHub.emit('new',{
                            name:item.name,
                            url:item.url
                        })
                    }
                })
            })
        },
        setlist(name){
            let list=document.createElement('li')
            name.map((item)=>{
                list.innerText=item.name
                $(this.view.el).find('ol').append(list)
            })         
        },
        getsonglist(){
            var query = new AV.Query('Song');
            query.find().then((todo)=> {
              // 成功获得实例
              todo.map((item)=>{
               this.model.data.push(item.attributes)
                this.setlist(this.model.data)              
              })
              // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
            }, function (error) {
            });
        }
    }
    controller.init(view,model)
}