EXEC sp_addlinkedserver
@server='SQLEXPRESS2005', /* local SQL name given to the linked server */
@srvproduct='NULL', /* not used */
@provider='SQLOLEDB', /* OLE DB provider */
@datasrc='PC127\SQLEXPRESS2005', /* analysis server name (machine name) */
@catalog='proveedor' /* default catalog/database */
----
EXEC sp_addlinkedsrvlogin
@rmtsrvname='SQLEXPRESS2005',
@useself='false',
@rmtuser ='sa',
@rmtpassword = 'Clave01.' --*/

select *  from SQLEXPRESS2005.proveedor.dbo.dian_dpto 

select *  from SQLEXPRESS2005.proveedor.dbo.dian_terceros

select * from menu order by id
select category, item, icon, link from Servi_ot_local.servi_ot.dbo.menu order by id

insert menu(category, item, icon, link)
select category, item, icon, link from Servi_ot_local.servi_ot.dbo.menu order by id

insert user_login(full_name, born_date, state, email, phone, avatar, password, rol_id)
select full_name, born_date, state, email, phone, avatar, password, rol_id 
from Servi_ot_local.servi_ot.dbo.user_login order by id

select * from Servi_ot_local.servi_ot.dbo.user_login order by id

insert user_permission(user_login_id, menu_id)
select user_login_id, menu_id  from Servi_ot_local.servi_ot.dbo.user_permission order by id