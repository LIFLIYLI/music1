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
        data:{},
        
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
                console.log(item)//这里想办法获取子元素
            })
        },
        setlist(name){
            let list=document.createElement('li')
            list.innerText=name.name
            $(this.view.el).find('ol').append(list)
        },
        getsonglist(){
            var query = new AV.Query('Song');
            query.find().then((todo)=> {
              // 成功获得实例
              todo.map((item)=>{
                this.setlist(item.attributes)
              })
              // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
            }, function (error) {
            });
        }
    }
    controller.init(view,model)
}