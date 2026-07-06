# 🏛️ Portal FCE-UES | Puente PWA de Acceso Seguro

Este repositorio contiene la arquitectura Frontend (Puente PWA) para el sistema de **Gestión Académica y Modificación de Notas** de la Universidad de El Salvador. 

El propósito de este repositorio no es almacenar la lógica de negocio ni la base de datos (las cuales operan bajo un entorno estricto de ciberseguridad), sino proporcionar una **Aplicación Web Progresiva (PWA)** instalable que sirva como punto de acceso seguro, estético y validado para el personal docente y administrativo.

## 🏗️ Arquitectura del Sistema

El sistema utiliza una arquitectura desacoplada para maximizar la seguridad y la experiencia del usuario:

*   **Frontend (Este Repositorio):** Un puente estático alojado en GitHub Pages. Valida el dispositivo del usuario, permite la instalación nativa de la aplicación mediante un Service Worker (`sw.js`) y redirige el tráfico hacia el servidor seguro.
*   **Backend & Base de Datos:** Alojados nativamente en el ecosistema de **Google Workspace (Google Apps Script + Google Sheets)**. Se encarga de la validación de credenciales (SSO), Roles de Acceso (RBAC), sanitización de datos (Anti-XSS) y la generación automatizada de dictámenes y resoluciones.

## 🛡️ Características de Ciberseguridad

1.  **Content Security Policy (CSP):** Implementada en el `index.html` para prevenir ataques de inyección y Cross-Site Scripting (XSS) en el punto de entrada.
2.  **Defensa Anti-Clickjacking:** El servidor de Google restringe la incrustación del portal mediante `X-Frame-Options: DENY`.
3.  **Zero-Trust Identity:** El portal puente no gestiona contraseñas. Toda autenticación se realiza mediante el inicio de sesión cifrado del correo institucional en Google Workspace.

## 📦 Estructura de Archivos

*   `index.html`: Interfaz gráfica (Bootstrap 5 + Plus Jakarta Sans) y motor de redirección.
*   `sw.js`: Service Worker que habilita las capacidades de PWA y el modo *Network-first*.
*   `manifest.json`: Manifiesto de la aplicación para metadatos de instalación (iOS, Android, Windows).
*   `icon.svg`: Identidad visual vectorial matemática para despliegue de alta resolución.

## 🚀 Despliegue y Mantenimiento

Este proyecto utiliza **GitHub Pages** para su despliegue continuo. Cualquier modificación en la rama `main` se reflejará automáticamente en la URL pública en cuestión de minutos. 

---
*Desarrollado para la optimización de procesos académicos y la gestión de extensiones y resoluciones.*
