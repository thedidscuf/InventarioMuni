import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('8f4eaeaf-11ec-422c-85ad-8d14f62e3aa0', '10Izaiah33@hotmail.com', 'Luis Rodriguez', 'https://i.imgur.com/YfJQV5z.png?id=12', 'inv12345', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('da0dc276-aa1c-4e1c-99e4-5dbd464430eb', '19Macy19@yahoo.com', 'Maria Gomez', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv12345', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('48e413d2-1fe1-48fa-9742-56d67e200e0b', '28Emanuel_Okuneva55@hotmail.com', 'Juan Perez', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv11223', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('b67ede30-5b6c-4675-bdf8-348848935a9b', '37Kelly.Boehm@gmail.com', 'Carlos Lopez', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inv78901', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('4eccc715-e576-4139-b1ba-8fde2d236d5a', '46Mathew.Block@yahoo.com', 'Maria Gomez', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv12345', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('14edf082-8ecb-44dc-9571-27b404373ba3', '55Lowell_Kemmer@gmail.com', 'Maria Gomez', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inv78901', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('7073fdd8-8574-4ee8-bfec-de91555cb843', '64Brant.Prosacco@hotmail.com', 'Carlos Lopez', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv78901', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('ef5964cd-8d4e-44bd-91e1-9408f6221a80', '73Elijah_Bechtelar39@gmail.com', 'Maria Gomez', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv12345', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('eaefaf5e-aaa8-46cb-bf65-77c87456477b', '82Emmet.Douglas93@yahoo.com', 'Ana Martinez', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv12345', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('fbea70e2-87dc-4e3e-b214-9397ef978e10', 'RV67890', '{"voluptate":"stabilis","vergo":"deprecator","cras":"voro","clarus":"quas","accedo":"tardus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('4e88de4d-bc62-4c79-83fe-b0d2ac24272e', 'RV11223', '{"apparatus":"capitulus","delectus":"depromo","subito":"adeptio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('4d44b74b-d6ed-4b65-9a37-b84b509d8a49', 'RV54321', '{"compello":"amoveo","abutor":"chirographum","bis":"voluptas","amita":"subito","assentator":"degero"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d58ffc5b-22b8-47e2-a346-f6c3c2024ea4', 'RV11223', '{"varius":"volubilis","claustrum":"tenuis","verto":"sursum","ademptio":"casso"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('5c684d8b-19fb-485b-b392-b322c7851bb3', 'RV12345', '{"vulgo":"abduco","vorax":"cupiditas","caste":"tergeo","aut":"turba","iusto":"auxilium"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('c39bfdaf-d67f-4da0-9627-f65080f1aec0', 'RV67890', '{"avarus":"cotidie","despecto":"velum","deserunt":"aro"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d96048ce-8b0e-4ff6-acd9-13c35b3cf425', 'RV12345', '{"ut":"aggredior","dicta":"spoliatio","commodo":"textus","sono":"at"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('0478032c-8253-48dc-a7bf-b73e9099a313', 'RV67890', '{"vespillo":"delinquo","stella":"ultio","torqueo":"virga","decor":"arbor","taedium":"cetera"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('64215079-b045-40ca-8cd2-9ecd2d61d593', 'RV11223', '{"carmen":"demoror","totidem":"vulpes","arcus":"vicinus","ventito":"adinventitias"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('977357ba-bef7-4130-880e-0b0836db76be', 'RV54321', '{"mollitia":"sordeo","nulla":"unus","subvenio":"voluntarius"}'::jsonb);

INSERT INTO "RoleData" ("id", "name", "description") VALUES ('fe80d31c-720f-486f-a651-cb7069eee5bf', 'Invitado', 'Acceso solo para consulta');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('1c4034e0-945b-4a13-a24e-12fb63b06296', 'Administrador', 'Acceso limitado a ciertas funciones');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('fbb94f75-f48c-462d-9509-08f60eae4d55', 'Operador', 'Acceso completo al sistema');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('f11cb0f6-cb47-4987-8f27-6b897766d7c2', 'Operador', 'Acceso completo al sistema');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('1e49618b-9d83-4401-a151-4bb1ba18d0b0', 'Invitado', 'Acceso completo al sistema');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('86a65a0c-bbd5-4ee5-9cb8-fa5021530fab', 'Administrador', 'Supervisa y gestiona inventarios');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('a3d8c9ba-d562-4055-af82-51c063c49a6c', 'Usuario', 'Acceso limitado a ciertas funciones');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('3dca933d-c759-4df2-8ea1-098bfc92716d', 'Administrador', 'Acceso limitado a ciertas funciones');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('4df0f80e-bd76-4d1b-8aa0-0ee0674881bf', 'Usuario', 'Supervisa y gestiona inventarios');
INSERT INTO "RoleData" ("id", "name", "description") VALUES ('6374a922-b769-4b1d-b2d8-d1fffd29741f', 'Usuario', 'Acceso solo para consulta');

INSERT INTO "Location" ("id", "name", "address", "type") VALUES ('12d2590f-3279-49ed-af62-ef75075292b6', 'Depsito Norte', '152 443 E 6th St, New York, NY 10009', 'Bodega');
INSERT INTO "Location" ("id", "name", "address", "type") VALUES ('c88350fb-de31-4a4f-9d0b-0ac56f2695f1', 'Bodega Municipal', '156 136 E 13th St, New York, NY 10003', 'Almacn');
INSERT INTO "Location" ("id", "name", "address", "type") VALUES ('78b28af9-eac7-4f59-8d4c-a32948589023', 'Bodega Municipal', '160 330 W Broadway, New York, NY 10013', 'Depsito');
INSERT INTO "Location" ("id", "name", "address", "type") VALUES ('11b9d0a9-b591-4146-a213-71d65876381d', 'Bodega Municipal', '164 18 Spring St, New York, NY 10012', 'Depsito');
INSERT INTO "Location" ("id", "name", "address", "type") VALUES ('53d58a46-9022-4438-aa40-1b08f580a3ff', 'Centro de Distribucin', '168 18 W 29th St, New York, NY 10001', 'Centro de Distribucin');
INSERT INTO "Location" ("id", "name", "address", "type") VALUES ('0ae8c0d2-b3c3-41d6-abac-c57f49198f40', 'Centro de Distribucin', '172 91 Christopher St, New York, NY 10014', 'Centro de Distribucin');
INSERT INTO "Location" ("id", "name", "address", "type") VALUES ('c7676c7b-6845-4e9d-a6af-0b0885dc51f9', 'Bodega Municipal', '176 430 Lafayette St, New York, NY 10003', 'Almacn');
INSERT INTO "Location" ("id", "name", "address", "type") VALUES ('71665a55-f238-4200-9aac-83f280f326fd', 'Bodega Municipal', '180 443 E 6th St, New York, NY 10009', 'Almacn');
INSERT INTO "Location" ("id", "name", "address", "type") VALUES ('b31b4d4d-4d5c-43a1-971f-9aab0af93202', 'Depsito Norte', '184 18 W 29th St, New York, NY 10001', 'Depsito');
INSERT INTO "Location" ("id", "name", "address", "type") VALUES ('0eaadaed-4c06-4755-be21-a639a182a39e', 'Almacn Sur', '188 91 Christopher St, New York, NY 10014', 'Centro de Distribucin');

INSERT INTO "Supplier" ("id", "name", "contactPerson", "email", "phone", "address") VALUES ('9ee3aae4-35d8-4a7b-baa5-f8d4bfb33bb3', 'Proveedores Unidos', 'Mara Lpez', '193Eloisa.Stanton@gmail.com', '5559101', '195 136 E 13th St, New York, NY 10003');
INSERT INTO "Supplier" ("id", "name", "contactPerson", "email", "phone", "address") VALUES ('48f807bd-e30a-4cb4-aef5-4aff1b1c7ec8', 'Comercializadora del Norte', 'Mara Lpez', '199Lazaro19@yahoo.com', '5551234', '201 18 Spring St, New York, NY 10012');
INSERT INTO "Supplier" ("id", "name", "contactPerson", "email", "phone", "address") VALUES ('de44e967-ae92-48d7-a7fc-034b106c1e6c', 'Suministros Globales', 'Mara Lpez', '205Maritza_Gorczany23@hotmail.com', '5555678', '207 18 W 29th St, New York, NY 10001');
INSERT INTO "Supplier" ("id", "name", "contactPerson", "email", "phone", "address") VALUES ('eab382da-4e5a-4fe8-8c27-bdae87ae9a0c', 'Comercializadora del Norte', 'Pedro Gmez', '211Bonita60@gmail.com', '5551234', '213 18 W 29th St, New York, NY 10001');
INSERT INTO "Supplier" ("id", "name", "contactPerson", "email", "phone", "address") VALUES ('7970d660-b2b8-4995-8db4-92e9178b1ea1', 'Abastecimientos del Sur', 'Mara Lpez', '217Tianna.Homenick@gmail.com', '5551234', '219 136 E 13th St, New York, NY 10003');
INSERT INTO "Supplier" ("id", "name", "contactPerson", "email", "phone", "address") VALUES ('76c687d2-aca6-4652-a884-3e42e887c8d5', 'Abastecimientos del Sur', 'Carlos Prez', '223Viola.Feest@gmail.com', '5551122', '225 42 E 20th St, New York, NY 10003');
INSERT INTO "Supplier" ("id", "name", "contactPerson", "email", "phone", "address") VALUES ('cda669cf-9d89-4bbe-a92f-81c195d3bea2', 'Distribuidora Central', 'Carlos Prez', '229Keon.Olson2@yahoo.com', '5553344', '231 430 Lafayette St, New York, NY 10003');
INSERT INTO "Supplier" ("id", "name", "contactPerson", "email", "phone", "address") VALUES ('28335675-7a67-4a97-b4e2-9fee495cda26', 'Proveedores Unidos', 'Carlos Prez', '235Laila12@gmail.com', '5551122', '237 42 E 20th St, New York, NY 10003');
INSERT INTO "Supplier" ("id", "name", "contactPerson", "email", "phone", "address") VALUES ('f9b036de-e9d8-47b4-9884-f1be7d1d19ae', 'Distribuidora Central', 'Mara Lpez', '241Cierra10@yahoo.com', '5559101', '243 18 W 29th St, New York, NY 10001');
INSERT INTO "Supplier" ("id", "name", "contactPerson", "email", "phone", "address") VALUES ('032c39b7-2cdb-44a5-947e-5f0779cc7609', 'Distribuidora Central', 'Mara Lpez', '247Alexandria27@yahoo.com', '5553344', '249 18 W 29th St, New York, NY 10001');

INSERT INTO "Product" ("id", "name", "description", "price", "sku", "imageUrl", "supplierId") VALUES ('a87886c6-7846-4119-b399-eae79f495435', 'Borrador Blanco', 'Marcador de tinta indeleble', 437, 'CDA456', 'https://i.imgur.com/YfJQV5z.png?id=255', '7970d660-b2b8-4995-8db4-92e9178b1ea1');
INSERT INTO "Product" ("id", "name", "description", "price", "sku", "imageUrl", "supplierId") VALUES ('70468570-2371-4c77-8ffa-2c49e3e04a50', 'Borrador Blanco', 'Borrador sin residuos', 563, 'CDA456', 'https://i.imgur.com/YfJQV5z.png?id=261', '7970d660-b2b8-4995-8db4-92e9178b1ea1');
INSERT INTO "Product" ("id", "name", "description", "price", "sku", "imageUrl", "supplierId") VALUES ('8cfff42b-9054-4c71-9e75-35eed34a3c7b', 'Borrador Blanco', 'Lpiz de grafito de alta calidad', 157, 'CDA456', 'https://i.imgur.com/YfJQV5z.png?id=267', '76c687d2-aca6-4652-a884-3e42e887c8d5');
INSERT INTO "Product" ("id", "name", "description", "price", "sku", "imageUrl", "supplierId") VALUES ('3c10ada3-f296-420e-96d2-7f13cd789662', 'Lpiz HB', 'Marcador de tinta indeleble', 821, 'LPZ123', 'https://i.imgur.com/YfJQV5z.png?id=273', 'f9b036de-e9d8-47b4-9884-f1be7d1d19ae');
INSERT INTO "Product" ("id", "name", "description", "price", "sku", "imageUrl", "supplierId") VALUES ('c75640fc-b34a-4632-8df3-d92bc11e3851', 'Cuaderno A4', 'Lpiz de grafito de alta calidad', 952, 'LPZ123', 'https://i.imgur.com/YfJQV5z.png?id=279', '48f807bd-e30a-4cb4-aef5-4aff1b1c7ec8');
INSERT INTO "Product" ("id", "name", "description", "price", "sku", "imageUrl", "supplierId") VALUES ('7002af1b-0bcf-4009-89ea-be2be603630e', 'Tijeras Escolares', 'Borrador sin residuos', 354, 'MRC345', 'https://i.imgur.com/YfJQV5z.png?id=285', 'eab382da-4e5a-4fe8-8c27-bdae87ae9a0c');
INSERT INTO "Product" ("id", "name", "description", "price", "sku", "imageUrl", "supplierId") VALUES ('e8047f9c-2779-4388-8835-64d8104b6d92', 'Borrador Blanco', 'Marcador de tinta indeleble', 225, 'TJS012', 'https://i.imgur.com/YfJQV5z.png?id=291', '48f807bd-e30a-4cb4-aef5-4aff1b1c7ec8');
INSERT INTO "Product" ("id", "name", "description", "price", "sku", "imageUrl", "supplierId") VALUES ('e7bd3374-1d19-4b9e-8896-6b0ed4e5a1ea', 'Tijeras Escolares', 'Cuaderno con 100 hojas', 844, 'CDA456', 'https://i.imgur.com/YfJQV5z.png?id=297', '28335675-7a67-4a97-b4e2-9fee495cda26');
INSERT INTO "Product" ("id", "name", "description", "price", "sku", "imageUrl", "supplierId") VALUES ('348ff230-e5f8-4b15-97d5-69fc0be479ba', 'Lpiz HB', 'Cuaderno con 100 hojas', 143, 'LPZ123', 'https://i.imgur.com/YfJQV5z.png?id=303', '48f807bd-e30a-4cb4-aef5-4aff1b1c7ec8');
INSERT INTO "Product" ("id", "name", "description", "price", "sku", "imageUrl", "supplierId") VALUES ('db811f2f-5962-4341-a900-a8f0453f9bcc', 'Cuaderno A4', 'Cuaderno con 100 hojas', 782, 'MRC345', 'https://i.imgur.com/YfJQV5z.png?id=309', 'cda669cf-9d89-4bbe-a92f-81c195d3bea2');

INSERT INTO "Inventory" ("id", "quantity", "productId", "locationId") VALUES ('d9547737-dfd9-4d93-b7cc-a232ceb59824', 870, '70468570-2371-4c77-8ffa-2c49e3e04a50', '12d2590f-3279-49ed-af62-ef75075292b6');
INSERT INTO "Inventory" ("id", "quantity", "productId", "locationId") VALUES ('68505613-fa7b-4237-8040-1328f709a27c', 903, 'e7bd3374-1d19-4b9e-8896-6b0ed4e5a1ea', '0ae8c0d2-b3c3-41d6-abac-c57f49198f40');
INSERT INTO "Inventory" ("id", "quantity", "productId", "locationId") VALUES ('4927d52e-b953-4962-883b-3905fc483bb0', 974, 'c75640fc-b34a-4632-8df3-d92bc11e3851', '11b9d0a9-b591-4146-a213-71d65876381d');
INSERT INTO "Inventory" ("id", "quantity", "productId", "locationId") VALUES ('94abecbc-9906-41bc-8890-d8baff1da84d', 440, '8cfff42b-9054-4c71-9e75-35eed34a3c7b', '78b28af9-eac7-4f59-8d4c-a32948589023');
INSERT INTO "Inventory" ("id", "quantity", "productId", "locationId") VALUES ('271a0d7c-0d62-4d62-a206-d1e333d3ae38', 868, 'e8047f9c-2779-4388-8835-64d8104b6d92', '11b9d0a9-b591-4146-a213-71d65876381d');
INSERT INTO "Inventory" ("id", "quantity", "productId", "locationId") VALUES ('6ea6bde8-d5ec-457f-9f58-aa109bed695c', 699, 'e8047f9c-2779-4388-8835-64d8104b6d92', '12d2590f-3279-49ed-af62-ef75075292b6');
INSERT INTO "Inventory" ("id", "quantity", "productId", "locationId") VALUES ('c2c50686-9d15-411a-a821-3a56d4491956', 94, 'a87886c6-7846-4119-b399-eae79f495435', '0ae8c0d2-b3c3-41d6-abac-c57f49198f40');
INSERT INTO "Inventory" ("id", "quantity", "productId", "locationId") VALUES ('e9b1540a-dfbc-4cde-912e-86d101944871', 529, 'e7bd3374-1d19-4b9e-8896-6b0ed4e5a1ea', '0ae8c0d2-b3c3-41d6-abac-c57f49198f40');
INSERT INTO "Inventory" ("id", "quantity", "productId", "locationId") VALUES ('9cfca6c0-c467-4190-ba4a-67c1f86f8743', 603, 'a87886c6-7846-4119-b399-eae79f495435', 'c7676c7b-6845-4e9d-a6af-0b0885dc51f9');
INSERT INTO "Inventory" ("id", "quantity", "productId", "locationId") VALUES ('52f7aed4-3d75-45ca-a65c-8d2852bb30c3', 556, 'e7bd3374-1d19-4b9e-8896-6b0ed4e5a1ea', 'c88350fb-de31-4a4f-9d0b-0ac56f2695f1');

INSERT INTO "Movement" ("id", "quantity", "type", "date", "productId", "userId") VALUES ('ad36f4ae-21a0-46bf-8148-bc95a2d58e7c', 983, 'Salida', '2025-06-22T10:45:10.721Z', '348ff230-e5f8-4b15-97d5-69fc0be479ba', '4eccc715-e576-4139-b1ba-8fde2d236d5a');
INSERT INTO "Movement" ("id", "quantity", "type", "date", "productId", "userId") VALUES ('711a7df1-9dfd-4a45-87cf-860cddd0f13f', 191, 'Salida', '2023-11-05T11:47:49.239Z', 'a87886c6-7846-4119-b399-eae79f495435', 'ef5964cd-8d4e-44bd-91e1-9408f6221a80');
INSERT INTO "Movement" ("id", "quantity", "type", "date", "productId", "userId") VALUES ('08adbe14-2e2c-48fe-886c-01814bcc19cf', 324, 'Salida', '2025-08-28T00:12:39.892Z', '348ff230-e5f8-4b15-97d5-69fc0be479ba', '7073fdd8-8574-4ee8-bfec-de91555cb843');
INSERT INTO "Movement" ("id", "quantity", "type", "date", "productId", "userId") VALUES ('e547d1b3-7eeb-4cb5-9872-b1f146b61efa', 338, 'Entrada', '2024-10-22T00:00:16.834Z', '70468570-2371-4c77-8ffa-2c49e3e04a50', '14edf082-8ecb-44dc-9571-27b404373ba3');
INSERT INTO "Movement" ("id", "quantity", "type", "date", "productId", "userId") VALUES ('45aac103-d1fa-4708-9433-068272872e18', 691, 'Salida', '2025-03-20T00:55:46.243Z', 'a87886c6-7846-4119-b399-eae79f495435', 'da0dc276-aa1c-4e1c-99e4-5dbd464430eb');
INSERT INTO "Movement" ("id", "quantity", "type", "date", "productId", "userId") VALUES ('819d0d1a-d201-47dc-b963-03c4cbc7a40c', 654, 'Entrada', '2023-10-20T18:05:50.066Z', '7002af1b-0bcf-4009-89ea-be2be603630e', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Movement" ("id", "quantity", "type", "date", "productId", "userId") VALUES ('980f2f66-eed2-4864-8200-fec8685ed037', 6, 'Entrada', '2025-08-19T12:16:50.128Z', '8cfff42b-9054-4c71-9e75-35eed34a3c7b', 'eaefaf5e-aaa8-46cb-bf65-77c87456477b');
INSERT INTO "Movement" ("id", "quantity", "type", "date", "productId", "userId") VALUES ('74563168-bfd0-4168-bac4-53b306668214', 167, 'Entrada', '2025-04-08T05:00:00.733Z', '348ff230-e5f8-4b15-97d5-69fc0be479ba', '7073fdd8-8574-4ee8-bfec-de91555cb843');
INSERT INTO "Movement" ("id", "quantity", "type", "date", "productId", "userId") VALUES ('8756c2a2-07e9-4ff6-b772-b13923499d07', 991, 'Entrada', '2023-12-17T05:06:25.737Z', '348ff230-e5f8-4b15-97d5-69fc0be479ba', 'eaefaf5e-aaa8-46cb-bf65-77c87456477b');
INSERT INTO "Movement" ("id", "quantity", "type", "date", "productId", "userId") VALUES ('9d6b6427-7f76-4932-9dc2-65f49c1ecdcd', 569, 'Salida', '2024-06-11T10:05:09.814Z', 'c75640fc-b34a-4632-8df3-d92bc11e3851', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Department" ("id", "name", "description") VALUES ('12485607-cd42-4cc6-a576-f31ae30e47ae', 'Salud', 'Servicios de salud y bienestar');
INSERT INTO "Department" ("id", "name", "description") VALUES ('53b099f9-022e-4de7-bec0-c69c0728f288', 'Finanzas', 'Mantenimiento de sistemas informticos');
INSERT INTO "Department" ("id", "name", "description") VALUES ('b17db68e-ca67-41eb-89f1-e14af91e0989', 'Obras Pblicas', 'Gestin de personal y nminas');
INSERT INTO "Department" ("id", "name", "description") VALUES ('535b9708-10df-48ea-bea3-d0be4a2b361d', 'Salud', 'Control de presupuestos y gastos');
INSERT INTO "Department" ("id", "name", "description") VALUES ('b09754d1-0483-4ffe-b9d3-9ef69274d796', 'Recursos Humanos', 'Mantenimiento de sistemas informticos');
INSERT INTO "Department" ("id", "name", "description") VALUES ('3f511dce-4533-4459-8fa9-bf8430d72177', 'Recursos Humanos', 'Gestin de personal y nminas');
INSERT INTO "Department" ("id", "name", "description") VALUES ('44af58f9-266e-489d-ab5d-1472729034c2', 'Recursos Humanos', 'Control de presupuestos y gastos');
INSERT INTO "Department" ("id", "name", "description") VALUES ('4bb8c573-6402-48d7-8fea-a323616e41b1', 'Finanzas', 'Mantenimiento de sistemas informticos');
INSERT INTO "Department" ("id", "name", "description") VALUES ('39b62193-5e9f-4fd6-be2e-4db87d1a3334', 'Tecnologa', 'Servicios de salud y bienestar');
INSERT INTO "Department" ("id", "name", "description") VALUES ('22a9b2c3-8a3c-4758-9683-fdb380005379', 'Finanzas', 'Mantenimiento de sistemas informticos');

INSERT INTO "Report" ("id", "name", "description", "fileUrl", "createdById") VALUES ('83ebbd70-86eb-4d10-8e17-24c4ab9c7cd8', 'Anlisis de Productos por Departamento', 'Este informe detalla el inventario anual de todos los productos en el sistema.', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=403', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Report" ("id", "name", "description", "fileUrl", "createdById") VALUES ('6eb4b7ec-051a-42d5-a2c1-909aa4249c72', 'Reporte de Movimientos Mensuales', 'Lista de todos los usuarios activos y sus actividades recientes.', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=407', 'b67ede30-5b6c-4675-bdf8-348848935a9b');
INSERT INTO "Report" ("id", "name", "description", "fileUrl", "createdById") VALUES ('95b9d42d-37bf-4f4d-be0a-d85de0560eeb', 'Informe de Inventario Anual', 'Resumen de todos los movimientos de productos realizados durante el mes.', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=411', 'ef5964cd-8d4e-44bd-91e1-9408f6221a80');
INSERT INTO "Report" ("id", "name", "description", "fileUrl", "createdById") VALUES ('de7f0239-355a-45a4-bf90-bea9672c17e5', 'Informe de Inventario Anual', 'Lista de todos los usuarios activos y sus actividades recientes.', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=415', 'ef5964cd-8d4e-44bd-91e1-9408f6221a80');
INSERT INTO "Report" ("id", "name", "description", "fileUrl", "createdById") VALUES ('0444daf1-12c5-4320-8005-904c923dd485', 'Reporte de Errores y Validaciones', 'Resumen de todos los movimientos de productos realizados durante el mes.', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=419', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Report" ("id", "name", "description", "fileUrl", "createdById") VALUES ('deb4e18e-4d5d-4265-8ec5-ceeb886ce8a6', 'Anlisis de Productos por Departamento', 'Informe sobre los errores y validaciones encontradas en el sistema.', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=423', '48e413d2-1fe1-48fa-9742-56d67e200e0b');
INSERT INTO "Report" ("id", "name", "description", "fileUrl", "createdById") VALUES ('1f094fe6-77d1-4355-9801-da4ccba3618d', 'Reporte de Movimientos Mensuales', 'Lista de todos los usuarios activos y sus actividades recientes.', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=427', '8f4eaeaf-11ec-422c-85ad-8d14f62e3aa0');
INSERT INTO "Report" ("id", "name", "description", "fileUrl", "createdById") VALUES ('d62b9077-95e3-4be9-8c57-30c5f6bacae6', 'Reporte de Errores y Validaciones', 'Lista de todos los usuarios activos y sus actividades recientes.', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=431', 'da0dc276-aa1c-4e1c-99e4-5dbd464430eb');
INSERT INTO "Report" ("id", "name", "description", "fileUrl", "createdById") VALUES ('a8787567-13c2-4241-bf6e-42a27c6ac39d', 'Reporte de Errores y Validaciones', 'Informe sobre los errores y validaciones encontradas en el sistema.', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=435', 'eaefaf5e-aaa8-46cb-bf65-77c87456477b');
INSERT INTO "Report" ("id", "name", "description", "fileUrl", "createdById") VALUES ('66c5cd4e-6cf2-42d1-b9cd-094744598e88', 'Reporte de Errores y Validaciones', 'Informe sobre los errores y validaciones encontradas en el sistema.', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=439', 'b67ede30-5b6c-4675-bdf8-348848935a9b');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
