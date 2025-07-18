drop DATABASE proveedorWeb
GO
CREATE DATABASE [proveedorWeb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'proveedorWeb', FILENAME = N'C:\ProveedorWeb\data\proveedorWeb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'proveedorWeb_log', FILENAME = N'C:\ProveedorWeb\data\proveedorWeb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
USE proveedorWeb
GO
drop table dian_dpto
CREATE TABLE [dbo].[dian_dpto](
	[codDpto] [char](3) NOT NULL default(''),
	[nombreDpto] [varchar](40) NULL default(''),
	id int identity(1,1) primary key
)

GO
ALTER TABLE dian_dpto ADD CONSTRAINT uq_codDpto UNIQUE (codDpto)

--insertamos los Dpto
insert dian_dpto(codDpto,nombreDpto)
select codDpto,nombreDpto from SQLEXPRESS2005.proveedor.dbo.dian_dpto order by id
GO
update dian_dpto set nombreDpto=rtrim(ltrim(nombreDpto))

--drop table dian_municipio
CREATE TABLE [dbo].[dian_municipio](
	[codDpto] [varchar](3) NULL default(''),
	[codMunicipio] [varchar](5) NULL default(''),
	[nombreCiudad] [varchar](50) NULL default(''),
	id int identity (1,1) primary key,
	dpto_id int 
) 

---insertamos los municipios
insert dian_municipio(codDpto, codMunicipio, nombreCiudad, dpto_id)
select codDpto, codMunicipio, nombreCiudad, dpto_id from SQLEXPRESS2005.proveedor.dbo.dian_municipios order by id


update dian_municipio set nombreCiudad=rtrim(ltrim(nombreciudad))

drop table [prov_user]
CREATE TABLE [dbo].[prov_user](
	id int identity(1,1) primary key,
	username [varchar](30) NOT NULL default(''),
	password [varchar](250) NULL default(''),
	createdAt datetime,
	authStrategy varchar(250) default('')
)
insert prov_user(username, password, createdAt, authStrategy)
values('rzapata','Clave01.','05/07/2025','facebock.com')

select * from prov_user

--terceros
drop table dian_terceros
CREATE TABLE [dbo].[dian_terceros](
	[id] [int] IDENTITY(1,1) primary key,
	[nit] [varchar](20) NULL,
	[nit_dian] [varchar](20) NULL,
	[apellido1] [varchar](20) NULL,
	[apellido2] [varchar](20) NULL,
	[nombre1] [varchar](20) NULL,
	[nombre2] [varchar](20) NULL,
	[tipo_doc] [varchar](2) NULL DEFAULT (''),
	[razon] [varchar](130) NULL DEFAULT (''),
	[nomb_terce] [varchar](130) NULL DEFAULT (''),
	[direccion] [varchar](60) NULL DEFAULT (''),
	[codDpto] [varchar](3) NULL DEFAULT (''),
	[codMunicipio] [varchar](5) NULL DEFAULT (''),
	[unirMunicipio] [varchar](8) NULL DEFAULT (''),
	[excluir_compras] [numeric](1, 0) NULL DEFAULT ((0)),
	municipioId int default(0)
)

insert dian_terceros(nit, nit_dian, apellido1, apellido2,
	nombre1, nombre2, tipo_doc, razon, nomb_terce, direccion,
	codDpto, codMunicipio, unirMunicipio, excluir_compras)
select nit, nit_dian, apellido1, apellido2,
	nombre1, nombre2, tipo_doc, razon, nomb_terce, direccion,
	codDpto, codMunicipio, unirMunicipio, excluir_compras
from SQLEXPRESS2005.proveedor.dbo.dian_terceros
order by id


--select * from dian_terceros

select * from dian_dpto
select * from dian_municipio