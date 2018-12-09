{
    let view={
        el:'#Songs',
        init(){
            this.$el=$(this.el)
        },
        template:`
        <div>推荐曲目</div>
        `,
        render(dom){
            this.$el.append(dom)
        }
    }
    let model={
        data:{}
    }
    let controller={
        init(view,model){
            this.view=view
            this.view.init()
            this.view.render(this.view.template)
            this.model=model
            this.bindEvents()
            this.getSongsList()
        },
        bindEvents(){

        },
        getSongsList(){
            var query = new AV.Query('Song');
            query.find().then((list)=> {
              // 成功获得实例
              list.map((item)=>{
                this.model.data = Object.assign({},item.attributes); 
                //this.model.data.push(item.attributes) 
                 this.makeList(this.model.data)      
              })
              // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
            }, function (error) {
            });
        },
        makeList(object){
            let li=document.createElement('li')
            let svg=document.createElement('svg')
            li.innerHTML=object.name
            this.view.render(li)
        }
    }
    controller.init(view,model)
}