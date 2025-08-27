# 📧 Configuración de Emails - Custodia360

## ✅ Estado Actual
- [x] Resend configurado
- [x] API routes creadas
- [x] Formularios funcionales
- [ ] DNS configurado
- [ ] Emails de destino actualizados

## 📋 Próximos Pasos

### 1. Configurar DNS (URGENTE)
Añade estos registros en tu proveedor de dominio:

```
MX: resend → feedback-smtp.eu-west-1.amazonses.com (prioridad 10)
TXT: resend → v=spf1 include:amazonses.com ~all
TXT: resend._domainkey → p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+7ZEDzd34LsXxfCFbFiROH873cZGUAgUrQdrGDFp5F4txG8Kvsbqu2rEwsI+PNBfQBS+AM1x9sTQX0rVdz8NFbom4Ey/oS5iJfNlhftOK1TbWEgCc0lwLDOqLiie+kd+lC9tqstfj385zgUTkVopBfRQQwAVdALlC6xedsvztpQIDAQAB
TXT: _dmarc → v=DMARC1; p=none;
```

### 2. Actualizar Emails de Destino
Cambia estos emails en los archivos API:

**`src/app/api/contacto/route.ts` línea 19:**
```typescript
to: ['tu-email@custodia360.com'],
```

**`src/app/api/contratar/route.ts` línea 26:**
```typescript
to: ['ventas@custodia360.com'],
```

### 3. Añadir tu API Key Real
En `.env.local`:
```
RESEND_API_KEY=re_tu_clave_real_aqui
```

### 4. Probar el Sistema
1. `bun run dev`
2. Ir a `/contacto` o `/contratar/datos-entidad`
3. Rellenar formulario
4. Verificar emails

## 🔄 Flujo de Emails Configurado

### Formulario de Contacto
- **Admin recibe**: Notificación con datos completos
- **Usuario recibe**: Confirmación automática

### Formulario de Contratación
- **Admin recibe**: Detalle completo de la contratación
- **Usuario recibe**: Bienvenida y próximos pasos

## ⏱️ Tiempo de Propagación DNS
- **Local**: 15-30 minutos
- **Global**: 24-48 horas máximo

## 🆘 Si algo no funciona
1. Verificar consola del navegador (F12)
2. Revisar logs del servidor
3. Comprobar Resend > Logs
4. Verificar DNS con herramientas online
