{
    let view = {
        el:'#songPlay',
        template:`      
        <img src="../img/2-1.png" alt="">       
        <img src="../img/disc_light-ip6.png" alt="">
        <img src="../img/needle-ip6.png" alt="">
        <img src="../img/1-1.png" alt="">
        <img src="../img/disc-ip6.png" alt="">
        `,
        render(){
           $(this.el).find('#discImg').append(this.template)
        }
    }
    let model={}
    let controller={
        init(view,model){
            this.view=view
            this.model=model
            this.view.render()
        },

    }
    controller.init(view,model)
}