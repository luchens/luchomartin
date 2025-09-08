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
								<p class="text-left">
									<h1 class="text-left">Empleos</h1>
									Para alcanzar nuestro objetivo de hacer crecer nuestro negocio necesitamos contar con protagonistas que inspiren los valores de nuestra compañía, a través de nuestras reconocidas marcas.
									<br><br>
									<b>En Froneri te ofrecemos la posibilidad de ser parte de un gran equipo en una empresa muy dinámica y con grandes desafíos.</b>
									<br><br>
								</p>

								<!-- USES BOOSTRAP 3'S TABS. EACH FORM IS SEPERATE -->

								<!--<ul class="nav nav-tabs" role="tablist">
									<li role="presentation" class="active"><a href="#product" aria-controls="home" role="tab" data-toggle="tab">Product Feedback</a></li>
									<li role="presentation"><a href="#sales" aria-controls="profile" role="tab" data-toggle="tab">Sales Enquiry</a></li>
									<li role="presentation"><a href="#careers" aria-controls="messages" role="tab" data-toggle="tab">Careers</a></li>
									<li role="presentation"><a href="#general" aria-controls="settings" role="tab" data-toggle="tab">General Enquiry</a></li>
								</ul>-->
								<div class="tab-content">
									<form action="php/send-form-empleo.php" method="post">
										<input type="hidden" name="validar" value="si">
										<div class="form-wrapper">
											<div class="row">
												<div class="col-xs-12">
													<label class="title">Datos personales:</label>
													<div class="group-wrapper">

													<div class="row">
														<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
															<div class="form-group">
																<label>Nombre completo:</label>
																<input type="text" name="nombre" class="form-control" />
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
															<div class="form-group">
																<label>Fecha de nacimiento:</label>
																<input type="date" name="fechanac" class="form-control" />
															</div>
														</div>
														<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
															<div class="form-group">
																<label>Nacionalidad:</label>
																<input type="text" name="nacionalidad" class="form-control" />
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
															<div class="form-group">
																<label>DNI:</label>
																<input type="text" name="dni" class="form-control" />
															</div>
														</div>
														<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
															<div class="form-group">
																<label>Nro. CUIL/CUIT:</label>
																<input type="text" name="cuil" class="form-control" />
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
															<div class="form-group">
																<label>Dirección:</label>
																<input type="text" name="direccion" class="form-control" />
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
															<div class="form-group">
																<label>Localidad:</label>
																<input type="text" name="localidad" class="form-control" />
															</div>
														</div>
														<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
															<div class="form-group">
																<label>Ciudad:</label>
																<input type="text" name="ciudad" class="form-control" />
															</div>
														</div>
													</div>
													<div class="row">
														<!--<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
															<div class="form-group">
																<label>Teléfono:</label>
																<input type="text" name="telefono" class="form-control" />
															</div>
														</div>-->
														<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
															<div class="form-group">
																<label>Celular:</label>
																<input type="text" name="celular" class="form-control" />
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
															<div class="form-group">
																<label>E-mail:</label>
																<input type="text" name="email" class="form-control" />
															</div>
														</div>
													</div>

													<div class="row">
														<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
															<div class="form-group">
																<label>¿Persona con discapacidad?:</label>
																<br>
																<div class="btn-group" data-toggle="buttons">
																  <label class="btn btn-primary btn-sm">
																    <input type="radio" name="discapacidad" value="si" autocomplete="off"> Sí
																  </label>
																  <label class="btn btn-primary btn-sm active">
																    <input type="radio" name="discapacidad" value="no" autocomplete="off" checked> No
																  </label>
																</div>
															</div>
														</div>
														<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
															<div class="form-group">
																<label>Si sí, ¿de qué tipo?:</label>
																<br>
																<div class="btn-group" data-toggle="buttons">
																  <label class="btn btn-primary btn-sm">
																    <input type="radio" name="tipo" value="fisica" autocomplete="off"> Física
																  </label>
																  <label class="btn btn-primary btn-sm">
																    <input type="radio" name="tipo" value="auditiva" autocomplete="off"> Auditiva
																  </label>
																	<label class="btn btn-primary btn-sm">
																    <input type="radio" name="tipo" value="mental" autocomplete="off"> Mental
																  </label>
																	<label class="btn btn-primary btn-sm active">
																    <input type="radio" name="tipo" value="ninguna" autocomplete="off" checked> Ninguna
																  </label>
																</div>
															</div>
														</div>
													</div>

													<div class="row">
														<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
															<div class="form-group">
																<label>Observaciones:</label>
																<input type="text" name="observaciones" class="form-control" />
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col-xs-12">
															<div class="form-group">
																<label class="title">Objetivo profesional:</label>
																<!--<textarea row="4" name="objetivo" class="form-control"></textarea>-->
																<select id="objetivo" name="objetivo" class="form-control">
																	<option value="">Seleccionar</option>
																	<option value="Compras">Compras</option>
																	<option value="Servicio al consumidor">Servicio al consumidor</option>
																	<option value="Pasantía">Pasantía</option>
																	<option value="Fábrica y Operaciones">Fábrica y Operaciones</option>
																	<option value="Facility (no sé cómo traducirlo, lo confirmo y te aviso)">Facility (no sé cómo traducirlo, lo confirmo y te aviso)</option>
																	<option value="Finanzas y Administración">Finanzas y Administración</option>
																	<option value="Logística y Distribución">Logística y Distribución</option>
																	<option value="Marketing">Marketing</option>
																	<option value="Investigación y Desarrollo">Investigación y Desarrollo</option>
																	<option value="Calidad">Calidad</option>
																	<option value="Recursos Humanos">Recursos Humanos</option>
																	<option value="Ventas">Ventas</option>
																</select>
															</div>
														</div></div>
													</div>

													<div class="row">
														<div class="col-xs-12">
															<div class="form-group">
																<label>Adjuntar CV:</label>
																<input type="file" name='my_file' class="form-control" />
															</div>
														</div>
													</div>

												</div>
											</div>

											<?php
											/*
											<div class="row">
												<div class="col-xs-12">
													<label class="title">Empleo actual/anteriores:</label>
													<div class="group-wrapper">
														<div class="row">
															<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 empleos">

																<div class="empleo">
																	<div class="row">
																		<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
																			<div class="form-group">
																				<label>Empresa:</label>
																				<input type="text" name="empresa[]" class="form-control" />
																			</div>
																		</div>
																		<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
																			<div class="form-group">
																				<label>Cargo:</label>
																				<input type="text" name="cargo[]" class="form-control" />
																			</div>
																		</div>
																		<div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
																			<div class="form-group">
																				<label>Tareas:</label>
																				<input type="text" name="tareas[]" class="form-control" />
																			</div>
																		</div>
																		<div class="col-xs-12 col-sm-4 col-md-1 col-lg-1">
																			<div class="form-group">
																				<label>&nbsp;</label><br>
																				<a href="#" class="btn form-control eliminar-btn" style="color:#fff;background-color:red;border-color:red;">X</a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="empleos-dpl"></div>
															</div>
															<!--<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
																<label>&nbsp;</label>
																<a href="#" class="btn form-control" id="agregar-mas-btn" style="color:#fff;">Agregar más</a>
															</div>-->
														</div>
														<div class="row">
															<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-right">
																<a href="#" class="btn" id="agregar-mas-btn" style="color:#fff;">Agregar más</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											*/
											?>

											<?php /*
											<div class="row">
												<div class="col-xs-12">
													<label class="title">Formación académica:</label>
													<div class="group-wrapper">
														<div class="row">
															<div class="col-xs-12">
																<div class="form-group">

																	<div class="row">
																		<div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
																			<div class="btn-group" data-toggle="buttons" style="width:100%;">
																				<label>Escuela secundaria:</label>
																				<br>
																				<label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="escuela" value="Completo" autocomplete="off"> Completo
																			  </label>
																			  <label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="escuela" value="Incompleto/Interrumpido" autocomplete="off"> Incompleto
																			  </label>
																				<label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="escuela" value="Cursando" autocomplete="off"> Cursando
																			  </label>
																			</div>
																		</div>
																		<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
																			<div id="escuela_finaliza" style="display:none">
																				<div class="inline-block">Finaliza</div>
																				<!--<input type="date" name="escuela_finaliza" class="form-control" />-->
																				<input type="text" name="escuela_finaliza" class="form-control" placeholder="dd/mm/yyyy" />
																			</div>
																		</div>
																	</div>

																	<br>

																	<div class="row">
																		<div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
																			<div class="btn-group" data-toggle="buttons" style="width:100%;">
																				<label>Terciario:</label>
																				<br>
																				<label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="terciario" value="Completo" autocomplete="off"> Completo
																			  </label>
																			  <label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="terciario" value="Incompleto/Interrumpido" autocomplete="off"> Incompleto
																			  </label>
																				<label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="terciario" value="Cursando" autocomplete="off"> Cursando
																			  </label>
																			</div>
																		</div>
																		<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
																			<div id="terciario_finaliza" style="display:none">
																				<div class="inline-block">Finaliza</div>
																				<input type="text" name="terciario_finaliza" class="form-control" placeholder="dd/mm/yyyy" />
																			</div>
																		</div>
																	</div>

																	<br>

																	<div class="row">
																		<div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
																			<div class="btn-group" data-toggle="buttons" style="width:100%;">
																				<label>Universitario:</label>
																				<br>
																				<label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="universitario" value="Completo" autocomplete="off"> Completo
																			  </label>
																			  <label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="universitario" value="Incompleto/Interrumpido" autocomplete="off"> Incompleto
																			  </label>
																				<label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="universitario" value="Cursando" autocomplete="off"> Cursando
																			  </label>
																			</div>
																		</div>
																		<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
																			<div id="universitario_finaliza" style="display:none">
																				<div class="inline-block">Finaliza</div>
																				<input type="text" name="universitario_finaliza" class="form-control" placeholder="dd/mm/yyyy" />
																			</div>
																		</div>
																	</div>

																	<br>

																	<div class="row">
																		<div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
																			<div class="btn-group" data-toggle="buttons" style="width:100%;">
																				<label>Posgrado/MBA:</label><br>
																				<label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="posgrado" value="Completo" autocomplete="off"> Completo
																			  </label>
																			  <label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="posgrado" value="Incompleto/Interrumpido" autocomplete="off"> Incompleto
																			  </label>
																				<label class="btn btn-primary btn-lg" style="width:33%">
																			    <input type="radio" name="posgrado" value="Cursando" autocomplete="off"> Cursando
																			  </label>
																			</div>
																		</div>
																		<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
																			<div id="posgrado_finaliza" style="display:none">
																				<div class="inline-block">Finaliza</div>
																				<input type="text" name="posgrado_finaliza" class="form-control" placeholder="dd/mm/yyyy" />
																			</div>
																		</div>
																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											*/
											?>

											<div class="row">
												<div class="col-xs-12">
													<label class="title">Salario:</label>
													<div class="group-wrapper">
														<div class="row">
															<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
																<div class="form-group">
																	<label>Remuneración pretendida:</label>
																	<input type="number" name="salario" class="form-control" placeholder="$" />
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-xs-12 text-center">
													<br>
													<button class="btn">Enviar</button>
												</div>
											</div>
										</form>
									</div>
									<br><br>
							</div>
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
