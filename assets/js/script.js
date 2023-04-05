$(function(){

    $(window).scroll(function () {
        const curr = $(this).scrollTop(); /* 스크롤 했을 때 */
        const header = $('.header');
        // 조건문 커런트가 0보다 크다면!    간단한 조건일 때 사용
        (curr > 0) ? header.addClass('on'): header.removeClass('on');

    });

    const mainH2 = new SplitType('.sc-mainvisual h2', { types: 'words, chars', });
    
    const intro = gsap.timeline({
        paused:true,
    })
    intro
    .addLabel('a')
    .from(mainH2.words,{scale:1.05,
        stagger:{
            from: "random",
            amount: 0.3,   
        },
        opacity:0,
    },'a')
    .to('[data-scale]',{scale:1.05},'a')
    
    ScrollTrigger.create({
        trigger:".sc-mainvisual",
        start:"1% 0%",
        end:"100% 0%",
        // markers:true,
        onEnter:function(){
            intro.restart();
        },
        onLeaveBack:function(){
            intro.reverse();
        }
    })
    
    const fixScrollSpan = new SplitType('.sc-scroll h2 span', { types: 'words, chars', });
    
    const fixScrollText = gsap.from(fixScrollSpan.chars,{
        yPercent:20,
        paused:true,
        opacity:0,
        stagger:{
            from: "random",
            amount: 0.3,   
        },
    })

    

    const fixScroll = gsap.to('.sc-scroll .scroll-list',{
        scrollTrigger:{
            trigger:".sc-scroll",
            start:"0% 70%",
            end:"00% 70%",
            // markers:true,
            // pin:true,
            scrub:1,
            onEnter:function(){
                fixScrollText.play();
            }
        },

    });


    // 왼손 오른손 //////////////////
    const leftHand = gsap.to ('.sc-scroll .left-hand',1,{
        scrollTrigger: {
            trigger: ".sc-scroll",
            // markers: true,
            start: "30% 75%",
            end:"0 0%",
        },
        opacity: 1,
        xPercent: 10,
    });

    const righttHand = gsap.to ('.sc-scroll .right-hand',1,{
        scrollTrigger: {
            trigger: ".sc-scroll",
            // markers: true,
            start: "30% 75%",
            end:"0 0%",
        },
        opacity: 1,
        xPercent: -10,
    })
    // 왼손 오른손 //////////////////


    

    // each
    const introduce = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-introduce",
            start:"0% 0%",
            end:"100% 0%",
            // markers:true,
        },
    })
    
    const introText = new SplitType('.sc-introduce h2', { types: 'words, chars', });
    introduce.addLabel('a')
    introduce
    .from('.sc-introduce .animate-pulse',{
        yPercent:10,
        opacity:0,
        stagger:0.1
    },'a')
    .from('.sc-introduce .plus',{
        opacity:0,
    },'a')
    // title 
    const introScrollText = gsap.from(introText.chars,{
        scrollTrigger:{
            trigger:".sc-introduce",
            start:"0% 30%",
            end:"50% 50%",
            // markers:true,
        },
        yPercent:20,
        paused:true,
        opacity:0,
        stagger:{
            from: "random",
            amount: 0.3,   
        },
    },'a')


    const infoText = new SplitType('.sc-information .sc-title h3', { types: 'words, chars', });
    const infoScrollText = gsap.from(infoText.chars,{
        scrollTrigger:{
            trigger:".sc-information",
            start:"0% 30%",
            end:"50% 50%",
            // markers:true,
        },
        yPercent:20,
        paused:true,
        opacity:0,
        stagger:{
            from: "random",
            amount: 0.3,   
        },
    })
    $('.sc-info .contents-area').each(function (index, elemnet) {
        gsap.from($(this).find('.text-wrap'), 1, {
            scrollTrigger: {
                trigger: $(this),
                start: "0% 70%", 
                end: "100% 0%",
                
            },
            yPercent: 100,
            opacity:1,
        });
        
    });
    $('.sc-info .contents-area').each(function (index, elemnet) {
        gsap.from($(this).find('.video-wrap'), 1.5, {
            scrollTrigger: {
                trigger: $(this),
                start: "0% 70%", 
                end: "100% 0%",
                
            },
            yPercent: -100,
            opacity:1,
        });
        
    });

    const adText = new SplitType('.sc-advertisement .animation-box h3', { types: 'words, chars', });

    introduce.addLabel('b')
    $('.sc-switch .sc-advertisement').each(function (index, elemnet) {
        gsap.from($(this).find(adText.chars), {
            scrollTrigger:{
                        trigger:$(this),
                        start:"0% 30%",
                        end:"50% 50%",
                        // markers:true,
                    },
                    yPercent:20,
                    paused:true,
                    opacity:0,
                    stagger:{
                        from: "random",
                        amount: 0.3,   
                    },
        })
        gsap.from($(this).find('.animation-box .ad-list li'),{
            scrollTrigger:{
                trigger:$(this),
                start:"0% 30%",
                end:"50% 50%",
                // markers:true,
            },
            yPercent:20,
            paused:true,
            opacity:0,
        })
        gsap.from($(this).find('.animation-box .desc'),{
            scrollTrigger:{
                trigger:$(this),
                start:"0% 30%",
                end:"50% 50%",
                // markers:true,
            },
            yPercent:20,
            paused:true,
            opacity:0,
        })
        gsap.from($(this).find('.image-wrap'),{
            scrollTrigger:{
                trigger:$(this),
                start:"0% 30%",
                end:"50% 50%",
                // markers:true,
            },
            paused:true,
            opacity:0,
        })
    });



    // loop slide/////////////////////
    const swiper = new Swiper("#adSlide", {
        loop: true,
        autoplay: {
            delay: 500,
            disableOnInteraction: false

          },
          initialSlide: "1",
    slidesPerView: "1",
    speed: 2,
    style: {
        pointerEvents: 'none'
      },
      simulateTouch: false,
      touchRatio: "0"
    });
    // loop slide/////////////////////



    $(window).scroll(function(){
        curr = $(this).scrollTop();
        target = $('.sc-scrollimage').offset().top;

        if(curr >= target-($(window).height()/2)){
            console.log('도달');
        }else{
            console.log('도달---1');
        }

    })


    


    $('.typing').focus(function(){
        $(this).parent().addClass('focused')
    })
    $('.typing').focusout(function(){
        $(this).parent().removeClass('focused')
    })



    $('.download-wrap .button.pc').click(function(e){
        e.preventDefault();
        $('.download-box').toggleClass('show');
    })



    let linkPolicy = $('.checkbox-wrap.policy .checkbox-title p')
    $(linkPolicy).click(function(){
        $('.policy-wrap').toggleClass('show');
    })


    $('.btn-site').click(function(){
        $('.site-wrap').toggleClass('active')
    })
})