create database back2enjoyv2;
use back2enjoyv2;
Select * from usuarios;
INSERT INTO usuarios (nombre, apellidos, nombreUsuario, DNI, correo, contraseña, validado, email_verified_at, rol_usuario_id, created_at, updated_at) 
VALUES ('Admin', 'Istrador', 'admin', '12345678A', 'admin@example.com', '$2y$10$dXJ4ZyM5z5G3Y5XUWxTleOORQfB0yEKFlh5v5GbBZ/BZ3v/EoFHYu', 1, NOW(), 1, NOW(), NOW());

-- Actualiza el ID del rol de administrador a 1
UPDATE roles_usuarios SET id = 1 WHERE id = 3;

-- Actualiza las referencias en la tabla usuarios
UPDATE usuarios SET rol_usuario_id = 1 WHERE rol_usuario_id = 3;

UPDATE roles_usuarios
SET contraseña = NULL
WHERE id = 2;

DELETE FROM usuarios
WHERE rol_usuario_id = 1;

UPDATE  usuarios SET email_verified_at = now() WHERE rol_usuario_id = 1;