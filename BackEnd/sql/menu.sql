
--drop table menu

CREATE TABLE [dbo].[menu](
	[category] [varchar](255) NULL,
	[item] [varchar](255) NULL,
	[icon] [varchar](255) NULL,
	[link] [varchar](255) NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_menu] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--select * from menu
insert menu(category, item, icon, link) values('Dashboard','Dashboard','MdOutlineAnalytics','/Dashborad')
insert menu(category, item, icon, link) values('Master','empresas','AiOutlineUser','/crear-empresa')
insert menu(category, item, icon, link) values('Master','terceros','AiOutlineUser','/crear-terceros')
insert menu(category, item, icon, link) values('Master','departamentos','AiOutlineUser','/crear-departamentos')
insert menu(category, item, icon, link) values('Master','municipios','AiOutlineUser','/crear-municipios')
insert menu(category, item, icon, link) values('Master','PUC','AiOutlineUser','/crear-puc')
insert menu(category, item, icon, link) values('Master','productos','AiOutlineUser','/crear-productos')

insert menu(category, item, icon, link) values('transation','compras','AiOutlineApartment','/crear-compras')
insert menu(category, item, icon, link) values('transation','ventas','AiOutlineApartment','/crear-ventas')
insert menu(category, item, icon, link) values('transation','plantilla compras','AiOutlineApartment','/crear-plantilla-compras')
insert menu(category, item, icon, link) values('transation','plantilla ventas (caja regisradora)','AiOutlineApartment','/crear-plantilla-ventas')
insert menu(category, item, icon, link) values('transation','pago a proveedores','AiOutlineApartment','/pago-proveedores')
insert menu(category, item, icon, link) values('transation','pago a clientes','AiOutlineApartment','/pago-clientes')

insert menu(category, item, icon, link) values('find','consultar exogena DIAN','MdOutlineAnalytics','/consultar-exogena')
insert menu(category, item, icon, link) values('find','consultar Medios','MdOutlineAnalytics','/consultar-medios')
insert menu(category, item, icon, link) values('find','consultar Libro Auxiliar','MdOutlineAnalytics','/consultar-libro-auxiliara')
insert menu(category, item, icon, link) values('find','consultar comprobantes','MdOutlineAnalytics','/consultar-comprobantes')
insert menu(category, item, icon, link) values('find','consultar comprobantes descuadrados','MdOutlineAnalytics','/consultar-comprobantes-descuadre')
insert menu(category, item, icon, link) values('find','Consultar Cartera','MdOutlineAnalytics','/consultar-cartera')
insert menu(category, item, icon, link) values('find','consultar Ventas','MdOutlineAnalytics','/consultar-ventas')
insert menu(category, item, icon, link) values('find','Extracto proveedores','MdOutlineAnalytics','/consultar-extracto-proveedores')

insert menu(category, item, icon, link) values('book','Libro diario Oficial','MdOutlineAnalytics','/libro-diario')
insert menu(category, item, icon, link) values('book','Libro oficial resumido','MdOutlineAnalytics','/libro-diario-resumido')

insert menu(category, item, icon, link) values('import','importar Plantilla DIAN','MdOutlineAnalytics','/import-plantilla-dian')
insert menu(category, item, icon, link) values('import','importar departamentos DIAN','MdOutlineAnalytics','/import-dptodo-dian')
insert menu(category, item, icon, link) values('import','importar municipios DIAN','MdOutlineAnalytics','/import-municipios-dian')
insert menu(category, item, icon, link) values('import','importar terceros DIAN','MdOutlineAnalytics','/import-terceros-dian')
insert menu(category, item, icon, link) values('import','importar PUC','MdOutlineAnalytics','/import-puc')

insert menu(category, item, icon, link) values('config','Configuracion Contable','MdOutlineAnalytics','/config-contable')

insert menu(category, item, icon, link) values('salir','Configuracion Contable','MdLogout','/salir')

-----
/*
clave wifi
44.38.familia.romero
*/
