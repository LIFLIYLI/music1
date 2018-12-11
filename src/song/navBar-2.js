{
    let view={
        el:'#main',
        template:`
        <div id="input" class="input active">
            <input type="text">
            <button type="sumbit">搜索</button>
        </div>
        `,
        render(){
            $(this.el).append(this.template)
        }
    }
    let model={

    }
    let controller={
        init(){
            this.view=view
            this.model=model
            this.view.render()
            this.eventHub()
            this.changeClass()
        },
        eventHub(){
            window.eventHub.on('change',(ID)=>{
                this.changeClass(ID)
            })
        },
        changeClass(ID){
            if(ID==='navBarSearch'){
                $(this.view.el).find('#input')
                .removeClass('active')
                .siblings().addClass('active')
            }
        }


    }
    controller.init(view,model)
}