function setCookie(a, b, c) {
    c = typeof c !== 'undefined' ? c : 0;
    var e = '';
    if (c > 0) {
        var d = new Date();
        var f = new Date();
        f.setTime(d.getTime() + 1000 * c);
        e = ";expires=" + f.toGMTString()
    }
    document.cookie = a + "=" + b + ";path=/" + e
}

function SetCookie(a, b, c) {
    var d = new Date();
    var e = new Date();
    if (c == null || c == 0) c = 1;
    e.setTime(d.getTime() + 3600000 * 24 * c);
    document.cookie = a + "=" + escape(b) + ";expires=" + e.toGMTString()
}

function getCookie(a) {
    var b = new RegExp(a + "=[^;]+", "i");
    if (document.cookie.match(b)) return document.cookie.match(b)[0].split("=")[1];
    return ""
}

function showByID(a, b) {
    for (i = 0; i < 21; i++) {
        v = 'f' + i;
        v2 = 'd' + i;
        if (document.getElementById(v)) document.getElementById(v).style.display = "none";
        if (document.getElementById(v2)) document.getElementById(v2).className = "d_tab"
    }
    v = 'f' + 100;
    v2 = 'd' + 100;
    if (document.getElementById(v)) document.getElementById(v).style.display = "none";
    if (document.getElementById(v2)) document.getElementById(v2).className = "d_tab_pret";
    v = 'f' + a;
    v2 = 'd' + a;
    if (document.getElementById(v)) document.getElementById(v).style.display = "";
    if (document.getElementById(v2)) document.getElementById(v2).className = "d_tab_s";
    setCookie(b, a)
}

function showPrice(a, b) {
    for (i = 0; i < 7; i++) {
        v = 'f' + i;
        v2 = 'd' + i;
        if (document.getElementById(v)) document.getElementById(v).style.display = "none";
        if (document.getElementById(v2)) document.getElementById(v2).className = "d_tab"
    }
    v = 'f' + a;
    v2 = 'd' + a;
    if (document.getElementById(v)) document.getElementById(v).style.display = "";
    if (document.getElementById(v2)) document.getElementById(v2).className = "d_tab_pret_s";
    setCookie(b, a)
}

function setVisible(a) {
    a = document.getElementById(a);
    a.style.visibility = (a.style.visibility == 'visible') ? 'hidden' : 'visible'
}
var http_request = false;

function makePOSTRequest(a, b, c) {
    http_request = false;
    if (window.XMLHttpRequest) {
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/html')
        }
    } else if (window.ActiveXObject) {
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }
    }
    if (!http_request) {
        alert('Cannot create XMLHTTP instance');
        return false
    }
    http_request.onreadystatechange = function() {
        if (http_request.readyState == 4)
            if (http_request.status == 200) {
                result = http_request.responseText;
                document.getElementById(c).innerHTML = result
            }
    };
    http_request.open('POST', a, true);
    http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http_request.setRequestHeader("Content-length", b.length);
    http_request.setRequestHeader("Connection", "close");
    http_request.send(b)
}

function alertContents() {
    alert(ID);
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            result = http_request.responseText;
            document.getElementById(ID).innerHTML = result
        } else {
            alert('There was a problem with the request.')
        }
    }
}

function get(a, b, c) {
    var d = "email=" + encodeURI(document.getElementById("email").value) + "&telefon=" + encodeURI(document.getElementById("telefon").value) + "&cere_info=1" + "&products_id=" + encodeURI(document.getElementById("products_id").value);
    makePOSTRequest(b, d, c)
}

function post_mail(a, b, c) {
    var d = "email=" + encodeURI(document.getElementById("email_news").value) + "&ad_mail=1";
    makePOSTRequest(b, d, c)
}

function post_produse(a, b, c) {
    if (document.forms['listform'].butonx.value == 2) {
        var d = document.getElementsByName('produse2[]');
        var e = '';
        for (i = 0; i < d.length; i++) {
            if (d[i].checked) e = e + d[i].value + ':'
        }
        var f = "produse=" + e + "&prel=1&click=2";
        makePOSTRequest(b, f, c)
    }
    if (document.forms['listform'].butonx.value == 1) {
        var d = document.getElementsByName('produse2[]');
        var e = '';
        var j = 1;
        for (i = 0; i < d.length; i++) {
            if (d[i].checked) {
                e = e + 'id' + (j) + '=' + d[i].value + '&';
                j = j + 1
            }
        }
        if (e != '') window.open("http://" + document.domain + "/compara-produse.php?" + e)
    }
}
var xmlHttp;

function getDoc(a, b, c, d) {
    xmlhttp = new GetXmlHttpObject();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 1 || xmlhttp.readyState == "loading") document.getElementById(c).innerHTML = '<img src="http://s.cel.ro/wait18trans.gif"/>';
        if (xmlhttp.readyState == 4)
            if (xmlhttp.status == 200) b(xmlhttp, c, d)
    };
    xmlhttp.open("GET", a, true);
    xmlhttp.send(null)
}

function writeHTML(a, b, c) {
    var d = a.responseText;
    if (!d.match("!")) {
        document.getElementById(b).innerHTML = d;
        if (document.getElementById(c)) document.getElementById(c).innerHTML = ''
    } else {
        var e = d.split("!");
        document.getElementById(b).innerHTML = e[1];
        if (document.getElementById(c)) document.getElementById(c).innerHTML = e[0]
    }
}

function writeHTML2(a, b, c) {
    var d = a.responseText;
    if (!d.match("!")) {
        document.getElementById(b).innerHTML = d;
        if (document.getElementById(c)) document.getElementById(c).innerHTML = ''
    } else {
        var e = d.split("!");
        document.getElementById(b).innerHTML = e[1];
        if (document.getElementById(c)) document.getElementById(c).innerHTML = e[0]
    }
    if (document.getElementById('rate_luni').value > 60) document.getElementById('rate_luni').value = 60;
    if (document.getElementById('rate_luni').value < 6) document.getElementById('rate_luni').value = 6;
    document.getElementById('rate_avans').value = parseInt(document.getElementById('rate_avans').value)
}

function GetXmlHttpObject() {
    var a = null;
    try {
        a = new XMLHttpRequest()
    } catch (e) {
        try {
            a = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            a = new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
    return a
}

function selecteaza(e) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(e));
        range.select()
    } else if (window.getSelection()) {
        var range = document.createRange();
        range.selectNode(document.getElementById(e));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range)
    }
}

function viewmode(type) {
    var grid = document.getElementById("gridmode");
    var list = document.getElementById("listmode");
    var listing = document.getElementsByClassName("productListing-tot");
    if (type === 'list') {
        for (var i = 0; i < listing.length; i++) {
            listing[i].className = "productListing-tot list"
        }
        grid.setAttribute("onclick", "viewmode('grid')");
        list.removeAttribute("onclick");
        grid.className = "grid";
        list.className = "list selected";
        setCookie('viewmode', 'list')
    } else {
        for (var i = 0; i < listing.length; i++) {
            listing[i].className = "productListing-tot"
        }
        grid.removeAttribute("onclick");
        list.setAttribute("onclick", "viewmode('list')");
        grid.className = "grid selected";
        list.className = "list";
        setCookie('viewmode', 'grid')
    }
}


function isScrolledIntoView(elem)
{
    try{
        var ele = $(elem);
        var wdow = $(window);

        var docViewTop = wdow.scrollTop();
        var docViewBottom = docViewTop + wdow.height();

        var elemTop = ele.offset().top;
        var elemBottom = elemTop + ele.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    } catch(err) {}
}

var tabPressed = false;
window.displayBoxIndex = -1;

var Navigate = function(diff) {
    displayBoxIndex += diff;
    var oBoxCollection = $("ul#sugestii li");
    if (displayBoxIndex >= oBoxCollection.length)
        displayBoxIndex = 0;
    if (displayBoxIndex < 0)
        displayBoxIndex = oBoxCollection.length - 1;
    var cssClass = "sugestie_sel";
    oBoxCollection.removeClass(cssClass).eq(displayBoxIndex).addClass(cssClass);
    $('#keyword').val(oBoxCollection.eq(displayBoxIndex).text());
}
if(window.jQuery) {
    $(document).on("keydown", function (e) {
        if (e.keyCode == 13) {
            var sugestie_sel = $('ul#sugestii li.sugestie_sel');
            if (sugestie_sel.length > 0 && sugestie_sel.text().length > 2) {
                $("#keyword").val(sugestie_sel.text());
                $('#quick_find').submit();
                e.preventDefault();
            }
        } else if (e.keyCode == 9) {
            tabPressed = true;
        } else {
            tabPressed = false;
        }

    });

    $(function($) {
        try {
            $.extend($.ui.tabs.prototype, {
                rotation: null,
                rotationDelay: null,
                continuing: null,
                rotate: function (ms, continuing) {
                    var self = this,
                        o = this.options;

                    if ((ms > 1 || self.rotationDelay === null) && ms !== undefined) {//only set rotationDelay if this is the first time through or if not immediately moving on from an unpause
                        self.rotationDelay = ms;
                    }

                    if (continuing !== undefined) {
                        self.continuing = continuing;
                    }

                    var rotate = self._rotate || ( self._rotate = function (e) {
                            clearTimeout(self.rotation);
                            self.rotation = setTimeout(function () {
                                var t = o.active;
                                self.option("active", ++t < self.anchors.length ? t : 0);
                            }, ms);

                            if (e) {
                                e.stopPropagation();
                            }
                        });

                    var stop = self._unrotate || ( self._unrotate = !continuing
                            ? function (e) {
                            if (e.clientX) { // in case of a true click
                                self.rotate(null);
                            }
                        }
                            : function (e) {
                            t = o.active;
                            rotate();
                        });

                    // start rotation
                    if (ms) {
                        this.element.bind("tabsactivate", rotate);
                        this.anchors.bind(o.event + ".tabs", $.proxy(self.unpause, self));
                        rotate();
                        // stop rotation
                    } else {
                        clearTimeout(self.rotation);
                        this.element.unbind("tabsactivate", rotate);
                        this.anchors.unbind(o.event + ".tabs", $.proxy(self.pause, self));
                        delete this._rotate;
                        delete this._unrotate;
                    }

                    //rotate immediately and then have normal rotation delay
                    if (ms === 1) {
                        //set ms back to what it was originally set to
                        ms = self.rotationDelay;
                    }

                    return this;
                },
                pause: function () {
                    var self = this,
                        o = this.options;

                    self.rotate(0);
                },
                unpause: function () {
                    var self = this,
                        o = this.options;

                    self.rotate(1, self.continuing);
                }
            });
        } catch(er) {}

        $.fn.getCursorPosition = function() {
            var input = this.get(0);
            if (!input) return; // No (input) element found
            if ('selectionStart' in input) {
                // Standard-compliant browsers
                return input.selectionStart;
            } else if (document.selection) {
                // IE
                input.focus();
                var sel = document.selection.createRange();
                var selLen = document.selection.createRange().text.length;
                sel.moveStart('character', -input.value.length);
                return sel.text.length - selLen;
            }
        }

        $.fn.setCursorPosition = function(start) {
            var input = this.get(0);
            if (!input) return; // No (input) element found
            if ('selectionStart' in input) {
                input.setSelectionRange(start,$('#keyword').val().length);
            }
        }

        $('ul#sugestii').hover(function() {
            $(this).find('.sugestie_sel').removeClass('sugestie_sel');

        });

        try {
            $("#ajax_produse").draggable({handle: "div:first"});
        } catch (err) {}

        $( "#keyword").blur(function() {
            var test_sugestie=$('#sugestii li:hover');
            if(test_sugestie.length==0) {
                if(tabPressed) $( "#keyword").focus();
                else $('#sugestii').hide();
            }
        });
        $( "#keyword").keydown(function(e) {
            if (e.ctrlKey && (e.keyCode == 65 || e.keyCode == 97) || e.keyCode==8) {
            } else if(!e.ctrlKey) fsugest($(this).val());
        });
        $( "#keyword").keyup(function(e) {
            if (e.ctrlKey && (e.keyCode == 65 || e.keyCode == 97) || e.keyCode==8) {
                chk_sugestii();
            } else if(e.keyCode==9) {
                if($(this).getCursorPosition()==$('#keyword').val().length) {
                    var cur_lisel=$('ul#sugestii li[txt_ctn="'+$('#keyword').val()+'"]');

                    if(typeof cur_lisel !='undefined' && cur_lisel.length) {
                        var cu_index=cur_lisel.index();
                        var u_par=cur_lisel.parent();
                        var max_sel=u_par.find('li').length-1;
                        if(cu_index!=max_sel) {
                            var n_li=u_par.find('li:nth-child('+(cu_index+2)+')');
                            var n_lival=n_li.text();
                            $(this).val(n_lival);
                        } else {
                            var n_li=u_par.find('li:nth-child(1)');
                            var n_lival=n_li.text();
                            $(this).val(n_lival);
                        }
                    } else {
                        var n_li=$('ul#sugestii').find('li:first');
                        var n_lival=n_li.text();
                        $(this).val(n_lival);
                    }
                } else {
                    $(this).setCursorPosition($(this).val().length,$(this).val().length);
                }

            } else if (e.keyCode == 40) {
                Navigate(1);
            } else if(e.keyCode==38) {
                Navigate(-1);
            }
        });

    });

    $(window).scroll(function(){

        if( !isScrolledIntoView('#cate1')) {

            $('#retinute').addClass('onthemove');

        } else  $('#retinute').removeClass('onthemove');


    })

}
function searchfor(txt) {
    var txtm=txt.toLowerCase();

    if(txtm.search(/ i(\d)/) && txtm.search(/intel i/)==-1 ) {
        txtm=txtm.replace(/ i(\d+)/," intel i$1");
    } else console.log(txtm.search(/intel i/));
    
    txtm=txtm.replace(/(\d+) gb$/g,"$1gb").replace(/(\d+) gb /g,"$1gb ").replace(/[ ]+/g,"+").replace(/[^0-9a-zA-Z_\+]+/g,"+");

    return txtm;
}

function cauta() {
    var cuvant=document.getElementById('keyword').value;
    if(cuvant.length>=3) {
        location.href='/cauta/'+searchfor(cuvant)+'/1/1';
    }
}

function chk_sugestii() {
    if( $('#sugestii').text().length==0 || $('#keyword').val().length==0 ) $('#sugestii').hide();
    else $('#sugestii').show();

}

var word_remove=["</b>","<b>","emag","teapa","review","cel.ro "," cel.ro"," cel ro ","cel ro ","rds","pcgarage","pareri","online","cel.ro","probleme","http //","https //","olx","altex"];

function replace_bwd(props) {

    if(typeof props == 'undefined') return props;
    for (var i = 0; i < word_remove.length; i++) {
        while(props.indexOf(word_remove[i])!=-1) props = props.replace(word_remove[i], "");
    }

    if(props['0']==' ') props=props.substring(1);

    return props;

}

function getKey(data) {
    for (var prop in data)
        return prop;
}

function auto_complete(word) {

    var adk='"cel.ro"+';
    $.ajax({
        url: 'https://www.google.ro/s?sclient=psy-ab&biw=400&bih=494&q=' + adk + searchfor(word),
        dataType: 'jsonp',
        success: function (data) {
            var rezultate = [];
            var curent_v = $('#keyword');
            var curent_l = curent_v.val().length;
            var seted = 1;


            if (data[1].length > 0) {
                add_linesearch();

                $.each(data[1], function (i, item) {
                    var addv = replace_bwd(data[1][i][0]);

                    if (seted == 0 && typeof curent_v['0'].setSelectionRange == 'function') {
                        if (addv.substring(0, (curent_l)).toLowerCase() == curent_v.val().toLowerCase()) {
                            seted = 1;
                            curent_v.val(addv);
                            curent_v.setCursorPosition(curent_l);
                        }
                    }
                    var new_li = '<li txt_ctn="' + addv + '" class="ui-menu-item" role="menuitem" ><div  onclick="$(\'#keyword\').val($(this).find(\'a\').text());$(\'#quick_find\').submit();"><a class="ui-corner-all" tabindex="-1" >' + addv + "</a></div></li>";
                    $('#sugestii').append(new_li);
                });
                chk_sugestii();
            }
        }
    });

}

function auto_find(wrong_text,ignor,locatie,load) {

    if(wrong_text.length>3) {
        if(!ignor) $('#produse_negasite').append('<img src="wait18trans.gif">');
        var adk='"cel.ro"+';
        if(ignor) adk="";



        if(!locatie) {
                $.ajax({
                    url: '/xml_search.php?cauta='+$('#keyword').val(),
                    dataType: 'json',
                    success: function (data) {

                        $('#sugestii_cautare').hide();

                        if (typeof data !='undefined' && !$.isEmptyObject(data)) {
                            var cuvload="";
                            var addv = replace_bwd(getKey(data));
                            if(!load) $('.listingContainer').parent().load("/cauta/"+encodeURIComponent(addv)+"/1/1&fast_ajax=1&s=relevante");
                            if($('.listingContainer .fara_produse').length==0 || 1==1) {
                                    $('#sugestii_cautare').html('<span style="font-size:12px;font-weight:bold;">Ati dorit sa cautati:&nbsp;</span>');
                                    $.each(data, function (i, item) {

                                        var addv = replace_bwd(i);

                                        if ($('#sugestii_cautare div.sugestie_cautare:contains("'+addv+'")').length == 0 && addv.substring(0,$('#keyword').val().length)!=$('#keyword').val()) {
                                            var new_li = '<div class="sugestie_cautare" onclick="location.href=\'/cauta/' + (addv.replace(/ /g, '+')) + '/1/1&s=relevante\';">' + addv + "</div>";
                                            $('#sugestii_cautare').append(new_li);
                                        }

                                    });
                                    if($('#sugestii_cautare .sugestie_cautare').length>0) $('#sugestii_cautare').show();
                                    else $('#sugestii_cautare').hide();
                            }

                        } else if (!ignor) auto_find(wrong_text, 0,1,load);
                        chk_sugestii();
                    }
                });

        } else {
            $.ajax({
                url: 'https://www.google.ro/s?sclient=psy-ab&biw=400&bih=494&q=' + adk + $('#keyword').val(),
                dataType: 'jsonp',
                success: function (data) {

                    $('#sugestii_cautare').hide();
                    if (data[1].length > 0) {
                        var addv = replace_bwd(data[1][0][0]);
                        if(!load) $('.listingContainer').parent().load("/cauta/" + encodeURIComponent(addv) + "/1/1&fast_ajax=1&s=relevante");
                        if ($('.listingContainer .fara_produse').length == 0 || 1 == 1) {
                            $('#sugestii_cautare').html('<span style="font-size:12px;font-weight:bold;">Ati dorit sa cautati:&nbsp;</span>');
                            $.each(data[1], function (i, item) {

                                var addv = replace_bwd(data[1][i][0]);

                                if ($('#sugestii_cautare div.sugestie_cautare:contains("' + addv + '")').length == 0) {
                                    var new_li = '<div class="sugestie_cautare" onclick="location.href=\'/cauta/' + (addv.replace(/ /g, '+')) + '/1/1&s=relevante\';">' + addv + "</div>";
                                    $('#sugestii_cautare').append(new_li);
                                }

                            });
                            $('#sugestii_cautare').show();
                        }

                    } else if (!ignor) auto_find(wrong_text, 1,1,load);

                }
            });
        }
    }

}

var q_sugest=0;
var t_sugest=0;
var lastword_search="";
function fsugest(value) {
    if(lastword_search==value) return false;
    lastword_search=value;
    clearTimeout(t_sugest);
    t_sugest=setTimeout("sugest('"+value+"');",250);
}

function add_linesearch() {

    var new_li = '<li class="ui-menu-item" role="menuitem" ><div style="margin-left:auto;margin-right:auto;width:98%;display:block;border-top:1px solid #ccc;height:1px;"></div></li>';
    if($('#sugestii li[txt_ctn]').length>0) $('#sugestii').append(new_li);

}

function sugest(last_val,ignor,locatie) {
    if($('#keyword').val().length<2 || last_val!=$('#keyword').val().substring(0,last_val.length)) {
        return;
    }

    var adk='"cel.ro"+';
    if(ignor) adk="";

    if(!locatie) {
        if(typeof q_sugest == 'object') q_sugest.abort();
        var kword=$('#keyword').val();
        $('#sugestii').text('');
        auto_complete(kword);
        q_sugest=$.ajax({
            url: '/xml_search.php?cauta='+kword,
            dataType: 'json',
            success: function (data) {
                var rezultate = [];
                var curent_v = $('#keyword');
                var curent_l = curent_v.val().length;
                var seted = 1;

                if (last_val != curent_v.val().substring(0, curent_l - 1)) {
                    seted=1;
                }

                if (typeof data !='undefined' && !$.isEmptyObject(data)) {

                    add_linesearch();
                    $.each(data, function (i, item) {
                        var addv = replace_bwd(i);

                        if (seted == 0 && typeof curent_v['0'].setSelectionRange == 'function') {
                            if (addv.substring(0, (curent_l)).toLowerCase() == curent_v.val().toLowerCase()) {
                                seted = 1;
                                curent_v.val(addv);
                                curent_v.setCursorPosition(curent_l);
                            }
                        }

                        var new_li = '<li txt_ctn="' + addv + '" class="ui-menu-item" role="menuitem" ><div  onclick="$(\'#keyword\').val($(this).find(\'a\').text());$(\'#quick_find\').submit();"><a class="ui-corner-all" tabindex="-1">' + addv + "</a></div></li>";
                        $('#sugestii').append(new_li);

                    });
                } else if (!ignor) sugest(last_val, 0,1);
                chk_sugestii();
            }
        });

    } else {

        q_sugest.abort();
        q_sugest=$.ajax({
            url: 'https://www.google.ro/s?sclient=psy-ab&biw=400&bih=494&q=' + adk + searchfor($('#keyword').val()),
            dataType: 'jsonp',
            success: function (data) {
                var rezultate = [];
                var curent_v = $('#keyword');
                var curent_l = curent_v.val().length;
                var seted = 0;

                if (last_val != curent_v.val().substring(0, curent_l - 1)) {
                    chk_sugestii();
                    return false;
                }
                $('#sugestii').text('');

                if (data[1].length > 0) {
                    $.each(data[1], function (i, item) {
                        var addv = replace_bwd(data[1][i][0]);

                        if (seted == 0 && typeof curent_v['0'].setSelectionRange == 'function') {
                            if (addv.substring(0, (curent_l)).toLowerCase() == curent_v.val().toLowerCase()) {
                                seted = 1;
                                curent_v.val(addv);
                                curent_v.setCursorPosition(curent_l);
                            }
                        }
                        var new_li = '<li txt_ctn="' + addv + '" class="ui-menu-item" role="menuitem" ><div  onclick="$(\'#keyword\').val($(this).find(\'a\').text());$(\'#quick_find\').submit();"><a class="ui-corner-all" tabindex="-1">' + addv + "</a></div></li>";
                        $('#sugestii').append(new_li);
                    });
                } else if (!ignor) sugest(last_val,1, 1);
                chk_sugestii();
            }
        });

    }
}
