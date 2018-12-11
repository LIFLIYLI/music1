{
    let view={
        el:'#navBar',
        init(){
            this.$el=$(this.el)
        },
        template:`
        <div class="navBar-music" id="navBarMusic">音乐库</div>
        <div class="navBar-my" id="navBarMy">我的</div>
        <div class="navBar-search" id="navBarSearch">搜索</div>
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
            this.eventHub()
            this.bindEvents()
            
        },
        bindEvents(){
            this.view.$el.on('click','div',(e)=>{
                let targ=$(e.currentTarget)
                let tabId=targ.attr('id')
                window.eventHub.emit('change',tabId)               
            })
        },
        eventHub(){
            window.eventHub.on('change',(ID)=>{
                if(ID==='navBarMusic'){
                    $(this.view.el).siblings('#main').find('#fistpage')
                    .removeClass('active')
                    .siblings().addClass('active')
                }
            })
        }
    }
    controller.init(view,model)
}