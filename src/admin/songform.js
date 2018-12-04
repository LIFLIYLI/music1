{
    let view={
        el:'#songform',
        init(){
            this.$el=$(this.el)
        },
        render(){

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
        }
    }
    controller.init(view,model)
}