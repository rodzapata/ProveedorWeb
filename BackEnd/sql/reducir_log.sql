-- Cambiar a modo SIMPLE
ALTER DATABASE proveedorWeb SET RECOVERY SIMPLE;
GO

-- Reducir el log
DBCC SHRINKFILE (proveedorWeb, 1)
DBCC SHRINKFILE (proveedorWeb_log, 1)

GO

-- (Opcional) Volver a modo FULL si quieres
ALTER DATABASE proveedorWeb SET RECOVERY FULL;
GO
