
(function($) { 
	"use strict";
    
    jQuery(document).ready(function(){
        
        //$("#contact-loader").fadeOut(0);

        function reset_forms(b) {
            if (b !== undefined && b.length > 0) {
                var a = b;
                a.find("input").val("");
                a.find(".form-general-error-container .alert").fadeOut("fast");
                //a.find(".alert").remove();
                //a.find(".form-general-error-container").empty().hide();
                //reset_captcha(b);
            }
        }
        
        function validate_fields(d, a) {
            if (d !== undefined && d.length > 0) {
                var b = (a !== undefined && a.length > 0) ? a : d.find(".validate");
                var c = new Array();

                b.each(function () {
                    var e = $(this).attr("data-validation-type");
                    var h = $(this).hasClass("required");
                    var g = $(this).val().trim();
                    var f = new Array();
                    f.field_object = $(this);
                    f.message = "success";

                    if (h == true && (g == "" || g === null || g === undefined)) {
                        f.message = "Este campo es obligatorio.";
                    }

                    if (e == "string" && (g != "" && g !== null && g !== undefined)) {
                        if (g.match(/^[a-z0-9 .\-]+$/i) == null) {
                            f.message = "Caracteres inválidos.";
                        }
                    } else {
                        if (e == "email" && (g != "" && g !== null && g !== undefined)) {
                            if (g.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
                                f.message = "Ingrese un email válido.";
                            }
                        } else {
                            if (e == "phone" && (g != "" && g !== null && g !== undefined)) {
                                if (g.match(/^\(?\+?[\d\(\-\s\)]+$/) == null) {
                                    f.message = "Caracteres inválidos.";
                                }
                            }
                        }
                    }
                    c.push(f);
                });
                return c;
            }
        }

        function contact_form_IE9_placeholder_fix() {
            var a = $("form");
            a.each(function () {
                var b = $(this);
                $(this).find(".form-control").each(function () {
                    var c = $(this).attr("placeholder");
                    if (c !== undefined && c != "") {
                        $(this).val(c);
                        $(this).focus(function () {
                            if ($(this).val() == c) {
                                $(this).val("")
                            }
                        });
                        $(this).blur(function () {
                            if ($(this).val() == "") {
                                $(this).val(c)
                            }
                        })
                    }
                })
            })
        }
        
        $('#btn-submit').click(function(e){
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            
            var b = "";
            var a = (b !== undefined && b.length > 0) ? b : $("form.validate-form");

                a.each(function () {
                    var c = $(this);

                    c.find(".validate-field").each(function () {
                        $(this).change(function () {
                            $(this).siblings(".alert").fadeOut("fast", function () {
                                $(this).remove();
                            });

                            if ($(this).val().trim() != "") {
                                var e = validate_fields(c, $(this));
                                if (e.length > 0) {
                                    if (e[0]["message"] !== undefined && e[0]["message"] != "" && e[0]["message"] != "success") {
                                        var d = '<div class="alert">' + e[0]["message"] + "</div>";
                                        $(this).after(d);
                                        $(this).siblings(".alert").fadeIn("fast");
                                    }
                                }
                            }
                        })
                    });

                    c.submit(function (e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = false;

                        $(this).find(".form-loader").fadeIn("fast");
                        var d = $(this).attr("action");
                        if (d === undefined && d == "") {
                            return false;
                        }

                        $(this).find(".alert").remove();

                        var f = false;
                        $(this).find(".validate-field").each(function () {
                            var h = validate_fields(c, $(this));
                            if (h.length > 0) {
                                if (h[0]["message"] !== undefined && h[0]["message"] != "" && h[0]["message"] != "success") {
                                    var g = '<div class="alert">' + h[0]["message"] + "</div>";
                                    $(this).after(g);
                                    $(this).siblings(".alert").fadeIn("fast");
                                    f = true;
                                }
                            }
                        });
                        if (f == true) {
                            $(this).find(".form-loader").fadeOut("fast");
                            return false;
                        }
                        $.ajax({
                            type: "POST",
                            url: d,
                            data: $(this).serialize(),
                            dataType: "html",
                            success: function (k) {
                                //console.log(k);
                                c.find(".form-loader").fadeOut("fast");
                                var l = (k == "success") ? true : false;
                                var h = (k == "captcha") ? false : true;
                                var g = "";

                                switch (k) {
                                    case "success":
                                        //g = "Su consulta se envio con exito!";
                                        $(".form-general-error-container .success").fadeIn("fast");
                                        //console.log($(this).find(".form-general-error-container .success"));
                                        break;
                                    /*case "captcha":
                                        g = "Incorrect text entered. (Case-sensitive)";
                                        break;*/
                                    case "incomplete":
                                        //g = "Por favor, complete los campos requeridos.";
                                        $(".form-general-error-container .incomplete").fadeIn("fast");
                                        break;
                                    case "error":
                                        //g = "Ocurrio un error. Por favor, intente nuevamente.";
                                        $(".form-general-error-container .error").fadeIn("fast");
                                        break;
                                }

                                if (!h) {
                                    c.find("#form-captcha").parent(".form-group").append(j);
                                    c.find("#form-captcha").siblings(".alert").fadeIn("fast");
                                } else {
                                    $(".form-general-error-container .success, .form-general-error-container .incomplete, .form-general-error-container .error").delay(10000).fadeOut("fast");
                                }

                                if (l == true) {
                                    c.find(".form-control").val("");
                                }
                            }, error: function (h) {
                                c.find(".form-loader").fadeOut("fast");
                                $(this).find(".form-general-error-container .error").fadeIn("fast");
                            }
                        })
                    })
                })

            /*var action = $("#cform").attr('action');
            
            $(".conForm .loader").show();

            $.post(
                action,
                {
                    nombre: $('#nombre').val(),
                    apellido: $('#apellido').val(),
                    email: $('#email').val(),
                    telefono: $('#telefono').val(),
                    comentario: $('#comentario').val()
                },
                function(data){
                    $(".conForm .loader").hide();
                    $(".conForm #mensaje").show();
                    $(".conForm #mensaje").html(data);

                    if(data.match('success') != null){
                        //$('#cform').slideUp('slow');
                        $(".conForm #mensaje").delay(3000).hide();
                    }
                }
            );*/
        });
    });
}(jQuery));