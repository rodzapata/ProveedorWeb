update com_cxca01 set fch_fac=CONVERT(DATE, FORMAT(fecham, 'yyyy-MM-dd')) 
where nomsis='fa' and numfac<'012026' and fecham<'21/07/2025'