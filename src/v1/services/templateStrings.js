/* eslint-disable no-unused-expressions */
/* eslint-disable no-unreachable */
/* eslint-disable arrow-body-style */
const createAdminEmailTemplate = ({ username, password, loginUrl }) => {
	return `
		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
		<head> 
		<meta charset="UTF-8"> 
		<meta content="width=device-width, initial-scale=1" name="viewport"> 
		<meta name="x-apple-disable-message-reformatting"> 
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
		<meta content="telephone=no" name="format-detection"> 
		<title>The Zenpens</title> 
		<!--[if (mso 16)]>
			<style type="text/css">
			a {text-decoration: none;}
			</style>
			<![endif]--> 
		<!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
		<!--[if gte mso 9]>
		<xml>
			<o:OfficeDocumentSettings>
			<o:AllowPNG></o:AllowPNG>
			<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
		<![endif]--> 
		<!--[if !mso]><!-- --> 
		<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"> 
		<!--<![endif]--> 
		<style type="text/css">
		#outlook a {
			padding:0;
		}
		.ExternalClass {
			width:100%;
		}
		.ExternalClass,
		.ExternalClass p,
		.ExternalClass span,
		.ExternalClass font,
		.ExternalClass td,
		.ExternalClass div {
			line-height:100%;
		}
		.es-button {
			mso-style-priority:100!important;
			text-decoration:none!important;
		}
		a[x-apple-data-detectors] {
			color:inherit!important;
			text-decoration:none!important;
			font-size:inherit!important;
			font-family:inherit!important;
			font-weight:inherit!important;
			line-height:inherit!important;
		}
		.es-desk-hidden {
			display:none;
			float:left;
			overflow:hidden;
			width:0;
			max-height:0;
			line-height:0;
			mso-hide:all;
		}
		@media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } }
		</style> 
		</head> 
		<body style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
		<div class="es-wrapper-color" style="background-color:#F4F4F4"> 
		<!--[if gte mso 9]>
					<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
						<v:fill type="tile" color="#f4f4f4"></v:fill>
					</v:background>
				<![endif]--> 
		<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
			<tr class="gmail-fix" height="0" style="border-collapse:collapse"> 
			<td style="padding:0;Margin:0"> 
			<table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px"> 
				<tr style="border-collapse:collapse"> 
				<td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://esputnik.com/repository/applications/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td> 
				</tr> 
			</table></td> 
			</tr> 
			<tr style="border-collapse:collapse"> 
			<td valign="top" style="padding:0;Margin:0"> 
			<table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#FFA73B;background-repeat:repeat;background-position:center top"> 
				<tr style="border-collapse:collapse"> 
				<td align="center" bgcolor="#ffffff" style="padding:0;Margin:0;background-color:#FFFFFF"> 
				<table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:580px"> 
						<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="padding:0;Margin:0;padding-left:10px;padding-right:10px;font-size:0px"><img src="https://ofqhml.stripocdn.email/content/guids/CABINET_1b571c02628dc5637f161c88ebd4545d/images/81471610372915958.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="90"></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table> 
			<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
				<tr style="border-collapse:collapse"> 
				<td style="padding:0;Margin:0;background-color:#0D8B4C" bgcolor="#0d8b4c" align="center"> 
				<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="padding:0;Margin:0"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
						<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="Margin:0;padding-bottom:5px;padding-top:10px;padding-left:30px;padding-right:30px"><h1 style="Margin:0;line-height:40px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:33px;font-style:normal;font-weight:normal;color:#111111;text-align:left">Welcome admin&nbsp;<strong>${username}</strong>!</h1></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td bgcolor="#ffffff" align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0"> 
							<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
								<tr style="border-collapse:collapse"> 
								<td style="padding:0;Margin:0;border-bottom:1px solid #FFFFFF;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
								</tr> 
							</table></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table> 
			<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
				<tr style="border-collapse:collapse"> 
				<td align="center" style="padding:0;Margin:0"> 
				<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="padding:0;Margin:0"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
						<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#FFFFFF" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">Your account has been created on Zenpens as an Admin! We are&nbsp;excited to have you get started.&nbsp;</p></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#044625;background:#0D8B4C;border-width:1px;display:inline-block;border-radius:28px;width:auto"><a href="${loginUrl}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:24px;color:#FFFFFF;border-style:solid;border-color:#0D8B4C;border-width:15px 99px;display:inline-block;background:#0D8B4C;border-radius:28px;font-weight:normal;font-style:normal;line-height:29px;width:auto;text-align:center">Click to Log In</a></span></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="center" style="padding:0;Margin:0;padding-top:5px;padding-left:30px;padding-right:30px">OR Copy the link below<br><a target="_blank" href="${loginUrl}" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;text-decoration:underline;color:#4067FE"><br>${loginUrl}</a></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="Margin:0;padding-bottom:5px;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">Below here is your password to the Zenpens Admin, you are advised to change it once you log in.</p></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td align="center" bgcolor="#0d8b4c" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:30px;font-family:'times new roman', times, baskerville, georgia, serif;line-height:45px;color:#FFFFFF"><strong>${password}</strong></p></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">If you have any questions, just reply to this email—we're always happy to help out.</p></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">Cheers,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">The Zenpens Team</p></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table> 
			<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
				<tr style="border-collapse:collapse"> 
				<td align="center" style="padding:0;Margin:0"> 
				<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="padding:0;Margin:0"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
						<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0"> 
							<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
								<tr style="border-collapse:collapse"> 
								<td style="padding:0;Margin:0;border-bottom:1px solid #F4F4F4;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
								</tr> 
							</table></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table></td> 
			</tr> 
		</table> 
		</div>  
		</body>
		</html>
	`;
};

const emailVerifyTemplate = ({ username, link }) => {
	return `
		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
		<head> 
		<meta charset="UTF-8"> 
		<meta content="width=device-width, initial-scale=1" name="viewport"> 
		<meta name="x-apple-disable-message-reformatting"> 
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
		<meta content="telephone=no" name="format-detection"> 
		<title>The Zenpens</title> 
		<!--[if (mso 16)]>
			<style type="text/css">
			a {text-decoration: none;}
			</style>
			<![endif]--> 
		<!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
		<!--[if gte mso 9]>
		<xml>
			<o:OfficeDocumentSettings>
			<o:AllowPNG></o:AllowPNG>
			<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
		<![endif]--> 
		<!--[if !mso]><!-- --> 
		<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"> 
		<!--<![endif]--> 
		<style type="text/css">
		#outlook a {
			padding:0;
		}
		.ExternalClass {
			width:100%;
		}
		.ExternalClass,
		.ExternalClass p,
		.ExternalClass span,
		.ExternalClass font,
		.ExternalClass td,
		.ExternalClass div {
			line-height:100%;
		}
		.es-button {
			mso-style-priority:100!important;
			text-decoration:none!important;
		}
		a[x-apple-data-detectors] {
			color:inherit!important;
			text-decoration:none!important;
			font-size:inherit!important;
			font-family:inherit!important;
			font-weight:inherit!important;
			line-height:inherit!important;
		}
		.es-desk-hidden {
			display:none;
			float:left;
			overflow:hidden;
			width:0;
			max-height:0;
			line-height:0;
			mso-hide:all;
		}
		@media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } }
		</style> 
		</head> 
		<body style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
		<div class="es-wrapper-color" style="background-color:#F4F4F4"> 
		<!--[if gte mso 9]>
					<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
						<v:fill type="tile" color="#f4f4f4"></v:fill>
					</v:background>
				<![endif]--> 
		<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
			<tr class="gmail-fix" height="0" style="border-collapse:collapse"> 
			<td style="padding:0;Margin:0"> 
			<table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px"> 
				<tr style="border-collapse:collapse"> 
				<td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://esputnik.com/repository/applications/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td> 
				</tr> 
			</table></td> 
			</tr> 
			<tr style="border-collapse:collapse"> 
			<td valign="top" style="padding:0;Margin:0"> 
			<table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#FFA73B;background-repeat:repeat;background-position:center top"> 
				<tr style="border-collapse:collapse"> 
				<td align="center" bgcolor="#ffffff" style="padding:0;Margin:0;background-color:#FFFFFF"> 
				<table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:580px"> 
						<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="padding:0;Margin:0;padding-left:10px;padding-right:10px;font-size:0px"><img src="https://ofqhml.stripocdn.email/content/guids/CABINET_324f8342dca7896d7f67424166354870/images/81471610372915958.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="90"></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table> 
			<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
				<tr style="border-collapse:collapse"> 
				<td style="padding:0;Margin:0;background-color:#0D8B4C" bgcolor="#0d8b4c" align="center"> 
				<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="padding:0;Margin:0"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
						<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="Margin:0;padding-bottom:5px;padding-top:10px;padding-left:30px;padding-right:30px"><h1 style="Margin:0;line-height:40px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:33px;font-style:normal;font-weight:normal;color:#111111;text-align:left">Welcome zen <strong>${username}</strong>!</h1></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td bgcolor="#ffffff" align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0"> 
							<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
								<tr style="border-collapse:collapse"> 
								<td style="padding:0;Margin:0;border-bottom:1px solid #FFFFFF;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
								</tr> 
							</table></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table> 
			<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
				<tr style="border-collapse:collapse"> 
				<td align="center" style="padding:0;Margin:0"> 
				<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="padding:0;Margin:0"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
						<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#FFFFFF" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:35px;padding-bottom:35px"><span class="es-button-border" style="border-style:solid;border-color:#FFA73B;background:#0D8B4C;border-width:1px;display:inline-block;border-radius:2px;width:auto"><a href="${link}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:20px;color:#FFFFFF;border-style:solid;border-color:#0D8B4C;border-width:15px 30px;display:inline-block;background:#0D8B4C;border-radius:2px;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center"> Confirm Account</a></span></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">If that doesn't work, copy and paste the following link in your browser:</p></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><a target="_blank" href="${link}" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;text-decoration:underline;color:#4067FE">${link}</a></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">If you have any questions, just reply to this email—we're always happy to help out.</p></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">Cheers,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">The Zenpens Team</p></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table> 
			<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
				<tr style="border-collapse:collapse"> 
				<td align="center" style="padding:0;Margin:0"> 
				<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="padding:0;Margin:0"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
						<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0"> 
							<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
								<tr style="border-collapse:collapse"> 
								<td style="padding:0;Margin:0;border-bottom:1px solid #F4F4F4;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
								</tr> 
							</table></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table></td> 
			</tr> 
		</table> 
		</div>  
		</body>
		</html>
	`;
};

const passwordResetTemplate = ({ username, link }) => {
	return `
		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
		<head> 
		<meta charset="UTF-8"> 
		<meta content="width=device-width, initial-scale=1" name="viewport"> 
		<meta name="x-apple-disable-message-reformatting"> 
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
		<meta content="telephone=no" name="format-detection"> 
		<title>The Zenpens</title> 
		<!--[if (mso 16)]>
			<style type="text/css">
			a {text-decoration: none;}
			</style>
			<![endif]--> 
		<!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
		<!--[if gte mso 9]>
		<xml>
			<o:OfficeDocumentSettings>
			<o:AllowPNG></o:AllowPNG>
			<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
		<![endif]--> 
		<!--[if !mso]><!-- --> 
		<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"> 
		<!--<![endif]--> 
		<style type="text/css">
		#outlook a {
			padding:0;
		}
		.ExternalClass {
			width:100%;
		}
		.ExternalClass,
		.ExternalClass p,
		.ExternalClass span,
		.ExternalClass font,
		.ExternalClass td,
		.ExternalClass div {
			line-height:100%;
		}
		.es-button {
			mso-style-priority:100!important;
			text-decoration:none!important;
		}
		a[x-apple-data-detectors] {
			color:inherit!important;
			text-decoration:none!important;
			font-size:inherit!important;
			font-family:inherit!important;
			font-weight:inherit!important;
			line-height:inherit!important;
		}
		.es-desk-hidden {
			display:none;
			float:left;
			overflow:hidden;
			width:0;
			max-height:0;
			line-height:0;
			mso-hide:all;
		}
		@media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } }
		</style> 
		</head> 
		<body style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
		<div class="es-wrapper-color" style="background-color:#F4F4F4"> 
		<!--[if gte mso 9]>
					<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
						<v:fill type="tile" color="#f4f4f4"></v:fill>
					</v:background>
				<![endif]--> 
		<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
			<tr class="gmail-fix" height="0" style="border-collapse:collapse"> 
			<td style="padding:0;Margin:0"> 
			<table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px"> 
				<tr style="border-collapse:collapse"> 
				<td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://esputnik.com/repository/applications/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td> 
				</tr> 
			</table></td> 
			</tr> 
			<tr style="border-collapse:collapse"> 
			<td valign="top" style="padding:0;Margin:0"> 
			<table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#FFA73B;background-repeat:repeat;background-position:center top"> 
				<tr style="border-collapse:collapse"> 
				<td align="center" bgcolor="#ffffff" style="padding:0;Margin:0;background-color:#FFFFFF"> 
				<table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:580px"> 
						<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="padding:0;Margin:0;padding-left:10px;padding-right:10px;font-size:0px"><img src="https://ofqhml.stripocdn.email/content/guids/CABINET_324f8342dca7896d7f67424166354870/images/81471610372915958.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="90"></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table> 
			<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
				<tr style="border-collapse:collapse"> 
				<td style="padding:0;Margin:0;background-color:#0D8B4C" bgcolor="#0d8b4c" align="center"> 
				<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="padding:0;Margin:0"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
						<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="Margin:0;padding-bottom:5px;padding-top:10px;padding-left:30px;padding-right:30px"><h1 style="Margin:0;line-height:40px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:33px;font-style:normal;font-weight:normal;color:#111111;text-align:left">Welcome zen <strong>${username}</strong>!</h1></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td bgcolor="#ffffff" align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0"> 
							<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
								<tr style="border-collapse:collapse"> 
								<td style="padding:0;Margin:0;border-bottom:1px solid #FFFFFF;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
								</tr> 
							</table></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table> 
			<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
				<tr style="border-collapse:collapse"> 
				<td align="center" style="padding:0;Margin:0"> 
				<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="padding:0;Margin:0"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
						<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#FFFFFF" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">A request has been received to change the password to your Zenpens account.</p></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:35px;padding-bottom:35px"><span class="es-button-border" style="border-style:solid;border-color:#FFA73B;background:#0D8B4C;border-width:1px;display:inline-block;border-radius:2px;width:auto"><a href="${link}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:20px;color:#FFFFFF;border-style:solid;border-color:#0D8B4C;border-width:15px 30px;display:inline-block;background:#0D8B4C;border-radius:2px;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center"> Reset Password</a></span></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">If that doesn't work, copy and paste the following link in your browser:</p></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><a target="_blank" href="${link}" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;text-decoration:underline;color:#4067FE">${link}</a></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">If you have any questions, just reply to this email—we're always happy to help out.</p></td> 
							</tr> 
							<tr style="border-collapse:collapse"> 
							<td class="es-m-txt-l" align="left" style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">Cheers,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">The Zenpens Team</p></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table> 
			<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
				<tr style="border-collapse:collapse"> 
				<td align="center" style="padding:0;Margin:0"> 
				<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
					<tr style="border-collapse:collapse"> 
					<td align="left" style="padding:0;Margin:0"> 
					<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
						<tr style="border-collapse:collapse"> 
						<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
						<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
							<tr style="border-collapse:collapse"> 
							<td align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0"> 
							<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
								<tr style="border-collapse:collapse"> 
								<td style="padding:0;Margin:0;border-bottom:1px solid #F4F4F4;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
								</tr> 
							</table></td> 
							</tr> 
						</table></td> 
						</tr> 
					</table></td> 
					</tr> 
				</table></td> 
				</tr> 
			</table></td> 
			</tr> 
		</table> 
		</div>  
		</body>
		</html>
	`;
};

module.exports = {
	createAdminEmailTemplate,
	emailVerifyTemplate,
	passwordResetTemplate,
};
