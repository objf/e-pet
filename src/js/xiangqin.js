
document.addEventListener('DOMContentLoaded',()=>{
     let url = decodeURI(location.search);

        var idx = url.indexOf('?');

                // 截取url参数部分
                var params = url.slice(idx+1,-1);//name=laoxie&age=18&sex=male


                // String->Object
                // 拆分属性
                params = params.split('&');//['name=laoxie','age=18','sex=male']

                // 用于存放属性：属性值
                var obj = {};

                params.forEach(function(item){
                    // 拆分属性名/属性值
                    var arr = item.split('=');//['name','laoxie']

                    // 写入对象
                    obj[arr[0]] = arr[1];
                });

                // console.log(obj);
                var arr =[];
               arr.push(obj);
                console.log(arr[0]);

                var goods_pic = document.querySelector('.goods_pic');
                var goods_mass = document.querySelector('.goods_mass');
                console.log(goods_pic);

                goods_pic.innerHTML =   `
               <div class="bigimg">
                   <img src="../${arr[0].imgurl}" data-big="../${arr[0].imgurl}" class="big_img">
                </div>
                <div class="small_pic">
                   <p></p>
                   <ul class="small">
                      <li><img src="../${arr[0].imgurl}" data-big="../${arr[0].imgurl}"></li>
                      <li><img src="../${arr[0].imgurl}" data-big="../${arr[0].imgurl}"></li>
                      <li><img src="../${arr[0].imgurl}" data-big="../${arr[0].imgrul}"></li>
                      <li><img src="../${arr[0].imgurl}" data-big="../${arr[0].imgurl}"></li>
                   </ul>
                   <p class="p2"></p>
                </div>
                <div class="bott">
                  <i class="fl">编号：11100</i><p class="fr"><a href="#">分享</a><a href="#">收藏商品</a></p>
                </div>
                `;

                goods_mass.innerHTML = `
                   <h1>${arr[0].name}</h1>
                 <span>冻干工艺 肉味浓郁 双拼犬粮 小包装设计 储存更方便</span>
                 <div class="jiage">
                     <p class="p1">市场价 ：<s>${arr[0].price}</s></p>
                     <p class="p2">E宠价 ：<b>${arr[0].sale}</b></p>
                  </div>
                 <div class="max">
                   <div class="t">
                     <div>已收 :<i>${arr[0].dai}</i></div>
                     <div>评价 :<i>（0）</i></div>
                     <div>赠送 :<s>最多39宠币</s></div>
                   </div>
                   <div class="b">
                      <img src="../img/zp.png">正品保证
                      <img src="../img/baoy.png">99包邮
                      <img src="../img/thirtydays.png">30天退货
                   </div>
                 </div>
                 <div class="sl"><span>重量 ：</span><a href="#">2kg</a><a href="#">10kg</a></div>
                 <div class="mai">
                       <span>我要买 ：</span>
                       <p><input type="text" value="1"><i class="i_1"></i><i class="i_2"></i></p>
                 </div>
                 <div class="df">
                       <span>送货至 ：</span><div>重庆渝中区<i></i></div>
                 </div>
                 <div class="xiadan">E宠快递15点前下单，其他快递16点前下单，当天发货。<a href="#">运费详情</a> </div>
                 <button>加入购物车</button>
                `;

                var small = document.querySelector('.small');
                var big_img = document.querySelector('.big_img');

                var lis = small.children;

                for(let j=0;j<lis.length;j++){
                    lis[j].onmouseover = function(){
                        
                        
                    }
                }

                console.log(small);
})
   
    
    

      

