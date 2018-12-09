{
    let view={
        el:'#navBar',
        init(){
            this.$el=$(this.el)
        },
        template:`
        <div>音乐库</div>
        <div>我的</div>
        <div>搜索</div>
        `,
        render(){
            this.$el.append(this.template)
        }
    }
    let model={
        data:{}
    }
    let controller={
        init(view,model){
            this.view=view
            this.view.init()
            this.view.render()
            this.model=model
            this.bindEvents()
        },
        bindEvents(){

        }
    }
    controller.init(view,model)
}