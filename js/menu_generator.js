//$(document).ready(function () {
////    $(menu_body).html();
//
//    var content_tabs = '';
//    var body_tabs = '';
//    $.each(mrk, function (index, val) {
//
//        content_tabs += '<li'
//        content_tabs += (index == 0) ? ' class="active"' : '';
//        content_tabs += '><a data-toggle="tab" href="#' + index + '">' + val['name'] + '</a></li>'
//        body_tabs += ' <div id="' + index + '" class="tab-pane fade in active">';
//        body_tabs += '<br><div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'
//        $.each(val['items'], function (i, item) {
//            body_tabs += '<div class="panel panel-default">'
//            body_tabs += '<div class="panel-heading" role="tab" id="headingOne">'
//            body_tabs += '<h4 class="panel-title">'
//            body_tabs += '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#i' + i + '" aria-expanded="true" aria-controls="i' + i + '">'
//            body_tabs += item['name']
//            body_tabs += '</a>'
//            body_tabs += '</h4>'
//            body_tabs += '</div>'
//            body_tabs += '<div id="i' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">'
//            body_tabs += '<div class="panel-body">'
////            console.log(item['items'].length);
//
//
//            count = item['items'].length;
//            $.each(item['items'], function (j, act) {
//                if (j == 0) {
//                    body_tabs += '<div class="col-md-6">'
//                }
//                if (j == (count / 2)) {
//                    body_tabs += '<div class="col-md-6">'
//                }
//
//                body_tabs += ' <a href="' + act['link'] + '.html"> <div class="col-md-10 col-sm-10 col-xs-10">' + act['name'].substr(0, 40)
//                body_tabs += (act['name'].length > 40) ? '...' : '';
//                body_tabs += '</div><div class="col-md-2 col-sm-2 col-xs-2"> Pag.' + act['page'] + '</div></a>'
//                if (j == (count / 2) - 1) {
//                    body_tabs += '</div>'
//                }
//                if (j == (count)) {
//                    body_tabs += '</div>'
//                }
//            })
//
//            body_tabs += '</div></div></div></div></div> '
//        })
//        body_tabs += '</div>';
//    })
//    $("#menu_tabs").html(content_tabs);
//    $("#body_tabs").html(body_tabs);
//
//    console.log(body_tabs)
//})
$(document).ready(function () {
    var content_tabs = '';
    var body_tabs = '';


    $.each(mrk, function (index, value) {
        var activo = (index == 0) ? 'class="active"' : '';
        content_tabs += '<li role="presentation" ' + activo + ' >'//inicio tab
        content_tabs += '<a href="#t' + index + '" aria-controls="t' + index + '" role="tab" data-toggle="tab">' + value['name'] + '</a>';
        content_tabs += '</li>';//fin tab

        body_tabs += '<div role="tabpanel" class="tab-pane active" id="t' + index + '">';//tab body

        body_tabs += ' <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'//inicio grupo collapse
        $.each(value['items'], function (indice, valor) {
            body_tabs += '<div class="panel panel-default">';//panel collapse
            body_tabs += ' <div class="panel-heading" role="tab" id="headingOne">';//panel header collapse
            body_tabs += '<h4 class="panel-title">';//titulo panel collapse
            //link control collapse
            body_tabs += '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#c' + indice + '" aria-expanded="true" aria-controls="c' + indice + '">';
            body_tabs += valor['name']
            body_tabs += '</a>';
            //fin link control collapse
            body_tabs += '</h4>';//titulo panel collapse
            body_tabs += '</div>';//fin panel header collapse
            //collapsable section
            body_tabs += '<div id="c' + indice + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="h' + indice + '">';
            body_tabs += '<div class="panel-body">';//collapse body

//            count valor
            body_tabs += '<ol class="menu">'//lista de enlaces
            $.each(valor['items'], function (cursor, item) {
                body_tabs += '<li class="mli">'

                body_tabs += '<a href="' + item['link'] + '.html">'//link contenido
                body_tabs += '<div class="col-md-10">' + item['name'].substring(0, 30) + "</div>"//contenido nombre
                body_tabs += '<div class="col-md-2">Pag.' + item['page'] + "</div>"//contenido pagina
                body_tabs += '</a>'//fin link contenido

                body_tabs += '</li>'//fin lista de enlaces
            })
            body_tabs += '</ol>'//fin lista de enlaces




            body_tabs += '</div>';//fin collapse body
            body_tabs += '</div>';
            //fin collapsable section

            body_tabs += '</div>';//fin panel collapse
        })
        // body_tabs += value['name'] + index;
        body_tabs += '</div>';//fin grupo collapse
        body_tabs += '</div>';//fin tab body
    })


    $("#menu_tabs").html(content_tabs);
    $("#body_tabs").html(body_tabs);

    console.log(body_tabs)
})