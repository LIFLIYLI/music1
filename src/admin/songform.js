{
    let view={
        el:'#songform',
        init(){
            this.$el=$(this.el)
        },
        template:`
        <div>
            <label for="">歌名</label>
            <input type="text" name="name">
        </div>
        <div>
            <label for="">歌手</label>
            <input type="text" name="singer">
        </div>
        <div>
            <label for="">外链</label>
            <input type="text" name="url">
        </div>
        <button type="submit" id="button">保存歌曲</button>
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
            this.bindEvents()
            this.view.render()
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