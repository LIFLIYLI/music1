{
    let view={
        el:'#Songs',
        init(){
            this.$el=$(this.el)
        },
        template:`
        <li>
        <h3>{{data.name}}</h3>
        <p>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-geshou1"></use>
            </svg>
            {{data.singer}}
        </p>
        <a class="playButton" href="../html/song.html?id={{data.url}}">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang"></use>
            </svg>
        </a>
        </li>
        `,
        render(dom){
            let data=dom
            let li=$(this.template
            .replace('{{data.name}}',data.name)
            .replace('{{data.singer}}',data.singer)
            .replace('{{data.url}}',data.url)
            )
            this.$el.find('ol.List').append(li)
        }
    }
    let model={
        data:{}
    }
    let controller={
        init(view,model){
            this.view=view
            this.view.init()
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
                 this.view.render(this.model.data)      
              })
              // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
            }, function (error) {
            });
        },

    }
    controller.init(view,model)
}