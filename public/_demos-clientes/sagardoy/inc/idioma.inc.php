<?php

/* VARIABLES ------------------------------------------------------------------- */
session_start();
$_SESSION['lang'] = 0;

if($_GET["lang"] == "en"){
  $_SESSION['lang'] = 1;
} else if($_GET["lang"] == "es"){
  $_SESSION['lang'] = 0;
} else if($_GET["lang"] == "ca"){
  $_SESSION['lang'] = 2;
} else if($_GET["lang"] == "fr"){
  $_SESSION['lang'] = 3;
} else {
  $_SESSION['lang'] = 0;
}

$lang = $_SESSION['lang'];

/* GENERAL --------------------------------------------------------------------- */

$navbar = array (
  array(
    "Inicio", array("Vacaciones en familia", "Viajes de salud", "Viajes corporativos"),
    "Sobre nosotros",
    "Apartamentos", array("Suite premium", "Business apartment", "Apartment 1 hab", "Apartment 2 hab"),
    "Servicios",
    "Restaurante néctar",
    "Ofertas"
  ),
  array(
    "Home", array("Family vacation", "Health travel", "Corporate travel"),
    "About us",
    "Apartments", array("Suite premium", "Business apartment", "Apartment 1 room", "Apartment 2 room"),
    "Services",
    "Nectar restaurant",
    "Offers"
  ),
  array(
    "", array("", "", ""),
    "",
    "", array("", "", "", ""),
    "",
    "",
    ""
  ),
  array(
    "", array("", "", ""),
    "",
    "", array("", "", "", ""),
    "",
    "",
    ""
  )
);

$idioma = array (
  array("ES"),
  array("EN"),
  array("CA"),
  array("FR")
);

$idioma_link = array (
  array("?lang=en"),
  array("?lang=es"),
  array("?lang=ca"),
  array("?lang=fr")
);

/* home_slider --------------------------------------------------------------------- */
$home_slider_titulo = array (
  array("Bienvenido a Aura Park","Apartamentos Equipados","A 20 minutos de Barcelona","Atención personalizada"),
  array("Welcome to Aura Park","Equipped Apartments","20 minutes from Barcelona","Personalized Attention"),
  array("","","",""),
  array("","","","")
);

$home_slider_texto = array (
  array("Alójate con total tranquilidad a 20 minutos del centro de Barcelona y de las playas","Cocina totalmente equipada, sábanas, toallas y todo lo necesario para una estancia perfecta","Perfectamente comunicados con transporte público, taxi o coche","Nos adaptamos a tus necesidades"),
  array("Stay in total tranquility 20 minutes from the center of Barcelona and the beaches","Fully equipped kitchen, bedsheets, towels and everything you need for a perfect stay","Perfectly connected by public transport, cab, or car","We adapt to your needs"),
  array("","","",""),
  array("","","","")
);

/* home_slider_publica -------------------------------------------------------------- */
$home_slider_publica_titulo = array (
  array("VACACIONES EN FAMILIA","","",""),
  array("FAMILY VACATION","","",""),
  array("","","",""),
  array("","","","")
);

$home_slider_publica_texto = array (
  array("Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","","",""),
  array("We do not strive to practice any kind of work unless we gain some benefit from it.","",""),
  array("","","",""),
  array("","","","")
);

/* sobre_nosotros_slider ------------------------------------------------------- */
$sobre_nosotros_slider_titulo = array (
  array("SERVICIOS","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

$sobre_nosotros_slider_texto = array (
  array("Apartamento de 50m2, 1 habitación doble, 1 sofá cama de 2 plazas en el salón, cocina totalmente equipada.","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

/* servicios_slider ------------------------------------------------------- */
$servicios_slider_titulo = array (
  array("SOBRE NOSOTROS","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

$servicios_slider_texto = array (
  array("Cupidatat non proident, sunt in culpa qui laboris nisi ut aliquip ex irure dolor in reprehenderit in aliquip.","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

/* ofertas_slider ------------------------------------------------------- */
$ofertas_slider_titulo = array (
  array("OFERTAS","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

$ofertas_slider_texto = array (
  array("Sunt in culpa qui laboris nisi ut aliquip ex irure, Reprehenderit in aliquip cupidatat non proident.","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

/* restaurant_nectar_slider ------------------------------------------------------- */
$restaurant_nectar_slider_titulo = array (
  array("RESTAURANT NÉCTAR","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

$restaurant_nectar_slider_texto = array (
  array("Reprehenderit in aliquip cupidatat non proident, sunt in culpa qui laboris nisi ut aliquip ex irure.","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

/* apartamentos_slider ------------------------------------------------------- */
$apartamentos_slider_titulo = array (
  array("APARTAMENTOS","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

$apartamentos_slider_texto = array (
  array("53 luminosos y amplios apartamentos emplazados en un moderno edificio situado en el centro de L’Hospitalet de Llobregat.","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

/* apartamentos_interna_slider ------------------------------------------------------- */
$apartamentos_interna_slider_titulo_top = array (
  array("2/4 PAX","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

$apartamentos_interna_slider_titulo = array (
  array("Premium SUITE","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

$apartamentos_interna_slider_texto = array (
  array("Apartamento de 50m2, 1 habitación doble, 1 sofá cama de 2 plazas en el salón, cocina totalmente equipada.","","",""),
  array("","","",""),
  array("","","",""),
  array("","","","")
);

/* home_reservar-ahora --------------------------------------------------------------------- */

$home_reservar_ahora = array (
  array("Reservar ahora </br>tiene ventajas","Mejor precio garantizado","50% de descuento en el parking","Descuentos largas estancias"),
  array("Booking now </br>has advantages","Best price guarantee","50% discount on parking","Discounts for long stays"),
  array("","","",""),
  array("","","","")
);

/* home_aurapark --------------------------------------------------------------------- */

$home_aura_park = array (
  array("AURAPARK","APARTHOTEL","Déjate envolver por la paz de nuestra ubicación: un oasis verde situado en el centro de L'Hospitalet de Llobregat.","Nuestro objetivo es ofrecer a nuestros huéspedes una estancia cómoda, tranquila y libre de preocupaciones. Por eso, apostamos por la importancia de la naturaleza para aportar serenidad a tu viaje, situándonos junto a un parque urbano en el centro de la ciudad y teniendo como valores principales el compromiso con el medio ambiente y el respeto de nuestro entorno natural.","Más sobre nosotros","Reservar ahora"),
  array("AURAPARK","APARTHOTEL","Let yourself be enveloped by the peace of our location: a green oasis in the center of L'Hospitalet de Llobregat.","Our goal is to offer our guests a comfortable, quiet and carefree stay. Therefore, we believe on the importance of nature to bring serenity to your trip, placing ourselves next to an urban park in the center of the city and having as our main values the commitment to the environment and respect for our natural surroundings.","More about us","Book now"),
  array("","","","","",""),
  array("","","","","","")
);

$home_aura_park_btn_reservar = array (
  array("https://www.auraparkaparthotel.com/bookingstep1.es.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.en.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.ca.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.fr.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html")
);

/* sobre_nosotros --------------------------------------------------------------------- */

$sobre_nosotros = array (
  array(
    "UNA UBICACIÓN INMEJORABLE",
    "Aura Park dispone de 53 luminosos y amplios apartamentos emplazados en un moderno edificio situado en el centro de L’Hospitalet de Llobregat.",
    "Está muy bien comunicado con el centro de Barcelona y situado cerca de los recintos feriales de Gran Vía 2, Fira Barcelona y Fira Cornellà, así como del Camp Nou (Barça) y del aeropuerto internacional del Prat. Recepción 24 horas.",
    "Reservar ahora",

    "NUESTRO CONCEPTO",
    "DE ALOJAMIENTO",
    "Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est nisi ut aliquip ex ea commodo lorem",
    "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui laboris nisi ut aliquip ex irure dolor in reprehenderit in aliquip ex ea commodo consequat.",
    "Reservar ahora tiene ventajas",
    "Mejor precio garantizado, 50% de descuento en parking y descuentos para largas estadías."
  ),
  array("","","","Book now"),
  array("","","",""),
  array("","","","")
);

$sobre_nosotros_btn_reservar = array (
  array("https://www.auraparkaparthotel.com/bookingstep1.es.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.en.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.ca.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.fr.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html")
);

/* servicios --------------------------------------------------------------------- */

$servicios = array (
  array("AURA PARK SERVICIOS","Apartamentos equipados","Con todo lo que necesitas","Confort, descanso y esa sensación única de sentirte como en casa estando fuera de ella.","Reservar ahora"),
  array("","","","","Book now"),
  array("","","","",""),
  array("","","","","")
);

$servicios_caracteristicas = array (
  array(
    "Características y comodidades de los apartamentos",
    array(
      "Apartamento completamente amueblado",
      "Streaming Smart TV (Netflix, HBO, Sports, etc)",
      "Conexión Wi-Fi. Fibra Óptica",
      "Botella de agua de bienvenida",
      "Cafetera Nespresso con cápsulas de bienvenida",
      "Dormitorio principal con 1 camas doble (1.80m), armario y caja fuerte gratuita",
      "Salón/comedor con 1 sofá cama doble, mesa/sillas, escritorio, teléfono y TV de 32”",
      "Ventanas con aislamiento térmico y acústico",
      "Aire acondicionado y calefacción con control individual",
      "Parquet",
      "Lavadora/Secadora",
      "Cocina con vitrocerámica, microondas, horno, frigorífico, hervidor de agua, cafetera, menaje completo y dispensador de lavavajillas",
      "Servicio de limpieza diario bajo petición y sin coste. Cambio de sábanas y toallas casa 3 días",
      "1 Baño con ducha y dispensadores de jabón para manos y gel de ducha"
    )
  ),
  array(
    "",
    array(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )
  ),
  array(
    "",
    array(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )
  ),
  array(
    "",
    array(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )
  )
);

$servicios_btn_reservar = array (
  array("https://www.auraparkaparthotel.com/bookingstep1.es.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.en.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.ca.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.fr.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html")
);




/* ofertas --------------------------------------------------------------------- */

$ofertas = array (
  array(
    array(
      "OFERTAS",
      "15% DESCUENTO ADICIONAL RESERVAS DIRECTAS EN LA WEB",
      "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      array(
        "Nostrud exercitation ullamco",
        "Duis aute irure dolor in duis aute irure dolor in reprehenderit in voluptate velit esse cillumreprehenderit in voluptate.",
        "Velit esse cillumreprehenderit aute irure dolor.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Sint  laboris nisi ut aliquip ex ea commodo.",
        "Nostrud exercitation ullamco",
        "Duis aute irure dolor in duis aute irure dolor in reprehenderit in voluptate velit esse cillumreprehenderit in voluptate.",
        "Velit esse cillumreprehenderit aute irure dolor.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Sint  laboris nisi ut aliquip ex ea commodo."
      ),
      "",
      "Contactanos ahora"
    ),
    array(
      "OFERTAS",
      "VERANO EN FAMILIA EN AURA PARK",
      "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      array(
        "Nostrud exercitation ullamco",
        "Duis aute irure dolor in duis aute irure dolor in reprehenderit in voluptate velit esse cillumreprehenderit in voluptate.",
        "Velit esse cillumreprehenderit aute irure dolor.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Sint  laboris nisi ut aliquip ex ea commodo.",
        "Nostrud exercitation ullamco",
        "Duis aute irure dolor in duis aute irure dolor in reprehenderit in voluptate velit esse cillumreprehenderit in voluptate.",
        "Velit esse cillumreprehenderit aute irure dolor.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Sint  laboris nisi ut aliquip ex ea commodo."
      ),
      "€ 835.-",
      "Contactanos ahora"
    )
  ),
  array(
    array("OFERTAS","15% DESCUENTO ADICIONAL RESERVAS DIRECTAS EN LA WEB","Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.","","Contactanos ahora"),
    array("OFERTAS","15% DESCUENTO ADICIONAL RESERVAS DIRECTAS EN LA WEB","Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.","€ 835.-","Contactanos ahora")
  ),
  array(
    array("OFERTAS","15% DESCUENTO ADICIONAL RESERVAS DIRECTAS EN LA WEB","Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.","","Contactanos ahora"),
    array("OFERTAS","15% DESCUENTO ADICIONAL RESERVAS DIRECTAS EN LA WEB","Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.","€ 835.-","Contactanos ahora")
  ),
  array(
    array("OFERTAS","15% DESCUENTO ADICIONAL RESERVAS DIRECTAS EN LA WEB","Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.","","Contactanos ahora"),
    array("OFERTAS","15% DESCUENTO ADICIONAL RESERVAS DIRECTAS EN LA WEB","Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.","€ 835.-","Contactanos ahora")
  )
);

$ofertas_btn_reservar = array (
  array("https://www.auraparkaparthotel.com/bookingstep1.es.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.en.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.ca.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.fr.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html")
);

/* restaurant nectar --------------------------------------------------------------------- */

$restaurant_nectar = array (
  array("NUESTRO RESTAURANT","EN LA planta baja","DEL HOTEL","Un espacio amplio y luminoso decorado con tonos suaves.","Reservar ahora"),
  array("","","","","Book now"),
  array("","","","",""),
  array("","","","","")
);

$restaurant_nectar_btn_reservar = array (
  array("https://www.auraparkaparthotel.com/bookingstep1.es.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.en.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.ca.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.fr.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html")
);

$restaurant_servicios = array (
  array(
    "SERVICIOS DEL RESTAURANT",
    "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    array("Buffet","Catering","Aire condicionado","Terraza","Eventos privados","Zona de fumadores","Para llevar","Wifi gratis")
  ),
  array(
    "",
    "",
    array("","","","","","","","")
  ),
  array(
    "",
    "",
    array("","","","","","","","")
  ),
  array(
    "",
    "",
    array("","","","","","","","")
  )
);

/* apartamentos --------------------------------------------------------------------- */

$apartamentos = array (
  array(
    array(
      "2 PAX",
      "Business Apartment",
      "Apartamento de 50m2, 1 habitación doble, 1 sofá cama de 2 plazas en el salón, cocina totalmente equipada.",
      "Reservar DESDE",
      "20.80€",
      "/Noche",
      "VER MÁS",
      "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28246&lang=es"
    ),
    array(
      "2/4 PAX",
      "Apartamento 1 hab.",
      "Apartamento de 50m2, 1 habitación doble, 1 sofá cama de 2 plazas en el salón, cocina totalmente equipada.",
      "Reservar DESDE",
      "20.80€",
      "/Noche",
      "VER MÁS",
      "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28247&lang=es"
    ),
    array(
      "4/6 PAX",
      "Apartamento 2 hab.",
      "Apartamento de 50m2, 1 habitación doble, 1 sofá cama de 2 plazas en el salón, cocina totalmente equipada.",
      "Reservar DESDE",
      "31.60€",
      "/Noche",
      "VER MÁS",
      "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28248&lang=es"
    ),
    array(
      "2/4 PAX",
      "Premium Suite",
      "Apartamento de 50m2, 1 habitación doble, 1 sofá cama de 2 plazas en el salón, cocina totalmente equipada.",
      "Reservar DESDE",
      "34.20€",
      "/Noche",
      "VER MÁS",
      "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28249&lang=es"
    )
  )
);

$apartamentos_btn_reservar = array (
  array("https://www.auraparkaparthotel.com/bookingstep1.es.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.en.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.ca.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.fr.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html")
);

/* apartamentos interna --------------------------------------------------------------------- */

$apartamentos_interna = array (
  array("PREMIUM SUITE","La libertad","de hacer lo que quieras","Nuestra Premium Suite con dos dormitorios y una espaciosa sala de estar/cocina es la elección correcta."),
  array("","","","",""),
  array("","","","",""),
  array("","","","","")
);

$apartamentos_interna_btn_reservar = array (
  array("https://www.auraparkaparthotel.com/bookingstep1.es.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.en.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.ca.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.fr.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html")
);

$apartamentos_interna_servicios = array (
  array(
    "SERVICIOS DEL RESTAURANT",
    "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    array("Buffet","Catering","Aire condicionado","Terraza","Eventos privados","Zona de fumadores","Para llevar","Wifi gratis")
  ),
  array(
    "",
    "",
    array("","","","","","","","")
  ),
  array(
    "",
    "",
    array("","","","","","","","")
  ),
  array(
    "",
    "",
    array("","","","","","","","")
  )
);

/* home_publica --------------------------------------------------------------------- */

$home_publica = array (
  array("VACACIONES","EN FAMILIA","Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est nisi ut aliquip ex ea commodo lorem","Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui laboris nisi ut aliquip ex irure dolor in reprehenderit in aliquip ex ea commodo consequat.","Más sobre nosotros","Reservar ahora"),
  array("","","","","More about us","Book now"),
  array("","","","","",""),
  array("","","","","","")
);

$home_publica_btn_reservar = array (
  array("https://www.auraparkaparthotel.com/bookingstep1.es.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.en.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.ca.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.fr.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html")
);

/* home_modulo_publica --------------------------------------------------------------------- */

$home_modulo_publica_top = array (
  array(
    "BARCELONA",
    "A SÓLO 20 MINUTOS",
    "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "VER MÁS",
    "http://"
  ),
  array("","","","",""),
  array("","","","",""),
  array("","","","","")
);

$home_modulo_publica = array (
  array(
    "CAMP",
    "NOU",
    "Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est nisi ut aliquip ex ea commodo lorem",
    "VER MÁS",
    "http://",
    "CENTRO COMERCIAL",
    "GRAN VÍA 2",
    "Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est nisi ut aliquip ex ea commodo lorem",
    "VER MÁS",
    "http://"
  ),
  array("","","","","","","",""),
  array("","","","","","","",""),
  array("","","","","","","","")
);

/* home_nuestros-apartamentos --------------------------------------------------------------------- */

$home_nuestros_apartamentos = array (
  array (
    "Conoce nuestros</br>apartamentos",
    array(
      array(
        "Apartamento Business",
        "1 PAX",
        "Apartamento de 50 m² con habitación doble, baño con ducha, cocina totalmente equipada y 2 mesas de trabajo. Salón-comedor separado del dormitorio y con mucho espacio para trabajar.",
        "Reservar desde",
        "74€",
        "Noche",
        "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28246&lang=es"
      ),
      array(
        "Apartamento 1 Hab.",
        "2/4 PAX",
        "Apartamento ideal para parejas o familias: habitación doble, sofá cama de dos plazas, baño con ducha y cocina totalmente equipada.",
        "Reservar desde",
        "80€",
        "Noche",
        "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28247&lang=es"
      ),
      array(
        "Apartamento 2 Hab.",
        "4/6 PAX",
        "Perfecto para grupos o familias grandes, este apartamento completamente amueblado cuenta con dos habitaciones dobles, un sofá cama para dos personas, cocina equipada, baño y una terraza de grandes dimensiones.",
        "Reservar desde",
        "97€",
        "Noche",
        "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28248&lang=es"
      ),
      array(
        "Premium Suite",
        "2/3 PAX",
        "Apartamento de 50 m² con habitación doble, un sofá cama de dos plazas, cocina equipada, baño, lavadora/secadora, cafetera Nespresso, Smart TV y mucho más.",
        "Reservar desde",
        "102€",
        "Noche",
        "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28249&lang=es"
      )
    )
  ),
  array (
    "Discover our</br>apartments",
    array(
      array(
        "Business Apartment",
        "1 PAX",
        "Apartment of 50 sqm² with double bedroom, bathroom with shower, fully equipped kitchen and 2 work tables. Living-dining room separated from the bedroom and with plenty of space to work.",
        "Book from",
        "74€",
        "Night",
        "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28246&lang=en"
      ),
      array(
        "1 Bedroom Apartment",
        "2/4 PAX",
        "Ideal apartment for couples or families: double bedroom, double sofa bed, bathroom with shower and fully equipped kitchen.",
        "Book from",
        "80€",
        "Night",
        "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28247&lang=en"
      ),
      array(
        "2 Bedroom Apartment",
        "4/6 PAX",
        "Perfect for groups or large families, this fully furnished apartment has two double bedrooms, a sofa bed for two people, equipped kitchen, bathroom and a large terrace.",
        "Book from",
        "97€",
        "Night",
        "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28248&lang=en"
      ),
      array(
        "Premium Suite",
        "2/3 PAX",
        "50 sqm² apartment with double bedroom, a double sofa bed, equipped kitchen, bathroom, washer/dryer, Nespresso coffee machine, Smart TV and much more.",
        "Book from",
        "102€",
        "Night",
        "https://reservation.mirai.com/XMAS/reservation/miraiFrontDispatcher.htm?idtokenprovider=100376912&roomTypeId=28249&lang=en"
      )
    )
  ),
  array(
    "",
    array(
      array(
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      array(
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      array(
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      array(
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      )
    )
  ),
  array(
    "",
    array(
      array(
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      array(
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      array(
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      array(
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      )
    )
  )
);

/* home_descatados --------------------------------------------------------------------- */

$home_descatados = array (
  array(
    array(
      "Vacaciones</br>en familia","Porque quieres lo mejor para los tuyos. Vive una experiencia en familia sin preocupaciones."
    ),
    array(
      "Viajes</br>de salud","¿Necesitas ir al hospital para tratamientos o visitas? Déjanos ayudarte con el resto. Precios especiales."
    ),
    array(
      "Viajes</br>corporativos","Tranquilidad y todo el espacio que necesitas para trabajar, cerca de los puntos clave de Barcelona y a 2 paradas de metro de la Fira Gran Via de Barcelona."
    )
  ),
  array(
    array(
      "Family</br>vacation","Because you want the best for your loved ones. Live a carefree family experience."
    ),
    array(
      "Health</br>trips","Need to go to the hospital for treatments or visits? Let us help you with the rest. Special prices."
    ),
    array(
      "Corporate</br>travel","Tranquility and all the space you need to work, close to the key points of Barcelona and 2 metro stops from the Fira Gran Via of Barcelona."
    )
  ),
  array(
    array(
      "",""
    ),
    array(
      "",""
    ),
    array(
      "",""
    )
  ),
  array(
    array(
      "",""
    ),
    array(
      "",""
    ),
    array(
      "",""
    )
  )
);

/* home_servicios --------------------------------------------------------------------- */

$home_servicios = array (
  array(
    "Servicios",
    "Aura Park dispone de 53 apartamentos 100% equipados, emplazados en un moderno edificio situado en el centro de L’Hospitalet de Llobregat, con fácil comunicación al centro de Barcelona, así como a los principales recintos de congresos y al aeropuerto. Ofrecemos Wi-Fi de alta velocidad, piscina exterior con terraza, restaurante, parking, recepción 24 horas, lavandería, limpieza, cambio de sábanas y toallas cada 3 días y mucho más.",
    array("Recepción 24H","Restaurante","Piscina exterior","Parking","Terraza solárium"),
    "Ver todos los servicios"
  ),
  array(
    "Services",
    "Aura Park has 53 apartments that are 100% equipped, located in a modern building in the center of L'Hospitalet de Llobregat, with easy access to the center of Barcelona, as well as to the main congress centers and the airport. We offer high speed Wi-Fi, outdoor swimming pool with terrace, restaurant, parking, 24-hour front desk, laundry, cleaning, change of sheets and towels every 3 days and much more.",
    array("24-hour front desk","Restaurant","Outdoor swimming pool","Parking","Solarium terrace"),
    "See all services"
  ),
  array(
    "",
    "",
    array("","","","",""),
    ""
  ),
  array(
    "",
    "",
    array("","","","",""),
    ""
  )
);

$home_piscina_restaurant = array (
  array(
    array(
      "Piscina y Solárium",
      "Horario de 9:00 a 21:00h",
      "Descansa bajo el sol, refréscate en la piscina o simplemente disfruta de unas vistas panorámicas de Barcelona."
    ),
    array(
      "Restaurante Néctar",
      "Horario de lunes a viernes de 7:30 a 17:00h y sábados y domingos de 8:00 a 11:00h",
      "Nuestro restaurante, situado en la planta baja del edificio, dispone de barra y cafetería, ofrece menús con pescados, carnes y una gran variedad de guarniciones. Cuenta con una terraza ideal para tomar un café o un vermut en una zona tranquila y peatonal."
    ),
    "Reservar ahora tiene ventajas",
    "Mejor precio garantizado, 50% de descuento en el parking y descuentos para largas estancias.",
    "DESDE",
    "74.00€",
    "/Noche"
  ),
  array(
    array(
      "Pool & Sun deck",
      "Opening hours 9am to 9pm",
      "Relax in the sun, cool off in the pool, or simply enjoy panoramic views of Barcelona."
    ),
    array(
      "Néctar Restaurant",
      "Opening hours monday to friday from 7:30 am to 5pm and saturdays and sundays from 8 am to 11am",
      "Our restaurant, located on the first floor of the building, has a bar and cafeteria, offering fish and meat menus and a wide variety of side dishes. It has a terrace ideal for a coffee or a vermouth in a quiet pedestrian area."
    ),
    "Booking now has advantages",
    "Best price guaranteed, 50% discount on parking and discounts for long stays.",
    "From",
    "74.00€",
    "/Night"
  ),
  array(
    array(
      "",
      "",
      ""
    ),
    array(
      "",
      "",
      ""
    ),
    "",
    "",
    "",
    "",
    ""
  ),
  array(
    array(
      "",
      "",
      ""
    ),
    array(
      "",
      "",
      ""
    ),
    "",
    "",
    "",
    "",
    ""
  )
);

$home_servicios_btn_reservar = array (
  array("https://www.auraparkaparthotel.com/bookingstep1.es.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.en.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.ca.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.fr.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html")
);

/* home_servicios_publica --------------------------------------------------------------------- */

$home_servicios_publica = array (
  array(
    "Servicios",
    "Aura Park dispone de 53 luminosos y amplios apartamentos emplazados en un moderno edificio situado en el centro de L’Hospitalet de Llobregat. Está muy bien comunicado con el centro de Barcelona y situado cerca de los recintos feriales de Gran Vía 2, Fira Barcelona y Fira Cornellà, así como del Camp Nou (Barça) y del aeropuerto internacional del Prat. Recepción 24 horas.",
    array("Recepción 24H","Wi-Fi","Restaurante</br>Desayunos y almuerzos al medio día","Parking","Terraza solárium","Piscina exterior","Seguridad 24H","Consigna de maletas","Cocina Equipada","Edificio adaptado a minusvalías","Cunas y tronos","Lavandería (autoservicio)"),
    "Ver todos los servicios"
  ),
  array(
    "Services",
    "Aura Park has 53 bright and spacious apartments located in a modern building located in the center of L'Hospitalet de Llobregat. It is very well connected to the center of Barcelona and located near the fairgrounds of Gran Vía 2, Fira Barcelona and Fira Cornellà, as well as Camp Nou (Barça) and El Prat international airport. 24 hours reception.",
    array("24 hour reception","Wi-Fi","Restaurant</br>Breakfast and lunch at noon","Parking","Solarium terrace","Outdoor pool","24 hour security","Luggage room","Equipped Kitchen","Disabled-accessible building","Cribs and thrones","Laundry (self-service)"),
    "See all services"
  ),
  array(
    "",
    "",
    array("","","","",""),
    ""
  ),
  array(
    "",
    "",
    array("","","","",""),
    ""
  )
);

$home_piscina_publica_restaurant = array (
  array(
    array(
      "Piscina y Solárium",
      "Horario de 9:00 a 21:00h",
      "Descansa bajo el sol, refréscate en la piscina o simplemente disfruta de unas vistas panorámicas de Barcelona."
    ),
    array(
      "Restaurante Néctar",
      "Horario de lunes a viernes de 7:30 a 17:00h y sábados y domingos de 8:00 a 11:00h",
      "Nuestro restaurante, situado en la planta baja del edificio, dispone de barra y cafetería, ofrece menús con pescados, carnes y una gran variedad de guarniciones. Cuenta con una terraza ideal para tomar un café o un vermut en una zona tranquila y peatonal."
    ),
    "Reservar ahora tiene ventajas",
    "Mejor precio garantizado, 50% de descuento en el parking y descuentos para largas estancias.",
    "DESDE",
    "74.00€",
    "/Noche"
  ),
  array(
    array(
      "Pool & Sun deck",
      "Opening hours 9am to 9pm",
      "Relax in the sun, cool off in the pool, or simply enjoy panoramic views of Barcelona."
    ),
    array(
      "Néctar Restaurant",
      "Opening hours monday to friday from 7:30 am to 5pm and saturdays and sundays from 8 am to 11am",
      "Our restaurant, located on the first floor of the building, has a bar and cafeteria, offering fish and meat menus and a wide variety of side dishes. It has a terrace ideal for a coffee or a vermouth in a quiet pedestrian area."
    ),
    "Booking now has advantages",
    "Best price guaranteed, 50% discount on parking and discounts for long stays.",
    "From",
    "74.00€",
    "/Night"
  ),
  array(
    array(
      "",
      "",
      ""
    ),
    array(
      "",
      "",
      ""
    ),
    "",
    "",
    "",
    "",
    ""
  ),
  array(
    array(
      "",
      "",
      ""
    ),
    array(
      "",
      "",
      ""
    ),
    "",
    "",
    "",
    "",
    ""
  )
);

$home_servicios_publica_btn_reservar = array (
  array("https://www.auraparkaparthotel.com/bookingstep1.es.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.en.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.ca.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html"),
  array("https://www.auraparkaparthotel.com/bookingstep1.fr.html","https://www.auraparkaparthotel.com/bookingstep1-mobile.html")
);

/* home_ofertas --------------------------------------------------------------------- */

$home_ofertas = array (
  array(
    array(
      "Ofertas",
      "15% DESCUENTO ADICIONAL RESERVAS DIRECTAS EN NUESTRA WEB",
      "15% descuento adicional reservas directas en nuestra web. Solo para reservas a traves de nuestra web.",
      "Ampliar"
    ),
    array(
      "Ofertas 2",
      "15% DESCUENTO ADICIONAL RESERVAS DIRECTAS EN NUESTRA WEB 2",
      "15% descuento adicional reservas directas en nuestra web. Solo para reservas a traves de nuestra web. 2",
      "Ampliar"
    )
  ),
  array(
    array(
      "Offers",
      "15% ADDITIONAL DISCOUNT DIRECT RESERVATIONS ON OUR WEBSITE",
      "15% additional discount for direct reservations on our website. Only for reservations through our website.",
      "More information"
    ),
    array(
      "Offers 2",
      "15% ADDITIONAL DISCOUNT DIRECT RESERVATIONS ON OUR WEBSITE 2",
      "15% additional discount for direct reservations on our website. Only for reservations through our website. 2",
      "More information"
    )
  ),
  array(
    array(
      "",
      "",
      "",
      ""
    )
  ),
  array(
    array(
      "",
      "",
      "",
      ""
    )
  )
);


/* home_mapa --------------------------------------------------------------------- */

$home_mapa = array (
  array(
    "Distancias principales desde aura park",
    array(
      "Aeropuerto de Barcelona-El Prat",
      "Camp Nou - Fútbol Club Barcelona",
      "Fira de Barcelona",
      "Centro de Barcelona",
      "Puerto de Barcelona-Terminal de cruceros"
    )
  ),
  array(
    "Main distances from aura park",
    array(
      "Barcelona-El Prat Airport",
      "Camp Nou - Fútbol Club Barcelona",
      "Barcelona’s Fira",
      "Barcelona city center",
      "Port of Barcelona - Cruise Terminal"
    )
  ),
  array(
    "",
    array(
      "",
      "",
      "",
      "",
      ""
    )
  ),
  array(
    "",
    array(
      "",
      "",
      "",
      "",
      ""
    )
  )
);

/* error_404 --------------------------------------------------------------------- */

$error_404 = array (
  array("Ups! Nada por aquí…", "Disculpa! La página que estás buscando no existe.", "VOLVER AL INICIO"),
  array("Oops! Nothing here…", "Sorry! The page you are looking for does not exist.", "BACK TO HOME")
);


/* FOOTER ---------------------------------------------------------------------- */
$footer_links_btns = array (
  array(
    "VACACIONES EN FAMILIA",
    "VIAJES DE SALUD",
    "VIAJES CORPORATIVOS",
    "AURAPARK",
    "Inicio",
    "Sobre Nosotros",
    "Servicios",
    "Restaurante Néctar",
    "Ofertas",
    "Contacto",
    "APARTAMENTOS",
    "Business Apartment, 1 Habitación",
    "Apartamento 1 Habitación 2/4 Personas",
    "Apartamento 2 Habitaciones  4/6 Personas",
    "Premium Suite",
    "Licencia número"
  ),
  array(
    "FAMILY VACATION",
    "VIAJES DE SALUD",
    "HEALTH TRAVEL",
    "AURAPARK",
    "Home",
    "About us",
    "Services",
    "Nectar Restaurant",
    "Offers",
    "Contact",
    "APARTMENTS",
    "Business Apartment, 1 Room",
    "Apartment 1 Room 2/4 Persons",
    "Apartment 2 Room  4/6 Persons",
    "Premium Suite",
    "License number"
  ),
  array(
    "VACANCES EN FAMÍLIA",
    "VIATGES DE SALUT",
    "VIATGES CORPORATIUS",
    "AURAPARK",
    "Inici",
    "Sobre Nosaltres",
    "Serveis",
    "Restaurant Nèctar",
    "Ofertes",
    "Contacte",
    "APARTAMENTS",
    "Business Apartment, 1 Habitació",
    "Apartament 1 Habitació 2/4 Persones",
    "Apartament 2 Habitacions 4/6 Persones",
    "Suite Premium",
    "Llicència número"
  ),
  array(
    "VACANCES EN FAMILLE",
    "VOYAGE SANTÉ",
    "VOYAGE D'ENTREPRISE",
    "AURAPARK",
    "Début",
    "À propos de nous",
    "Services",
    "Néctar Restaurant",
    "Offres",
    "Contact",
    "APPARTEMENTS",
    "Appartement Affaires, 1 chambre",
    "Appartement 1 Chambre 2/4 Personnes",
    "Appartement 2 Pièces 4/6 Personnes",
    "Suite Premium",
    "Numéro de licence"
  )
);

$footer_links_legal = array (
  array("<b>©2022 AURA PARK.</b> Todos los derechos reservados.", "Aviso Legal", "Política de Privacidad", "Política de cookies"),
  array("<b>©2022 AURA PARK.</b> All rights reserved.", "Legal warning", "Privacy Policy", "Cookies policy"),
  array("<b>©2022 AURA PARK.</b> Tots els drets reservats.", "Avís Legal", "Política de Privadesa", "Política de cookies"),
  array("<b>©2022 AURA PARK.</b> Tous droits réservés.", "Avis juridique", "Politique de confidentialité", "Politique de cookies")
);

$cookies_policy = array (
    array(
        "POLÍTICA DE COOKIES AURAPARK",
        "<b>Política</b><br>DE COOKIES"
    ),
    array(
        "AURAPARK COOKIES POLICY",
        "Cookies<br><b>policy</b>"
    ),
    array(
      "",
      ""
    ),
    array(
      "",
      ""
    )
);

$metaData =  array(
    array(
        "Apartamentos muy cerca de Barcelona | Aura Park Aparthotel",
        "Descubre nuestros apartamentos totalmente equipados situados en el centro de L'Hospitalet de Llobregat. ¡Haz tu reserva ahora!"
    ),
    array(
        "Apartments very close to Barcelona | Aura Park Aparthotel",
        "Discover our fully furnished apartments located in the center of L'Hospitalet de Llobregat, very close to Barcelona. Book now!"
    ),
    array(
      "",
      ""
    ),
    array(
      "",
      ""
    )
);

$canonical = array(
	array("https://www.auraparkaparthotel.com/?lang=es"),
	array("https://www.auraparkaparthotel.com/?lang=en"),
	array("https://www.auraparkaparthotel.com/?lang=ca"),
	array("https://www.auraparkaparthotel.com/?lang=fr")
);

?>
