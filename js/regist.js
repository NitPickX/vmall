
        var pnum = document.querySelector('#number')
        var rebtn = document.getElementById('olbtn')
        var con1 = document.getElementById('cy1')
        var password = document.getElementById('password');
        var passwordagain = document.getElementById('passwordagain');
        var con3 = document.getElementById('cy3')
        var con4 = document.getElementById('cy4')

        rebtn.onclick = function () {

            var username = pnum.value;
            var userpass = password.value;
            var pvv1 = passwordagain.value;
            var phzz = new RegExp(/^[1](([2-6][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/);
            if (phzz.test(username) == true && userpass == pvv1) {
                ajax({
                    url: 'data/login.php',
                    type: 'get',
                    data: 'act=add&user=' + username + '&pass=' + userpass,
                    success: function (data) {
                        var json = JSON.parse(data);
                        alert(json.msg);
                    },
                    failed: function (code) {
                        alert('错误' + code);
                    }
                })
             
            } else {

                alert('注册失败')
            }
            if (!phzz.test(username) == true) {
                con1.style.cssText = 'border:1px solid red';
                alert('手机号格式有误')
            } else {
                con1.style.cssText = 'border: 1px solid #d9d9d9;';
            }
            if (userpass == pvv1) {
                con3.style.cssText = 'border: 1px solid #d9d9d9;';
                con4.style.cssText = 'border: 1px solid #d9d9d9;';
            } else {
                alert('两次密码不一样')
                con3.style.cssText = 'border:1px solid red';
                con4.style.cssText = 'border:1px solid red';
            }
        }
        var pc = document.getElementById('phonechance');
        var mc = document.getElementById('messagechance');
        var messagezhuti = document.querySelector('.messagezhuti');
        var messagecopy = document.querySelector('.messagecopy');
        mc.onclick = function () {
            messagezhuti.style.cssText = 'display:none'
            messagecopy.style.cssText = 'display:block'
            mc.style.cssText = 'background:#b40707'
            pc.style.cssText = 'background:#ccccc'

        }
        pc.onclick = function () {
            messagezhuti.style.cssText = 'display:block'
            messagecopy.style.cssText = 'display:none'
            mc.style.cssText = 'background:#ccccc'
            pc.style.cssText = 'background:#b40707'
        }
