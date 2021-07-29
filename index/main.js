            
        // 首頁數據TAB切換↓↓
            function openCity(evt, cityName) {
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                 for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(cityName).style.display = "block";
                 evt.currentTarget.className += " active";
            }

        // 漢堡↓↓
            $(document).ready(function(){
                $('.nav-mobile').click(function(){
                    $(this).toggleClass('open');
                })
            });

            $(document).ready(function(){
                $('.nav-mobile').click(function(){
                    $('.nav-show').fadeToggle();
                });
            });





        // 將賽程左右切換↓↓
            window.addEventListener("load", function(){
                var board=document.getElementsByClassName("item-wrap");
                var next=document.getElementsByClassName("button-right");
                var prev=document.getElementsByClassName("button-left");
                var num = 0; /*定義一個初始變量*/
                var width = $(window).width();


                next[0].onclick = function(){
                    if(num>-2400){
                    num-=150;
                    board[0].style.left=num+'px';
                    }
                }
                prev[0].onclick = function(){
                    if(num<0)
                 num+=150;
                 board[0].style.left=num+'px';
                    }  


                next[1].onclick = function(){
                    if(num>-1950){
                    num-=150;
                    board[1].style.left=num+'px';
                    }
                }
                prev[1].onclick = function(){
                    if(num<0)
                 num+=150;
                 board[1].style.left=num+'px';
                    }
            }, false);






            
        //about頁的左右切換↓↓

            window.addEventListener("load", function(){
                var boardhis=document.getElementsByClassName("item-wrap-history");
                var nexthis=document.getElementsByClassName("arrow-right");
                var prevhis=document.getElementsByClassName("arrow-left");
                var numhis = 0; /*定義一個初始變量*/
                var width = $(window).width();

                if(width <= 767){
                    nexthis[0].onclick = function(){
                        if(numhis<0){
                        numhis+=100;
                        boardhis[0].style.right=numhis+'%';
                        }
                    }
                    prevhis[0].onclick = function(){
                        if(numhis<=0 && numhis> -900){
                        numhis-=100;
                        boardhis[0].style.right=numhis+'%';  
                        }
                    }
                }else{
                    nexthis[0].onclick = function(){
                        if(numhis<0){
                        numhis+=20;
                        boardhis[0].style.right=numhis+'%';
                        }
                    }
                    prevhis[0].onclick = function(){
                        if(numhis<=0 && numhis> -100){
                        numhis-=20;
                        boardhis[0].style.right=numhis+'%';  
                        }
                    }
                }
                    

            },false);
            



        // 手機板賽程顯示切換↓↓
            $(document).ready(function(){
                $('.sch-btn').click(function(){
                    $('.sch-mob').fadeToggle();
                });
            });

        //history點擊
        $(document).ready(function(){
            var width = $(window).width();
            if(width <= 767){
            $('.history .box .item10').click(function(){
                if($('.history .box .item10 .item-cover').css('opacity') == 0){
                    $('.history .box .item10 .item-cover').css("opacity","1");
                }else{
                    $('.history .box .item10 .item-cover').css("opacity","0");
                }    
            });

            $('.history .box .item09').click(function(){
                if($('.history .box .item09 .item-cover').css('opacity') == 0){
                    $('.history .box .item09 .item-cover').css("opacity","1");
                }else{
                    $('.history .box .item09 .item-cover').css("opacity","0");
                }    
            });

            $('.history .box .item08').click(function(){
                if($('.history .box .item08 .item-cover').css('opacity') == 0){
                    $('.history .box .item08 .item-cover').css("opacity","1");
                }else{
                    $('.history .box .item08 .item-cover').css("opacity","0");
                }    
            });

            $('.history .box .item07').click(function(){
                if($('.history .box .item07 .item-cover').css('opacity') == 0){
                    $('.history .box .item07 .item-cover').css("opacity","1");
                }else{
                    $('.history .box .item07 .item-cover').css("opacity","0");
                }    
            });

            $('.history .box .item06').click(function(){
                if($('.history .box .item06 .item-cover').css('opacity') == 0){
                    $('.history .box .item06 .item-cover').css("opacity","1");
                }else{
                    $('.history .box .item06 .item-cover').css("opacity","0");
                }    
            });

            $('.history .box .item05').click(function(){
                if($('.history .box .item05 .item-cover').css('opacity') == 0){
                    $('.history .box .item05 .item-cover').css("opacity","1");
                }else{
                    $('.history .box .item05 .item-cover').css("opacity","0");
                }    
            });

            $('.history .box .item04').click(function(){
                if($('.history .box .item04 .item-cover').css('opacity') == 0){
                    $('.history .box .item04 .item-cover').css("opacity","1");
                }else{
                    $('.history .box .item04 .item-cover').css("opacity","0");
                }    
            });

            $('.history .box .item03').click(function(){
                if($('.history .box .item03 .item-cover').css('opacity') == 0){
                    $('.history .box .item03 .item-cover').css("opacity","1");
                }else{
                    $('.history .box .item03 .item-cover').css("opacity","0");
                }    
            });

            $('.history .box .item02').click(function(){
                if($('.history .box .item02 .item-cover').css('opacity') == 0){
                    $('.history .box .item02 .item-cover').css("opacity","1");
                }else{
                    $('.history .box .item02 .item-cover').css("opacity","0");
                }    
            });

            $('.history .box .item01').click(function(){
                if($('.history .box .item01 .item-cover').css('opacity') == 0){
                    $('.history .box .item01 .item-cover').css("opacity","1");
                }else{
                    $('.history .box .item01 .item-cover').css("opacity","0");
                }    
            });

        };
        });

            // 隊伍介紹
        $(document).ready(function(){
            var width = $(window).width();
            if(width <= 767){
            $('.team-show .view01').click(function(){
                if($('.team-show .view .mask01').css('opacity') == 0){
                    $('.team-show .view .mask01').css("opacity","1");
                    $('.team-show .view01 img').css("transform","scale(1.4)");
                    $('.team-show .view01 h2').css("transform","translateY(-20px)");
                    $('.team-show .view01 h2').css("opacity","1");
                    $('.team-show .view01 p').css("opacity","1");
                    $('.team-show .view01 p').css("transition-delay","0.5s");
                    $('.team-show .view01 p').css("top","50%");
                    $('.team-show .view01 p').css("transform","translate(0,-50%)");
                    $('.team-show .view01 a.info').css("opacity","1");
                    $('.team-show .view01 a.info').css("transition-delay","0.3s");
                    $('.team-show .view01 a.info').css("top","80%");
                }else{
                    $('.team-show .view .mask01').css("opacity","0");
                    $('.team-show .view01 img').css("transform","scale(1)");
                    $('.team-show .view01 h2').css("transform","translateY(-100px)");
                    $('.team-show .view01 h2').css("opacity","0");
                    $('.team-show .view01 p').css("opacity","0");
                    $('.team-show .view01 p').css("top","105%");
                    $('.team-show .view01 a.info').css("opacity","0");
                    $('.team-show .view01 a.info').css("top","105%");
                }    
            });

            $('.team-show .view02').click(function(){
                if($('.team-show .view .mask02').css('opacity') == 0){
                    $('.team-show .view .mask02').css("opacity","1");
                    $('.team-show .view02 img').css("transform","scale(1.4)");
                    $('.team-show .view02 h2').css("transform","translateY(-20px)");
                    $('.team-show .view02 h2').css("opacity","1");
                    $('.team-show .view02 p').css("opacity","1");
                    $('.team-show .view02 p').css("transition-delay","0.5s");
                    $('.team-show .view02 p').css("top","50%");
                    $('.team-show .view02 p').css("transform","translate(0,-50%)");
                    $('.team-show .view02 a.info').css("opacity","1");
                    $('.team-show .view02 a.info').css("transition-delay","0.3s");
                    $('.team-show .view02 a.info').css("top","80%");
                }else{
                    $('.team-show .view .mask02').css("opacity","0");
                    $('.team-show .view02 img').css("transform","scale(1)");
                    $('.team-show .view02 h2').css("transform","translateY(-100px)");
                    $('.team-show .view02 h2').css("opacity","0");
                    $('.team-show .view02 p').css("opacity","0");
                    $('.team-show .view02 p').css("top","105%");
                    $('.team-show .view02 a.info').css("opacity","0");
                    $('.team-show .view02 a.info').css("top","105%");
                }    
            });
            $('.team-show .view03').click(function(){
                if($('.team-show .view .mask03').css('opacity') == 0){
                    $('.team-show .view .mask03').css("opacity","1");
                    $('.team-show .view03 img').css("transform","scale(1.4)");
                    $('.team-show .view03 h2').css("transform","translateY(-20px)");
                    $('.team-show .view03 h2').css("opacity","1");
                    $('.team-show .view03 p').css("opacity","1");
                    $('.team-show .view03 p').css("transition-delay","0.5s");
                    $('.team-show .view03 p').css("top","50%");
                    $('.team-show .view03 p').css("transform","translate(0,-50%)");
                    $('.team-show .view03 a.info').css("opacity","1");
                    $('.team-show .view03 a.info').css("transition-delay","0.3s");
                    $('.team-show .view03 a.info').css("top","80%");
                }else{
                    $('.team-show .view .mask03').css("opacity","0");
                    $('.team-show .view03 img').css("transform","scale(1)");
                    $('.team-show .view03 h2').css("transform","translateY(-100px)");
                    $('.team-show .view03 h2').css("opacity","0");
                    $('.team-show .view03 p').css("opacity","0");
                    $('.team-show .view03 p').css("top","105%");
                    $('.team-show .view03 a.info').css("opacity","0");
                    $('.team-show .view03 a.info').css("top","105%");
                }    
            });
            $('.team-show .view04').click(function(){
                if($('.team-show .view .mask04').css('opacity') == 0){
                    $('.team-show .view .mask04').css("opacity","1");
                    $('.team-show .view04 img').css("transform","scale(1.4)");
                    $('.team-show .view04 h2').css("transform","translateY(-20px)");
                    $('.team-show .view04 h2').css("opacity","1");
                    $('.team-show .view04 p').css("opacity","1");
                    $('.team-show .view04 p').css("transition-delay","0.5s");
                    $('.team-show .view04 p').css("top","50%");
                    $('.team-show .view04 p').css("transform","translate(0,-50%)");
                    $('.team-show .view04 a.info').css("opacity","1");
                    $('.team-show .view04 a.info').css("transition-delay","0.3s");
                    $('.team-show .view04 a.info').css("top","80%");
                }else{
                    $('.team-show .view .mask04').css("opacity","0");
                    $('.team-show .view04 img').css("transform","scale(1)");
                    $('.team-show .view04 h2').css("transform","translateY(-100px)");
                    $('.team-show .view04 h2').css("opacity","0");
                    $('.team-show .view04 p').css("opacity","0");
                    $('.team-show .view04 p').css("top","105%");
                    $('.team-show .view04 a.info').css("opacity","0");
                    $('.team-show .view04 a.info').css("top","105%");
                }    
            });
            $('.team-show .view05').click(function(){
                if($('.team-show .view .mask05').css('opacity') == 0){
                    $('.team-show .view .mask05').css("opacity","1");
                    $('.team-show .view05 img').css("transform","scale(1.4)");
                    $('.team-show .view05 h2').css("transform","translateY(-20px)");
                    $('.team-show .view05 h2').css("opacity","1");
                    $('.team-show .view05 p').css("opacity","1");
                    $('.team-show .view05 p').css("transition-delay","0.5s");
                    $('.team-show .view05 p').css("top","50%");
                    $('.team-show .view05 p').css("transform","translate(0,-50%)");
                    $('.team-show .view05 a.info').css("opacity","1");
                    $('.team-show .view05 a.info').css("transition-delay","0.3s");
                    $('.team-show .view05 a.info').css("top","80%");
                }else{
                    $('.team-show .view .mask05').css("opacity","0");
                    $('.team-show .view05 img').css("transform","scale(1)");
                    $('.team-show .view05 h2').css("transform","translateY(-100px)");
                    $('.team-show .view05 h2').css("opacity","0");
                    $('.team-show .view05 p').css("opacity","0");
                    $('.team-show .view05 p').css("top","105%");
                    $('.team-show .view05 a.info').css("opacity","0");
                    $('.team-show .view05 a.info').css("top","105%");
                }    
            });
            $('.team-show .view06').click(function(){
                if($('.team-show .view .mask06').css('opacity') == 0){
                    $('.team-show .view .mask06').css("opacity","1");
                    $('.team-show .view06 img').css("transform","scale(1.4)");
                    $('.team-show .view06 h2').css("transform","translateY(-20px)");
                    $('.team-show .view06 h2').css("opacity","1");
                    $('.team-show .view06 p').css("opacity","1");
                    $('.team-show .view06 p').css("transition-delay","0.5s");
                    $('.team-show .view06 p').css("top","50%");
                    $('.team-show .view06 p').css("transform","translate(0,-50%)");
                    $('.team-show .view06 a.info').css("opacity","1");
                    $('.team-show .view06 a.info').css("transition-delay","0.3s");
                    $('.team-show .view06 a.info').css("top","80%");
                }else{
                    $('.team-show .view .mask06').css("opacity","0");
                    $('.team-show .view06 img').css("transform","scale(1)");
                    $('.team-show .view06 h2').css("transform","translateY(-100px)");
                    $('.team-show .view06 h2').css("opacity","0");
                    $('.team-show .view06 p').css("opacity","0");
                    $('.team-show .view06 p').css("top","105%");
                    $('.team-show .view06 a.info').css("opacity","0");
                    $('.team-show .view06 a.info').css("top","105%");
                }    
            });
            $('.team-show .view07').click(function(){
                if($('.team-show .view .mask07').css('opacity') == 0){
                    $('.team-show .view .mask07').css("opacity","1");
                    $('.team-show .view07 img').css("transform","scale(1.4)");
                    $('.team-show .view07 h2').css("transform","translateY(-20px)");
                    $('.team-show .view07 h2').css("opacity","1");
                    $('.team-show .view07 p').css("opacity","1");
                    $('.team-show .view07 p').css("transition-delay","0.5s");
                    $('.team-show .view07 p').css("top","50%");
                    $('.team-show .view07 p').css("transform","translate(0,-50%)");
                    $('.team-show .view07 a.info').css("opacity","1");
                    $('.team-show .view07 a.info').css("transition-delay","0.3s");
                    $('.team-show .view07 a.info').css("top","80%");
                }else{
                    $('.team-show .view .mask07').css("opacity","0");
                    $('.team-show .view07 img').css("transform","scale(1)");
                    $('.team-show .view07 h2').css("transform","translateY(-100px)");
                    $('.team-show .view07 h2').css("opacity","0");
                    $('.team-show .view07 p').css("opacity","0");
                    $('.team-show .view07 p').css("top","105%");
                    $('.team-show .view07 a.info').css("opacity","0");
                    $('.team-show .view07 a.info').css("top","105%");
                }    
            });
            $('.team-show .view08').click(function(){
                if($('.team-show .view .mask08').css('opacity') == 0){
                    $('.team-show .view .mask08').css("opacity","1");
                    $('.team-show .view08 img').css("transform","scale(1.4)");
                    $('.team-show .view08 h2').css("transform","translateY(-20px)");
                    $('.team-show .view08 h2').css("opacity","1");
                    $('.team-show .view08 p').css("opacity","1");
                    $('.team-show .view08 p').css("transition-delay","0.5s");
                    $('.team-show .view08 p').css("top","50%");
                    $('.team-show .view08 p').css("transform","translate(0,-50%)");
                    $('.team-show .view08 a.info').css("opacity","1");
                    $('.team-show .view08 a.info').css("transition-delay","0.3s");
                    $('.team-show .view08 a.info').css("top","80%");
                }else{
                    $('.team-show .view .mask08').css("opacity","0");
                    $('.team-show .view08 img').css("transform","scale(1)");
                    $('.team-show .view08 h2').css("transform","translateY(-100px)");
                    $('.team-show .view08 h2').css("opacity","0");
                    $('.team-show .view08 p').css("opacity","0");
                    $('.team-show .view08 p').css("top","105%");
                    $('.team-show .view08 a.info').css("opacity","0");
                    $('.team-show .view08 a.info').css("top","105%");
                }    
            });
        };
        });


        window.onload = function() {
            $('.loading01').css('transition','0.6s 1.1s ease-in-out ');
            $('.loading02').css('transition','0.6s 1.1s ease-in-out');
            $('.loading01 img').css('transition','0.78s 1.1s ease-in-out ');
            $('.loading02 img').css('transition','0.78s 1.1s ease-in-out');
            $('.loading-wrap .turn').css('transition-delay','1.1s');

            $('.loading01').css('left','-60%');
            $('.loading01 img').css('left','-60%');
            $('.loading02').css('right','-60%');
            $('.loading02 img').css('left','160%');
            $('.loading-wrap .turn').css('left','-60%');
        }
                 

