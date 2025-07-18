select m.codMunicipio, m.nombreCiudad, m.id, m.dpto_id, d.nombreDpto 
	from dian_municipio m left join dian_dpto d on m.dpto_id=d.id
where m.dpto_id=1

