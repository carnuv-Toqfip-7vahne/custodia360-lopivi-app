# 🎯 CONFIGURACIÓN SIMPLE DE EMAILS (5 minutos)

## ✅ Lo que YA está hecho
- [x] Sistema de emails configurado
- [x] Formularios funcionando
- [x] Email sandbox configurado

## 🔧 Solo necesitas hacer ESTO:

### 1. Obtener tu API Key de Resend (2 minutos)
1. Ve a https://resend.com
2. Inicia sesión
3. Ve a "API Keys"
4. Clic "Create API Key"
5. Copia la clave (empieza por `re_...`)

### 2. Pegar tu API Key (30 segundos)
En el archivo `.env.local`, cambia esta línea:
```
RESEND_API_KEY=tu_clave_resend_aqui
```

Por:
```
RESEND_API_KEY=re_tu_clave_real_que_copiaste
```

### 3. Cambiar tu email (30 segundos)
En estos 2 archivos, cambia `tu-email@gmail.com` por tu email real:

**Archivo: `src/app/api/contacto/route.ts` (línea 19)**
**Archivo: `src/app/api/contratar/route.ts` (línea 26)**

### 4. ¡Probar! (1 minuto)
1. `bun run dev`
2. Ve a http://localhost:3000/contacto
3. Rellena el formulario
4. ¡Deberías recibir el email!

## 🎉 ¡YA FUNCIONA!
- Los emails te llegarán a TU email
- Los usuarios recibirán confirmación automática
- Sin configurar DNS ni nada complicado

## 📧 Ejemplo de lo que recibirás:
```
De: onboarding@resend.dev
Para: tu-email@gmail.com
Asunto: Nueva consulta desde Custodia360

Nueva consulta recibida
Nombre: Juan Pérez
Email: juan@empresa.com
Teléfono: 600123456
Empresa: Club Deportivo Madrid
Mensaje: Necesito implementar LOPIVI...
```

## 🔄 Para Producción (opcional, después)
Cuando quieras emails con tu dominio:
1. Configura el dominio en Resend
2. Añade registros DNS
3. Cambia el FROM_EMAIL

¡Pero por ahora ya funciona perfecto así!
