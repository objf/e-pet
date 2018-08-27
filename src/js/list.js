
    
           document.addEventListener('DOMContentLoaded',()=>{

            // (function(){
            //    var sp = document.querySelector('.sp');
            //    var lis = document.querySelector('.lis')
            //    var lis2 = document.querySelector('.lis2');
            //    var len = lis.querySelectorAll('li');
            //       console.log(len);
            //      sp.onmouseover =()=>{
            //            lis.style.display = 'block';
            //      };
            //      function aa(e){
            //      sp.onmouseout =()=>{
            //            lis.style.display = 'none';
            //      }
            //  }
            //      setTimeout(aa,2000);

            //     // for(var b=0;b<len.length-1;b++);
            //     //      console.log(len[b]);
            //          len.onmouseover = ()=>{
            //          lis2.style.display = 'block';
            //    }
            // })();
              
            (function(){
               var goods_lis = document.querySelector('.goods_lis');
               let status = [200,304];
               var xhr = new XMLHttpRequest();
               xhr.onload =()=>{
                  if(status.indexOf(xhr.status)>=0){
                      let goods = JSON.parse(xhr.responseText);
                      console.log(goods);
                  goods_lis.innerHTML = '';

                  // var div = document.createElement('div');
                  // goods_lis.appendChild(div);
                  goods_lis.innerHTML = goods.map(function(item,idx){
                      return  `<div data-guid="${item.id}" class="box">
                           <div class="title">${item.hovtitle}</div>
                           <a href="#"><img src="../${item.imgurl}"></a>
                           <div class="img3"><img src="../${item.imgurl}"><img src="../${item.imgurl}"><img src="../${item.imgurl}"></div>
                           <p class="ont">${item.name}</p>
                           <p class="p1"><span>${item.price}</span><em>${item.sale}</em><span>${item.dprice}</span></p>
                           <p class="p2"><span>${item.dai}</span><i>${item.icon}</i></p>

                      </div>
                      `
                         
                  }).join('');

                  var links = goods_lis.querySelectorAll('a');
                  
                  for(let i=0;i<links.length;i++){
                    
                    links[i].idx = i;
                      links[i].onclick =()=>{
                        console.log(goods[i]);
                        var data = goods[i];
                         
                         var params = '';
                         for(var key in data){
                          params += key +'='+data[key] + '&'
                         }

                         params = params.slice(0,-1);

                         location.href="xiangqin.html?"+params;
                      }
                  }
                } 
            }
                xhr.open('get','../api/data/goods.json',true);
                xhr.send();
             

            })();

             
           })
       