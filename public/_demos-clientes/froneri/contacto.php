<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Froneri - A new ice-cream, frozen food and chilled dairy company.</title>
	<?php include("includes/head.php"); ?>
	<style> #colorbox, #cboxWrapper, #cboxContent, #cboxLoadedContent { height: 1000px!important; } </style>
</head>
<body class="contacto">
	<?php include("includes/mobile-nav.php"); ?>

	<div class="site-wrapper" id="top">
		<?php include("includes/topheader.php"); ?>
		<div class="full-width innerheader padding-slide-top">
			<img src="images/header/FRONERI-CONTACTO-SLIDER.jpg" class="main" />
		</div>

		<div class="full-width innercontent form news-area">
			<div class="container">

				<div class="row">
					<div class="col-xs-12 col-sm-push-4 col-sm-8 col-md-push-3 col-md-9 col-lg-push-3 col-lg-9">
						<div class="row">
							<div class="col-xs-12 col-md-12">
								<h1 class="text-left">Contacto</h1>

								<div class="row">
									<div class="col-xs-12 col-md-6">
										<div class="address">
											<div class="wrapper">
										   	<address>
													<strong>Froneri Argentina</strong><br />
													Colectora Este Panamericana 10, B1618<br>El Talar, Buenos Aires, Argentina.
												</address>
											</div>
										</div>
									</div>
									<div class="col-xs-12 col-md-6">
										<div class="map">
											<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822.2294143358664!2d-58.64537280297244!3d-34.479613086620255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca4a769fc8df9%3A0xa191e5d618c793fc!2sFRONERI+Argentina!5e0!3m2!1ses-419!2sar!4v1523995119512" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
										</div>
									</div>
								</div>

								<br>

								<form action="php/send-form-contacto.php" method="post" enctype="multipart/form-data">
									<input type="hidden" name="validar" value="si">
									<div class="form-wrapper">
										<div class="row">
											<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
												<div class="form-group">
													<label>Nombre*:</label>
													<input type="text" class="form-control" name="nombre" />
												</div>
											</div>
											<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
												<div class="form-group">
													<label>Apellido*:</label>
													<input type="text" class="form-control" name="apellido" />
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
												<div class="form-group">
													<label>E-mail*:</label>
													<input type="email" class="form-control" name="email" />
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
												<div class="form-group">
													<label>Teléfono*:</label>
													<input type="number" class="form-control" name="telefono" />
												</div>
											</div>
											<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
												<div class="form-group">
													<label>Fecha de nacimiento:</label>
													<input type="date" name="fechanac" class="form-control" />
												</div>
											</div>
											<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
												<div class="form-group">
													<label>Sexo:</label>
													<select id="sexo" name="sexo" class="form-control">
														<option value="">Seleccionar</option>
														<option value="Masculino">Masculino</option>
														<option value="Femenino">Femenino</option>
													</select>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
												<div class="form-group">
													<label>Asunto*:</label>
													<select id="asunto" name="asunto" class="form-control">
														<option value="">Seleccionar</option>
														<option value="Información">Información</option>
														<option value="Crítica">Crítica</option>
														<option value="Sugerencia">Sugerencia</option>
														<option value="Solicitud">Solicitud</option>
														<option value="Elogio">Elogio</option>
													</select>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-xs-12">
												<div class="form-group">
													<label>Mensaje*:</label>
													<textarea rows="6" class="form-control" name="mensaje"></textarea>
												</div>
											</div>
										</div>

										<div class="row">
											<div class="col-xs-12">
												<div class="form-group">
													Si desea contactarse para hacer un reclamo, <a href="contacto.php">haga click aquí</a>.<br>
													Si desea contactarse para aplicar a un puesto de trabajo, <a href="contacto-empleos.php">haga click aquí</a>.
												</div>
											</div>
										</div>

										<div class="row">
											<div class="col-xs-12">
												<div class="form-group">
													<label>Archivo adjunto:</label>
													<input type="file" name='my_file' class="form-control" />
												</div>
											</div>
										</div>
										<!--<br>
										<div class="row">
											<div class="col-xs-12 text-center">
												<div style="display:inline-block;" class="g-recaptcha" data-sitekey="6LcUAU0UAAAAAJB6aJ3QxVb7aERvTFT0BTOA56oZ"></div>
											</div>
										</div>
										<br>-->
										<div class="row">
											<div class="col-xs-12 text-left">
												<button class="btn">Enviar</button>
											</div>
										</div>
									</div>
								</form>



							</div>
						</div>

					</div>

					<div class="col-xs-12 col-sm-pull-8 col-sm-4 col-md-pull-9 col-md-3 col-lg-pull-9 col-lg-3">
						<?php include("includes/contacto-menu.php"); ?>
					</div>
				</div>
			</div>
		</div>

		<?php include("includes/footer.php"); ?>
	</div>

	<?php include("includes/scripts.php"); ?>

</body>
</html>
