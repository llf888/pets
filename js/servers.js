/**
 * Created by web on 2019/3/30.
 */
    Vue.component("my-content",{
        template:"#conFirst",
        data:function(){ return{tasks:[1,2,3,4,5,6] } }
    });
var con=new Vue({
    el:"#con",
    data:{}
})