{
    let view={
        el:'#main',
        template:`
        <div id="my" class="my active">我的仓库</div>
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
        },
        eventHub(){
            window.eventHub.on('change',(ID)=>{
                this.changeClass(ID)
            })
        },
        changeClass(ID){
            if(ID==='navBarMy'){
                $(this.view.el).find('#my')
                .removeClass('active')
                .siblings().addClass('active')
            }
        }

    }
    controller.init(view,model)
}