
    window.eventHub={
        events:{

        },
        on(eventsName,fn){
            if(this.events[eventsName]===undefined){
                this.events[eventsName]=[]
            }  
            this.events[eventsName].push(fn)   
        },
        emit(eventsName,data){
            for(let key in this.events){
                if(key ===eventsName){
                    let fnList=this.events[key]
                    fnList.map((fn)=>{
                        fn.call(undefined,data)
                    })
                }
            }           
        }
        
    }
 