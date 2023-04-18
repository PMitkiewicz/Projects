const approved=["Ari","Ariola","Ashley"]
 Array.prototype.forEach2=function(func){for( let i=0;i<this.length;i++){
func(this[i],i,this) //foreach and map reveives element index and array
}}

approved.forEach2((names,index)=>{ //forEach takes an arrow funciton, camelcase
    console.log(names,index+1)
})