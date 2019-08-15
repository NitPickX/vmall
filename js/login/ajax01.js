require.config({
    paths: {
        'jquery':"jquery-3.4.1.min",
    }
})

require(['jquery'],function($){

    $(function(){

        var HTML1 = '';
        var HTML2 = '';
        var HTML3 = '';
        var HTML4 = '';
        var HTML5 = '';
        var HTML6 = '';
        var HTML7 = '';
        var HTML71 = '';
        var HTML72 = '';
        var HTML73 = '';
        var HTML74 = '';
        $.ajax({
            url: 'data/hww.json',
            dataType: 'json',
            cache: false,
            success: function(data){
                $.each(data[0].more, function(index, item) {
                    // console.log(item);
                    HTML1 +=
                    `<li><a href="details.html"><img src="${item.imgurl}" alt="商品栏1-手机"></a></li>`;
                    $('.additions1').html(HTML1);
                })
                
                $.each(data[1].more, function(index, item) {
                    if(index == 0){
                        HTML2 =
                        `<li><a href="details.html"><img src="${item.imgurl}" alt="热销商品、华为P30"></a></li>`;
                        $('.additions02').html(HTML2);
                    }else{
                        if(item.xin == undefined){
                            item.xin = '';
                        }
                        HTML3 +=
                        ` <li  style="position:relative;">
                            <a href="details.html">
                                <img src="${item.imgurl}" alt="热销商品，华为、荣耀手机">
                                <h4>${item.title}</h4>
                                <h5>${item.desc}</h5>
                                <p>${item.price}</p>
                                <span style="border-radius:0 0 10px 10px; position: absolute; left:70px; top:0; background: #1a8aff; font-size: 16px; line-height: 30px; text-align: center; width:80px; color: #ffffff;">${item.xin}</span>
                            </a>
                         </li>`;
                         $('.additions03').html(HTML3);
                    }
                })

                $.each(data[2].more, function(index, item) {
                    if(index < 5){
                        if(item.xin == undefined){
                            item.xin = '';
                        }
                        HTML4 +=
                        `<li>
                            <a href="details.html">
                                <dl>
                                    <dt><img src="${item.imgurl}" alt="精品推荐"><span>${item.xin}</span></dt>
                                    <dd>${item.title}</dd>
                                </dl>
                                <h4>${item.desc}</h4>
                                <p>${item.price}</p>
                            </a>
                        </li>`;
                        $('.additions04').html(HTML4);
                    }
                })

                $.each(data[3].more, function(index, item) {
                    if(item.xin == undefined){
                        item.xin = '';
                    }
                    HTML5 +=
                    ` <li  style="position:relative;">
                            <a href="MobilePhone.html">
                                <img src="${item.imgurl}" alt="手机">
                                <h4>${item.title}</h4>
                                <h5>${item.desc}</h5>
                                <p>${item.price}</p>
                                <span style="border-radius:0 0 10px 10px; position: absolute; left:70px; top:0; background: #b8b50a; font-size: 16px; line-height: 30px; text-align: center; width:80px; color: #ffffff;">${item.xin}</span>
                            </a>
                        </li>`;
                    $('.additions05').html(HTML5);
                })

                $.each(data[4].more, function(index, item) {
                    if(index == 0){
                        HTML5 =
                            `<li>
                            <a href="computer.html">
                                <img src="${item.imgurl}" alt="手机">
                            </a>
                        </li>`;
                        
                    }else{
                        HTML5 +=
                        ` <li>
                        <a href="computer.html">
                            <img src="${item.imgurl}" alt="手机">
                            <h4>${item.title}</h4>
                            <h5>${item.desc}</h5>
                            <p>${item.price}</p>
                        </a>
                    </li>`;
                    }
                    $('.additions06').html(HTML5);
                })

                $.each(data[5].more, function(index, item) {
                    if(index == 0){
                        HTML6 = `<li>
                        <a href="details.html">
                            <img src="${item.imgurl}" alt="手机">
                        </a>
                    </li>`;
                        $('.additions07').html(HTML6);
                    }else{
                        HTML6 +=
                        ` <li>
                        <a href="details.html">
                            <img src="${item.imgurl}" alt="手机">
                            <h4>${item.title}</h4>
                            <h5>${item.desc}</h5>
                            <p>${item.price}</p>
                        </a>
                    </li>`;
                    }
                    $('.additions07').html(HTML6);
                })

                $.each(data[6].more, function(index, item) {
                    if(index == 0){
                        $.each(item.imgurl, function(index, tem) {
                            HTML7 = 
                                `<li  class="first_li">
                                <a href="details.html">
                                    <img src="${tem.imgur}" alt="手机">
                                </a>
                            </li>`;
                            HTML71 = 
                                `<li  class="first_li">
                                <a href="details.html">
                                    <img src="${tem.imgura}" alt="手机">
                                </a>
                            </li>`;
                            HTML72 = 
                                `<li  class="first_li">
                                <a href="details.html">
                                    <img src="${tem.imgurb}" alt="手机">
                                </a>
                            </li>`;
                            HTML73 = 
                                `<li  class="first_li">
                                <a href="details.html">
                                    <img src="${tem.imgurc}" alt="手机">
                                </a>
                            </li>`;
                            HTML74 = 
                                `<li  class="first_li">
                                <a href="details.html">
                                    <img src="${tem.imgurd}" alt="手机">
                                </a>
                            </li>`;
                        })
                       
                    }else{
                        var vala = {};
                        var valb = {};
                        var valc = {};
                        var vald = {};
                        var vale = {};
                        $.each(item.imgurl, function(index, tem) {
                                var val = tem.imgur;
                                var valaa = tem.imgura;
                                var valab = tem.imgurb;
                                var valac = tem.imgurc;
                                var valad = tem.imgurd;
                                vala = val
                                valb = valaa
                                valc = valab
                                vald = valac
                                vale = valad
                        })
                        HTML7 +=
                            ` <li>
                            <a href="details.html">
                                <img src="${vala}" alt="手机">
                                <h4>${item.title}</h4>
                                <h5>${item.desc}</h5>
                                <p>${item.price}</p>
                            </a>
                        </li>`;
                        HTML71 +=
                            ` <li>
                            <a href="details.html">
                                <img src="${valb}" alt="手机">
                                <h4>${item.title}</h4>
                                <h5>${item.desc}</h5>
                                <p>${item.price}</p>
                            </a>
                        </li>`;
                        HTML72 +=
                            ` <li>
                            <a href="details.html">
                                <img src="${valc}" alt="手机">
                                <h4>${item.title}</h4>
                                <h5>${item.desc}</h5>
                                <p>${item.price}</p>
                            </a>
                        </li>`;
                        HTML73 +=
                            ` <li>
                            <a href="details.html">
                                <img src="${vald}" alt="手机">
                                <h4>${item.title}</h4>
                                <h5>${item.desc}</h5>
                                <p>${item.price}</p>
                            </a>
                        </li>`;
                        HTML74 +=
                            ` <li>
                            <a href="details.html">
                                <img src="${vale}" alt="手机">
                                <h4>${item.title}</h4>
                                <h5>${item.desc}</h5>
                                <p>${item.price}</p>
                            </a>
                        </li>`;
                    }                       
                        $('.additions08').html(HTML7);
                        $('.additions09').html(HTML71);
                        $('.additions10').html(HTML72);
                        $('.additions11').html(HTML73);
                        $('.additions12').html(HTML74);
                })

            }   
        })
    })
})
