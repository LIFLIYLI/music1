{
    let view={
        el:'#newsong',
        init(){
            this.$el=$(this.el)
        },
        template:`
        <ol>
            <li>1</li>
            <hr>
            <li>2</li>
            <hr>
            <li>3</li>
            <hr>
        </ol>
        `,
        render(){
            this.$el.html(this.template)
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
            this.view.render()
        }
    }
    controller.init(view,model)
}