# 🔐 Seguridad del Panel de Administración

## Sistema de Protección Implementado

Tu panel de administración ahora está protegido con **múltiples capas de seguridad**:

---

## 🛡️ Capas de Seguridad

### 1. **Middleware de Autenticación**
- **Qué hace**: Bloquea acceso a todas las rutas `/admin/*` sin autenticación
- **Cómo funciona**: Verifica la cookie de sesión antes de permitir acceso
- **Archivo**: `middleware.ts`

### 2. **Cookies HttpOnly**
- **Qué hace**: Almacena la sesión de forma segura
- **Protección**:
  - No accesible desde JavaScript (previene XSS)
  - Solo se envía por HTTPS en producción
  - Protección CSRF con `sameSite: strict`
  - Expira en 7 días
- **Archivo**: `app/api/admin/auth/route.ts`

### 3. **Rate Limiting**
- **Qué hace**: Limita intentos de login
- **Límite**: 10 intentos cada 15 minutos por IP
- **Protección**: Previene ataques de fuerza bruta

### 4. **Contraseña en Variables de Entorno**
- **Qué hace**: Contraseña NO está en el código
- **Ubicación**: Archivo `.env.local` (nunca en Git)

---

## 🔑 Configuración de Seguridad

### Variables de Entorno Necesarias

Crea o actualiza tu archivo `.env.local`:

```env
# Contraseña de administrador (CÁMBIALA!)
ADMIN_PASSWORD=TuContraseñaSegura123!

# Token de autenticación (genera uno único)
ADMIN_AUTH_TOKEN=token-super-secreto-cambiar-12345

# Otras variables de Contentful...
CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
CONTENTFUL_REVALIDATE_SECRET=...
```

### ⚠️ IMPORTANTE: Cambiar Contraseñas

**ANTES DE DESPLEGAR A PRODUCCIÓN:**

1. **Cambia `ADMIN_PASSWORD`**:
   ```bash
   ADMIN_PASSWORD=UnaSuperContraseñaSegura2024!
   ```

2. **Cambia `ADMIN_AUTH_TOKEN`** (genera uno aleatorio):
   ```bash
   # En tu terminal (Mac/Linux):
   openssl rand -base64 32

   # Copia el resultado:
   ADMIN_AUTH_TOKEN=resultado-del-comando-anterior
   ```

3. **En Vercel/Producción**:
   - Ve a tu proyecto en Vercel
   - Settings → Environment Variables
   - Agrega las mismas variables
   - Redeploy

---

## 🚪 Cómo Acceder al Panel

### URL de Acceso
```
https://tu-dominio.com/admin/login
```

### Flujo de Autenticación

1. **Visita** `/admin/login`
2. **Ingresa** la contraseña configurada
3. **Accede** al panel de actualización
4. **Sesión dura** 7 días (o hasta que hagas logout)

### Si intentas acceder a `/admin/refresh` sin login:
→ Automáticamente redirige a `/admin/login`

---

## 🔒 Protecciones Implementadas

| Ataque | Protección | Cómo |
|--------|-----------|------|
| Fuerza bruta | ✅ | Rate limiting (10 intentos / 15 min) |
| XSS | ✅ | Cookies httpOnly |
| CSRF | ✅ | SameSite cookies |
| Acceso directo | ✅ | Middleware verifica sesión |
| Robo de sesión | ✅ | Cookies seguras + HTTPS |
| Adivinación de URL | ✅ | Requiere autenticación |

---

## 👥 Compartir Acceso con el Equipo

### Opción 1: Compartir Contraseña
- Comparte `ADMIN_PASSWORD` de forma segura (no por email)
- Usa un gestor de contraseñas (1Password, LastPass, etc.)

### Opción 2: Múltiples Contraseñas (Futuro)
Si necesitas múltiples usuarios con contraseñas diferentes:
- Contacta al desarrollador para implementar múltiples cuentas

---

## 🔐 Mejores Prácticas

### ✅ Hacer:
- Usa contraseñas largas (mínimo 12 caracteres)
- Combina letras, números y símbolos
- Cambia la contraseña periódicamente
- Cierra sesión en dispositivos compartidos
- Usa HTTPS en producción

### ❌ NO Hacer:
- No compartas la contraseña por email/WhatsApp sin cifrar
- No uses contraseñas simples como "123456" o "admin"
- No dejes sesiones abiertas en computadoras públicas
- No agregues `.env.local` a Git (ya está en .gitignore)

---

## 🆘 En Caso de Emergencia

### Si olvidas la contraseña:
1. Accede a tu servidor/Vercel
2. Cambia la variable `ADMIN_PASSWORD`
3. Redeploy (si es necesario)

### Si sospechas acceso no autorizado:
1. Cambia `ADMIN_PASSWORD` inmediatamente
2. Cambia `ADMIN_AUTH_TOKEN` (invalida todas las sesiones)
3. Redeploy
4. Revisa logs de acceso

---

## 📊 Monitoreo

### Ver Intentos de Login
Los intentos fallidos se registran en:
- Consola del servidor (desarrollo)
- Logs de Vercel (producción)

### Verificar Accesos
```bash
# En producción (Vercel):
vercel logs
```

---

## 🔧 Configuración Avanzada

### Agregar Whitelist de IPs (Opcional)

Edita `middleware.ts` para permitir solo ciertas IPs:

```typescript
const ALLOWED_IPS = [
  '192.168.1.100', // IP de tu oficina
  '203.0.113.0',   // IP ejemplo
];

// En la función middleware, agrega:
const ip = request.headers.get("x-forwarded-for")?.split(",")[0];
if (!ALLOWED_IPS.includes(ip || "")) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
}
```

---

## 📞 Soporte

Si necesitas ayuda con la seguridad del panel:
- Revisa los logs de error
- Verifica las variables de entorno
- Contacta al equipo de desarrollo

---

**Última actualización**: 2024
