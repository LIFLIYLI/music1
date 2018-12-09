{
    let view={
        el:'#category',
        init(){
            this.$el=$(this.el)
        },
        template:`
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Sign"></use>
            </svg>
            <div>签到</div>
        </div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-diantaizhibo"></use>
            </svg>
            <div>电台直播</div>
        </div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-geshou"></use>
            </svg>
            <div>歌手</div>        
        </div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sort"></use>
            </svg>
            <div>分类</div>        
        </div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paixingbang"></use>
            </svg>
            <div>排行榜</div>        
        </div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinle"></use>
            </svg>
            <div>HiFi音乐</div>        
        </div>
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